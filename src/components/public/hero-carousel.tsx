'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { SpinningText } from '@/components/ui/spinning-text'

const slides = [
  {
    id: 1,
    title: "Empowering Vision with",
    highlight: "Strategic Advisory",
    description: "Comprehensive Tax & Management Advisory, High-End Virtual CFO Services, and Robust Assurance Solutions.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    link: "/services",
    linkText: "Explore Services"
  },
  {
    id: 2,
    title: "Navigating Complex",
    highlight: "Tax Regulations",
    description: "Expert guidance in Direct, Indirect, and International Taxation. We help you stay compliant and optimize your tax strategy globally.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    link: "/services#taxation-advisory",
    linkText: "Discover Tax Services"
  },
  {
    id: 3,
    title: "Unlocking Growth with",
    highlight: "M&A Advisory",
    description: "From due diligence to post-merger integration, our team provides end-to-end support for your corporate restructuring needs.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2070&auto=format&fit=crop",
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
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-background"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Background Image with Parallax & Blur effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slides[current].image}')` }}
          />
          {/* Gradients to blend with background and text */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-32 right-12 lg:right-24 z-30 hidden md:flex items-center justify-center">
        <div className="w-16 h-16 absolute rounded-full bg-primary/20 blur-xl animate-pulse"></div>
        <SpinningText 
          className="text-white/80 font-bold tracking-widest uppercase text-xs"
          radius={5.5} 
          duration={20}
        >
          TAG ADVISORS • GLOBAL EXPERTISE • 
        </SpinningText>
      </div>

      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 md:px-6 pt-20">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }}
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(200,150,50,0.2)]"
              >
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping"></span>
                Global Presence: India, UAE, Singapore, Malaysia
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-[1.1] text-white"
              >
                {slides[current].title} <br />
                <span className="text-gradient drop-shadow-lg">{slides[current].highlight}</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-2xl text-white/80 mb-10 max-w-2xl font-light"
              >
                {slides[current].description}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Button size="lg" className="rounded-full text-lg h-14 px-8 glow transition-transform hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href={slides[current].link}>
                    {slides[current].linkText} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-8 glass border-white/20 text-white hover:bg-white/10 transition-transform hover:scale-105" asChild>
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-10 right-10 z-30 flex items-center gap-4">
        <div className="flex gap-2 mr-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === current ? "w-12 bg-primary" : "w-3 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button 
          onClick={handlePrev}
          className="h-12 w-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 hover:text-primary transition-colors border-white/20"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={handleNext}
          className="h-12 w-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 hover:text-primary transition-colors border-white/20"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
