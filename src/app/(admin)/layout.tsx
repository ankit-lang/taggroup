import { Sidebar } from './_components/Sidebar';
import { Header } from './_components/Header';
import { getServerUser } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Ask Supabase to validate the session (not just decode the token's expiry
  // locally): a revoked or invalid token used to render the admin UI while every
  // server action failed with "Unauthorized".
  const user = await getServerUser();

  if (!user) {
    redirect('/admin/login');
  }

  return (
    // Force light mode for the entire admin shell — override ThemeProvider dark vars
    <div
      className="flex h-screen overflow-hidden antialiased font-sans light"
      style={{
        background: '#f0f2f5',
        color: '#1a2332',
        // Override CSS custom properties so dark theme can't bleed in
        ['--background' as any]: '#ffffff',
        ['--foreground' as any]: '#1a2332',
        ['--card' as any]: '#ffffff',
        ['--card-foreground' as any]: '#1a2332',
        ['--muted' as any]: '#f0f2f5',
        ['--muted-foreground' as any]: '#7a8898',
        ['--border' as any]: '#e4e8ee',
        ['--input' as any]: '#e4e8ee',
        ['--primary' as any]: '#c9a84c',
        ['--primary-foreground' as any]: '#ffffff',
        ['--secondary' as any]: '#f0f2f5',
        ['--secondary-foreground' as any]: '#1a2332',
        ['--accent' as any]: '#fff8e6',
        ['--accent-foreground' as any]: '#c9a84c',
        ['--destructive' as any]: '#dc2626',
        ['--ring' as any]: '#c9a84c',
        ['--popover' as any]: '#ffffff',
        ['--popover-foreground' as any]: '#1a2332',
      }}
      data-lenis-prevent="true"
    >
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        <main
          className="flex-1 overflow-y-auto scroll-smooth p-4 sm:p-6 lg:p-8"
          style={{ background: '#f0f2f5' }}
          data-lenis-prevent="true"
        >
          {children}
        </main>
      </div>
    </div>
  )
}

