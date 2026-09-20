'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Landmark, ShieldCheck, Briefcase, Rocket, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { ScrollStack, ScrollStackItem } from '@/components/ui/ScrollStack'

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: 'taxation',
      title: 'Taxation Advisory & Compliance',
      icon: Landmark,
      description: 'Expert guidance on complex tax landscapes, ensuring compliance and optimizing tax efficiency.',
      items: [
        { name: 'Indirect Tax (GST)', desc: 'Diagnostic & compliance reviews, registrations, reconciliations, and ongoing support.' },
        { name: 'International Tax', desc: 'Cross-border structuring, inbound/outbound investment advice, and tax-efficient supply chain management.' },
        { name: 'Transfer Pricing', desc: 'Statutory documentation, policy formulation, agreement drafting, and IGS assistance.' },
        { name: 'Litigation & Refunds', desc: 'Tax assessment support, controversies management, and refund assistance.' },
      ]
    },
    {
      id: 'assurance',
      title: 'Support Services & Assurance',
      icon: ShieldCheck,
      description: 'Robust auditing, financial reporting, and compliance management to build stakeholder trust.',
      items: [
        { name: 'Bookkeeping & MIS', desc: 'Financial statements, bank reconciliations, payroll processing, and monthly MIS reporting.' },
        { name: 'Assurance Services', desc: 'Financial Statement & Internal Audit, IFRS Reporting, and IFC compliance.' },
        { name: 'Training & Development', desc: 'Finance training for non-finance personnel and advanced training for professionals.' }
      ]
    },
    {
      id: 'cfo',
      title: 'Shared / Virtual CFO Services',
      icon: Briefcase,
      description: 'Strategic financial leadership for growth-stage companies without the full-time overhead.',
      items: [
        { name: 'Strategic Direction', desc: 'CFO advisory for business vision implementation and long-term value creation.' },
        { name: 'Financial Management', desc: 'Budgeting, cash flow management, product costing, and tax planning.' },
        { name: 'Funding & Structure', desc: 'Investor relations, capital loan structuring, and fundraising strategy.' },
        { name: 'Risk & Controls', desc: 'Setting up internal controls, standard operating processes, and risk mitigation.' }
      ]
    },
    {
      id: 'startup',
      title: 'Plug-in Services for Start-ups / SMEs',
      icon: Rocket,
      description: 'An integrated support model covering the entire lifecycle of your growing business.',
      items: [
        { name: 'Entity Setup & Structuring', desc: 'Optimal business structures for taxation and investment.' },
        { name: 'Fundraising & Valuation', desc: 'Preparing pitch decks, valuation models, and due diligence support.' },
        { name: 'Scale & Expansion', desc: 'Fractional CFO and strategic advisory for scaling operations.' }
      ]
    },
    {
      id: 'cross-border',
      title: 'Cross-Border & Strategic Advisory',
      icon: Globe,
      description: 'Navigating international markets with scalable and defensible business structures.',
      items: [
        { name: 'Out-Bound Expansion', desc: 'India-to-Global setup with maximum tax efficiency.' },
        { name: 'UAE & Singapore Advisory', desc: 'Middle East Gateway operations, Freezone expertise, and APAC HQ setups.' },
        { name: 'Transaction Advisory', desc: 'Independent financial and tax deal support for Mergers & Acquisitions.' },
        { name: 'BEPS-Compliant Structures', desc: 'Aligning with international tax and transfer pricing regulations.' }
      ]
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
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
    <div className="w-full flex flex-col min-h-screen overflow-x-clip">
      {/* Page Header */}
      <section className="relative bg-background py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>

        <motion.div 
          className="container relative z-10 mx-auto px-4"
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            We provide a single-window solution catering to all client needs, blending practical business advice with regulatory expertise.
          </motion.p>
        </motion.div>
      </section>

      {/* Services List with ScrollStack */}
      <section className="bg-background relative border-t border-white/5 pb-32">
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16">
          <ScrollStack 
            useWindowScroll={true} 
            itemDistance={40} 
            itemStackDistance={35}
            stackPosition="20%"
          >
            {serviceCategories.map((category, index) => (
              <ScrollStackItem 
                key={category.id} 
                itemClassName="glass-card bg-card/60 border-white/5 backdrop-blur-3xl overflow-hidden p-8 md:p-12 mb-10"
              >
                <div id={category.id} className="flex flex-col md:flex-row gap-12 items-start h-full">
                  
                  {/* Category Info */}
                  <div className="md:w-1/3">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                      <category.icon className="h-10 w-10 text-primary drop-shadow-[0_0_10px_rgba(200,150,50,0.8)]" />
                    </div>
                    <h2 className="text-4xl font-bold mb-6">{category.title}</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed font-light">
                      {category.description}
                    </p>
                  </div>

                  {/* Category Items */}
                  <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 z-10 w-full">
                    {category.items.map((item, i) => (
                      <div key={i}>
                        <Card className="bg-black/20 border-white/5 h-full group hover:bg-white/5 transition-colors duration-500">
                          <CardHeader className="pb-4">
                            <CardTitle className="flex items-start text-xl gap-4 text-white">
                              <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                              {item.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-md text-white/70 leading-relaxed pl-10 font-light">
                              {item.desc}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>

                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>
    </div>
  )
}
