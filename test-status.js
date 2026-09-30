const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://kprrugkgepwttzmvjhfz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwcnJ1Z2tnZXB3dHR6bXZqaGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1NjA5NjcsImV4cCI6MjEwNTEzNjk2N30.XHjdaM53bCYxHBCEKk3-JEhibdGeBQc1X9vT20IYimw');

async function run() {
  const statuses = ['pending', 'resolved', 'read', 'contacted', 'archived', 'Read', 'Resolved'];
  for (const status of statuses) {
    const { data, error } = await supabase.from('contacts').update({ status }).eq('name', 'test_dummy_not_exist');
    if (error) {
      console.log(`${status}: FAILED - ${error.message}`);
    } else {
      console.log(`${status}: SUCCESS`);
    }
  }
}
run();
