import { getPublications } from '@/actions/publication.actions'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'
import { NewsletterSubscribe } from '@/components/public/newsletter-subscribe'
import { GooeyInput } from '@/components/ui/gooey-input'

export const metadata = {
  title: 'Publications & Reports',
  description: 'In-depth analysis, comprehensive budget reports, and strategic insights from TAG Advisors.',
}

export default async function PublicationsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; category?: string }>
}) {
  const resolvedParams = await searchParams
  const search = resolvedParams?.search || ''
  const category = resolvedParams?.category || 'All'

  // Fetch publications based on filters
  const publications = await getPublications({ search, category })

  const CATEGORIES = ['All', 'Direct Tax', 'Indirect Tax', 'International Tax', 'M&A', 'Startup Ecosystem', 'Regulatory Updates', 'Geopolitics', 'General']

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Main Content */}
      <section className="pt-40 pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">Publications & Reports</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive reports combine incisive commentary with strategic implications, making them the trusted first choice for professionals.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
              {CATEGORIES.map(cat => (
                <Link key={cat} href={`/publications?category=${cat}${search ? `&search=${search}` : ''}`} scroll={false}>
                  <Badge variant={category === cat ? 'default' : 'outline'} className="text-sm py-1.5 px-4 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                    {cat}
                  </Badge>
                </Link>
              ))}
            </div>
            
            <form className="relative flex justify-end items-center" action="/publications">
              <input type="hidden" name="category" value={category} />
              <GooeyInput 
                name="search"
                defaultValue={search}
                placeholder="Search publications..." 
                classNames={{ root: "ml-auto" }}
              />
            </form>
          </div>

          {/* Publications Grid */}
          {publications.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {publications.map((pub: any) => (
                <Card key={pub.id} className="glass-card flex flex-col h-full overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-white/10 group">
                  {pub.image_url && (
                    <div className="w-full h-48 sm:h-56 relative overflow-hidden bg-black/40 flex items-center justify-center">
                      <img 
                        src={pub.image_url} 
                        alt={pub.title} 
                        className="max-w-[80%] max-h-[80%] object-contain transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent pointer-events-none"></div>
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-semibold shadow-lg">
                        {pub.category || 'General'}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className={`pb-2 ${!pub.image_url ? 'pt-6' : 'pt-2'}`}>
                    {!pub.image_url && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary w-fit mb-3">{pub.category || 'General'}</Badge>
                    )}
                    <CardTitle className="text-lg line-clamp-3 leading-snug hover:text-primary transition-colors">
                      <Link href={`/publications/${pub.slug}`} className="focus:outline-none">
                        <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                        {pub.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-1 pb-4">
                    <p className="text-muted-foreground line-clamp-2 text-sm">
                      {pub.content.replace(/<[^>]*>?/gm, '')}
                    </p>
                  </CardContent>
                  
                  <CardFooter className="pt-0 border-t border-white/5 flex justify-between items-center py-4 mt-auto relative z-20">
                    <div className="flex items-center text-xs text-muted-foreground font-medium">
                      <Calendar className="h-3.5 w-3.5 mr-1.5 text-primary" />
                      {new Date(pub.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors group-hover:bg-primary/20 group-hover:text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-muted/20 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold mb-2">No publications found</h3>
              <p className="text-muted-foreground">Try adjusting your search or category filter.</p>
              <Button asChild variant="outline" className="mt-6">
                <Link href="/publications">Clear Filters</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary/5 py-20 text-center border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Subscribe to TAG Publications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Get comprehensive reports and strategic analysis delivered straight to your inbox.
          </p>
          <NewsletterSubscribe />
        </div>
      </section>
    </div>
  )
}
