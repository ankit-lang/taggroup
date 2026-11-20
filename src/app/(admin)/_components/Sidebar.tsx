'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  Mail,
  BookOpen,
  MessageSquare,
  Users,
  ChevronRight,
  LogOut,
  Globe,
  Newspaper,
  ShieldCheck,
  History,
  Settings,
} from 'lucide-react';

export type AdminMe = { email: string; name: string; role: 'super_admin' | 'editor'; roleLabel: string; isOwner: boolean };

type NavItem = { label: string; href: string; icon: typeof LayoutDashboard; superOnly?: boolean };

export const NAV_GROUPS: { label: string; items: NavItem[] }[] = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    ],
  },
  {
    label: 'Content',
    items: [
      { label: 'Blogs / Content', href: '/admin/blog', icon: FileText },
      { label: 'Publications', href: '/admin/publications', icon: BookOpen },
      { label: 'Daily Briefing', href: '/admin/briefings', icon: Newspaper },
      { label: 'Newsletters', href: '/admin/newsletter', icon: Mail, superOnly: true },
      { label: 'Subscribers', href: '/admin/subscribers', icon: Users, superOnly: true },
    ],
  },
  {
    label: 'CRM',
    items: [
      { label: 'Contact Inquiries', href: '/admin/inquiries', icon: MessageSquare, superOnly: true },
    ],
  },
  {
    label: 'Security',
    items: [
      { label: 'Users & Access', href: '/admin/users', icon: ShieldCheck, superOnly: true },
      { label: 'Activity Log', href: '/admin/activity', icon: History, superOnly: true },
      { label: 'My Account', href: '/admin/settings', icon: Settings },
    ],
  },
];

/** Navigation filtered by role (the pages and actions enforce the same rules on the server). */
export function navFor(role: AdminMe['role']) {
  return NAV_GROUPS
    .map(g => ({ ...g, items: g.items.filter(i => role === 'super_admin' || !i.superOnly) }))
    .filter(g => g.items.length > 0);
}

export function Sidebar({ me }: { me: AdminMe }) {
  const pathname = usePathname();

  return (
    <aside
      style={{ width: '240px', minWidth: '240px' }}
      className="hidden md:flex flex-col h-full shrink-0"
      data-lenis-prevent="true"
    >
      {/* Brand */}
      <div
        className="flex items-center gap-3 px-5 border-b shrink-0"
        style={{
          height: '52px',
          background: '#1a2332',
          borderColor: 'rgba(255,255,255,0.08)',
        }}
      >
        <div
          className="flex items-center justify-center rounded"
          style={{ width: '28px', height: '28px', background: 'transparent' }}
        >
          <img src="/assets/img/tag-logo.png" alt="TAG Logo" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
        </div>
        <div>
          <p className="text-white font-semibold" style={{ fontSize: '13px', lineHeight: 1.2, letterSpacing: '0.2px' }}>
            TAG Advisors
          </p>
          <p className="font-medium" style={{ fontSize: '10px', color: '#c9a84c', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
            Admin Console
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav
        className="flex-1 overflow-y-auto py-3"
        style={{ background: '#1e2d3f' }}
      >
        {navFor(me.role).map((group) => (
          <div key={group.label} className="mb-1">
            <p
              className="px-5 mb-1 font-semibold uppercase tracking-widest"
              style={{ fontSize: '9.5px', color: 'rgba(255,255,255,0.28)', paddingTop: '12px', paddingBottom: '4px' }}
            >
              {group.label}
            </p>
            {group.items.map((item) => {
              const isActive =
                item.href === '/admin'
                  ? pathname === '/admin'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  prefetch={false}
                  className="flex items-center gap-3 mx-2 px-3 rounded transition-all relative group"
                  style={{
                    height: '36px',
                    background: isActive ? 'rgba(201,168,76,0.14)' : 'transparent',
                    color: isActive ? '#c9a84c' : 'rgba(255,255,255,0.62)',
                    fontWeight: isActive ? 600 : 400,
                    fontSize: '13px',
                  }}
                >
                  {isActive && (
                    <span
                      className="absolute left-0 top-1/2 -translate-y-1/2 rounded-r"
                      style={{ width: '3px', height: '20px', background: '#c9a84c' }}
                    />
                  )}
                  <Icon style={{ width: '15px', height: '15px', opacity: isActive ? 1 : 0.55, flexShrink: 0 }} />
                  <span className="truncate">{item.label}</span>
                  {isActive && (
                    <ChevronRight style={{ width: '12px', height: '12px', marginLeft: 'auto', opacity: 0.6 }} />
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div
        className="shrink-0 border-t px-4 py-3 flex items-center gap-3"
        style={{ background: '#18273a', borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <div
          className="flex items-center justify-center font-bold rounded-full text-white shrink-0"
          style={{ width: '30px', height: '30px', fontSize: '12px', background: '#c9a84c' }}
        >
          {me.name.charAt(0).toUpperCase()}
        </div>
        <div className="flex-1 min-w-0" title={me.email}>
          <p className="text-white font-semibold truncate" style={{ fontSize: '12px' }}>{me.name}</p>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.38)' }}>{me.roleLabel}{me.isOwner ? ' · Owner' : ''}</p>
        </div>
        <div className="flex items-center gap-1">
          <Link
            href="/"
            target="_blank"
            title="Live site"
            className="rounded p-1.5 transition-colors"
            style={{ color: 'rgba(255,255,255,0.38)' }}
          >
            <Globe style={{ width: '14px', height: '14px' }} />
          </Link>
          <Link
            href="/auth/logout"
            title="Sign out"
            className="rounded p-1.5 transition-colors"
            style={{ color: 'rgba(255,255,255,0.38)' }}
          >
            <LogOut style={{ width: '14px', height: '14px' }} />
          </Link>
        </div>
      </div>
    </aside>
  );
}
