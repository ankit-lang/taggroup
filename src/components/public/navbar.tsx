'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, ChevronDown, ArrowRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet'
import { motion, AnimatePresence } from 'framer-motion'

// Define the comprehensive navigation structure inspired by kcmehta
const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'About Us', 
    href: '/about',
    dropdown: [
      { name: 'Firm & Values', href: '/about#firm-values' },
      { name: 'The TAG Experience', href: '/about#experience' },
      { name: 'Leadership', href: '/about#leadership' }
    ]
  },
  { 
    name: 'Services', 
    href: '/services',
    isMega: true,
    megaMenu: [
      {
        category: 'Transaction Advisory',
        items: [
          { name: 'Transaction Strategy', href: '/services/transaction-strategy' },
          { name: 'Transaction Structuring', href: '/services/transaction-structuring' },
          { name: 'Investment Banking', href: '/services/investment-banking' },
        ]
      },
      {
        category: 'Strategic Advisory',
        items: [
          { name: 'Management Consulting', href: '/services/management-consulting' },
          { name: 'IPO Strategy', href: '/services/ipo-strategy' },
          { name: 'Wealth Advisory', href: '/services/wealth-advisory' },
        ]
      },
      {
        category: 'Assurance Services',
        items: [
          { name: 'Statutory Audit', href: '/services/audit' },
          { name: 'Financial Accounting Advisory', href: '/services/financial-accounting' },
          { name: 'Certification Services', href: '/services/certification' },
        ]
      },
      {
        category: 'Tax Advisory',
        items: [
          { name: 'Corporate Tax', href: '/services/corporate-tax' },
          { name: 'International Tax', href: '/services/international-tax' },
          { name: 'Transfer Pricing', href: '/services/transfer-pricing' },
          { name: 'Indirect Tax', href: '/services/indirect-tax' },
        ]
      },
      {
        category: 'Risk & Corporate',
        items: [
          { name: 'Internal Audit', href: '/services/internal-audit' },
          { name: 'Governance & Compliance', href: '/services/governance' },
          { name: 'Corporate Law Advisory', href: '/services/corporate-law' },
          { name: 'ESG Services', href: '/services/esg' },
        ]
      },
      {
        category: 'Global Desk',
        items: [
          { name: 'Cross-Border Expansion', href: '/services/cross-border' },
          { name: 'UAE Desk', href: '/services/uae-desk' },
          { name: 'Singapore Desk', href: '/services/singapore-desk' },
        ]
      }
    ]
  },
  { 
    name: 'Life @ TAG', 
    href: '/life-at-tag',
    dropdown: [
      { name: 'People and Culture', href: '/life-at-tag#culture' },
      { name: 'Student Mentorship', href: '/life-at-tag#mentorship' },
      { name: 'Careers', href: '/life-at-tag#careers' },
      { name: 'Alumni Network', href: '/life-at-tag#alumni' }
    ]
  },
  { 
    name: 'Publications', 
    href: '/insights',
    dropdown: [
      { name: 'Budget Analysis', href: '/insights/budget' },
      { name: 'TAG Insights', href: '/insights/articles' },
      { name: 'Special Editions', href: '/insights/special' }
    ]
  },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = React.useState<string | null>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || activeMenu ? 'glass border-b border-white/10 py-3 bg-black/60 backdrop-blur-xl' : 'bg-transparent py-5'
      }`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 relative z-50">
            <Image 
              src="/logore1.png" 
              alt="TAG Advisors" 
              width={160} 
              height={48} 
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 relative z-50">
            {navigation.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.name)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors py-4 ${
                    activeMenu === item.name ? 'text-primary' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                  {(item.dropdown || item.megaMenu) && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMenu === item.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Standard Dropdown */}
                {item.dropdown && activeMenu === item.name && (
                  <div className="absolute top-[100%] left-0 min-w-[220px] pt-2">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="glass bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl"
                    >
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex items-center gap-3 border-l border-white/20 pl-6 ml-2">
              <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-black font-medium" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Nav */}
          <div className="lg:hidden relative z-50">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] bg-black/95 border-l border-white/10 p-0 overflow-y-auto">
                <div className="flex flex-col min-h-full">
                  <div className="p-6 border-b border-white/10 flex justify-between items-center">
                    <Image 
                      src="/logore1.png" 
                      alt="TAG Advisors" 
                      width={160} 
                      height={48} 
                      className="h-8 w-auto"
                    />
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>
                  
                  <nav className="flex flex-col py-4 px-2 flex-grow">
                    {navigation.map((item) => (
                      <div key={item.name} className="px-4 py-2">
                        {item.dropdown || item.megaMenu ? (
                          <div className="flex flex-col">
                            <button 
                              onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                              className="flex items-center justify-between text-lg font-medium text-white/90 py-2 w-full text-left"
                            >
                              {item.name}
                              <ChevronDown className={`h-5 w-5 transition-transform ${mobileExpanded === item.name ? 'rotate-180 text-primary' : 'text-white/50'}`} />
                            </button>
                            
                            <AnimatePresence>
                              {mobileExpanded === item.name && (
                                <motion.div 
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  {item.dropdown && (
                                    <div className="flex flex-col gap-3 py-3 pl-4 border-l border-white/10 ml-2 mt-2">
                                      {item.dropdown.map(dropItem => (
                                        <SheetClose asChild key={dropItem.name}>
                                          <Link href={dropItem.href} className="text-white/60 hover:text-white transition-colors py-1">
                                            {dropItem.name}
                                          </Link>
                                        </SheetClose>
                                      ))}
                                    </div>
                                  )}
                                  
                                  {item.megaMenu && (
                                    <div className="flex flex-col gap-6 py-4 pl-4 border-l border-white/10 ml-2 mt-2">
                                      {item.megaMenu.map((category) => (
                                        <div key={category.category} className="flex flex-col gap-2">
                                          <h4 className="text-primary font-medium text-sm tracking-wide uppercase">{category.category}</h4>
                                          <div className="flex flex-col gap-3 pl-2">
                                            {category.items.map(subItem => (
                                              <SheetClose asChild key={subItem.name}>
                                                <Link href={subItem.href} className="text-white/60 hover:text-white transition-colors py-1 text-sm">
                                                  {subItem.name}
                                                </Link>
                                              </SheetClose>
                                            ))}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <SheetClose asChild>
                            <Link href={item.href} className="block text-lg font-medium text-white/90 hover:text-primary py-2 transition-colors">
                              {item.name}
                            </Link>
                          </SheetClose>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Mega Menu Overlay (Desktop only) */}
      <AnimatePresence>
        {activeMenu === 'Services' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-background border-b border-white/10 shadow-2xl hidden lg:block z-[100]"
            onMouseEnter={() => setActiveMenu('Services')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="container mx-auto px-4 md:px-6 py-12">
              <div className="grid grid-cols-6 gap-8">
                {navigation.find(n => n.name === 'Services')?.megaMenu?.map((category) => (
                  <div key={category.category} className="flex flex-col gap-4">
                    <h3 className="text-white font-semibold border-b border-white/10 pb-2 text-sm">{category.category}</h3>
                    <ul className="flex flex-col gap-3">
                      {category.items.map((item) => (
                        <li key={item.name}>
                          <Link 
                            href={item.href}
                            className="text-white/60 hover:text-primary text-sm font-light transition-colors block leading-snug hover:translate-x-1 duration-200"
                            onClick={() => setActiveMenu(null)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-6 border-t border-white/10 flex justify-between items-center">
                <p className="text-white/50 text-sm">Discover how our specialized teams can help your business grow globally.</p>
                <Button variant="link" className="text-primary hover:text-white p-0" asChild>
                  <Link href="/services" onClick={() => setActiveMenu(null)}>View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
