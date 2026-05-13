'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  Search, 
  Plus, 
  ChevronRight, 
  MessageSquare, 
  User, 
  Clock, 
  ChevronDown, 
  X,
  Send,
  Paperclip,
  Bold,
  Italic,
  Link2,
  Code,
  List as ListIcon,
  ListOrdered,
  Quote,
  MoreVertical,
  ChevronLeft,
  Building2,
  Globe,
  Tag,
  Users,
  AlertCircle,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const subscribers = [
  { name: 'Navid Nadali', company: 'Corefinity' },
  { name: 'Jade Louise Bridgeman', company: 'Corefinity' },
  { name: 'Mahsa Shiraziand', company: 'Corefinity' },
  { name: 'Catherine Jarosz', company: 'Corefinity' },
  { name: 'CJ Test', company: 'Example Company' },
  { name: 'Example Owner', company: 'Example Company' },
];

export default function TicketDetailPage() {
  const [comment, setComment] = useState('');

  return (
    <DashboardLayout>
      <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">
        <Link href="/" className="hover:text-brand-blue">Home</Link> <ChevronLeft className="w-3 h-3" />
        <Link href="/tickets" className="hover:text-brand-blue">Tickets</Link> <ChevronRight className="w-3 h-3" />
        <span className="text-brand-navy">Ticket #4549</span>
      </nav>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="flex items-center gap-6">
           <div className="w-16 h-16 rounded-[24px] bg-brand-navy flex items-center justify-center text-white shadow-lg">
              <MessageSquare className="w-8 h-8" />
           </div>
           <div>
              <div className="flex items-center gap-3 mb-1">
                 <h1 className="text-3xl font-display font-bold text-brand-navy tracking-tight">Example Ticket Subject</h1>
                 <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange text-[10px] font-bold rounded-full uppercase tracking-widest">Pending</span>
                 <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-[10px] font-bold rounded-full uppercase tracking-widest">Medium</span>
              </div>
              <p className="text-sm font-medium text-gray-400">
                #4549 opened by <span className="text-brand-blue font-bold">Catherine Jarosz</span> on behalf of <span className="text-brand-blue font-bold">Example Company</span> in <span className="font-bold">Support</span>
              </p>
           </div>
        </div>
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 text-brand-navy text-xs font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-all">
             <Globe className="w-4 h-4" /> Website: Test deletion website
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-10">
           {/* Initial Post */}
           <div className="bg-white rounded-[40px] shadow-premium border border-gray-50 overflow-hidden">
              <div className="p-10 border-b border-gray-50 bg-gray-50/20 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-navy flex items-center justify-center text-white shadow-md font-bold text-sm">CJ</div>
                    <div>
                       <p className="text-sm font-bold text-brand-navy">Catherine Jarosz <span className="text-gray-400 font-medium">(you)</span></p>
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">catherine.jarosz@corefinity.com</p>
                    </div>
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">2026-04-09 05:31:48 PM</p>
                 </div>
              </div>
              <div className="p-10">
                 <div className="prose prose-sm max-w-none text-brand-navy leading-relaxed">
                    <p>line of standard text</p>
                    <div className="bg-gray-900 rounded-2xl p-8 my-8 font-mono text-[11px] leading-relaxed text-gray-300 border border-white/5 shadow-2xl">
                       <pre className="whitespace-pre-wrap">
{`# VCL version 5.0 is not supported so it should be 4.0 even though actually used Varnish version is 5
vcl 4.0;

import std;
# The minimal Varnish version is 5.0
# For SSL offloading, pass the following header in your proxy server or load balancer: 'X-Forwarded-Proto: https'

backend default {
    .host = "129.89.188.244";
    .port = "80";
    .first_byte_timeout = 600s;
    .probe = {
        .url = "/pub/health_check.php";
        .timeout = 2s;
        .interval = 5s;
        .window = 10;
        .threshold = 5;
    }
}

acl purge {
    "129.89.188.244";
    "127.0.0.1";
    "localhost";
}`}
                       </pre>
                    </div>
                    <p className="mb-6">line of text</p>
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                       <h4 className="text-xs font-bold text-brand-navy uppercase tracking-widest mb-4 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-brand-orange" /> Replication step
                       </h4>
                       <ul className="space-y-2 text-sm font-medium list-disc pl-5">
                          <li>click</li>
                          <li>select</li>
                          <li>scroll</li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>

           {/* Reply Section */}
           <div className="bg-white rounded-[40px] shadow-premium border border-gray-50 overflow-hidden">
              <div className="p-8 border-b border-gray-50 bg-gray-50/20">
                 <div className="grid grid-cols-2 gap-6">
                    <div>
                       <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Canned Responses</label>
                       <div className="relative">
                          <select className="w-full pl-4 pr-10 py-3 bg-white border border-gray-100 rounded-xl text-xs font-bold text-brand-navy appearance-none outline-none focus:ring-2 focus:ring-brand-blue/20">
                             <option>Select a canned response...</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                       </div>
                    </div>
                    <div>
                       <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Draft Messages</label>
                       <div className="relative">
                          <select className="w-full pl-4 pr-10 py-3 bg-white border border-gray-100 rounded-xl text-xs font-bold text-brand-navy appearance-none outline-none focus:ring-2 focus:ring-brand-blue/20">
                             <option>Select a draft...</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                       </div>
                    </div>
                 </div>
              </div>
              <div className="p-0">
                 {/* Toolbar */}
                 <div className="px-8 py-3 bg-gray-50/50 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                       {[Bold, Italic, Link2, Code, ListIcon, ListOrdered, Quote].map((Icon, i) => (
                         <button key={i} className="p-2 text-gray-400 hover:text-brand-blue hover:bg-white rounded-lg transition-all">
                            <Icon className="w-4 h-4" />
                         </button>
                       ))}
                    </div>
                    <div className="flex items-center gap-4">
                       <button className="p-2 text-gray-300 hover:text-brand-navy"><MoreVertical className="w-4 h-4" /></button>
                    </div>
                 </div>
                 <textarea 
                   value={comment}
                   onChange={(e) => setComment(e.target.value)}
                   placeholder="Reply or Comment..."
                   className="w-full h-64 p-10 text-sm font-medium text-brand-navy border-none outline-none resize-none placeholder:text-gray-300"
                 />
                 <div className="p-8 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-500 text-[10px] font-bold rounded-xl hover:bg-gray-100 transition-all uppercase tracking-widest shadow-sm">
                          <Paperclip className="w-4 h-4" /> Attach Files
                       </button>
                       <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">No files selected</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <button className="px-8 py-3 text-gray-400 hover:text-brand-navy text-[10px] font-bold uppercase tracking-widest transition-all">Save as Draft</button>
                       <button className="flex items-center gap-2 px-10 py-3 bg-brand-orange text-white text-[10px] font-bold rounded-xl shadow-premium hover:bg-[#E55A1E] transition-all uppercase tracking-widest">
                          <Send className="w-4 h-4" /> Send Reply
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Sidebar Metadata */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-white rounded-[40px] p-8 shadow-card border border-gray-50 space-y-10">
              <div>
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 block">Status</label>
                 <div className="relative">
                    <select className="w-full pl-4 pr-10 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl text-xs font-bold text-brand-navy appearance-none outline-none focus:ring-2 focus:ring-brand-blue/20">
                       <option>Pending</option>
                       <option>Waiting on Customer</option>
                       <option>Resolved</option>
                       <option>Closed</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                 </div>
              </div>

              <div>
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 block">Priority</label>
                 <div className="relative">
                    <select className="w-full pl-4 pr-10 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl text-xs font-bold text-brand-navy appearance-none outline-none focus:ring-2 focus:ring-brand-blue/20">
                       <option>Medium</option>
                       <option>High</option>
                       <option>Emergency</option>
                       <option>Low</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                 </div>
              </div>

              <div>
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 block">Assignee</label>
                 <div className="relative">
                    <div className="w-full pl-4 pr-10 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl flex items-center gap-3 cursor-pointer">
                       <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center text-[10px] font-bold text-white shadow-sm">CJ</div>
                       <span className="text-xs font-bold text-brand-navy">Catherine Jarosz</span>
                       <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                 </div>
              </div>

              <div>
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 block">Tags</label>
                 <div className="flex gap-2 mb-4">
                    <input type="text" placeholder="Search for a tag..." className="flex-1 px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs outline-none focus:ring-2 focus:ring-brand-blue/20" />
                    <button className="px-4 py-3 bg-brand-orange text-white text-[10px] font-bold rounded-xl shadow-md uppercase tracking-widest">Add</button>
                 </div>
                 <div className="flex flex-wrap gap-2">
                    {['Varnish', 'SSL', 'Deployment'].map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold rounded-lg border border-gray-100 flex items-center gap-2 group">
                         {tag}
                         <X className="w-3 h-3 cursor-pointer group-hover:text-brand-error transition-colors" />
                      </span>
                    ))}
                 </div>
              </div>

              <div>
                 <div className="flex items-center justify-between mb-6">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Subscribers</label>
                    <span className="w-6 h-6 bg-brand-blue/10 text-brand-blue rounded-lg flex items-center justify-center text-[10px] font-bold">{subscribers.length}</span>
                 </div>
                 <div className="space-y-4 mb-6">
                    {subscribers.map((sub, i) => (
                      <div key={i} className="flex items-center justify-between group">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400 group-hover:text-brand-blue transition-colors">
                               {sub.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                               <p className="text-[11px] font-bold text-brand-navy">{sub.name}</p>
                               <p className="text-[9px] font-medium text-gray-400">{sub.company}</p>
                            </div>
                         </div>
                         <button className="p-2 text-gray-200 hover:text-brand-error opacity-0 group-hover:opacity-100 transition-all"><X className="w-4 h-4" /></button>
                      </div>
                    ))}
                 </div>
                 <button className="w-full py-4 border-2 border-dashed border-gray-100 rounded-2xl text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:border-brand-blue/30 hover:text-brand-blue transition-all flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" /> Add Subscriber
                 </button>
              </div>

              <div className="pt-8 border-t border-gray-50">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 block">Meta</label>
                 <div className="bg-gray-900 rounded-2xl p-6 font-mono text-[10px] text-gray-500 min-h-[60px]">
                    []
                 </div>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
