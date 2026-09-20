'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, BarChart3, ShieldCheck, Briefcase, Globe, Scale, Lightbulb, Users, BookOpen, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import { HeroCarousel } from '@/components/public/hero-carousel'
import { TextHighlighter } from '@/components/ui/text-highlighter'
import { PixelImage } from '@/components/ui/pixel-image'
import { ScrollVelocityContainer, ScrollVelocityRow } from '@/components/ui/scroll-based-velocity'
import { Text3DFlip } from '@/components/ui/text-3d-flip'
import { TextAnimate } from '@/components/ui/text-animate'
import { ScrollExpand } from '@/components/ui/ScrollExpand'

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  }

  // Define services categories based on kcmehta structure
  const services = [
    { title: 'Transaction Advisory', icon: BarChart3, desc: 'Transaction Strategy, Structuring, Investment Banking, and M&A Support.' },
    { title: 'Strategic Advisory', icon: Lightbulb, desc: 'Management Consulting, IPO Strategy, Succession Planning, and Wealth Advisory.' },
    { title: 'Assurance Services', icon: ShieldCheck, desc: 'Statutory Audit, Financial Accounting Advisory, and Certification Services.' },
    { title: 'Tax Advisory', icon: Briefcase, desc: 'Corporate Tax, International Tax, Transfer Pricing, and Indirect Tax.' },
    { title: 'Risk & Corporate', icon: Scale, desc: 'Internal Audit, Governance & Compliance, Corporate Law, and ESG.' },
    { title: 'Global Desk', icon: Globe, desc: 'Cross-Border Expansion, UAE Desk, Singapore Desk, and Entry Strategy.' },
  ]

  // Define publications
  const publications = [
    { title: 'Budget Analysis 2026', category: 'Taxation', date: 'Feb 15, 2026' },
    { title: 'TAG Insight: Future of AI in Auditing', category: 'Technology', date: 'Jan 28, 2026' },
    { title: 'Global Expansion Playbook', category: 'Strategy', date: 'Jan 10, 2026' }
  ]

  return (
    <div className="flex flex-col items-center w-full overflow-x-clip">
      <HeroCarousel />
      
      {/* Scroll Based Velocity Section */}
      <section className="w-full py-12 md:py-20 border-y border-white/5 bg-black/40 backdrop-blur-sm overflow-hidden flex flex-col gap-4">
        <ScrollVelocityContainer className="text-4xl font-bold tracking-tighter md:text-7xl text-white/10 uppercase">
          <ScrollVelocityRow baseVelocity={2} direction={1}>
            Strategic Advisory • Transaction Advisory • Tax Advisory • Assurance Services • Risk & Corporate • Global Desk •&nbsp;
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
        <ScrollVelocityContainer className="text-4xl font-bold tracking-tighter md:text-7xl text-white/10 uppercase">
          <ScrollVelocityRow baseVelocity={2} direction={-1}>
            Excellence • Integrity • Innovation • Collaboration • Accountability •&nbsp;
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </section>
      
      {/* 1. About / Firm & Values Section */}
      <section className="w-full py-32 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                <Text3DFlip as="span" staggerDuration={0.03} rotateDirection="top">Who We Are</Text3DFlip>
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                <Text3DFlip as="span" staggerDuration={0.03} rotateDirection="top" className="inline-flex mr-2">Bridging Gaps Between</Text3DFlip>
                <TextHighlighter>
                  <Text3DFlip as="span" staggerDuration={0.03} rotateDirection="top">Vision & Implementation</Text3DFlip>
                </TextHighlighter>
              </h2>
              <TextAnimate as="p" animation="slideLeft" by="word" className="text-xl text-muted-foreground mb-6 font-light leading-relaxed">
                TAG is a leading professional firm with a global presence in business consultancy and advisory services. We counsel clients on key strategic issues, leveraging deep industry expertise and analytical rigor for informed decision-making.
              </TextAnimate>
              <TextAnimate as="p" animation="slideLeft" by="word" className="text-lg text-white/80 mb-8 font-light leading-relaxed">
                Guided by our core values of Integrity, Excellence, and Client-Centricity, we offer a single-window solution for modern enterprises seeking sustainable growth.
              </TextAnimate>
              <div className="flex flex-wrap gap-4">
                <Button className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white font-medium" asChild>
                  <Link href="/about#firm-values">Firm & Values</Link>
                </Button>
                <Button variant="outline" className="rounded-full px-8 border-white/20 text-white hover:bg-white/10" asChild>
                  <Link href="/about#experience">The TAG Experience</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative h-[600px] w-full rounded-3xl overflow-hidden glass border-white/10 p-4">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10"></div>
              <div className="w-full h-full bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 relative overflow-hidden group">
                <PixelImage 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                  className="absolute inset-0 w-full h-full opacity-40 group-hover:scale-105 transition-transform duration-1000"
                  grid="8x8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 z-10">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    <Text3DFlip as="span" staggerDuration={0.03} rotateDirection="top">Global Expertise</Text3DFlip>
                  </h3>
                  <p className="text-white/70 text-lg">Delivering sustainable success across borders.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Captivating ScrollExpand Section */}
      <section className="w-full bg-black relative">
        <ScrollExpand
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          title="Global Reach. Local Depth."
          scrollHint="Keep scrolling"
          mediaZoom={1.5}
          startWidth={40}
          startHeight={50}
          useWindowScroll={true}
        >
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Beyond Boundaries
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl text-center font-light drop-shadow-md">
            We empower modern enterprises with seamless strategies, navigating complex cross-border environments with unparalleled expertise.
          </p>
        </ScrollExpand>
      </section>

      {/* 2. Comprehensive Services Grid */}
      <section className="w-full py-32 relative bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4 flex justify-center">
              <Text3DFlip as="span" staggerDuration={0.03} rotateDirection="top">Our Services</Text3DFlip>
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex justify-center">
              <TextHighlighter>
                <Text3DFlip as="span" staggerDuration={0.03} rotateDirection="top">Comprehensive Expertise</Text3DFlip>
              </TextHighlighter>
            </h2>
            <TextAnimate as="p" animation="slideLeft" by="word" className="text-xl text-muted-foreground font-light">
              We blend practical business advice with tax, regulatory, and strategic inputs to ensure sustainable growth for our clients.
            </TextAnimate>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group h-full"
              >
                <Card className="glass-card bg-card/40 border-white/5 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30 group-hover:scale-110 transition-transform duration-500">
                      <service.icon className="h-8 w-8 text-primary drop-shadow-[0_0_10px_rgba(0,180,200,0.8)]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      <Text3DFlip as="span" staggerDuration={0.03} rotateDirection="right">{service.title}</Text3DFlip>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">{service.desc}</p>
                    <Link href={`/services#${service.title.toLowerCase().replace(/ /g, '-')}`} className="text-primary font-semibold hover:text-white transition-colors flex items-center group/link mt-auto">
                      Explore services <ArrowRight className="ml-2 h-5 w-5 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Life @ TAG (Culture & Careers) */}
      <section className="w-full py-32 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col-reverse lg:flex-row gap-16 items-center"
          >
            <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2 h-[500px]">
              <div className="flex flex-col gap-4">
                <div className="glass rounded-3xl h-2/3 border border-white/10 opacity-80 hover:opacity-100 transition-opacity relative overflow-hidden">
                  <PixelImage src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full absolute inset-0" grid="4x6" />
                </div>
                <div className="glass rounded-3xl h-1/3 border border-white/10 opacity-80 hover:opacity-100 transition-opacity relative overflow-hidden">
                  <PixelImage src="https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop" className="w-full h-full absolute inset-0" grid="3x8" />
                </div>
              </div>
              <div className="glass rounded-3xl h-full border border-white/10 opacity-80 hover:opacity-100 transition-opacity relative overflow-hidden">
                <PixelImage src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" className="w-full h-full absolute inset-0" grid="6x4" />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                <Text3DFlip as="span" staggerDuration={0.03} rotateDirection="top">Life @ TAG</Text3DFlip>
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                <Text3DFlip as="span" staggerDuration={0.03} rotateDirection="top" className="inline-flex mr-2">Nurturing Talent &</Text3DFlip>
                <TextHighlighter delay={0.4}>
                  <Text3DFlip as="span" staggerDuration={0.03} rotateDirection="top">Driving Excellence</Text3DFlip>
                </TextHighlighter>
              </h2>
              <TextAnimate as="p" animation="slideLeft" by="word" className="text-xl text-muted-foreground mb-8 font-light leading-relaxed">
                We believe our people are our greatest asset. At TAG Advisors, we foster a culture of continuous learning, mentorship, and inclusive growth.
              </TextAnimate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-center p-4 glass-card rounded-xl">
                  <Users className="h-6 w-6 text-primary mr-3 shrink-0" />
                  <span className="font-medium">People & Culture</span>
                </div>
                <div className="flex items-center p-4 glass-card rounded-xl">
                  <GraduationCap className="h-6 w-6 text-primary mr-3 shrink-0" />
                  <span className="font-medium">Student Mentorship</span>
                </div>
              </div>
              <Button className="rounded-full px-8 bg-white hover:bg-white/90 text-black font-medium" asChild>
                <Link href="/life-at-tag">Explore Careers</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Publications & Insights */}
      <section className="w-full py-32 relative bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Publications</h4>
              <h2 className="text-4xl font-bold mb-4 flex justify-start">
                <TextHighlighter>
                  <Text3DFlip as="span" staggerDuration={0.03} rotateDirection="top">Latest Insights</Text3DFlip>
                </TextHighlighter>
              </h2>
              <TextAnimate as="p" animation="slideLeft" by="word" className="text-lg text-muted-foreground font-light">
                Stay updated with our latest thought leadership, market analysis, and regulatory updates.
              </TextAnimate>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="/insights">View All Publications</Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href="/insights" className="block group">
                  <Card className="glass-card bg-card/40 border-white/5 h-full hover:bg-white/5 transition-colors">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex justify-between items-center mb-6 text-sm text-muted-foreground">
                        <span className="uppercase tracking-wider font-medium text-primary">{pub.category}</span>
                        <span>{pub.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">{pub.title}</h3>
                      <div className="mt-auto flex items-center text-sm font-semibold text-white/70 group-hover:text-white">
                        <BookOpen className="h-4 w-4 mr-2" /> Read Article
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Clients Section */}
      <section className="w-full py-24 relative">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-12">
            Trusted by industry leaders globally
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 hover:opacity-100 transition-opacity duration-700">
            {['SAMSUNG', 'Brookfield', 'Flipkart', 'PEPSI', 'kindlife'].map((client, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.1, color: "var(--color-primary)" }}
                className="text-2xl md:text-4xl font-black text-white/50 transition-colors cursor-pointer drop-shadow-md"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
