import { getPublications, deletePublication } from '@/actions/publication.actions'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Trash2, Plus, Edit } from 'lucide-react'
import Link from 'next/link'

export default async function AdminPublicationsPage() {
  const publications = await getPublications({ search: '', category: 'All' })

  return (
    <div className="w-full flex flex-col min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Publications</h1>
        <Button asChild>
          <Link href="/admin/publications/new">
            <Plus className="h-4 w-4 mr-2" /> New Publication
          </Link>
        </Button>
      </div>

      {publications.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub: any) => (
            <Card key={pub.id} className="flex flex-col overflow-hidden">
              {pub.image_url && (
                <div className="w-full h-40 bg-muted relative">
                  <img src={pub.image_url} alt={pub.title} className="w-full h-full object-cover" />
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline">{pub.category}</Badge>
                  <div className="text-xs text-muted-foreground flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(pub.created_at).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="text-lg line-clamp-2">{pub.title}</CardTitle>
              </CardHeader>
              <CardContent className="mt-auto pt-0 flex gap-2">
                <form action={async () => {
                  'use server'
                  await deletePublication(pub.id)
                }} className="w-full">
                  <Button variant="destructive" size="sm" className="w-full">
                    <Trash2 className="h-4 w-4 mr-2" /> Delete
                  </Button>
                </form>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/20 rounded-xl border">
          <p className="text-muted-foreground">No publications found.</p>
        </div>
      )}
    </div>
  )
}
