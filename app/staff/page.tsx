'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  Search, 
  Plus, 
  Filter, 
  ChevronDown, 
  MoreVertical,
  Mail,
  Phone,
  Shield,
  Clock,
  UserCheck,
  UserMinus,
  Settings
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const staff = [
  { name: 'Catherine Jarosz', role: 'Infrastructure Manager', email: 'catherine@corefinity.com', status: 'Active', lastSeen: 'Just now', avatar: 'CJ', color: 'bg-indigo-500' },
  { name: 'Navid Nadali', role: 'Senior DevOps Engineer', email: 'navid@corefinity.com', status: 'Active', lastSeen: '2m ago', avatar: 'NN', color: 'bg-emerald-500' },
  { name: 'Nikoo Esharatabadi', role: 'Support Specialist', email: 'nikoo@corefinity.com', status: 'Away', lastSeen: '1h ago', avatar: 'NE', color: 'bg-amber-500' },
  { name: 'Jade Bridgeman', role: 'Technical Lead', email: 'jade@corefinity.com', status: 'Active', lastSeen: '15m ago', avatar: 'JB', color: 'bg-rose-500' },
  { name: 'Adam Jackson', role: 'Project Manager', email: 'adam@corefinity.com', status: 'Offline', lastSeen: '2d ago', avatar: 'AJ', color: 'bg-sky-500' },
];

export default function StaffPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-brand-navy tracking-tight mb-2">
            Team Management
          </h1>
          <p className="text-sm font-medium text-gray-400">Manage your organization's staff and permissions.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-brand-navy text-white text-xs font-bold rounded-xl shadow-premium hover:bg-brand-blue transition-all">
          <Plus className="w-4 h-4" /> Add Team Member
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          { label: 'Total Staff', value: '24 Members', icon: UserCheck, color: 'text-brand-blue', bg: 'bg-brand-blue/10' },
          { label: 'Active Now', value: '18 Online', icon: Clock, color: 'text-brand-success', bg: 'bg-brand-success/10' },
          { label: 'Pending Invites', value: '3 Sent', icon: Mail, color: 'text-brand-orange', bg: 'bg-brand-orange/10' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-card border border-gray-50 flex items-center gap-6 group hover:shadow-premium transition-all">
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-all", stat.bg, stat.color)}>
              <stat.icon className="w-7 h-7" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl font-display font-bold text-brand-navy tracking-tight">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {staff.map((person, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[32px] shadow-card border border-gray-50 overflow-hidden group hover:shadow-premium transition-all duration-500"
          >
            <div className="p-8">
               <div className="flex items-start justify-between mb-6">
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg", person.color)}>
                     {person.avatar}
                  </div>
                  <div className={cn(
                    "px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border",
                    person.status === 'Active' ? "bg-brand-success/5 text-brand-success border-brand-success/10" :
                    person.status === 'Away' ? "bg-brand-orange/5 text-brand-orange border-brand-orange/10" :
                    "bg-gray-50 text-gray-400 border-gray-100"
                  )}>
                    {person.status}
                  </div>
               </div>
               <h3 className="text-xl font-display font-bold text-brand-navy tracking-tight mb-1">{person.name}</h3>
               <p className="text-sm font-medium text-brand-blue mb-6">{person.role}</p>
               
               <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-400 group-hover:text-brand-navy transition-colors">
                     <Mail className="w-4 h-4" />
                     <span className="text-xs font-medium">{person.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 group-hover:text-brand-navy transition-colors">
                     <Clock className="w-4 h-4" />
                     <span className="text-xs font-medium">Last seen: {person.lastSeen}</span>
                  </div>
               </div>
            </div>
            <div className="p-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-around">
               <button className="flex-1 flex items-center justify-center gap-2 py-2 text-[10px] font-bold text-gray-400 hover:text-brand-blue transition-colors uppercase tracking-widest border-r border-gray-100">
                  <Shield className="w-3.5 h-3.5" /> Permissions
               </button>
               <button className="flex-1 flex items-center justify-center gap-2 py-2 text-[10px] font-bold text-gray-400 hover:text-brand-orange transition-colors uppercase tracking-widest">
                  <Settings className="w-3.5 h-3.5" /> Settings
               </button>
            </div>
          </motion.div>
        ))}
        
        {/* Add New Card */}
        <button className="bg-gray-50/50 border-2 border-dashed border-gray-200 rounded-[32px] p-8 flex flex-col items-center justify-center gap-4 group hover:bg-brand-blue/5 hover:border-brand-blue transition-all duration-500">
           <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-gray-400 group-hover:text-brand-blue transition-colors">
              <Plus className="w-8 h-8" />
           </div>
           <div className="text-center">
              <h3 className="text-sm font-bold text-gray-400 group-hover:text-brand-blue transition-colors">Add Team Member</h3>
              <p className="text-[10px] font-medium text-gray-300">Invite someone to join your project.</p>
           </div>
        </button>
      </div>
    </DashboardLayout>
  );
}
