'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Users, GraduationCap, Briefcase, Network, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LifeAtTag() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const sections = [
    {
      id: 'culture',
      title: 'People & Culture',
      icon: Users,
      desc: 'At TAG, we believe that our people are our greatest strength. We cultivate an inclusive environment where diverse perspectives are celebrated and every voice is heard. Our culture is built on mutual respect, continuous learning, and collaborative success.',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'mentorship',
      title: 'Student Mentorship',
      icon: GraduationCap,
      desc: 'We are committed to nurturing the next generation of industry leaders. Our comprehensive mentorship programs pair ambitious students with seasoned professionals, offering real-world experience, hands-on training, and invaluable career guidance.',
      img: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'careers',
      title: 'Careers',
      icon: Briefcase,
      desc: 'Join a dynamic team of forward-thinkers. We offer competitive compensation, excellent benefits, and a clear path for professional advancement. Whether you are an experienced professional or just starting out, there is a place for you to grow at TAG.',
      img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'alumni',
      title: 'Alumni Network',
      icon: Network,
      desc: 'Once a part of TAG, always a part of TAG. Our strong alumni network spans the globe, providing lifelong connections, exclusive networking events, and ongoing professional development opportunities for past employees.',
      img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop'
    }
  ]

  return (
    <div className="flex flex-col w-full pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Life @ TAG</h1>
          <p className="text-xl text-muted-foreground font-light">
            Discover a workplace where innovation thrives, careers accelerate, and lifelong connections are made.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {sections.map((section, index) => (
            <motion.section 
              key={section.id}
              id={section.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative h-[400px] w-full rounded-3xl overflow-hidden glass border-white/10 p-2">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${section.img})` }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                  <section.icon className="h-8 w-8 text-primary drop-shadow-[0_0_10px_rgba(0,180,200,0.8)]" />
                </div>
                <h2 className="text-3xl font-bold">{section.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {section.desc}
                </p>
                {section.id === 'careers' && (
                  <Button className="mt-4 rounded-full px-8 bg-primary hover:bg-primary/90" asChild>
                    <Link href="/contact">View Open Positions <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                )}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  )
}
