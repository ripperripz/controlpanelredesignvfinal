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
  Save,
  Phone,
  Mail,
  Briefcase
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const menuItems = [
  { label: 'Profile', icon: User, href: '/profile', active: true },
  { label: 'Notifications', icon: Bell, href: '/profile/notifications' },
  { label: 'API Tokens', icon: Key, href: '/profile/tokens' },
  { label: 'Two Factor Authentication', icon: Lock, href: '/profile/2fa' },
  { label: 'Firewall', icon: Shield, href: '/profile/firewall' },
];

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-brand-navy tracking-tight mb-2">
            Account Settings
          </h1>
          <p className="text-sm font-medium text-gray-400">Manage your profile, security, and preferences.</p>
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
           {/* General Profile */}
           <div className="bg-white rounded-[32px] shadow-premium border border-gray-50 overflow-hidden">
              <div className="p-10 border-b border-gray-50">
                 <h2 className="text-xl font-display font-bold text-brand-navy tracking-tight mb-2">Update Profile</h2>
                 <p className="text-sm text-gray-400 font-medium">Update your account's profile information and email address.</p>
              </div>
              <div className="p-10 space-y-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                          <User className="w-3.5 h-3.5" /> Full Name
                       </label>
                       <input type="text" defaultValue="Catherine Jarosz" className="w-full h-12 px-5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5" /> Email Address
                       </label>
                       <input type="email" defaultValue="catherine@corefinity.com" className="w-full h-12 px-5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                          <Briefcase className="w-3.5 h-3.5" /> Position
                       </label>
                       <input type="text" defaultValue="Infrastructure Manager" className="w-full h-12 px-5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all" />
                    </div>
                 </div>
              </div>
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 flex justify-end px-10">
                 <button className="flex items-center gap-2 px-8 py-3 bg-brand-orange text-white text-xs font-bold rounded-xl shadow-premium hover:bg-[#E55A1E] transition-all">
                    <Save className="w-4 h-4" /> Save Profile
                 </button>
              </div>
           </div>

           {/* Mobile Number */}
           <div className="bg-white rounded-[32px] shadow-premium border border-gray-50 overflow-hidden">
              <div className="p-10 border-b border-gray-50">
                 <h2 className="text-xl font-display font-bold text-brand-navy tracking-tight mb-2">Mobile Number</h2>
                 <p className="text-sm text-gray-400 font-medium">Please enter your mobile number using the international format.</p>
              </div>
              <div className="p-10">
                 <div className="flex gap-4">
                    <div className="w-24">
                       <select className="w-full h-12 px-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-brand-navy">
                          <option>GB +44</option>
                       </select>
                    </div>
                    <input type="text" placeholder="7890 123456" className="flex-1 h-12 px-5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all" />
                 </div>
              </div>
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 flex justify-end px-10">
                 <button className="px-8 py-3 bg-brand-navy text-white text-xs font-bold rounded-xl shadow-premium hover:bg-brand-blue transition-all">
                    Update Number
                 </button>
              </div>
           </div>

           {/* Password Change */}
           <div className="bg-white rounded-[32px] shadow-premium border border-gray-50 overflow-hidden">
              <div className="p-10 border-b border-gray-50">
                 <h2 className="text-xl font-display font-bold text-brand-navy tracking-tight mb-2">Change Password</h2>
                 <p className="text-sm text-gray-400 font-medium">Ensure your account is using a long, random password to stay secure.</p>
              </div>
              <div className="p-10 space-y-8">
                 <div className="grid grid-cols-1 gap-8 max-w-md">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Current Password</label>
                       <input type="password" px-5 className="w-full h-12 px-5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">New Password</label>
                       <input type="password" px-5 className="w-full h-12 px-5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Confirm Password</label>
                       <input type="password" px-5 className="w-full h-12 px-5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all" />
                    </div>
                 </div>
              </div>
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 flex justify-end px-10">
                 <button className="px-8 py-3 bg-brand-orange text-white text-xs font-bold rounded-xl shadow-premium hover:bg-[#E55A1E] transition-all">
                    Update Password
                 </button>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
