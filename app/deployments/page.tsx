'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  Rocket, 
  Search, 
  ChevronDown, 
  Filter,
  Clock,
  User,
  GitBranch,
  Eye,
  RefreshCw,
  MoreHorizontal
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

import { useRouter } from 'next/navigation';

const deployments = [
  { id: 'DP-8921', env: 'Production', branch: 'main', user: 'Catherine S.', time: '12m ago', duration: '2m 14s', status: 'Success' },
  { id: 'DP-8920', env: 'Staging', branch: 'feature/checkout', user: 'GitHub Action', time: '1h ago', duration: '4m 02s', status: 'Running' },
  { id: 'DP-8919', env: 'Production', branch: 'main', user: 'Arsh Sharma', time: '4h ago', duration: '2m 10s', status: 'Failed' },
  { id: 'DP-8918', env: 'UAT', branch: 'release/v2.1', user: 'Catherine S.', time: '1d ago', duration: '3m 45s', status: 'Success' },
  { id: 'DP-8917', env: 'Development', branch: 'fix/navbar', user: 'Dev Bot', time: '2d ago', duration: '1m 55s', status: 'Queued' },
];

export default function Deployments() {
  const router = useRouter();
  const [activeStatus, setActiveStatus] = React.useState('All');
  const [activeEnv, setActiveEnv] = React.useState('All Environments');

  const filteredDeployments = deployments.filter(d => {
    const statusMatch = activeStatus === 'All' || d.status === activeStatus;
    const envMatch = activeEnv === 'All Environments' || d.env.includes(activeEnv.split(' ')[0]);
    return statusMatch && envMatch;
  });

  return (
    <DashboardLayout>
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-display font-bold text-gray-900 tracking-tight mb-2">Deployments</h1>
          <p className="text-gray-500 font-medium text-lg">Infrastructure history and deployment pipeline overview.</p>
        </div>
        <button className="h-11 px-8 bg-brand-orange text-white rounded-xl font-bold text-sm shadow-premium hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group">
          <Rocket className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          Deploy Code
        </button>
      </header>

      {/* Filter Bar */}
      <div className="glass-card p-6 rounded-[32px] mb-10 flex flex-col lg:flex-row items-center gap-6 border-none shadow-premium">
        <div className="relative min-w-[240px] w-full lg:w-auto">
          <select 
            value={activeEnv}
            onChange={(e) => setActiveEnv(e.target.value)}
            className="w-full h-11 pl-4 pr-10 bg-gray-50/50 border border-gray-100 rounded-xl text-xs font-bold text-gray-700 appearance-none focus:outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue/30 shadow-sm transition-all hover:bg-white"
          >
            <option>All Environments</option>
            <option>Production (Core-1)</option>
            <option>Staging (Stg-A)</option>
            <option>UAT (v2-Beta)</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
        </div>
        
        <div className="flex gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
          {['All', 'Running', 'Success', 'Failed'].map((f) => (
            <button 
              key={f} 
              onClick={() => setActiveStatus(f)}
              className={cn(
                "px-6 py-2.5 text-[10px] font-bold rounded-xl border transition-all whitespace-nowrap uppercase tracking-widest",
                activeStatus === f ? "bg-brand-blue text-white border-brand-blue shadow-premium" : "bg-white text-gray-400 border-gray-100 hover:border-brand-blue hover:text-brand-blue shadow-sm"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="flex-1 relative w-full lg:w-auto">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
           <input 
             type="text" 
             placeholder="Search by ID or branch..." 
             className="w-full h-11 pl-12 pr-4 bg-gray-50/50 border border-gray-100 rounded-xl text-xs focus:outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue/30 focus:bg-white transition-all shadow-sm font-medium" 
           />
        </div>

        <button className="h-11 px-4 bg-gray-50 text-gray-400 border border-gray-100 rounded-xl flex items-center gap-2 hover:bg-white transition-all">
          <Clock className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Date Range</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[32px] shadow-card overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="text-left py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em]">Job ID</th>
                <th className="text-left py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em]">Environment</th>
                <th className="text-left py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em]">Git Reference</th>
                <th className="text-left py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em]">Owner</th>
                <th className="text-left py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em]">Status</th>
                <th className="text-right py-5 px-8"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredDeployments.length > 0 ? (
                filteredDeployments.map((d, i) => (
                  <tr 
                    key={i} 
                    onClick={() => router.push(`/deployments/${d.id}`)}
                    className="hover:bg-brand-blue/[0.02] transition-colors group cursor-pointer"
                  >
                    <td className="py-5 px-8">
                      <span className="text-xs font-mono font-bold text-brand-blue">{d.id}</span>
                    </td>
                    <td className="py-5 px-8">
                      <span className={cn(
                        "px-2.5 py-1 rounded text-[10px] font-bold uppercase",
                        d.env === 'Production' ? "bg-brand-success/5 text-brand-success" : "bg-gray-50 text-gray-500"
                      )}>{d.env}</span>
                    </td>
                    <td className="py-5 px-8">
                      <div className="flex items-center gap-2">
                        <GitBranch className="w-3.5 h-3.5 text-gray-300" />
                        <code className="text-[11px] font-mono text-gray-600 bg-gray-50 px-1.5 py-0.5 rounded">{d.branch}</code>
                      </div>
                    </td>
                    <td className="py-5 px-8">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-brand-navy flex items-center justify-center text-[10px] font-bold text-white uppercase shadow-sm">
                          {d.user[0]}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-gray-900 leading-none mb-0.5">{d.user}</span>
                          <span className="text-[10px] text-gray-400 font-medium">{d.time}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-5 px-8">
                      <div className="flex items-center gap-2">
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          d.status === 'Success' && "bg-brand-success",
                          d.status === 'Running' && "bg-brand-blue animate-pulse-slow",
                          d.status === 'Failed' && "bg-brand-error",
                          d.status === 'Queued' && "bg-gray-300"
                        )} />
                        <span className={cn(
                          "text-[11px] font-bold",
                          d.status === 'Success' && "text-brand-success",
                          d.status === 'Running' && "text-brand-blue",
                          d.status === 'Failed' && "text-brand-error",
                          d.status === 'Queued' && "text-gray-400"
                        )}>{d.status}</span>
                      </div>
                    </td>
                    <td className="py-5 px-8 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-gray-400 hover:text-brand-blue transition-colors rounded-lg hover:bg-white border hover:border-gray-100 shadow-sm">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-brand-orange transition-colors rounded-lg hover:bg-white border hover:border-gray-100 shadow-sm">
                          <RefreshCw className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-20 text-center">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                       <Search className="w-8 h-8" />
                    </div>
                    <p className="text-gray-500 font-bold">No deployments found</p>
                    <p className="text-xs text-gray-400">Try adjusting your filters or search criteria.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-6 border-t border-gray-50 bg-gray-50/30 flex items-center justify-between">
           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Showing {filteredDeployments.length} of 24 Results</p>
           <div className="flex items-center gap-2">
              <button className="h-8 px-3 bg-white border border-gray-100 rounded-lg text-[10px] font-bold text-gray-400 hover:text-brand-blue transition-all disabled:opacity-50">Previous</button>
              <button className="h-8 px-3 bg-brand-blue text-white rounded-lg text-[10px] font-bold shadow-sm">1</button>
              <button className="h-8 px-3 bg-white border border-gray-100 rounded-lg text-[10px] font-bold text-gray-400 hover:text-brand-blue transition-all">2</button>
              <button className="h-8 px-3 bg-white border border-gray-100 rounded-lg text-[10px] font-bold text-gray-400 hover:text-brand-blue transition-all">Next</button>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
