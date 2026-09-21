import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExportButton } from '@/components/admin/export-button'
import { ContactStatusToggle } from '@/components/admin/contact-status-toggle'

export const metadata = {
  title: 'User Management | TAG Admin',
}

export default async function UsersAdminPage() {
  const supabase = await createClient()

  // Fetch Contacts
  const { data: contacts } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false })

  // Fetch Newsletter Subscribers
  const { data: subscribers } = await supabase
    .from('subscribers')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">User Management</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Contact Submissions */}
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xl">Contact Submissions ({contacts?.length || 0})</CardTitle>
            <ExportButton 
              data={contacts || []} 
              filename="contacts" 
              headers={[
                { label: 'Name', key: 'name' },
                { label: 'Email', key: 'email' },
                { label: 'Phone', key: 'phone' },
                { label: 'Company', key: 'company' },
                { label: 'Status', key: 'status' },
                { label: 'Message', key: 'message' },
                { label: 'Date', key: 'created_at' }
              ]} 
            />
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            {contacts && contacts.length > 0 ? (
              contacts.map((contact) => (
                <div key={contact.id} className="border border-border/50 bg-background/50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">{contact.name}</h3>
                    <ContactStatusToggle id={contact.id} initialStatus={contact.status} />
                  </div>
                  <div className="text-sm text-muted-foreground grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    <div><span className="font-medium text-foreground">Email:</span> {contact.email || 'N/A'}</div>
                    <div><span className="font-medium text-foreground">Phone:</span> {contact.phone || 'N/A'}</div>
                    <div><span className="font-medium text-foreground">Company:</span> {contact.company || 'N/A'}</div>
                    <div>
                      <span className="font-medium text-foreground">Date:</span>{' '}
                      {new Date(contact.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="mt-3 text-sm bg-muted/20 p-3 rounded-md">
                    <p className="font-medium mb-1">Message:</p>
                    <p className="text-muted-foreground">{contact.message}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-sm text-center py-8">No contact submissions found.</p>
            )}
          </CardContent>
        </Card>

        {/* Newsletter Subscribers */}
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xl">Newsletter Subscribers ({subscribers?.length || 0})</CardTitle>
            <ExportButton 
              data={subscribers || []} 
              filename="subscribers" 
              headers={[
                { label: 'Email', key: 'email' },
                { label: 'Categories', key: 'categories' },
                { label: 'Date Subscribed', key: 'created_at' }
              ]} 
            />
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            {subscribers && subscribers.length > 0 ? (
              subscribers.map((sub) => (
                <div key={sub.id} className="border border-border/50 bg-background/50 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{sub.email}</h3>
                    <div className="text-sm text-muted-foreground mt-1">
                      Subscribed: {new Date(sub.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-end max-w-[200px]">
                    {sub.categories && sub.categories.length > 0 ? (
                      sub.categories.map((cat: string) => (
                        <Badge key={cat} variant="outline" className="text-xs">{cat}</Badge>
                      ))
                    ) : (
                      <Badge variant="outline" className="text-xs">All</Badge>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-sm text-center py-8">No newsletter subscribers found.</p>
            )}
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
