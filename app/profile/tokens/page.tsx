'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  User, 
  Bell, 
  Key, 
  Shield, 
  Lock, 
  ChevronRight,
  Plus,
  Trash2,
  Copy,
  Clock,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const menuItems = [
  { label: 'Profile', icon: User, href: '/profile' },
  { label: 'Notifications', icon: Bell, href: '/profile/notifications' },
  { label: 'API Tokens', icon: Key, href: '/profile/tokens', active: true },
  { label: 'Two Factor Authentication', icon: Lock, href: '/profile/2fa' },
  { label: 'Firewall', icon: Shield, href: '/profile/firewall' },
];

const tokens = [
  { name: 'VS Code Extension', created: '2025-11-12', lastUsed: 'Just now' },
  { name: 'CLI Tool - Work Laptop', created: '2025-08-04', lastUsed: '2 days ago' },
];

export default function APITokensPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-brand-navy tracking-tight mb-2">
            API Tokens
          </h1>
          <p className="text-sm font-medium text-gray-400">Generate and manage tokens to authenticate with our API.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-3 space-y-2">
           {menuItems.map((item, i) => (
             <Link key={i} href={item.href}>
               <div className={cn(
                 "flex items-center gap-3 p-4 rounded-2xl transition-all group",
                 item.active ? "bg-brand-blue text-white shadow-premium" : "bg-white text-gray-400 hover:bg-gray-50 border border-gray-50 hover:border-brand-blue/20 shadow-sm"
               )}>
                 <item.icon className="w-5 h-5" />
                 <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                 {!item.active && <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all" />}
               </div>
             </Link>
           ))}
        </div>

        {/* Form Content */}
        <div className="lg:col-span-9 space-y-8">
           {/* Create Token */}
           <div className="bg-white rounded-[32px] shadow-premium border border-gray-50 overflow-hidden">
              <div className="p-10 border-b border-gray-50 bg-gray-50/20">
                 <div className="w-12 h-12 bg-brand-navy rounded-2xl flex items-center justify-center text-white shadow-lg mb-6">
                    <Key className="w-6 h-6" />
                 </div>
                 <h2 className="text-xl font-display font-bold text-brand-navy tracking-tight mb-2">Manage API Tokens</h2>
                 <p className="text-sm text-gray-400 font-medium leading-relaxed">API Tokens allow to authenticate with our API from external tools and services.</p>
              </div>
              <div className="p-10">
                 <div className="flex gap-4">
                    <input type="text" placeholder="Token name (e.g. My Application)" className="flex-1 h-14 px-6 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all placeholder:font-medium placeholder:text-gray-300" />
                    <button className="px-8 py-4 bg-brand-orange text-white text-xs font-bold rounded-2xl shadow-premium hover:bg-[#E55A1E] transition-all uppercase tracking-widest">
                       Create Token
                    </button>
                 </div>
              </div>
           </div>

           {/* Active Tokens */}
           <div className="bg-white rounded-[32px] shadow-premium border border-gray-50 overflow-hidden">
              <div className="p-10 border-b border-gray-50">
                 <h3 className="text-lg font-display font-bold text-brand-navy">Active Tokens</h3>
              </div>
              <div className="divide-y divide-gray-50">
                 {tokens.map((token, i) => (
                   <div key={i} className="p-8 flex items-center justify-between group hover:bg-gray-50/50 transition-all">
                      <div className="flex items-center gap-6">
                         <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                            <Key className="w-5 h-5" />
                         </div>
                         <div>
                            <h4 className="text-sm font-bold text-brand-navy mb-1">{token.name}</h4>
                            <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                               <span className="flex items-center gap-1.5"><Plus className="w-3 h-3" /> Created {token.created}</span>
                               <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> Last used {token.lastUsed}</span>
                            </div>
                         </div>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                         <button className="p-3 text-gray-400 hover:text-brand-blue hover:bg-brand-blue/5 rounded-xl transition-all"><Copy className="w-4 h-4" /></button>
                         <button className="p-3 text-gray-400 hover:text-brand-error hover:bg-brand-error/5 rounded-xl transition-all"><Trash2 className="w-4 h-4" /></button>
                      </div>
                   </div>
                 ))}
              </div>
              {tokens.length === 0 && (
                <div className="p-20 text-center">
                   <p className="text-sm text-gray-400 font-medium">No active tokens found. Create one above to get started.</p>
                </div>
              )}
           </div>

           {/* Documentation Card */}
           <div className="bg-brand-navy rounded-[32px] p-10 text-white shadow-premium relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/20 blur-[60px] rounded-full -mr-24 -mt-24" />
              <div className="relative z-10 flex items-center justify-between gap-8">
                 <div className="flex-1">
                    <h3 className="text-xl font-display font-bold mb-4">API Documentation</h3>
                    <p className="text-sm text-gray-400 font-medium leading-relaxed mb-6">Learn how to integrate our API into your workflow. Check out our comprehensive guides and SDKs.</p>
                    <button className="flex items-center gap-2 px-6 py-3 bg-brand-blue text-white text-xs font-bold rounded-xl hover:bg-brand-blue/90 transition-all uppercase tracking-widest">
                       View Docs <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                 </div>
                 <div className="hidden md:block w-32 h-32 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center backdrop-blur-md">
                    <Shield className="w-12 h-12 text-brand-orange" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
