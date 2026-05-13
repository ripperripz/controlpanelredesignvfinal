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
  AlertTriangle,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const menuItems = [
  { label: 'Profile', icon: User, href: '/profile' },
  { label: 'Notifications', icon: Bell, href: '/profile/notifications' },
  { label: 'API Tokens', icon: Key, href: '/profile/tokens' },
  { label: 'Two Factor Authentication', icon: Lock, href: '/profile/2fa' },
  { label: 'Firewall', icon: Shield, href: '/profile/firewall', active: true },
];

const ips = [
  { ip: '255.255.255.255', comment: 'Example IP', created: '2026-04-13 10:21:55' },
];

export default function FirewallPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-brand-navy tracking-tight mb-2">
            Firewall Settings
          </h1>
          <p className="text-sm font-medium text-gray-400">Manage your whitelisted IP addresses for secure access.</p>
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
           {/* Add IP */}
           <div className="bg-white rounded-[32px] shadow-premium border border-gray-50 overflow-hidden">
              <div className="p-10 border-b border-gray-50 bg-gray-50/20">
                 <div className="w-12 h-12 bg-brand-navy rounded-2xl flex items-center justify-center text-white shadow-lg mb-6">
                    <Shield className="w-6 h-6" />
                 </div>
                 <h2 className="text-xl font-display font-bold text-brand-navy tracking-tight mb-2">Manage Your IPs</h2>
                 <p className="text-sm text-gray-400 font-medium leading-relaxed">Whitelist your IPs to have SSH access here! Only IPv4 addresses are supported at this time.</p>
                 <button className="text-[10px] font-bold text-brand-orange uppercase tracking-widest mt-4 hover:underline">See What's Impacted?</button>
              </div>
              <div className="p-10">
                 <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-4">
                       <input type="text" placeholder="IP Address (e.g. 1.2.3.4)" className="w-full h-14 px-6 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all" />
                    </div>
                    <div className="md:col-span-6">
                       <input type="text" placeholder="Comment (e.g. Home Office)" className="w-full h-14 px-6 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all" />
                    </div>
                    <div className="md:col-span-2">
                       <button className="w-full h-14 bg-brand-orange text-white text-xs font-bold rounded-2xl shadow-premium hover:bg-[#E55A1E] transition-all uppercase tracking-widest">
                          Add
                       </button>
                    </div>
                 </div>
              </div>
           </div>

           {/* Existing IPs */}
           <div className="bg-white rounded-[32px] shadow-premium border border-gray-50 overflow-hidden">
              <div className="p-10 border-b border-gray-50">
                 <h3 className="text-lg font-display font-bold text-brand-navy">Existing IPs</h3>
                 <p className="text-xs text-gray-400 font-medium">These IPs currently have access to your infrastructure.</p>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left text-xs">
                    <thead>
                       <tr className="bg-gray-50/50 border-b border-gray-100 uppercase tracking-widest text-brand-blue font-bold">
                          <th className="px-10 py-6">IP Address</th>
                          <th className="px-10 py-6">Comment</th>
                          <th className="px-10 py-6">Created At</th>
                          <th className="px-10 py-6"></th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                       {ips.map((item, i) => (
                          <tr key={i} className="hover:bg-brand-blue/[0.02] transition-colors group">
                             <td className="px-10 py-6 font-bold text-brand-navy">{item.ip}</td>
                             <td className="px-10 py-6 text-gray-400 font-medium">{item.comment}</td>
                             <td className="px-10 py-6 text-gray-400 font-medium">{item.created}</td>
                             <td className="px-10 py-6 text-right">
                                <button className="px-4 py-2 bg-brand-error text-white text-[10px] font-bold rounded-lg shadow-sm hover:bg-[#D32F2F] transition-all uppercase tracking-widest">
                                   Delete
                                </button>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
              {ips.length === 0 && (
                <div className="p-20 text-center">
                   <p className="text-sm text-gray-400 font-medium">No whitelisted IPs found.</p>
                </div>
              )}
           </div>

           <div className="p-8 bg-brand-orange/5 border border-brand-orange/10 rounded-[32px] flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-orange flex-shrink-0">
                 <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                 <h4 className="text-sm font-bold text-brand-navy mb-1">Security Warning</h4>
                 <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                    Whitelisting an IP address grants it access to your infrastructure. Always ensure you only whitelist trusted IPs and periodically review this list.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
