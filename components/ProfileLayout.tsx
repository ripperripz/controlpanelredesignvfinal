'use client';

import React from 'react';
import { User, Bell, Shield, Key, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DashboardLayout } from './DashboardLayout';

const subNav = [
  { label: 'Profile', icon: User, href: '/profile' },
  { label: 'Notifications', icon: Bell, href: '/profile/notifications' },
  { label: 'API Tokens', icon: Key, href: '/profile/api-tokens' },
  { label: 'Security (2FA)', icon: Shield, href: '/profile/2fa' },
  { label: 'Firewall', icon: Globe, href: '/profile/firewall' },
];

export function ProfileLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-[240px] flex-shrink-0">
          <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
            {subNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-4 px-5 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap group",
                    isActive 
                      ? "bg-white text-brand-blue shadow-premium border border-gray-100" 
                      : "text-gray-400 hover:text-gray-900 border border-transparent"
                  )}
                >
                  <item.icon className={cn("w-4 h-4 transition-transform group-hover:scale-110", isActive ? "text-brand-blue" : "text-gray-400 group-hover:text-gray-600")} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <div className="flex-1 max-w-3xl">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-10 border border-gray-100 shadow-card">
            {children}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
