'use client'

import { motion } from 'framer-motion'
import MagicBento from '@/components/ui/MagicBento'
import { leadershipData, LeadershipProfile } from '@/data/leadership'
import { Separator } from '@/components/ui/separator'

// Profile details have been moved to dedicated pages at /leadership/[id]

export default function AboutPage() {
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

  // Group leadership by category
  const categories = [
    { title: "Core Partners", data: leadershipData.filter(l => l.category === 'Core Partners') },
    { title: "Associate Partners", data: leadershipData.filter(l => l.category === 'Associate Partners') },
    { title: "Strategic Associates & International", data: leadershipData.filter(l => l.category === 'Strategic Associates' || l.category === 'International Network') },
    { title: "Extended Professional Team", data: leadershipData.filter(l => l.category === 'Extended Team') }
  ];

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
            className="max-w-4xl mx-auto mb-24 space-y-8 text-xl text-muted-foreground leading-relaxed font-light text-center"
          >
            <p>
              TAG is a leading professional firm with a global presence in business consultancy and advisory services. We ensure client needs are served first by blending practical business advice with tax and regulatory inputs in a collaborative partnership.
            </p>
            <p>
              Our firm counsels clients on key strategic issues, leveraging deep industry expertise and analytical rigor for informed decision-making. We act as problem solvers dedicated to finding the best possible solutions utilizing modern project management techniques for on-target delivery.
            </p>
          </motion.div>

          {categories.map((categoryGroup, index) => (
            categoryGroup.data.length > 0 && (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="mb-24"
              >
                <motion.div variants={fadeInUp} className="mb-12 text-center flex flex-col items-center">
                  {index === 0 && (
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Leadership</span> Team</h2>
                  )}
                  <h3 className={`text-2xl font-semibold ${index === 0 ? 'text-primary mt-4' : 'text-white'}`}>
                    {categoryGroup.title}
                  </h3>
                  {index !== 0 && <Separator className="w-24 mt-4 bg-primary/30" />}
                </motion.div>
                
                <motion.div variants={fadeInUp} className="w-full flex justify-center">
                  <MagicBento 
                    textAutoHide={false}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    spotlightRadius={400}
                    particleCount={15}
                    glowColor="255, 215, 0"
                    cardData={categoryGroup.data.map(leader => ({
                      color: 'rgba(0,0,0,0.4)',
                      title: leader.name,
                      description: (
                        <div className="flex flex-col gap-3 h-full">
                          <span className="text-sm font-semibold text-primary">{leader.title}</span>
                          <span className="text-muted-foreground leading-relaxed text-sm flex-grow">{leader.shortDesc}</span>
                          <span className="text-xs text-primary/70 font-medium uppercase tracking-widest mt-4">
                            Click for full profile →
                          </span>
                        </div>
                      ),
                      label: (
                        <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center border border-primary/30 relative overflow-hidden group">
                          {leader.imageUrl ? (
                            <img 
                              src={leader.imageUrl} 
                              alt={leader.name} 
                              className="absolute inset-0 w-full h-full object-cover z-10"
                            />
                          ) : (
                            <span className="text-xl font-black text-primary drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] relative z-10">
                              {leader.initials}
                            </span>
                          )}
                        </div>
                      ),
                      href: `/leadership/${leader.id}`
                    }))}
                  />
                </motion.div>
              </motion.div>
            )
          ))}
        </div>
      </section>
    </div>
  )
}
