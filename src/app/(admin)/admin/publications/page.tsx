import { getPublications, deletePublication } from '@/actions/publication.actions'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Trash2, Plus, ExternalLink, FileText } from 'lucide-react'
import Link from 'next/link'

export default async function AdminPublicationsPage() {
  const publications = await getPublications({ search: '', category: 'All' })

  return (
    <div className="space-y-6 text-slate-900">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Manage Publications</h1>
        <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white">
          <Link href="/admin/publications/new"><Plus className="mr-2 h-4 w-4" /> New Publication</Link>
        </Button>
      </div>

      <div className="border border-slate-200 bg-white rounded-md shadow-sm">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow className="border-slate-200">
              <TableHead className="text-slate-500 font-semibold w-[40%]">Publication</TableHead>
              <TableHead className="text-slate-500 font-semibold">Category</TableHead>
              <TableHead className="text-slate-500 font-semibold">Date</TableHead>
              <TableHead className="text-right text-slate-500 font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {publications && publications.length > 0 ? (
              publications.map((pub: any) => (
                <TableRow key={pub.id} className="border-slate-200 hover:bg-slate-50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {pub.image_url ? (
                        <div className="w-10 h-10 rounded bg-slate-100 border border-slate-200 overflow-hidden shrink-0">
                          <img src={pub.image_url} alt={pub.title} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                          <FileText className="h-5 w-5 text-slate-400" />
                        </div>
                      )}
                      <span className="font-medium text-slate-900 line-clamp-2">{pub.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-100 font-medium">
                      {pub.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-600">
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-3.5 w-3.5 text-slate-400" />
                      {new Date(pub.created_at).toLocaleDateString()}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="outline" size="sm" asChild className="border-slate-200 hover:bg-slate-100 text-slate-700 h-8">
                        <Link href={`/publications/${pub.slug}`} target="_blank">
                          <ExternalLink className="h-3.5 w-3.5 mr-1" /> View
                        </Link>
                      </Button>
                      <form action={async () => {
                        'use server'
                        await deletePublication(pub.id)
                      }}>
                        <Button variant="destructive" size="sm" type="submit" className="h-8">
                          <Trash2 className="h-3.5 w-3.5 mr-1" /> Delete
                        </Button>
                      </form>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-12 bg-white text-slate-500 rounded-b-md">
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-2">
                      <FileText className="h-6 w-6 text-slate-400" />
                    </div>
                    <p className="font-medium text-slate-900">No publications found</p>
                    <p className="text-sm">Get started by creating your first publication.</p>
                    <Button asChild variant="outline" className="mt-4 border-slate-200 text-slate-700">
                      <Link href="/admin/publications/new">Create Publication</Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
