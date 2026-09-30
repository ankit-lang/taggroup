'use client';

import { Bell, Search, ExternalLink, FileText, User, MessageSquare, ChevronRight, Menu, X, LogOut, Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { createClient } from '@/lib/supabase/client';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup
} from '@/components/ui/dropdown-menu';
import { NAV_GROUPS } from './Sidebar';

const SEGMENT_LABELS: Record<string, string> = {
  admin: 'Admin',
  blog: 'Blogs & Content',
  newsletter: 'Newsletters',
  publications: 'Publications',
  inquiries: 'Contact Inquiries',
  users: 'Users & RBAC',
  new: 'New',
};

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [unreadContacts, setUnreadContacts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ publications: any[]; contacts: any[] }>({ publications: [], contacts: [] });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const supabase = createClient();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    async function fetchUnread() {
      const { data } = await supabase
        .from('leads')
        .select('*')
        .or('status.eq.new,status.eq.pending,status.is.null')
        .order('created_at', { ascending: false })
        .limit(5);
      if (data) setUnreadContacts(data);
    }
    fetchUnread();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (searchQuery.length < 2) {
      setSearchResults({ publications: [], contacts: [] });
      setIsSearchOpen(false);
      return;
    }
    const t = setTimeout(async () => {
      setIsSearchOpen(true);
      const [pubsRes, contactsRes] = await Promise.all([
        supabase.from('publications').select('id, title, slug').ilike('title', `%${searchQuery}%`).limit(3),
        supabase.from('leads').select('id, name, email').ilike('name', `%${searchQuery}%`).limit(3),
      ]);
      setSearchResults({ publications: pubsRes.data || [], contacts: contactsRes.data || [] });
    }, 300);
    return () => clearTimeout(t);
  }, [searchQuery]);

  const segments = pathname.split('/').filter(Boolean);

  return (
    <header
      className="flex items-center justify-between shrink-0 z-10 relative"
      style={{
        height: '52px',
        background: '#fff',
        borderBottom: '1px solid #e4e8ee',
        paddingInline: '20px',
      }}
    >
      {/* Breadcrumb & Mobile Menu Toggle */}
      <div className="flex items-center gap-3">
        <button
          className="md:hidden p-1.5 -ml-1.5 rounded-md text-slate-500 hover:bg-slate-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open mobile menu"
        >
          <Menu style={{ width: '20px', height: '20px' }} />
        </button>
        <nav className="flex items-center gap-1" style={{ fontSize: '12.5px' }}>
          {segments.map((seg, i) => {
          const label = SEGMENT_LABELS[seg] || seg.replace(/-/g, ' ');
          const isLast = i === segments.length - 1;
          return (
            <span key={seg} className="flex items-center gap-1">
              {i > 0 && <ChevronRight style={{ width: '12px', height: '12px', color: '#c0c8d4' }} />}
              <span
                className="capitalize"
                style={{
                  color: isLast ? '#1a2332' : '#7a8898',
                  fontWeight: isLast ? 600 : 400,
                }}
              >
                {label}
              </span>
            </span>
          );
        })}
      </nav>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search
            style={{ width: '13px', height: '13px', color: '#9aa5b4', position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery.length >= 2 && setIsSearchOpen(true)}
            onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
            placeholder="Search… (⌘K)"
            style={{
              width: '220px',
              height: '30px',
              paddingLeft: '30px',
              paddingRight: '12px',
              background: '#f4f6f9',
              border: '1px solid #e4e8ee',
              borderRadius: '4px',
              fontSize: '12.5px',
              color: '#1a2332',
              outline: 'none',
            }}
            className="transition-shadow focus:border-amber-400 focus:ring-1 focus:ring-amber-300"
          />
          {isSearchOpen && (searchResults.publications.length > 0 || searchResults.contacts.length > 0) && (
            <div
              className="absolute top-full left-0 mt-1 bg-white shadow-xl overflow-hidden z-50"
              style={{ width: '280px', border: '1px solid #e4e8ee', borderRadius: '6px' }}
            >
              {searchResults.publications.length > 0 && (
                <div className="p-2">
                  <div className="text-xs font-semibold uppercase tracking-wider px-2 py-1" style={{ color: '#9aa5b4' }}>Publications</div>
                  {searchResults.publications.map((p) => (
                    <button
                      key={p.id}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => { router.push('/admin/publications'); setIsSearchOpen(false); setSearchQuery(''); }}
                      className="w-full text-left px-2 py-1.5 rounded flex items-center gap-2 hover:bg-slate-50"
                      style={{ fontSize: '12.5px', color: '#334155' }}
                    >
                      <FileText style={{ width: '13px', height: '13px', color: '#9aa5b4' }} />
                      <span className="truncate">{p.title}</span>
                    </button>
                  ))}
                </div>
              )}
              {searchResults.contacts.length > 0 && (
                <div className="p-2 border-t" style={{ borderColor: '#f1f5f9' }}>
                  <div className="text-xs font-semibold uppercase tracking-wider px-2 py-1" style={{ color: '#9aa5b4' }}>Contacts</div>
                  {searchResults.contacts.map((c) => (
                    <button
                      key={c.id}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => { router.push('/admin/inquiries'); setIsSearchOpen(false); setSearchQuery(''); }}
                      className="w-full text-left px-2 py-1.5 rounded flex items-center gap-2 hover:bg-slate-50"
                      style={{ fontSize: '12.5px', color: '#334155' }}
                    >
                      <User style={{ width: '13px', height: '13px', color: '#9aa5b4' }} />
                      <span className="truncate">{c.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Divider */}
        <div style={{ width: '1px', height: '20px', background: '#e4e8ee' }} />

        {/* Live Site */}
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-1.5 font-medium transition-colors hover:text-amber-600"
          style={{ fontSize: '12px', color: '#5a6778' }}
        >
          <ExternalLink style={{ width: '13px', height: '13px' }} />
          <span className="hidden sm:inline">Live Site</span>
        </Link>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger
            className="relative rounded transition-colors outline-none inline-flex items-center justify-center cursor-pointer"
            style={{ padding: '5px', color: '#5a6778' }}
          >
            <Bell style={{ width: '16px', height: '16px' }} />
            {unreadContacts.length > 0 && (
              <span
                className="absolute rounded-full border-2 border-white"
                style={{ top: '4px', right: '4px', width: '8px', height: '8px', background: '#e53e3e' }}
              />
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 rounded-lg" style={{ background: '#fff', border: '1px solid #e4e8ee', color: '#1a2332' }}>
            <DropdownMenuGroup>
              <DropdownMenuLabel className="font-semibold text-slate-800 px-3 py-2 text-sm">Notifications</DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-slate-100" />
            {unreadContacts.length > 0 ? (
              <>
                <div className="max-h-64 overflow-y-auto">
                  {unreadContacts.map((contact) => (
                    <DropdownMenuItem
                      key={contact.id}
                      className="cursor-pointer flex flex-col items-start p-3 hover:bg-slate-50 border-b border-slate-50 last:border-0"
                      onClick={() => router.push('/admin/inquiries')}
                    >
                      <div className="flex items-center gap-2 w-full">
                        <MessageSquare style={{ width: '13px', height: '13px', color: '#c9a84c', flexShrink: 0 }} />
                        <span className="font-medium text-slate-900 truncate text-xs">{contact.name}</span>
                        <span className="text-slate-400 ml-auto shrink-0 whitespace-nowrap" style={{ fontSize: '10px' }}>
                          {new Date(contact.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1 w-full">
                        {contact.message || 'New contact form submission'}
                      </p>
                    </DropdownMenuItem>
                  ))}
                </div>
                <DropdownMenuSeparator className="bg-slate-100" />
                <DropdownMenuItem
                  className="w-full text-center text-amber-600 hover:text-amber-700 hover:bg-amber-50 font-medium justify-center cursor-pointer p-2 rounded-b-lg text-xs"
                  onClick={() => router.push('/admin/inquiries')}
                >
                  View all in Inquiries →
                </DropdownMenuItem>
              </>
            ) : (
              <div className="p-6 text-center text-xs text-slate-500">You're all caught up!</div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div className="relative w-4/5 max-w-sm bg-[#1e2d3f] h-full shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
            {/* Header */}
            <div className="flex items-center justify-between px-5 border-b" style={{ height: '52px', background: '#1a2332', borderColor: 'rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded" style={{ width: '28px', height: '28px', background: 'transparent' }}>
                  <img src="/assets/img/tag-logo.png" alt="TAG Logo" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                </div>
                <div>
                  <p className="text-white font-semibold" style={{ fontSize: '13px', lineHeight: 1.2, letterSpacing: '0.2px' }}>TAG Advisors</p>
                  <p className="font-medium" style={{ fontSize: '10px', color: '#c9a84c', letterSpacing: '0.8px', textTransform: 'uppercase' }}>Admin Console</p>
                </div>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 rounded-md text-white/50 hover:bg-white/10 transition-colors">
                <X style={{ width: '20px', height: '20px' }} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 overflow-y-auto py-3">
              {NAV_GROUPS.map((group) => (
                <div key={group.label} className="mb-1">
                  <p className="px-5 mb-1 font-semibold uppercase tracking-widest" style={{ fontSize: '9.5px', color: 'rgba(255,255,255,0.28)', paddingTop: '12px', paddingBottom: '4px' }}>
                    {group.label}
                  </p>
                  {group.items.map((item) => {
                    const isActive = item.href === '/admin' ? pathname === '/admin' : pathname === item.href || pathname.startsWith(`${item.href}/`);
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 mx-2 px-3 rounded transition-all relative group"
                        style={{ height: '40px', background: isActive ? 'rgba(201,168,76,0.14)' : 'transparent', color: isActive ? '#c9a84c' : 'rgba(255,255,255,0.62)', fontWeight: isActive ? 600 : 400, fontSize: '14px' }}
                      >
                        {isActive && <span className="absolute left-0 top-1/2 -translate-y-1/2 rounded-r" style={{ width: '3px', height: '20px', background: '#c9a84c' }} />}
                        <Icon style={{ width: '16px', height: '16px', opacity: isActive ? 1 : 0.55, flexShrink: 0 }} />
                        <span className="truncate">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              ))}
            </nav>

            {/* Footer */}
            <div className="shrink-0 border-t px-4 py-3 flex items-center gap-3" style={{ background: '#18273a', borderColor: 'rgba(255,255,255,0.07)' }}>
              <div className="flex items-center justify-center font-bold rounded-full text-white shrink-0" style={{ width: '30px', height: '30px', fontSize: '12px', background: '#c9a84c' }}>A</div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold truncate" style={{ fontSize: '12px' }}>Admin User</p>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.38)' }}>Super Admin</p>
              </div>
              <div className="flex items-center gap-1">
                <Link href="/" target="_blank" className="rounded p-1.5 transition-colors" style={{ color: 'rgba(255,255,255,0.38)' }}>
                  <Globe style={{ width: '16px', height: '16px' }} />
                </Link>
                <Link href="/auth/logout" className="rounded p-1.5 transition-colors" style={{ color: 'rgba(255,255,255,0.38)' }}>
                  <LogOut style={{ width: '16px', height: '16px' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
