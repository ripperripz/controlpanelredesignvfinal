'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  CreditCard, 
  TrendingUp, 
  Download, 
  Plus, 
  ChevronRight,
  PieChart,
  DollarSign,
  Calendar,
  Layers,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const invoices = [
  { id: 'INV-2026-001', date: '01 Mar 2026', amount: '$1,240.00', status: 'Paid', method: 'Visa ending in 4242' },
  { id: 'INV-2026-002', date: '01 Feb 2026', amount: '$1,180.50', status: 'Paid', method: 'Visa ending in 4242' },
  { id: 'INV-2026-003', date: '01 Jan 2026', amount: '$1,320.00', status: 'Paid', method: 'Visa ending in 4242' },
  { id: 'INV-2025-012', date: '01 Dec 2025', amount: '$1,050.00', status: 'Paid', method: 'Visa ending in 4242' },
];

export default function BillingPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-brand-navy tracking-tight mb-2">
            Billing & Usage
          </h1>
          <p className="text-sm font-medium text-gray-400">Manage your subscription, invoices, and cloud usage costs.</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-6 py-3 bg-brand-orange text-white text-xs font-bold rounded-xl shadow-premium hover:bg-[#E55A1E] transition-all">
             <Download className="w-4 h-4" /> Export Report
           </button>
        </div>
      </div>

      {/* Main Billing Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Left: Total Spending Card */}
        <div className="lg:col-span-8 bg-brand-navy rounded-[40px] p-10 text-white shadow-premium relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 blur-[80px] rounded-full -mr-32 -mt-32" />
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-orange/10 blur-[60px] rounded-full -ml-24 -mb-24" />
           
           <div className="relative z-10">
              <div className="flex items-center justify-between mb-12">
                 <div className="p-4 bg-white/10 rounded-2xl border border-white/5 backdrop-blur-md">
                    <DollarSign className="w-8 h-8 text-brand-orange" />
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Current Period</p>
                    <p className="text-sm font-bold text-white">Mar 1 — Mar 31, 2026</p>
                 </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                 <div>
                    <h2 className="text-5xl font-display font-bold tracking-tight mb-4">$4,821<span className="text-brand-orange">.92</span></h2>
                    <div className="flex items-center gap-2 text-brand-success font-bold text-xs">
                       <ArrowUpRight className="w-4 h-4" /> 
                       <span>+12.4% vs last month</span>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                       <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-2">Projected</p>
                       <p className="text-xl font-display font-bold">$5,120</p>
                    </div>
                    <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                       <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-2">Unbilled</p>
                       <p className="text-xl font-display font-bold">$842</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Right: Payment Method Card */}
        <div className="lg:col-span-4 bg-white rounded-[40px] p-10 shadow-premium border border-gray-50 flex flex-col">
           <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-display font-bold text-brand-navy">Payment Method</h3>
              <button className="text-brand-blue p-2 hover:bg-brand-blue/5 rounded-xl transition-all"><Plus className="w-5 h-5" /></button>
           </div>
           
           <div className="flex-1 flex flex-col justify-center">
              <div className="bg-gradient-to-br from-brand-navy to-brand-blue rounded-3xl p-8 text-white shadow-lg relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <CreditCard className="w-12 h-12" />
                 </div>
                 <div className="relative z-10">
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-8">Primary Card</p>
                    <p className="text-xl font-mono mb-8 tracking-[0.2em]">•••• •••• •••• 4242</p>
                    <div className="flex items-center justify-between">
                       <div>
                          <p className="text-[8px] font-bold text-white/40 uppercase tracking-widest mb-1">Expires</p>
                          <p className="text-xs font-bold uppercase tracking-widest">12/28</p>
                       </div>
                       <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                          <span className="text-[8px] font-bold italic tracking-tighter">VISA</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Usage & Invoices */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Usage Breakdown */}
        <div className="lg:col-span-4 bg-white rounded-[40px] p-10 shadow-card border border-gray-50">
           <div className="flex items-center justify-between mb-10">
              <h3 className="text-lg font-display font-bold text-brand-navy">Usage by Service</h3>
              <PieChart className="w-5 h-5 text-gray-400" />
           </div>
           
           <div className="space-y-6">
              {[
                { name: 'Compute Engine', value: '$2,410.00', pct: 65, color: 'bg-brand-blue' },
                { name: 'Cloud Storage', value: '$842.20', pct: 18, color: 'bg-brand-orange' },
                { name: 'Network Traffic', value: '$412.50', pct: 10, color: 'bg-brand-navy' },
                { name: 'Diagnostics & Logs', value: '$281.22', pct: 7, color: 'bg-brand-success' },
              ].map((service, i) => (
                <div key={i} className="space-y-2">
                   <div className="flex items-center justify-between text-[11px] font-bold">
                      <span className="text-gray-400 uppercase tracking-widest">{service.name}</span>
                      <span className="text-brand-navy">{service.value}</span>
                   </div>
                   <div className="w-full h-1.5 bg-gray-50 rounded-full overflow-hidden">
                      <div className={cn("h-full transition-all duration-1000", service.color)} style={{ width: `${service.pct}%` }} />
                   </div>
                </div>
              ))}
           </div>
           
           <button className="w-full mt-12 py-4 bg-gray-50 text-gray-500 text-xs font-bold rounded-2xl hover:bg-brand-blue hover:text-white transition-all uppercase tracking-widest">
              View Detailed Analytics
           </button>
        </div>

        {/* Invoice History */}
        <div className="lg:col-span-8 bg-white rounded-[40px] shadow-premium border border-gray-50 overflow-hidden">
           <div className="p-10 border-b border-gray-50 flex items-center justify-between">
              <h3 className="text-lg font-display font-bold text-brand-navy">Invoice History</h3>
              <button className="text-xs font-bold text-brand-blue hover:underline uppercase tracking-widest">View All</button>
           </div>
           <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                 <thead>
                    <tr className="bg-gray-50/50 border-b border-gray-100 uppercase tracking-widest text-brand-blue font-bold">
                       <th className="px-10 py-6">Invoice ID</th>
                       <th className="px-10 py-6">Date</th>
                       <th className="px-10 py-6">Amount</th>
                       <th className="px-10 py-6">Status</th>
                       <th className="px-10 py-6"></th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-50">
                    {invoices.map((inv, i) => (
                       <tr key={i} className="hover:bg-brand-blue/[0.02] transition-colors group">
                          <td className="px-10 py-6 font-bold text-brand-navy">{inv.id}</td>
                          <td className="px-10 py-6 text-gray-400 font-medium">{inv.date}</td>
                          <td className="px-10 py-6 font-bold text-brand-navy">{inv.amount}</td>
                          <td className="px-10 py-6">
                             <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-success" />
                                <span className="font-bold text-brand-success">{inv.status}</span>
                             </div>
                          </td>
                          <td className="px-10 py-6 text-right">
                             <button className="p-2 bg-gray-50 rounded-xl text-gray-400 group-hover:text-brand-blue group-hover:bg-brand-blue/5 transition-all">
                                <Download className="w-4 h-4" />
                             </button>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
