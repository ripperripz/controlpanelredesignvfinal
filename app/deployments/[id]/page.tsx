'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  Terminal, 
  Search, 
  Copy, 
  Download, 
  ChevronRight,
  GitBranch,
  Clock,
  User,
  ExternalLink,
  SearchCode
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function DeploymentDetail() {
  return (
    <DashboardLayout>
      <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
        <span>Dashboard</span> <ChevronRight className="w-3 h-3" />
        <span>Deployments</span> <ChevronRight className="w-3 h-3" />
        <span className="text-brand-navy">DP-8921</span>
      </nav>

      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-[24px] font-bold text-brand-navy">Deployment DP-8921</h1>
          <span className="px-2 py-0.5 bg-brand-success/10 text-brand-success text-[10px] font-bold rounded">SUCCESS</span>
        </div>
      </header>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Triggered By', value: 'Catherine Studio', icon: User },
          { label: 'Branch', value: 'main', icon: GitBranch },
          { label: 'Started', value: 'Oct 24, 14:20:01', icon: Clock },
          { label: 'Duration', value: '2m 14s', icon: Clock },
        ].map((meta, i) => (
           <div key={i} className="bg-white p-4 rounded-xl shadow-card border border-transparent hover:border-brand-blue/10 transition-all">
             <div className="flex items-center gap-2 text-gray-400 mb-1">
               <meta.icon className="w-3.5 h-3.5" />
               <span className="text-[10px] font-bold uppercase tracking-wider">{meta.label}</span>
             </div>
             <p className="text-sm font-bold text-brand-navy">{meta.value}</p>
           </div>
        ))}
      </div>

      <div className="bg-[#0F1420] rounded-xl overflow-hidden shadow-2xl flex flex-col h-[600px]">
        <div className="h-12 bg-white/5 border-b border-white/5 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-error" />
              <div className="w-2.5 h-2.5 rounded-full bg-brand-warning" />
              <div className="w-2.5 h-2.5 rounded-full bg-brand-success" />
            </div>
            <span className="text-xs font-mono text-gray-400 ml-2">deployment_job_8921.log</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
              <input type="text" placeholder="Search logs..." className="h-7 w-48 pl-8 pr-3 bg-white/5 border border-white/10 rounded text-[10px] text-white focus:outline-none focus:border-brand-blue" />
            </div>
            <button className="p-1.5 text-gray-400 hover:text-white transition-colors">
              <Copy className="w-4 h-4" />
            </button>
            <button className="p-1.5 text-gray-400 hover:text-white transition-colors">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex-1 p-6 font-mono text-xs leading-relaxed overflow-y-auto terminal-scroll">
           {[
             { t: '14:20:01', msg: 'Job started. Initializing environment...', color: 'text-gray-400' },
             { t: '14:20:05', msg: 'Pulling latest code from [main]...', color: 'text-white' },
             { t: '14:20:08', msg: 'Installing dependencies with npm...', color: 'text-white' },
             { t: '14:20:42', msg: 'Build started...', color: 'text-brand-blue' },
             { t: '14:21:15', msg: 'Build completed successfully.', color: 'text-brand-success' },
             { t: '14:21:16', msg: 'Starting atomic deployment to clusters...', color: 'text-white' },
             { t: '14:22:10', msg: 'Cluster A verified. Healthy.', color: 'text-brand-success' },
             { t: '14:22:12', msg: 'Cluster B verified. Healthy.', color: 'text-brand-success' },
             { t: '14:22:15', msg: 'Deployment complete. Live at https://corefinity.io', color: 'text-brand-success font-bold' },
           ].map((line, i) => (
             <div key={i} className="flex gap-4 group hover:bg-white/5 -mx-6 px-6 py-0.5">
               <span className="text-gray-600 select-none w-16">{line.t}</span>
               <span className="text-gray-700 select-none w-6">{i + 1}</span>
               <span className={line.color}>{line.msg}</span>
             </div>
           ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
