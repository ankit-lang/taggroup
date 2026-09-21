'use client'
import { use } from 'react'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { leadershipData } from '@/data/leadership'
import { ArrowLeft, MapPin, Briefcase, Award, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { NumberTicker } from '@/components/ui/number-ticker'

export default function LeadershipProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const profile = leadershipData.find(p => p.id === resolvedParams.id)

  if (!profile) {
    notFound()
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <div className="w-full flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <Link href="/about" className="inline-flex items-center text-sm font-medium text-white/60 hover:text-primary transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Leadership
          </Link>

          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-3xl bg-black/40 backdrop-blur-xl flex items-center justify-center border border-primary/30 shadow-[0_0_30px_rgba(255,215,0,0.15)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity"></div>
              {profile.imageUrl ? (
                <img 
                  src={profile.imageUrl} 
                  alt={profile.name} 
                  className="absolute inset-0 w-full h-full object-cover z-10"
                />
              ) : (
                <span className="text-5xl md:text-7xl font-black text-primary drop-shadow-[0_0_20px_rgba(255,215,0,0.6)] relative z-10">
                  {profile.initials}
                </span>
              )}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-grow"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">{profile.name}</h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary/90 mb-6">{profile.title}</h2>
              
              <div className="flex flex-wrap items-center gap-6 text-white/70">
                {profile.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary/70" />
                    <span className="text-lg">{profile.location}</span>
                  </div>
                )}
                {profile.experience && (
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary/70" />
                    <span className="text-lg">{profile.experience}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column (Main Content) */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Executive Profile */}
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-primary rounded-full"></span>
                  Executive Profile
                </h3>
                <p className="text-lg text-white/80 leading-relaxed font-light whitespace-pre-wrap">
                  {profile.about || profile.shortDesc}
                </p>
              </motion.div>

              {/* Career Timeline */}
              {profile.timeline && profile.timeline.length > 0 && (
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                    Career Journey
                  </h3>
                  <div className="space-y-8 pl-2">
                    {profile.timeline.map((item, idx) => (
                      <div key={idx} className="relative pl-8 md:pl-10 border-l border-white/10 group">
                        <div className="absolute w-4 h-4 bg-black border-2 border-primary rounded-full -left-[8.5px] top-1.5 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(255,215,0,0.6)] transition-all duration-300"></div>
                        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
                          <span className="text-sm font-bold tracking-widest text-primary uppercase shrink-0 w-40">{item.date}</span>
                          <span className="text-xl font-semibold text-white">{item.role}</span>
                        </div>
                        <p className="text-base text-white/60 leading-relaxed md:pl-[184px]">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              
            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-4 space-y-12">
              
              {/* Key Metrics */}
              {profile.metrics && profile.metrics.length > 0 && (
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
                  <div className="glass bg-black/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                    <h3 className="text-xl font-bold mb-8 text-white">Impact & Metrics</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {profile.metrics.map((metric, idx) => {
                        const match = metric.value.match(/^([^0-9.-]*)([0-9.,]+)([^0-9]*)$/);
                        const prefix = match ? match[1] : '';
                        const numStr = match ? match[2] : '';
                        const suffix = match ? match[3] : metric.value;
                        const cleanNumStr = numStr.replace(/,/g, '');
                        const number = cleanNumStr ? parseFloat(cleanNumStr) : null;
                        const decimals = cleanNumStr.includes('.') ? cleanNumStr.split('.')[1].length : 0;

                        return (
                          <div key={idx} className="flex flex-col gap-2">
                            <span className="text-3xl font-black text-primary drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">
                              {number !== null ? (
                                <>
                                  {prefix}
                                  <NumberTicker value={number} decimalPlaces={decimals} />
                                  {suffix}
                                </>
                              ) : (
                                metric.value
                              )}
                            </span>
                            <span className="text-xs font-semibold tracking-widest uppercase text-white/50">{metric.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Core Advisory Areas */}
              {profile.coreAreas && profile.coreAreas.length > 0 && (
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
                  <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">Core Focus</h3>
                  <ul className="space-y-4">
                    {profile.coreAreas.map((area, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                        <span className="text-white/80 leading-relaxed">{area}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Credentials */}
              {profile.credentials && profile.credentials.length > 0 && (
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
                  <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">Credentials</h3>
                  <ul className="space-y-4">
                    {profile.credentials.map((cred, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <Award className="w-5 h-5 text-primary/70 shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                        <span className="text-white/80 leading-relaxed">{cred}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              
              {/* Industries */}
              {profile.industries && (
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
                  <h3 className="text-xl font-bold mb-4 text-white border-b border-white/10 pb-4">Sectors</h3>
                  <p className="text-primary/90 font-medium leading-relaxed bg-primary/5 p-4 rounded-xl border border-primary/10">
                    {profile.industries}
                  </p>
                </motion.div>
              )}

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
