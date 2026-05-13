'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Server, 
  Rocket, 
  Ticket, 
  User, 
  Key,
  ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { group: 'INFRASTRUCTURE', items: [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { label: 'Environments', icon: Server, href: '/environments' },
    { label: 'Deployments', icon: Rocket, href: '/deployments' },
  ]},
  { group: 'SUPPORT', items: [
    { label: 'Tickets', icon: Ticket, href: '/tickets' },
  ]},
  { group: 'ACCOUNT', items: [
    { label: 'Profile', icon: User, href: '/profile' },
    { label: 'SSH Keys', icon: Key, href: '/ssh-keys' },
  ]},
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-navy/40 backdrop-blur-sm z-[55] lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside className={cn(
        "fixed left-0 top-0 w-[240px] h-full sidebar-glass z-[60] flex flex-col transition-transform duration-500 ease-premium lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="pt-8 px-8 mb-12 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-navy rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 duration-300 shadow-premium">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-900 font-display font-bold text-xl tracking-tight">
              corefinity
            </span>
          </Link>
          <button onClick={onClose} className="lg:hidden p-2 text-gray-400 hover:text-gray-900">
            <User className="w-5 h-5 rotate-45" /> {/* Placeholder close icon */}
          </button>
        </div>

        <nav className="flex-1 px-3 overflow-y-auto custom-scrollbar">
          {navItems.map((section) => (
            <div key={section.group} className="mb-12">
              <h3 className="px-5 text-[9px] font-bold text-gray-400 tracking-[0.2em] mb-4 uppercase opacity-60">
                {section.group}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "flex items-center gap-3.5 h-11 px-5 rounded-xl transition-all duration-300 relative group overflow-hidden",
                          isActive ? "sidebar-active" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50/80"
                        )}
                      >
                        <item.icon className={cn(
                          "w-4 h-4 transition-all duration-300 relative z-10",
                          isActive ? "text-white" : "text-gray-400 group-hover:text-gray-600 group-hover:scale-110"
                        )} />
                        <span className={cn(
                          "text-[13px] font-medium tracking-tight relative z-10",
                          isActive ? "text-white" : ""
                        )}>{item.label}</span>
                        
                        {isActive && (
                          <div className="absolute left-0 top-0 w-1 h-full bg-brand-orange z-20" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="p-8 border-t border-gray-100">
          <Link href="/profile" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-all group">
            <div className="w-9 h-9 rounded-xl bg-brand-navy flex items-center justify-center text-white text-[10px] font-bold shadow-premium group-hover:scale-105 transition-transform">
              AR
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs font-bold text-gray-900 truncate">Alex Rivera</p>
              <p className="text-[10px] text-gray-400 font-medium">Administrator</p>
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
}
