'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  Rocket, 
  Ticket, 
  Plus, 
  Search, 
  Filter, 
  ChevronRight,
  Headphones,
  User,
  Clock,
  MoreVertical
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

import { useRouter } from 'next/navigation';

const tickets = [
  { id: 'T-2914', subject: 'Checkout experiencing 500 errors during peak load', env: 'Production', priority: 'Critical', status: 'Open', updated: '2h ago', assigned: 'Sam W.' },
  { id: 'T-2913', subject: 'Inquiry regarding Redis persistence settings', env: 'Staging', priority: 'Medium', status: 'Pending', updated: '5h ago', assigned: 'Marcus T.' },
  { id: 'T-2912', subject: 'New SSH key addition for automated CI/CD', env: 'All', priority: 'Low', status: 'Resolved', updated: '1d ago', assigned: 'Arsh S.' },
  { id: 'T-2911', subject: 'Database migration performance bottleneck', env: 'Production', priority: 'High', status: 'Open', updated: '2d ago', assigned: 'Unassigned' },
];

export default function Tickets() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTickets = tickets.filter(t => {
    const statusMatch = activeFilter === 'All' || t.status === activeFilter;
    const searchMatch = t.subject.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       t.id.toLowerCase().includes(searchQuery.toLowerCase());
    return statusMatch && searchMatch;
  });

  return (
    <DashboardLayout>
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-display font-bold text-gray-900 tracking-tight mb-2">Support Center</h1>
          <p className="text-gray-500 font-medium text-lg">Direct access to Corefinity engineering and technical support.</p>
        </div>
        <button className="h-11 px-8 bg-brand-orange text-white rounded-xl font-bold text-sm shadow-premium hover:scale-105 transition-all flex items-center gap-3 group">
          <Ticket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          Create Ticket
        </button>
      </header>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row items-center gap-6 mb-10">
        <div className="flex gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
          {['All', 'Open', 'Pending', 'Resolved', 'Closed'].map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                "px-6 py-2.5 rounded-xl text-[11px] font-bold transition-all border whitespace-nowrap uppercase tracking-widest",
                activeFilter === f 
                  ? "bg-brand-navy text-white border-brand-navy shadow-premium" 
                  : "bg-white text-gray-400 border-gray-100 hover:border-gray-300 hover:text-gray-600 shadow-sm"
              )}
            >
              {f}
            </button>
          ))}
        </div>
        
        <div className="flex-1 relative w-full lg:w-auto lg:max-w-md">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
           <input 
             type="text" 
             placeholder="Search by ID or subject..." 
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             className="w-full h-11 pl-12 pr-4 bg-white border border-gray-100 rounded-xl text-xs focus:outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue/30 transition-all shadow-sm font-medium" 
           />
        </div>

        <button className="h-11 px-4 bg-white text-gray-400 border border-gray-100 rounded-xl flex items-center gap-2 hover:bg-gray-50 transition-all text-[10px] font-bold uppercase tracking-widest shadow-sm">
          <Filter className="w-4 h-4" />
          Sort By
        </button>
      </div>

      {/* Table */}
      <div className="glass-card rounded-[32px] overflow-hidden border-none shadow-premium">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/30 border-b border-gray-50/50">
                <th className="text-left py-6 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Reference</th>
                <th className="text-left py-6 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Subject & Activity</th>
                <th className="text-left py-6 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Environment</th>
                <th className="text-left py-6 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Priority</th>
                <th className="text-left py-6 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Status</th>
                <th className="text-right py-6 px-8"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/50">
              {filteredTickets.length > 0 ? (
                filteredTickets.map((t, i) => (
                  <tr 
                    key={i} 
                    onClick={() => router.push(`/tickets/${t.id}`)}
                    className="hover:bg-brand-blue/[0.01] transition-colors group cursor-pointer"
                  >
                    <td className="py-7 px-8 text-xs font-mono font-bold text-gray-400">{t.id}</td>
                    <td className="py-7 px-8">
                      <div className="max-w-[400px] font-bold text-gray-900 group-hover:text-brand-blue transition-colors font-display text-base tracking-tight leading-snug">
                        {t.subject}
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-3 h-3 text-gray-300" />
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">Last Activity: {t.updated}</span>
                      </div>
                    </td>
                    <td className="py-7 px-8">
                      <span className="px-2.5 py-1 bg-white border border-gray-100 text-[10px] font-bold text-gray-500 rounded-lg uppercase tracking-wider">{t.env}</span>
                    </td>
                    <td className="py-7 px-8">
                      <span className={cn(
                        "px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-widest",
                        t.priority === 'Critical' && "bg-brand-error/5 text-brand-error border border-brand-error/10",
                        t.priority === 'High' && "bg-brand-orange/5 text-brand-orange border border-brand-orange/10",
                        t.priority === 'Medium' && "bg-brand-blue/5 text-brand-blue border border-brand-blue/10",
                        t.priority === 'Low' && "bg-gray-50 text-gray-400 border border-gray-100"
                      )}>{t.priority}</span>
                    </td>
                    <td className="py-7 px-8">
                       <div className="flex items-center gap-2">
                         <span className={cn(
                           "text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg",
                           t.status === 'Open' ? "bg-brand-success/5 text-brand-success border border-brand-success/10" : "text-gray-400 bg-gray-50 border border-gray-100"
                         )}>{t.status}</span>
                       </div>
                    </td>
                    <td className="py-7 px-8 text-right">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 border border-gray-100 text-gray-300 transition-all group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:translate-x-1 shadow-sm">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-24 text-center">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                       <Ticket className="w-8 h-8" />
                    </div>
                    <p className="text-gray-500 font-bold font-display text-xl tracking-tight">No support tickets found</p>
                    <p className="text-sm text-gray-400 font-medium">Try adjusting your filters or search query.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-6 border-t border-gray-50 bg-gray-50/10 flex items-center justify-between">
           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Showing {filteredTickets.length} of 42 Tickets</p>
           <div className="flex items-center gap-2">
              <button className="h-8 px-4 bg-white border border-gray-100 rounded-xl text-[10px] font-bold text-gray-400 hover:text-brand-blue transition-all disabled:opacity-50">Previous</button>
              <button className="h-8 px-4 bg-brand-blue text-white rounded-xl text-[10px] font-bold shadow-sm">1</button>
              <button className="h-8 px-4 bg-white border border-gray-100 rounded-xl text-[10px] font-bold text-gray-400 hover:text-brand-blue transition-all">Next</button>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
