import { Navbar } from '@/components/public/navbar'
import { Footer } from '@/components/public/footer'
import { NewsletterModal } from '@/components/public/newsletter-modal'
import { MobileActionBar } from '@/components/public/mobile-action-bar'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="site-public flex flex-col" style={{ minHeight: 'calc(100vh / var(--site-zoom, 1))' }}>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <MobileActionBar />
      <NewsletterModal />
    </div>
  )
}
