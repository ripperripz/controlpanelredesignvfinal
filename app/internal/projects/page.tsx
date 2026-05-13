'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  Search, 
  Plus, 
  ChevronRight, 
  Filter, 
  Eye, 
  Edit2,
  Clock,
  User,
  CheckCircle2,
  AlertCircle,
  Tag,
  Building2,
  ChevronDown,
  X,
  LayoutGrid,
  List,
  Command,
  PlusSquare,
  MoreVertical,
  Zap,
  CheckSquare,
  Settings2
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const workItems = [
  { id: 'RPCP-15', work: 'Project management and communication', priority: 'Medium', status: 'IN PROGRESS', created: '09 Apr 2026, 12:41', updated: '10 Apr 2026, 16:36', reporter: 'Catherine Jarosz', tag: 'Example tag', type: 'story' },
  { id: 'RPCP-14', work: 'Review with client', priority: 'Medium', status: 'TO DO', created: '08 Apr 2026, 11:44', updated: '08 Apr 2026, 11:44', reporter: 'Catherine Jarosz', tag: 'None', type: 'task' },
  { id: 'RPCP-13', work: 'Go live check', priority: 'Medium', status: 'TO DO', created: '08 Apr 2026, 11:40', updated: '09 Apr 2026, 11:19', reporter: 'Catherine Jarosz', tag: 'None', type: 'story' },
  { id: 'RPCP-12', work: 'Overview presentation', priority: 'Medium', status: 'TO DO', created: '08 Apr 2026, 11:05', updated: '08 Apr 2026, 11:08', reporter: 'Catherine Jarosz', tag: 'None', type: 'task' },
  { id: 'DET-1', work: 'Testing sandbox', priority: 'Medium', status: 'BACKLOG', created: '01 Apr 2026, 17:37', updated: '01 Apr 2026, 17:37', reporter: 'Catherine Jarosz', tag: 'None', client: 'Atherton Bikes', agency: 'Hotfoot Design', type: 'task' },
  { id: 'CPPB-61', work: 'Add ability to... ', priority: 'Medium', status: 'TO DO', created: '07 Apr 2026, 11:05', updated: '07 Apr 2026, 15:14', reporter: 'Catherine Jarosz', tag: 'None', type: 'task' },
];

export default function InternalProjectsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-brand-navy tracking-tight mb-2">
            Internal Projects
          </h1>
          <p className="text-sm font-medium text-gray-400">Track internal development and operational tasks.</p>
        </div>
        <button className="flex items-center gap-2 px-8 py-4 bg-brand-orange text-white text-sm font-bold rounded-2xl shadow-premium hover:bg-[#E55A1E] transition-all">
          <PlusSquare className="w-5 h-5" /> Raise a ticket
        </button>
      </div>

      {/* Jira Style Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
         <div className="flex bg-white rounded-xl border border-gray-100 p-1">
            <button className="px-6 py-2 bg-brand-blue text-white text-[10px] font-bold rounded-lg uppercase tracking-widest shadow-lg">Basic</button>
            <button className="px-6 py-2 text-gray-400 text-[10px] font-bold rounded-lg uppercase tracking-widest hover:text-brand-navy">JQL</button>
         </div>
         
         <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
            <input 
              type="text" 
              placeholder="Search work..." 
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-xs font-medium focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
            />
         </div>

         <div className="flex items-center gap-2 px-4 py-3 bg-brand-blue/5 border border-brand-blue/20 rounded-xl">
            <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">Space</span>
            <span className="text-[10px] font-bold text-brand-blue">!=</span>
            <span className="text-[10px] font-bold text-brand-navy truncate max-w-[150px]">Provisioning - Control Panel</span>
            <ChevronDown className="w-3 h-3 text-brand-blue" />
         </div>

         {['Assignee', 'Type', 'Status'].map((filter, i) => (
           <div key={i} className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-100 rounded-xl hover:border-brand-blue/30 cursor-pointer transition-all">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{filter}</span>
              <ChevronDown className="w-3 h-3 text-gray-300" />
           </div>
         ))}

         <div className="flex items-center gap-2 px-4 py-3 bg-brand-blue/5 border border-brand-blue/20 rounded-xl">
            <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">Created: Within the last 30 days</span>
            <X className="w-3 h-3 text-brand-blue cursor-pointer" />
         </div>

         <button className="text-[10px] font-bold text-brand-blue uppercase tracking-widest hover:underline">Clear filters</button>
      </div>

      <div className="bg-white rounded-[40px] shadow-premium border border-gray-50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100 uppercase tracking-widest text-brand-blue font-bold">
                <th className="px-8 py-6 w-12"><input type="checkbox" className="rounded border-gray-300" /></th>
                <th className="px-8 py-6">Work</th>
                <th className="px-8 py-6">Priority</th>
                <th className="px-8 py-6">Status</th>
                <th className="px-8 py-6">Created</th>
                <th className="px-8 py-6">Updated</th>
                <th className="px-8 py-6">Reporter</th>
                <th className="px-8 py-6">Tag</th>
                <th className="px-8 py-6 text-right"><Settings2 className="w-4 h-4 ml-auto" /></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {workItems.map((item, i) => (
                <tr key={i} className="hover:bg-brand-blue/[0.02] transition-colors group">
                  <td className="px-8 py-6"><input type="checkbox" className="rounded border-gray-300" /></td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                       {item.type === 'story' ? <Zap className="w-4 h-4 text-purple-500" /> : <CheckSquare className="w-4 h-4 text-brand-blue" />}
                       <Link href={`/internal/projects/${item.id}`} className="font-bold text-brand-blue hover:underline">{item.id}</Link>
                       <span className="font-bold text-brand-navy truncate max-w-[200px]">{item.work}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                     <div className="flex items-center gap-2">
                        <div className="w-3 h-1 bg-brand-orange rounded-full" />
                        <span className="font-bold text-brand-navy">{item.priority}</span>
                     </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      "px-3 py-1 text-[10px] font-bold rounded-lg uppercase tracking-widest flex items-center justify-between gap-2 group/status cursor-pointer",
                      item.status === 'IN PROGRESS' ? 'bg-brand-blue/10 text-brand-blue' : 
                      item.status === 'TO DO' ? 'bg-gray-100 text-gray-500' : 'bg-gray-800 text-white'
                    )}>
                      {item.status}
                      <ChevronDown className="w-3 h-3 opacity-0 group-hover/status:opacity-100" />
                    </span>
                  </td>
                  <td className="px-8 py-6 text-gray-400 font-medium whitespace-nowrap">{item.created}</td>
                  <td className="px-8 py-6 text-gray-400 font-medium whitespace-nowrap">{item.updated}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                       <div className="w-7 h-7 rounded-full bg-brand-navy flex items-center justify-center text-[10px] font-bold text-white uppercase shadow-md">
                          {item.reporter.split(' ').map(n => n[0]).join('')}
                       </div>
                       <span className="font-bold text-brand-navy whitespace-nowrap">{item.reporter}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold rounded-lg uppercase tracking-widest border border-gray-100">{item.tag}</span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 text-gray-300 hover:text-brand-blue transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
