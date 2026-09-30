'use client';

import { Bell, Search, ExternalLink, FileText, User, MessageSquare, ChevronRight } from 'lucide-react';
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
  const searchInputRef = useRef<HTMLInputElement>(null);
  const supabase = createClient();

  useEffect(() => {
    async function fetchUnread() {
      const { data } = await supabase
        .from('contacts')
        .select('*')
        .eq('status', 'pending')
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
        supabase.from('contacts').select('id, name, email').ilike('name', `%${searchQuery}%`).limit(3),
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
      {/* Breadcrumb */}
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
    </header>
  );
}
