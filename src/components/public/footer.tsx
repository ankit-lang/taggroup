import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-card border-t py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image 
                src="/logotag.png" 
                alt="TAG Advisors" 
                width={160} 
                height={48} 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering Businesses with Comprehensive Tax & Management Advisory, High-End Virtual / Fractional CFO Services and Robust Assurance Solutions tailored for sustainable success.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services#taxation" className="hover:text-primary transition-colors">Taxation Advisory</Link></li>
              <li><Link href="/services#assurance" className="hover:text-primary transition-colors">Assurance Services</Link></li>
              <li><Link href="/services#cfo" className="hover:text-primary transition-colors">Virtual CFO</Link></li>
              <li><Link href="/services#startup" className="hover:text-primary transition-colors">Start-up Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/insights" className="hover:text-primary transition-colors">TAG Insights</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Locations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>New Delhi, India</li>
              <li>Gurgaon, India</li>
              <li>Sharjah, UAE</li>
              <li>Singapore</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} TAG Advisors LLP. All rights reserved.</p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <Link href="https://linkedin.com" target="_blank" className="hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </Link>
            <Link href="https://wa.me/1234567890" target="_blank" className="hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
