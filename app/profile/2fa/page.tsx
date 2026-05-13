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
  Smartphone,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const menuItems = [
  { label: 'Profile', icon: User, href: '/profile' },
  { label: 'Notifications', icon: Bell, href: '/profile/notifications' },
  { label: 'API Tokens', icon: Key, href: '/profile/tokens' },
  { label: 'Two Factor Authentication', icon: Lock, href: '/profile/2fa', active: true },
  { label: 'Firewall', icon: Shield, href: '/profile/firewall' },
];

export default function TwoFactorAuthPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-brand-navy tracking-tight mb-2">
            Two-Factor Authentication
          </h1>
          <p className="text-sm font-medium text-gray-400">Add an extra layer of security to your account.</p>
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
           <div className="bg-white rounded-[32px] shadow-premium border border-gray-50 overflow-hidden">
              <div className="p-10 border-b border-gray-50">
                 <h2 className="text-xl font-display font-bold text-brand-navy tracking-tight mb-2">Two-Factor-Authentication</h2>
                 <p className="text-sm text-gray-400 font-medium leading-relaxed">Protect your account from unauthorized access by requiring a second verification step.</p>
              </div>
              
              <div className="divide-y divide-gray-50">
                 <div className="p-10 flex items-center justify-between group hover:bg-gray-50/50 transition-all">
                    <div className="flex items-center gap-6">
                       <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shadow-sm">
                          <ShieldCheck className="w-7 h-7" />
                       </div>
                       <div>
                          <h4 className="text-base font-bold text-brand-navy mb-1">Google 2FA</h4>
                          <p className="text-xs text-gray-400 font-medium">Use an authenticator app to generate codes.</p>
                       </div>
                    </div>
                    <button className="px-10 py-3 bg-brand-orange text-white text-xs font-bold rounded-2xl shadow-premium hover:bg-[#E55A1E] transition-all uppercase tracking-widest min-w-[140px]">
                       Setup
                    </button>
                 </div>

                 <div className="p-10 flex items-center justify-between group hover:bg-gray-50/50 transition-all">
                    <div className="flex items-center gap-6">
                       <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shadow-sm">
                          <Smartphone className="w-7 h-7" />
                       </div>
                       <div>
                          <h4 className="text-base font-bold text-brand-navy mb-1">SMS 2FA</h4>
                          <p className="text-xs text-gray-400 font-medium">Receive a text message with a verification code.</p>
                       </div>
                    </div>
                    <button className="px-10 py-3 bg-brand-navy text-white text-xs font-bold rounded-2xl shadow-premium hover:bg-brand-blue transition-all uppercase tracking-widest min-w-[140px]">
                       Disable
                    </button>
                 </div>
              </div>

              <div className="p-10 bg-brand-blue/5 border-t border-gray-100">
                 <div className="flex gap-4">
                    <AlertCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <div>
                       <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-1">Security Recommendation</p>
                       <p className="text-[11px] text-brand-blue/70 font-medium leading-relaxed">
                          We recommend using an authenticator app (Google 2FA) as it is more secure than SMS-based authentication.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
