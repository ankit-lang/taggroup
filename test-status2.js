const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://kprrugkgepwttzmvjhfz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwcnJ1Z2tnZXB3dHR6bXZqaGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1NjA5NjcsImV4cCI6MjEwNTEzNjk2N30.XHjdaM53bCYxHBCEKk3-JEhibdGeBQc1X9vT20IYimw');

async function run() {
  const { data: dummy, error: insErr } = await supabase.from('contacts').insert([{ name: 'test_dummy', status: 'pending' }]).select().single();
  if (insErr) { console.log('Insert failed', insErr); return; }
  
  const statuses = ['resolved', 'read', 'contacted', 'archived', 'Read', 'Resolved', 'Resolved ', 'completed', 'Read', 'Contacted'];
  for (const status of statuses) {
    const { error } = await supabase.from('contacts').update({ status }).eq('id', dummy.id);
    if (error) {
      console.log(`${status}: FAILED - ${error.message}`);
    } else {
      console.log(`${status}: SUCCESS`);
    }
  }
  await supabase.from('contacts').delete().eq('id', dummy.id);
}
run();
