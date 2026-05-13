'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  Search, 
  Plus, 
  ChevronRight, 
  Filter, 
  MoreHorizontal, 
  Eye, 
  Edit2,
  Clock,
  User,
  MessageSquare,
  AlertCircle,
  Tag,
  Building2,
  ChevronDown,
  X
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const tickets = [
  { id: '4538', subject: 'Testing on staging', company: 'Test company', agency: '—', assignee: 'Nikoo Esharatabadi', created: '2025-10-02 10:11:25', department: 'Sales', integration: '—', priority: 'Emergency', status: 'Pending' },
  { id: '4537', subject: 'testing emergency tickets on staging', company: 'Test company', agency: '—', assignee: '—', created: '2025-10-02 09:13:31', department: 'Billing', integration: '—', priority: 'Emergency', status: 'Pending' },
  { id: '3939', subject: 'TEST TICKET FOR SUBSCRIPTIONS', company: 'Test company', agency: '—', assignee: '—', created: '2025-05-14 09:30:00', department: 'Support', integration: '—', priority: 'Medium', status: 'Closed' },
  { id: '3937', subject: 'Declan Test', company: 'Test company', agency: '—', assignee: '—', created: '2025-05-13 18:25:07', department: 'Support', integration: '—', priority: 'Emergency', status: 'Closed' },
  { id: '3580', subject: 'Jade test ticket', company: 'Test company', agency: '—', assignee: '—', created: '2025-03-17 16:25:20', department: 'Support', integration: '—', priority: 'Medium', status: 'Closed' },
  { id: '3541', subject: 'testing outlook emails', company: 'Test company', agency: '—', assignee: '—', created: '2025-03-12 11:56:15', department: 'Support', integration: '—', priority: 'Medium', status: 'Closed' },
];

const filters = [
  { label: 'Priority', options: ['Emergency', 'High', 'Medium', 'Low'] },
  { label: 'Department', options: ['Sales', 'Billing', 'Support', 'Infrastructure'] },
  { label: 'Status', active: ['Pending', 'WaitingOnCustomer', 'Resolved', 'Closed'] },
  { label: 'Company', active: ['Test company'] },
  { label: 'Agency', options: [] },
  { label: 'Requester', options: [] },
  { label: 'Tags', options: [] },
];

export default function TicketsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-brand-navy tracking-tight mb-2">
            Tickets
          </h1>
          <p className="text-sm font-medium text-gray-400">Manage and respond to customer support requests.</p>
        </div>
        <button className="flex items-center gap-2 px-8 py-4 bg-brand-orange text-white text-sm font-bold rounded-2xl shadow-premium hover:bg-[#E55A1E] transition-all">
          <Plus className="w-5 h-5" /> Create Ticket
        </button>
      </div>

      {/* Filters Bar */}
      <div className="bg-white rounded-[32px] p-8 shadow-card border border-gray-50 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
           {filters.map((filter, i) => (
             <div key={i} className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{filter.label}</label>
                <div className={cn(
                  "flex flex-wrap gap-2 p-2 rounded-xl border border-gray-100 min-h-[48px] items-center",
                  filter.active ? "bg-gray-50/50" : "bg-white"
                )}>
                   {filter.active ? (
                     filter.active.map((act, j) => (
                       <span key={j} className="flex items-center gap-1.5 px-3 py-1 bg-brand-success/10 text-brand-success text-[10px] font-bold rounded-lg group">
                          {act}
                          <X className="w-3 h-3 cursor-pointer hover:text-brand-error transition-colors" />
                       </span>
                     ))
                   ) : (
                     <div className="flex items-center justify-between w-full px-2 text-[10px] font-bold text-gray-300 uppercase tracking-widest cursor-pointer">
                        Select option
                        <ChevronDown className="w-3 h-3" />
                     </div>
                   )}
                </div>
             </div>
           ))}
        </div>
      </div>

      <div className="bg-white rounded-[40px] shadow-premium border border-gray-50 overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
            <input 
              type="text" 
              placeholder="Search tickets..." 
              className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none"
            />
          </div>
          <div className="flex items-center gap-4">
             <button className="p-4 bg-gray-50 text-gray-400 hover:text-brand-blue rounded-2xl transition-all">
                <Clock className="w-5 h-5" />
             </button>
             <button className="flex items-center gap-2 px-6 py-4 bg-brand-orange text-white text-xs font-bold rounded-2xl shadow-lg uppercase tracking-widest">
                <Filter className="w-4 h-4" /> Filters <span className="w-5 h-5 bg-white/20 rounded-lg flex items-center justify-center text-[10px]">2</span>
             </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100 uppercase tracking-widest text-brand-blue font-bold">
                <th className="px-8 py-6 w-12"><input type="checkbox" className="rounded border-gray-300" /></th>
                <th className="px-8 py-6">Subject</th>
                <th className="px-8 py-6">Company</th>
                <th className="px-8 py-6">Assignee</th>
                <th className="px-8 py-6">Created At</th>
                <th className="px-8 py-6 text-center">Dept</th>
                <th className="px-8 py-6 text-center">Priority</th>
                <th className="px-8 py-6 text-center">Status</th>
                <th className="px-8 py-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {tickets.map((ticket, i) => (
                <tr key={i} className="hover:bg-brand-blue/[0.02] transition-colors group">
                  <td className="px-8 py-6"><input type="checkbox" className="rounded border-gray-300" /></td>
                  <td className="px-8 py-6">
                    <Link href={`/tickets/${ticket.id}`} className="block">
                       <p className="font-bold text-brand-navy group-hover:text-brand-blue transition-colors mb-1">{ticket.id} - {ticket.subject}</p>
                       <div className="flex items-center gap-2">
                          <span className="text-[10px] text-gray-400 font-medium">#{ticket.id}</span>
                       </div>
                    </Link>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                       <Building2 className="w-3.5 h-3.5 text-gray-300" />
                       <span className="font-bold text-brand-navy">{ticket.company}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400">
                          {ticket.assignee !== '—' ? ticket.assignee[0] : <User className="w-3 h-3" />}
                       </div>
                       <span className="font-bold text-brand-navy">{ticket.assignee}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-gray-400 font-medium">{ticket.created}</td>
                  <td className="px-8 py-6 text-center">
                    <span className="px-3 py-1 bg-brand-blue/5 text-brand-blue text-[10px] font-bold rounded-full uppercase tracking-widest">{ticket.department}</span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className={cn(
                      "px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-widest",
                      ticket.priority === 'Emergency' ? 'bg-brand-error/10 text-brand-error' : 'bg-gray-100 text-gray-500'
                    )}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className={cn(
                      "px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-widest",
                      ticket.status === 'Pending' ? 'bg-brand-orange/10 text-brand-orange' : 'bg-gray-100 text-gray-400'
                    )}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-300 hover:text-brand-blue transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-300 hover:text-brand-blue transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-8 border-t border-gray-50 bg-gray-50/30 flex items-center justify-between">
          <button className="px-6 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-brand-blue transition-colors disabled:opacity-50" disabled>Previous</button>
          <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">1-6 of 6</p>
          <button className="px-6 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-brand-blue transition-colors">Next</button>
        </div>
      </div>
    </DashboardLayout>
  );
}
