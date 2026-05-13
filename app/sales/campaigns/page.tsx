'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  TrendingUp, 
  BarChart2, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical,
  MousePointer2,
  Eye,
  Target,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const campaigns = [
  { name: 'Spring Sale 2026', status: 'Active', budget: '$12,000', spent: '$8,420', reach: '124k', clicks: '14.2k', conv: '3.2%', color: 'bg-brand-blue' },
  { name: 'B2B Outreach - EMEA', status: 'Paused', budget: '$5,000', spent: '$2,100', reach: '42k', clicks: '2.1k', conv: '1.8%', color: 'bg-brand-orange' },
  { name: 'Developer Tooling Alpha', status: 'Scheduled', budget: '$20,000', spent: '$0', reach: '0', clicks: '0', conv: '0%', color: 'bg-brand-navy' },
];

export default function CampaignsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-brand-navy tracking-tight mb-2">
            Ad Campaigns
          </h1>
          <p className="text-sm font-medium text-gray-400">Track and optimize your marketing performance.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-brand-orange text-white text-xs font-bold rounded-xl shadow-premium hover:bg-[#E55A1E] transition-all">
          <Plus className="w-4 h-4" /> New Campaign
        </button>
      </div>

      {/* Global Performance */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {[
          { label: 'Total Budget', value: '$37,000', trend: '+15%', icon: Target, color: 'text-brand-blue' },
          { label: 'Total Spend', value: '$10,520', trend: '+8%', icon: TrendingUp, color: 'text-brand-orange' },
          { label: 'Total Clicks', value: '16.3k', trend: '+22%', icon: MousePointer2, color: 'text-brand-success' },
          { label: 'Avg Conversion', value: '2.5%', trend: '+4%', icon: BarChart2, color: 'text-brand-navy' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-card border border-gray-50 group hover:shadow-premium transition-all">
             <div className="flex items-center justify-between mb-4">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center bg-gray-50", stat.color)}>
                   <stat.icon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-brand-success">
                   <ArrowUpRight className="w-3 h-3" /> {stat.trend}
                </div>
             </div>
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
             <p className="text-2xl font-display font-bold text-brand-navy tracking-tight">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Campaign List */}
      <div className="space-y-6">
        {campaigns.map((campaign, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[32px] shadow-card border border-gray-50 p-8 flex flex-col lg:flex-row lg:items-center gap-12 group hover:shadow-premium transition-all duration-500"
          >
            <div className="flex-1 flex items-center gap-6">
               <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg", campaign.color)}>
                  {campaign.name[0]}
               </div>
               <div>
                  <h3 className="text-xl font-display font-bold text-brand-navy tracking-tight mb-1">{campaign.name}</h3>
                  <div className="flex items-center gap-3">
                     <span className={cn(
                       "px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest",
                       campaign.status === 'Active' ? "bg-brand-success/10 text-brand-success" : 
                       campaign.status === 'Paused' ? "bg-brand-orange/10 text-brand-orange" : 
                       "bg-gray-100 text-gray-400"
                     )}>{campaign.status}</span>
                     <span className="text-[10px] text-gray-400 font-medium">Budget: {campaign.budget}</span>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
               <div className="space-y-1">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Spend</p>
                  <p className="text-sm font-bold text-brand-navy">{campaign.spent}</p>
               </div>
               <div className="space-y-1">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Reach</p>
                  <p className="text-sm font-bold text-brand-navy">{campaign.reach}</p>
               </div>
               <div className="space-y-1">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Clicks</p>
                  <p className="text-sm font-bold text-brand-navy">{campaign.clicks}</p>
               </div>
               <div className="space-y-1">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Conv. Rate</p>
                  <p className="text-sm font-bold text-brand-success">{campaign.conv}</p>
               </div>
            </div>

            <div className="flex items-center justify-end gap-3">
               <button className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-brand-blue hover:bg-brand-blue/5 transition-all"><Eye className="w-5 h-5" /></button>
               <button className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-brand-blue hover:bg-brand-blue/5 transition-all"><BarChart2 className="w-5 h-5" /></button>
               <button className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-brand-navy transition-all"><MoreVertical className="w-5 h-5" /></button>
            </div>
          </motion.div>
        ))}
      </div>
    </DashboardLayout>
  );
}
