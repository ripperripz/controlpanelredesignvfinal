'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  ChevronRight, 
  MessageSquare, 
  User, 
  Clock, 
  ChevronDown, 
  X,
  Plus,
  Settings,
  Share2,
  MoreHorizontal,
  Zap,
  CheckSquare,
  FileText,
  Activity,
  History,
  Timer,
  Eye,
  CheckCircle2,
  List as ListIcon,
  ChevronLeft,
  Layout
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function ProjectTaskDetailPage() {
  const [activeTab, setActiveTab] = useState('comments');

  return (
    <DashboardLayout>
      <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">
        <Link href="/" className="hover:text-brand-blue">Home</Link> <ChevronRight className="w-3 h-3" />
        <Link href="/internal/projects" className="hover:text-brand-blue">Internal Projects</Link> <ChevronRight className="w-3 h-3" />
        <span className="text-brand-navy">DET-1</span>
      </nav>

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12">
        <div className="flex-1">
           <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-brand-blue/5 border border-brand-blue/20 rounded-lg">
                 <CheckSquare className="w-4 h-4 text-brand-blue" />
                 <span className="text-xs font-bold text-brand-blue">DET-1</span>
              </div>
              <h1 className="text-3xl font-display font-bold text-brand-navy tracking-tight">Example Task</h1>
           </div>
           
           <div className="flex items-center gap-3">
              <button className="p-2 bg-gray-50 text-gray-400 hover:text-brand-blue rounded-xl transition-all border border-gray-100"><Plus className="w-4 h-4" /></button>
              <button className="p-2 bg-gray-50 text-gray-400 hover:text-brand-blue rounded-xl transition-all border border-gray-100"><Settings className="w-4 h-4" /></button>
           </div>
        </div>

        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-brand-navy text-[10px] font-bold rounded-xl hover:bg-gray-100 transition-all uppercase tracking-widest border border-gray-100">
              <Eye className="w-4 h-4" /> 1
           </button>
           <button className="p-2 bg-gray-50 text-gray-400 hover:text-brand-navy rounded-xl border border-gray-100"><Share2 className="w-4 h-4" /></button>
           <button className="p-2 bg-gray-50 text-gray-400 hover:text-brand-navy rounded-xl border border-gray-100"><MoreHorizontal className="w-4 h-4" /></button>
           <div className="flex items-center gap-2 ml-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-brand-blue text-white text-[10px] font-bold rounded-xl shadow-premium hover:bg-brand-navy transition-all uppercase tracking-widest">
                 In Progress <ChevronDown className="w-3 h-3" />
              </button>
              <button className="p-3 bg-white border border-gray-100 text-brand-blue rounded-xl shadow-sm"><Zap className="w-4 h-4" /></button>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Task Content */}
        <div className="lg:col-span-8 space-y-12">
           <section>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                 <FileText className="w-4 h-4" /> Description
              </h3>
              <div className="prose prose-sm max-w-none text-brand-navy bg-white rounded-[32px] p-10 shadow-card border border-gray-50">
                 <p className="mb-8 font-medium">Ticket description goes here...</p>
                 <div className="bg-gray-50 rounded-2xl p-8 font-mono text-[11px] leading-relaxed text-gray-500 border border-gray-100">
                    <div className="flex gap-4">
                       <div className="text-gray-300 select-none">1<br/>2<br/>3<br/>4<br/>5<br/>6</div>
                       <pre className="whitespace-pre-wrap">
{`# VCL version 5.0 is not supported so it should be 4.0 even though actually used Varnish version is 5
vcl 4.0;

import std;
# The minimal Varnish version is 5.0
# For SSL offloading, pass the following header in your proxy server or load balancer: 'X-Forwarded-Proto: https'`}
                       </pre>
                    </div>
                 </div>
              </div>
           </section>

           <section>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center justify-between">
                 Subtasks
                 <button className="text-brand-blue hover:underline">Add subtask</button>
              </h3>
              <div className="bg-white rounded-[32px] p-8 shadow-card border border-gray-50 flex items-center justify-center min-h-[100px] text-gray-300 text-xs font-bold uppercase tracking-widest">
                 No subtasks created
              </div>
           </section>

           <section>
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Activity className="w-4 h-4" /> Activity
                 </h3>
                 <div className="flex bg-gray-50 rounded-xl p-1 border border-gray-100">
                    {[
                       { id: 'all', label: 'All' },
                       { id: 'comments', label: 'Comments' },
                       { id: 'history', label: 'History' },
                       { id: 'worklogs', label: 'Worklogs' },
                    ].map((tab) => (
                      <button 
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          "px-4 py-2 text-[10px] font-bold rounded-lg uppercase tracking-widest transition-all",
                          activeTab === tab.id ? "bg-white text-brand-blue shadow-sm" : "text-gray-400 hover:text-brand-navy"
                        )}
                      >
                         {tab.label}
                      </button>
                    ))}
                 </div>
              </div>

              <div className="space-y-8">
                 <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-2xl bg-brand-navy flex items-center justify-center text-white text-[10px] font-bold">CJ</div>
                    <div className="flex-1">
                       <div className="relative">
                          <input 
                            type="text" 
                            placeholder="Add a comment..." 
                            className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all shadow-sm"
                          />
                          <p className="mt-2 text-[9px] text-gray-400 font-bold uppercase tracking-widest">Pro tip: press <span className="bg-gray-100 px-1.5 py-0.5 rounded text-brand-navy">M</span> to comment</p>
                       </div>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-2xl bg-brand-blue flex items-center justify-center text-white text-[10px] font-bold shadow-md">CJ</div>
                    <div className="flex-1 space-y-2">
                       <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-brand-navy">Catherine Jarosz</span>
                          <span className="text-[10px] text-gray-400 font-bold">13 April 2026 at 11:30</span>
                       </div>
                       <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-50 text-sm font-medium text-brand-navy">
                          Comment visible to everyone
                       </div>
                    </div>
                 </div>
              </div>
           </section>
        </div>

        {/* Sidebar Attributes */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-white rounded-[40px] p-8 shadow-card border border-gray-50 space-y-8">
              <div className="flex items-center justify-between pb-6 border-b border-gray-50">
                 <h4 className="text-xs font-bold text-brand-navy uppercase tracking-widest flex items-center gap-2">
                    <Layout className="w-4 h-4" /> Details
                 </h4>
                 <ChevronDown className="w-4 h-4 text-gray-300" />
              </div>

              {[
                 { label: 'Priority', value: 'Medium', isPriority: true },
                 { label: 'Assignee', value: 'Catherine Jarosz', isUser: true },
                 { label: 'Team', value: 'None' },
                 { label: 'Reporter', value: 'Catherine Jarosz', isUser: true },
                 { label: 'Labels', value: 'None' },
                 { label: 'Due date', value: 'None' },
                 { label: 'Client Company', value: 'Atherton Bikes', isBadge: true },
                 { label: 'Agency Company', value: 'Hotfoot Design', isBadge: true },
                 { label: 'Website(s)', value: 'A S Ramsay', isBadge: true },
              ].map((attr, i) => (
                <div key={i} className="space-y-2">
                   <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{attr.label}</label>
                   <div className="flex items-center gap-3">
                      {attr.isPriority && <div className="w-3 h-1 bg-brand-orange rounded-full" />}
                      {attr.isUser && <div className="w-6 h-6 rounded-lg bg-brand-blue flex items-center justify-center text-[10px] font-bold text-white uppercase">CJ</div>}
                      {attr.isBadge ? (
                        <span className="px-3 py-1 bg-gray-50 text-brand-navy text-[10px] font-bold rounded-lg border border-gray-100 uppercase tracking-widest">{attr.value}</span>
                      ) : (
                        <span className="text-xs font-bold text-brand-navy">{attr.value}</span>
                      )}
                   </div>
                </div>
              ))}

              <div className="pt-6 border-t border-gray-50">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 block">Components</label>
                 <button className="w-full py-3 border-2 border-dashed border-gray-100 rounded-xl text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:border-brand-blue/30 hover:text-brand-blue transition-all">Add components</button>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
