import { getBlogs } from '@/actions/blog.actions'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { NewsletterSubscribe } from '@/components/public/newsletter-subscribe'
import { GooeyInput } from '@/components/ui/gooey-input'

export const metadata = {
  title: 'TAG Insights & Newsletters',
  description: 'Stay updated with the latest in tax, M&A, startups, and regulatory updates from TAG Advisors.',
}

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; category?: string }>
}) {
  const resolvedParams = await searchParams
  const search = resolvedParams?.search || ''
  const category = resolvedParams?.category || 'All'

  // Fetch blogs based on filters
  const insights = await getBlogs({ search, category })

  const CATEGORIES = ['All', 'Direct Tax', 'Indirect Tax', 'International Tax', 'M&A', 'Startup Ecosystem', 'Regulatory Updates', 'Geopolitics', 'General']

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Main Content */}
      <section className="pt-40 pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
              {CATEGORIES.map(cat => (
                <Link key={cat} href={`/insights?category=${cat}${search ? `&search=${search}` : ''}`} scroll={false}>
                  <Badge variant={category === cat ? 'default' : 'outline'} className="text-sm py-1.5 px-4 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                    {cat}
                  </Badge>
                </Link>
              ))}
            </div>
            
            <form className="relative flex justify-end items-center" action="/insights">
              <input type="hidden" name="category" value={category} />
              <GooeyInput 
                name="search"
                defaultValue={search}
                placeholder="Search insights..." 
                classNames={{ root: "ml-auto" }}
              />
            </form>
          </div>

          {/* Insights Grid */}
          {insights.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight) => (
                <Card key={insight.id} className="glass-card flex flex-col h-full overflow-hidden hover:-translate-y-1 transition-all duration-300">
                  {insight.image_url && (
                    <div className="w-full h-48 bg-black/40 relative flex items-center justify-center">
                      <img src={insight.image_url} alt={insight.title} className="max-w-[80%] max-h-[80%] object-contain" />
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-center mb-3">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">{insight.category || 'General'}</Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(insight.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>
                    <CardTitle className="text-xl line-clamp-2 hover:text-primary transition-colors">
                      <Link href={`/insights/${insight.slug}`}>
                        {insight.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground line-clamp-3 text-sm">
                      {insight.content.replace(/<[^>]*>?/gm, '')}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary group" asChild>
                      <Link href={`/insights/${insight.slug}`}>
                        Read Article <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-muted/20 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold mb-2">No insights found</h3>
              <p className="text-muted-foreground">Try adjusting your search or category filter.</p>
              <Button asChild variant="outline" className="mt-6">
                <Link href="/insights">Clear Filters</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary/5 py-20 text-center border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">TAG Insights</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Expert analysis, regulatory updates, and strategic perspectives.
          </p>
          <NewsletterSubscribe />
        </div>
      </section>
    </div>
  )
}
