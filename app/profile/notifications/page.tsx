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
  CheckCircle2,
  AlertTriangle,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const menuItems = [
  { label: 'Profile', icon: User, href: '/profile' },
  { label: 'Notifications', icon: Bell, href: '/profile/notifications', active: true },
  { label: 'API Tokens', icon: Key, href: '/profile/tokens' },
  { label: 'Two Factor Authentication', icon: Lock, href: '/profile/2fa' },
  { label: 'Firewall', icon: Shield, href: '/profile/firewall' },
];

const notificationSettings = [
  { title: 'Emergency Alerts', desc: 'Receive emergency alerts in regards to security and/or availability of the environments you are subscribed to.', checked: true },
  { title: 'Maintenance window', desc: 'Receive notifications when a maintenance window is scheduled/created/completed.', checked: true },
  { title: 'Monitoring Alerts', desc: 'Receive alerts when monitored services are down.', checked: true },
  { title: 'Deployment Alerts', desc: 'Receive notifications on deployment completion or failure.', checked: true },
  { title: 'Newsletters', desc: 'Receive notifications around new features, functionalities and special offers.', checked: true },
];

export default function NotificationsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-brand-navy tracking-tight mb-2">
            Notification Settings
          </h1>
          <p className="text-sm font-medium text-gray-400">Configure how and when you receive updates.</p>
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
                 <h2 className="text-xl font-display font-bold text-brand-navy tracking-tight mb-2">Notifications</h2>
                 <p className="text-sm text-gray-400 font-medium">Update your notification settings.</p>
              </div>
              <div className="p-10 divide-y divide-gray-50">
                 {notificationSettings.map((setting, i) => (
                   <div key={i} className="py-6 first:pt-0 last:pb-0 flex items-start gap-6 group">
                      <div className="pt-1">
                         <input type="checkbox" defaultChecked={setting.checked} className="w-5 h-5 rounded-lg border-gray-200 text-brand-orange focus:ring-brand-orange transition-all cursor-pointer" />
                      </div>
                      <div>
                         <h4 className="text-sm font-bold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors">{setting.title}</h4>
                         <p className="text-xs text-gray-400 font-medium leading-relaxed">{setting.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="p-10 bg-gray-50/30 border-t border-gray-100">
                 <div className="mb-8">
                    <h3 className="text-lg font-display font-bold text-brand-navy mb-2">Ticket Default Subscriptions</h3>
                    <p className="text-sm text-gray-400 font-medium leading-relaxed">
                       Select which companies' tickets you would like to be subscribed to automatically. 
                       This setting can be overridden on a per ticket basis.
                    </p>
                 </div>

                 <div className="space-y-6">
                    <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Your Company</p>
                       <label className="flex items-center gap-3 cursor-pointer group">
                          <input type="checkbox" defaultChecked className="w-5 h-5 rounded-lg border-gray-200 text-brand-orange focus:ring-brand-orange" />
                          <span className="text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">Example Agency</span>
                       </label>
                    </div>

                    <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Inherited companies</p>
                       <div className="space-y-4">
                          <button className="text-[10px] font-bold text-brand-blue uppercase tracking-widest hover:underline">Select / Unselect All</button>
                          <label className="flex items-center gap-3 cursor-pointer group">
                             <input type="checkbox" defaultChecked className="w-5 h-5 rounded-lg border-gray-200 text-brand-orange focus:ring-brand-orange" />
                             <span className="text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">Example Company</span>
                          </label>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="p-6 bg-gray-50/50 border-t border-gray-100 flex justify-end px-10">
                 <button className="flex items-center gap-2 px-10 py-4 bg-brand-orange text-white text-xs font-bold rounded-2xl shadow-premium hover:bg-[#E55A1E] transition-all uppercase tracking-widest">
                    <Save className="w-4 h-4" /> Save Changes
                 </button>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
