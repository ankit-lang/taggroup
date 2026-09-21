import Link from 'next/link'
import { LayoutDashboard, FileText, Users, Mail, LogOut } from 'lucide-react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card flex flex-col h-full hidden md:flex">
        <div className="p-6 border-b">
          <Link href="/admin" className="text-xl font-bold tracking-tight text-foreground flex items-center">
            TAG <span className="text-primary ml-1">Admin</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-colors">
            <LayoutDashboard className="h-5 w-5" /> Dashboard
          </Link>
          <Link href="/admin/blog" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-colors">
            <FileText className="h-5 w-5" /> Blogs
          </Link>
          <Link href="/admin/newsletter" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-5 w-5" /> Newsletters
          </Link>
          <Link href="/admin/publications" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-colors">
            <FileText className="h-5 w-5" /> Publications
          </Link>
          <Link href="/admin/users" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-colors">
            <Users className="h-5 w-5" /> Users
          </Link>
        </nav>
        <div className="p-4 border-t">
          {/* Simple logout link that can call a server action or supabase auth signout */}
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-md text-red-500 hover:bg-red-500/10 transition-colors">
            <LogOut className="h-5 w-5" /> Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  )
}
