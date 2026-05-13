'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  Key, 
  Plus, 
  Search, 
  Trash2, 
  Edit2, 
  Eye, 
  ChevronRight,
  Shield,
  Clock,
  Globe,
  Terminal,
  Lock,
  User,
  Settings,
  X
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const sshKeys = [
  { id: 1, name: 'example@client.com', signature: 'SHA256:$2y$10$8Si5DWrekhq0Kq/sa/jb3.ahOlb0t2rqqOr4VjkZhYiHuserfjnse8ZtZK', created: '2025-05-12' },
];

export default function SSHKeysPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Profile Sidebar */}
        <aside className="w-full lg:w-80 space-y-4">
           <div className="bg-white rounded-[32px] p-4 shadow-card border border-gray-50">
              {[
                { icon: User, label: 'Profile Settings', href: '/profile' },
                { icon: Shield, label: 'Two-Factor Auth', href: '/profile/2fa' },
                { icon: Key, label: 'API Tokens', href: '/profile/tokens' },
                { icon: Terminal, label: 'SSH Keys', href: '/profile/ssh-keys', active: true },
                { icon: Lock, label: 'Firewall / Whitelist', href: '/profile/firewall' },
                { icon: Settings, label: 'Preferences', href: '/profile/preferences' },
              ].map((item, i) => (
                <Link 
                  key={i} 
                  href={item.href}
                  className={cn(
                    "flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-xs uppercase tracking-widest",
                    item.active 
                      ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/20" 
                      : "text-gray-400 hover:text-brand-blue hover:bg-gray-50"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              ))}
           </div>

           <div className="bg-brand-orange rounded-[32px] p-8 text-white shadow-premium relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[60px] rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <Shield className="w-8 h-8 mb-4" />
              <h4 className="text-sm font-bold mb-2">Security Advice</h4>
              <p className="text-[10px] text-orange-50 font-medium leading-relaxed">
                Use Ed25519 keys for better security and performance. Avoid using legacy RSA keys under 2048 bits.
              </p>
           </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-12">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                 <h1 className="text-4xl font-display font-bold text-brand-navy tracking-tight mb-2">SSH Keys</h1>
                 <p className="text-sm font-medium text-gray-400">Manage your public keys for secure server access.</p>
              </div>
              <button className="flex items-center gap-2 px-8 py-4 bg-brand-orange text-white text-xs font-bold rounded-2xl shadow-premium hover:bg-[#E55A1E] transition-all uppercase tracking-widest">
                 <Plus className="w-4 h-4" /> Create SSH Key
              </button>
           </div>

           <div className="bg-white rounded-[40px] shadow-premium border border-gray-50 overflow-hidden">
              <div className="p-8 border-b border-gray-50 bg-gray-50/20">
                 <div className="relative max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input 
                      type="text" 
                      placeholder="Search keys..." 
                      className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-xs font-medium focus:ring-2 focus:ring-brand-blue/20 outline-none"
                    />
                 </div>
              </div>

              <div className="overflow-x-auto">
                 <table className="w-full text-left text-xs">
                    <thead>
                       <tr className="bg-gray-50/50 border-b border-gray-100 uppercase tracking-widest text-brand-blue font-bold">
                          <th className="px-10 py-6">Name</th>
                          <th className="px-10 py-6">Signature</th>
                          <th className="px-10 py-6 text-right">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                       {sshKeys.map((key, i) => (
                         <tr key={i} className="hover:bg-brand-blue/[0.02] transition-colors group">
                            <td className="px-10 py-8 font-bold text-brand-navy">{key.name}</td>
                            <td className="px-10 py-8 font-mono text-[10px] text-gray-400 max-w-xs truncate">{key.signature}</td>
                            <td className="px-10 py-8 text-right">
                               <div className="flex items-center justify-end gap-2">
                                  <button className="p-2 text-gray-300 hover:text-brand-blue transition-colors">
                                     <Eye className="w-4 h-4" />
                                  </button>
                                  <button className="p-2 text-gray-300 hover:text-brand-blue transition-colors">
                                     <Edit2 className="w-4 h-4" />
                                  </button>
                                  <button className="p-2 text-gray-300 hover:text-brand-error transition-colors">
                                     <Trash2 className="w-4 h-4" />
                                  </button>
                               </div>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>

              <div className="p-8 border-t border-gray-50 bg-gray-50/30 flex items-center justify-between">
                 <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">1-1 of 1</span>
                 <div className="flex gap-4">
                    <button className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-brand-blue disabled:opacity-30" disabled>Previous</button>
                    <button className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-brand-blue disabled:opacity-30" disabled>Next</button>
                 </div>
              </div>
           </div>

           {/* Add Key Form Placeholder */}
           <div className="bg-white rounded-[40px] p-10 shadow-card border border-gray-100">
              <h3 className="text-xl font-display font-bold text-brand-navy mb-8">Add New SSH Key</h3>
              <div className="space-y-8">
                 <div className="grid grid-cols-1 gap-8">
                    <div className="space-y-3">
                       <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Key Name</label>
                       <input 
                         type="text" 
                         placeholder="e.g. MacBook Pro Office" 
                         className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                       />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Public Key Content</label>
                       <textarea 
                         placeholder="ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAA..." 
                         className="w-full h-32 px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-mono focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
                       />
                    </div>
                 </div>
                 <button className="px-10 py-4 bg-brand-navy text-white text-[10px] font-bold rounded-xl shadow-lg hover:bg-brand-blue transition-all uppercase tracking-widest">
                    Add Public Key
                 </button>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
