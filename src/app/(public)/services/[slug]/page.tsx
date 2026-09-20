'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { use } from 'react'

export default function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const slug = resolvedParams.slug
  
  // Format the slug into a readable title
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
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeInUp}
        >
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-white pl-0" asChild>
            <Link href="/services"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Services</Link>
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">{title}</h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
            Our expert team delivers tailored solutions in {title.toLowerCase()} to help your organization achieve strategic objectives, mitigate risks, and drive sustainable growth.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid gap-8"
        >
          <Card className="glass-card bg-card/40 border-white/5 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6">Key Offerings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Strategic Planning & Execution',
                  'Regulatory Compliance Review',
                  'Risk Assessment & Mitigation',
                  'Performance Optimization',
                  'Stakeholder Reporting',
                  'Technology Integration'
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-white/80 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <h2 className="text-2xl font-bold mb-6">Why Choose TAG Advisors?</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We combine deep industry knowledge with technical expertise to provide actionable insights. Our approach is highly collaborative—we work closely with your team to ensure our recommendations are practical, scalable, and aligned with your long-term vision.
                </p>
                <Button className="rounded-full px-8 bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
