import { getPublicationBySlug } from '@/actions/publication.actions'
import { notFound } from 'next/navigation'
import { Calendar, ArrowLeft, Download } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const publication = await getPublicationBySlug(resolvedParams.slug)
  if (!publication) return { title: 'Publication Not Found' }

  return {
    title: publication.meta_title || publication.title,
    description: publication.meta_description || publication.content.substring(0, 160).replace(/<[^>]*>?/gm, ''),
    keywords: publication.meta_keywords || 'TAG, Publications, Reports, Tax, Finance',
  }
}

export default async function PublicationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const publication = await getPublicationBySlug(resolvedParams.slug)

  if (!publication) {
    notFound()
  }

  return (
    <div className="w-full flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-primary/5"></div>
        {publication.image_url && (
          <>
            <div className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm" style={{ backgroundImage: `url(${publication.image_url})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
          </>
        )}
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
          <Button variant="ghost" asChild className="mb-8 hover:bg-white/5 -ml-4">
            <Link href="/publications">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Publications
            </Link>
          </Button>
          
          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-primary text-primary-foreground">{publication.category || 'General'}</Badge>
            <div className="flex items-center text-sm text-muted-foreground font-medium">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(publication.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
            {publication.title}
          </h1>
          
          {publication.image_url && (
            <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10 mt-10 bg-black/40 flex items-center justify-center p-8">
              <img src={publication.image_url} alt={publication.title} className="max-w-full max-h-full object-contain" />
            </div>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <article className="prose prose-invert prose-lg max-w-none prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80">
            <div dangerouslySetInnerHTML={{ __html: publication.content.replace(/\n/g, '<br/>') }} />
          </article>
        </div>
      </section>
    </div>
  )
}
