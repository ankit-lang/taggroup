'use client'

import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const leadership = [
    { name: 'Gaurav Sharma', title: 'Partner - Direct & International Tax', desc: '15+ years experience in SE Asia and APAC, specializing in M&A tax, transfer pricing, and cross-border structuring.' },
    { name: 'Vishal Tayal', title: 'Partner - Indirect Taxation (New Delhi/UAE)', desc: '15+ years experience handling Service Tax, GST, and VAT for SMEs and Fortune 100 companies.' },
    { name: 'Sumit Goyal', title: 'Partner - Indirect Taxation (Gurgaon)', desc: '13+ years experience, holds a Certificate Course on Forensic Accounting & Fraud Detection.' },
    { name: 'Kamal Sharma', title: 'Partner - Assurance', desc: '14+ years experience in audit, financial due diligence, and virtual CFO support.' },
    { name: 'Naresh Kumar Goel', title: 'Associate Partner/Director', desc: '30+ years experience specializing in Cost Audits and Management Accounting.' },
    { name: 'Sneha Grover', title: 'Associate Partner/Director', desc: '12+ years experience in Indirect Tax, TP, Direct Tax, and startup ecosystems.' },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <div className="w-full flex flex-col min-h-screen overflow-hidden">
      {/* Header */}
      <section className="relative bg-background py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
        
        <motion.div 
          className="container relative z-10 mx-auto px-4"
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            About <span className="text-gradient">TAG Advisors</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            A dynamic team of highly motivated young professionals bridging gaps between management vision and implementation.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background relative border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-32 space-y-8 text-xl text-muted-foreground leading-relaxed font-light text-center"
          >
            <p>
              TAG is a leading professional firm with a global presence in business consultancy and advisory services. We ensure client needs are served first by blending practical business advice with tax and regulatory inputs in a collaborative partnership.
            </p>
            <p>
              Our firm counsels clients on key strategic issues, leveraging deep industry expertise and analytical rigor for informed decision-making. We act as problem solvers dedicated to finding the best possible solutions utilizing modern project management techniques for on-target delivery.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-16 text-center">Our <span className="text-gradient">Leadership</span> Team</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((leader, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="glass-card bg-card/40 border-white/5 h-full group hover:-translate-y-2 transition-transform duration-500">
                    <CardContent className="p-8">
                      <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30 group-hover:scale-110 transition-transform duration-500">
                        <span className="text-3xl font-black text-primary drop-shadow-[0_0_10px_rgba(200,150,50,0.8)]">{leader.name.charAt(0)}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                      <p className="text-md font-semibold text-primary mb-4">{leader.title}</p>
                      <p className="text-muted-foreground leading-relaxed">{leader.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
