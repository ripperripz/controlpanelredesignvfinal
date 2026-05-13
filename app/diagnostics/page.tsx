'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  Search, 
  Activity, 
  ChevronRight, 
  Terminal, 
  RefreshCcw, 
  AlertCircle,
  CheckCircle2,
  Clock,
  Filter,
  BarChart3,
  Shield
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const diagnosticTasks = [
  { id: 'DIA-9210', name: 'Database Optimization', env: 'Production', type: 'Manual', status: 'Running', progress: 65, time: '12m ago' },
  { id: 'DIA-9211', name: 'Cache Purge (Full)', env: 'Staging', type: 'Triggered', status: 'Success', progress: 100, time: '1h ago' },
  { id: 'DIA-9212', name: 'Log Analysis - HTTP 500', env: 'Production', type: 'Auto', status: 'Failed', progress: 12, time: '3h ago' },
  { id: 'DIA-9213', name: 'Elasticsearch Sync', env: 'Development', type: 'Manual', status: 'Success', progress: 100, time: '1d ago' },
];

export default function DiagnosticsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-brand-navy tracking-tight mb-2">
            System Diagnostics
          </h1>
          <p className="text-sm font-medium text-gray-400">Monitor health, analyze logs, and run automated repair tasks.</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-6 py-3 bg-brand-navy text-white text-xs font-bold rounded-xl shadow-premium hover:bg-brand-blue transition-all">
             <Terminal className="w-4 h-4" /> Run Global Task
           </button>
        </div>
      </div>

      {/* Global Health Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {[
          { label: 'Cluster Health', value: 'Excellent', status: 'Healthy', color: 'text-brand-success' },
          { label: 'Latency (Avg)', value: '42ms', status: 'Normal', color: 'text-brand-blue' },
          { label: 'Error Rate', value: '0.02%', status: 'Low', color: 'text-brand-success' },
          { label: 'Active Tasks', value: '12', status: 'Processing', color: 'text-brand-orange' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-card border border-gray-50 group hover:shadow-premium transition-all">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{stat.label}</p>
             <div className="flex items-end justify-between">
                <span className="text-3xl font-display font-bold text-brand-navy tracking-tight">{stat.value}</span>
                <span className={cn("text-[10px] font-bold uppercase tracking-widest", stat.color)}>{stat.status}</span>
             </div>
             <div className="w-full h-1 bg-gray-50 rounded-full mt-4 overflow-hidden">
                <div className={cn("h-full rounded-full transition-all duration-1000", stat.color.replace('text-', 'bg-'))} style={{ width: '80%' }} />
             </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Active Tasks Table */}
        <div className="lg:col-span-8 bg-white rounded-[32px] shadow-premium border border-gray-50 overflow-hidden">
          <div className="p-8 border-b border-gray-50 flex items-center justify-between">
             <h2 className="text-xl font-display font-bold text-brand-navy tracking-tight">Diagnostic History</h2>
             <div className="flex items-center gap-4">
                <div className="relative">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                   <input type="text" placeholder="Filter tasks..." className="h-9 pl-9 pr-4 bg-gray-50 border border-gray-100 rounded-lg text-[11px] font-bold focus:outline-none" />
                </div>
                <button className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-brand-blue transition-all"><Filter className="w-4 h-4" /></button>
             </div>
          </div>
          <div className="overflow-x-auto">
             <table className="w-full text-left text-xs">
                <thead>
                   <tr className="bg-gray-50/50 border-b border-gray-100 uppercase tracking-widest text-brand-blue font-bold">
                      <th className="px-8 py-5">Task Name</th>
                      <th className="px-8 py-5">Environment</th>
                      <th className="px-8 py-5">Status</th>
                      <th className="px-8 py-5">Time</th>
                      <th className="px-8 py-5"></th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                   {diagnosticTasks.map((task, i) => (
                      <tr key={i} className="hover:bg-brand-blue/[0.02] transition-colors group">
                         <td className="px-8 py-6">
                            <div className="flex flex-col gap-1">
                               <span className="font-bold text-brand-navy text-sm">{task.name}</span>
                               <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{task.id} • {task.type}</span>
                            </div>
                         </td>
                         <td className="px-8 py-6">
                            <span className="px-2.5 py-1 bg-white border border-gray-100 rounded-lg text-[10px] font-bold text-gray-500 uppercase tracking-widest">{task.env}</span>
                         </td>
                         <td className="px-8 py-6">
                            <div className="flex flex-col gap-2 min-w-[120px]">
                               <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                     <div className={cn("w-1.5 h-1.5 rounded-full", task.status === 'Success' ? 'bg-brand-success' : task.status === 'Running' ? 'bg-brand-blue pulse-live' : 'bg-brand-error')} />
                                     <span className={cn("font-bold", task.status === 'Success' ? 'text-brand-success' : task.status === 'Running' ? 'text-brand-blue' : 'text-brand-error')}>{task.status}</span>
                                  </div>
                                  <span className="text-[9px] font-bold text-gray-400">{task.progress}%</span>
                               </div>
                               <div className="w-full h-1 bg-gray-50 rounded-full overflow-hidden">
                                  <div className={cn("h-full transition-all duration-500", task.status === 'Success' ? 'bg-brand-success' : task.status === 'Running' ? 'bg-brand-blue' : 'bg-brand-error')} style={{ width: `${task.progress}%` }} />
                               </div>
                            </div>
                         </td>
                         <td className="px-8 py-6 text-gray-400 font-medium">{task.time}</td>
                         <td className="px-8 py-6 text-right">
                            <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-brand-blue group-hover:text-white transition-all">
                               <ChevronRight className="w-4 h-4" />
                            </button>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </div>

        {/* Sidebar Tools */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-brand-navy rounded-[32px] p-8 text-white shadow-premium relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 blur-[60px] rounded-full -mr-16 -mt-16" />
              <div className="relative z-10">
                 <Activity className="w-10 h-10 text-brand-orange mb-6" />
                 <h3 className="text-xl font-display font-bold mb-2">Automated Repair</h3>
                 <p className="text-sm text-gray-400 font-medium mb-8 leading-relaxed">Our AI-driven system can automatically fix common configuration issues and sync inconsistencies.</p>
                 <button className="w-full py-4 bg-brand-orange text-white text-xs font-bold rounded-2xl hover:bg-[#E55A1E] transition-all shadow-premium uppercase tracking-widest">
                    Run Auto-Fix
                 </button>
              </div>
           </div>

           <div className="bg-white rounded-[32px] p-8 shadow-card border border-gray-50">
              <h3 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-6">Quick Utilities</h3>
              <div className="space-y-4">
                 {[
                   { name: 'Flush Redis Cache', icon: RefreshCcw },
                   { name: 'Reindex Elasticsearch', icon: BarChart3 },
                   { name: 'Check SSL Integrity', icon: Shield },
                   { name: 'Analyze Error Logs', icon: AlertCircle },
                 ].map((util, i) => (
                   <button key={i} className="w-full flex items-center justify-between p-4 bg-gray-50/50 hover:bg-brand-blue/5 rounded-2xl border border-transparent hover:border-brand-blue/20 transition-all group">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-400 group-hover:text-brand-blue transition-colors">
                            <util.icon className="w-5 h-5" />
                         </div>
                         <span className="text-xs font-bold text-brand-navy">{util.name}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-brand-blue transition-all" />
                   </button>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
