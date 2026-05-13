'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  ChevronRight,
  User,
  Clock,
  ExternalLink,
  MessageSquare,
  FileText,
  Paperclip,
  Send,
  MoreVertical,
  Lock,
  ArrowLeft,
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function TicketDetail() {
  return (
    <DashboardLayout>
      <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
        <Link href="/tickets" className="hover:text-brand-blue transition-colors">Tickets</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-brand-navy">T-2914</span>
      </nav>

      <header className="mb-8 flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-[24px] font-bold text-brand-navy">Checkout experiencing 500 errors during peak load</h1>
            <span className="px-2 py-0.5 bg-brand-error/10 text-brand-error text-[10px] font-bold rounded">CRITICAL</span>
          </div>
          <p className="text-sm text-gray-400 font-medium">Internal Reference: #882291-C</p>
        </div>
        <div className="flex gap-2">
           <button className="h-10 px-4 border border-gray-200 text-brand-navy rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors">Close Ticket</button>
           <button className="h-10 px-6 bg-brand-blue text-white rounded-lg font-bold text-sm hover:bg-brand-blue/90 transition-colors">Escalate</button>
        </div>
      </header>

      <div className="flex gap-8">
        {/* Left - Conversation */}
        <div className="flex-1 space-y-6">
           {/* Message 1 */}
           <div className="bg-white p-6 rounded-xl shadow-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-white font-bold">CS</div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Catherine Studio</h4>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Client</span>
                  </div>
                </div>
                <span className="text-xs text-gray-400">Oct 24, 14:10</span>
              </div>
              <div className="text-sm text-gray-700 leading-relaxed mb-6">
                Hi team, we&apos;re seeing a spike in 500 errors on the checkout page specifically when traffic goes above 5k concurrent users. 
                Seems to be a database connection timeout issue. Can you please investigate?
              </div>
              <div className="flex gap-3">
                 <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-100 hover:border-brand-blue/20 transition-all cursor-pointer group">
                   <Paperclip className="w-4 h-4 text-gray-400 group-hover:text-brand-blue" />
                   <span className="text-xs font-bold text-brand-navy">error_log_crash.txt</span>
                   <span className="text-[10px] text-gray-400">2.4 MB</span>
                 </div>
              </div>
           </div>

           {/* Message 2 - Support */}
           <div className="bg-white p-6 rounded-xl shadow-card border-l-4 border-brand-blue">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold">MT</div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Marcus Thorne</h4>
                    <span className="text-[10px] text-brand-blue font-bold uppercase">Support Engineer</span>
                  </div>
                </div>
                <span className="text-xs text-gray-400">Oct 24, 14:45</span>
              </div>
              <div className="text-sm text-gray-700 leading-relaxed">
                Hello Catherine, we&apos;ve acknowledged the issue. Our engineering team is currently scaling up the RDS instance to handle the increased load. 
                We are also reviewing the connection pooling settings in your Laravel config.
              </div>
           </div>

           {/* Reply Box */}
           <div className="bg-white p-6 rounded-xl shadow-card">
              <div className="flex gap-4 border-b border-gray-100 mb-6 pb-2">
                <button className="text-sm font-bold text-brand-blue border-b-2 border-brand-blue pb-2 -mb-[10px]">Reply</button>
                <button className="text-sm font-bold text-gray-400 hover:text-brand-navy pb-2">Internal Note</button>
              </div>
              <textarea placeholder="Write a reply..." className="w-full h-32 p-4 bg-gray-50 border border-transparent rounded-lg text-sm focus:outline-none focus:bg-white focus:border-brand-blue transition-all mb-4" />
              <div className="flex items-center justify-between">
                 <button className="p-2 text-gray-400 hover:text-brand-blue transition-colors">
                   <Paperclip className="w-5 h-5" />
                 </button>
                 <button className="h-10 px-8 bg-brand-orange text-white font-bold rounded-lg flex items-center gap-2 shadow-sm hover:bg-[#E55A1E] transition-all">
                   <Send className="w-4 h-4" />
                   Send Reply
                 </button>
              </div>
           </div>
        </div>

        {/* Right - Sidebar */}
        <aside className="w-[300px] flex-shrink-0 space-y-6">
           <div className="bg-white p-6 rounded-xl shadow-card space-y-6">
               <div className="space-y-1">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</label>
                 <div className="flex items-center justify-between text-sm font-bold text-brand-navy cursor-pointer hover:text-brand-blue group">
                   <span>Open</span>
                   <ChevronRight className="w-4 h-4 text-gray-200 group-hover:text-brand-blue" />
                 </div>
               </div>
               <div className="space-y-1">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Priority</label>
                 <div className="flex items-center justify-between text-sm font-bold text-brand-error cursor-pointer hover:underline group">
                   <span>Critical</span>
                   <ChevronRight className="w-4 h-4 text-gray-200 group-hover:text-brand-error" />
                 </div>
               </div>
               <div className="space-y-1">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Environment</label>
                 <div className="flex items-center gap-2 py-1">
                    <span className="px-2 py-0.5 bg-brand-success/10 text-brand-success text-[10px] font-bold rounded">PROD</span>
                    <span className="text-sm font-bold text-brand-navy line-clamp-1">Corefinity-Main...</span>
                 </div>
               </div>
               <div className="space-y-1">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Assigned To</label>
                 <div className="flex items-center gap-3 py-1">
                   <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center text-white text-[10px] font-bold">MT</div>
                   <span className="text-sm font-bold text-brand-navy">Marcus Thorne</span>
                 </div>
               </div>
               <div className="pt-4 border-t border-gray-50">
                  <button className="w-full py-2.5 text-brand-orange text-xs font-bold border border-brand-orange/20 rounded-lg hover:bg-brand-orange hover:text-white transition-all">Change Assignment</button>
               </div>
           </div>

           <div className="bg-white p-6 rounded-xl shadow-card">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                 {['performance', 'database', 'high-traffic'].map(t => (
                   <span key={t} className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold rounded uppercase">#{t}</span>
                 ))}
                 <button className="w-6 h-6 border border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400 hover:border-brand-blue hover:text-brand-blue transition-colors">
                   <Plus className="w-3 h-3" />
                 </button>
              </div>
           </div>
        </aside>
      </div>
    </DashboardLayout>
  );
}
