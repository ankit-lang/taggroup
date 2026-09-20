import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/server'

export default async function AdminDashboard() {
  const supabase = await createClient()

  // Note: These would usually be aggregations. Doing simple counts for now.
  const { count: blogCount } = await supabase.from('blogs').select('*', { count: 'exact', head: true })
  const { count: subCount } = await supabase.from('subscribers').select('*', { count: 'exact', head: true })
  const { count: contactCount } = await supabase.from('contacts').select('*', { count: 'exact', head: true })

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Published Blogs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{blogCount || 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Newsletter Subscribers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{subCount || 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Contact Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{contactCount || 0}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">No recent activity to display.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
