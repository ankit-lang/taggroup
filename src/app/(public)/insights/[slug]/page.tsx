'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, BookOpen, Calendar, Clock, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { use } from 'react'

export default function InsightDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const slug = resolvedParams.slug
  
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <div className="flex flex-col w-full pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeInUp}
        >
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-white pl-0" asChild>
            <Link href="/insights"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Publications</Link>
          </Button>

          <div className="flex flex-wrap gap-4 mb-6 text-sm text-primary font-medium">
            <span className="bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider border border-primary/20">
              Insights
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-12 border-b border-white/10 pb-8">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>February 15, 2026</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>5 min read</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>By TAG Research Team</span>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto rounded-full hover:bg-white/10 text-white">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <p className="text-xl font-light text-white/90 leading-relaxed mb-8">
            This comprehensive analysis explores the implications of recent regulatory changes and market dynamics, offering actionable insights for businesses navigating complex economic environments.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Executive Summary</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            The landscape is shifting rapidly as new compliance frameworks are introduced. Organizations must proactively adapt their strategies to maintain operational efficiency and competitive advantage. Our analysis indicates a strong correlation between early adoption of these frameworks and long-term financial resilience.
          </p>

          <Card className="glass-card bg-card/40 border-white/5 my-10 border-l-4 border-l-primary">
            <CardContent className="p-8">
              <p className="text-xl font-medium italic text-white/90 m-0">
                "In an era of unprecedented regulatory evolution, agility is no longer optional—it is the foundational requirement for sustainable growth."
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mt-12 mb-6">Strategic Recommendations</h2>
          <ul className="list-disc pl-6 space-y-4 text-white/70 mb-8">
            <li>Conduct a comprehensive review of current compliance protocols.</li>
            <li>Implement automated reporting mechanisms to reduce administrative overhead.</li>
            <li>Engage cross-functional teams to identify potential risk exposure areas.</li>
            <li>Partner with specialized advisory firms for complex multi-jurisdictional challenges.</li>
          </ul>

          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-muted-foreground mb-6">Want to discuss how these insights apply to your organization?</p>
            <Button className="rounded-full px-8 bg-white hover:bg-white/90 text-black font-medium" asChild>
              <Link href="/contact">Connect with our Experts</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
