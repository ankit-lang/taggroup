'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'


const slides = [
  {
    id: 1,
    title: "Empowering Vision with",
    highlight: "Strategic Advisory",
    description: "Comprehensive Tax & Management Advisory, High-End Virtual CFO Services, and Robust Assurance Solutions.",
    image: "/assets/img/hero/global.svg",
    link: "/services",
    linkText: "Explore Services"
  },
  {
    id: 2,
    title: "Navigating Complex",
    highlight: "Tax Regulations",
    description: "Expert guidance in Direct, Indirect, and International Taxation. We help you stay compliant and optimize your tax strategy globally.",
    image: "/assets/img/hero/intltax.svg",
    link: "/services#taxation-advisory",
    linkText: "Discover Tax Services"
  },
  {
    id: 3,
    title: "Unlocking Growth with",
    highlight: "M&A Advisory",
    description: "From due diligence to post-merger integration, our team provides end-to-end support for your corporate restructuring needs.",
    image: "/assets/img/hero/tp.svg",
    link: "/services#corporate-advisory",
    linkText: "View M&A Solutions"
  }
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-play
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(timer)
  }, [isHovered])

  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <section 
      className="relative w-full h-[720px] overflow-hidden bg-background border-b border-border/40 dark"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 z-0 flex items-center justify-center"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Full Width Background Image with improved visibility */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15] dark:opacity-20"
            style={{ backgroundImage: `url('${slides[current].image}')` }}
          />
          {/* Subtle Radial Gradient to give depth instead of flat white */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background/90 to-background dark:from-primary/10 dark:via-background/90 dark:to-background z-10" />
        </motion.div>
      </AnimatePresence>



      <div className="relative z-20 container mx-auto h-full flex flex-col items-center justify-center text-center px-4 md:px-6 pt-16">
        <div className="max-w-4xl flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" as const, staggerChildren: 0.1 }}
              className="flex flex-col items-center w-full"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 dark:bg-primary/10 px-5 py-1.5 text-xs md:text-sm font-semibold text-primary mb-6 shadow-sm uppercase tracking-widest"
              >
                Global Presence: India, UAE, Singapore, Malaysia
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-foreground"
              >
                {slides[current].title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a059] to-[#d4b46a] pr-2">{slides[current].highlight}</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base md:text-xl text-muted-foreground mb-10 max-w-2xl font-normal leading-relaxed"
              >
                {slides[current].description}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
              >
                <Button size="lg" className="rounded-full text-base md:text-lg h-12 md:h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 font-semibold w-full sm:w-auto" asChild>
                  <Link href={slides[current].link}>
                    {slides[current].linkText} <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-base md:text-lg h-12 md:h-14 px-8 border-border/50 text-foreground hover:bg-accent hover:text-accent-foreground transition-all hover:-translate-y-0.5 font-medium w-full sm:w-auto shadow-sm hover:shadow-md" asChild>
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 z-30 flex items-center gap-3 md:gap-4">
        <div className="flex gap-2 mr-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === current ? "w-12 bg-primary" : "w-3 bg-primary/20 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button 
          onClick={handlePrev}
          className="h-12 w-12 rounded-full glass flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors border-border/50"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={handleNext}
          className="h-12 w-12 rounded-full glass flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors border-border/50"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
