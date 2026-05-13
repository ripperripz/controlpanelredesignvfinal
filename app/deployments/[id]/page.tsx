'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  Rocket,
  Terminal,
  ChevronRight,
  Trash2,
  Edit2,
  Play,
  RotateCcw,
  CheckCircle,
  Clock,
  Layout,
  List,
  Eye,
  Settings,
  Database,
  Globe,
  FileCode,
  Box
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const deploymentDetails = [
  { label: 'Deployment Name', value: 'initia Saeed git v2 (6743a721419faae8b5454c6baf92719812ca2647)' },
  { label: 'Website', value: 'Corefinity UAT Staging' },
  { label: 'Environment', value: 'Corefinity UAT Staging - Magento 2 V2 Pipeline', isHighlight: true },
  { label: 'Deployment Pipeline', value: 'Magento 2 Deployment Pipeline', isHighlight: true },
  { label: 'Notes', value: '—' },
  { label: 'Deployment Artifact', value: '37f1eaf7-3e5b-4211-b9fb-d823576828f2.gz', isMono: true },
  { label: 'Status', value: 'Succeeded (Current)', isStatus: true, status: 'success' },
  { label: 'Completed', value: '2026-03-17 16:08:44' },
];

const tasks = [
  { id: 1, task: 'Extracting artifact', status: 'Finished', duration: '2s' },
  { id: 2, task: 'Setting permissions', status: 'Finished', duration: '1s' },
  { id: 3, task: 'Linking storage', status: 'Finished', duration: '0s' },
  { id: 4, task: 'Running database migrations', status: 'Finished', duration: '12s' },
  { id: 5, task: 'Clearing cache', status: 'Finished', duration: '3s' },
  { id: 6, task: 'Restarting services', status: 'Finished', duration: '5s' },
];

export default function DeploymentDetailPage() {
  const [activeTab, setActiveTab] = useState('details');

  return (
    <DashboardLayout>
      <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">
        <Link href="/" className="hover:text-brand-blue">Home</Link> <ChevronRight className="w-3 h-3" />
        <Link href="/deployments" className="hover:text-brand-blue">Deployments</Link> <ChevronRight className="w-3 h-3" />
        <span className="text-brand-navy">initia Saeed git v2...</span>
      </nav>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-brand-navy tracking-tight mb-2">
            Deployment Info
          </h1>
          <p className="text-sm font-medium text-gray-400">Detailed logs and status for this specific deployment event.</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 text-brand-navy text-xs font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-all">
             <Layout className="w-4 h-4" /> Manage Pipelines
           </button>
           <button className="p-3 bg-white border border-gray-100 text-gray-400 hover:text-brand-error rounded-xl shadow-sm transition-all"><Trash2 className="w-5 h-5" /></button>
           <button className="flex items-center gap-2 px-6 py-3 bg-brand-orange text-white text-xs font-bold rounded-xl shadow-premium hover:bg-[#E55A1E] transition-all">
             <RotateCcw className="w-4 h-4" /> Rollback
           </button>
        </div>
      </div>

      <div className="bg-white rounded-[40px] shadow-premium border border-gray-50 overflow-hidden mb-12">
         {/* Tabs */}
         <div className="flex border-b border-gray-50">
            <button 
              onClick={() => setActiveTab('details')}
              className={cn(
                "px-10 py-6 text-xs font-bold uppercase tracking-widest transition-all relative",
                activeTab === 'details' ? "text-brand-blue" : "text-gray-400 hover:text-brand-navy"
              )}
            >
               Deployment Details
               {activeTab === 'details' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-blue" />}
            </button>
            <button 
              onClick={() => setActiveTab('tasks')}
              className={cn(
                "px-10 py-6 text-xs font-bold uppercase tracking-widest transition-all relative",
                activeTab === 'tasks' ? "text-brand-blue" : "text-gray-400 hover:text-brand-navy"
              )}
            >
               Tasks
               {activeTab === 'tasks' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-blue" />}
            </button>
         </div>

         <div className="p-0">
            {activeTab === 'details' ? (
              <div className="divide-y divide-gray-50">
                 {deploymentDetails.map((item, i) => (
                   <div key={i} className="flex flex-col sm:flex-row sm:items-center py-6 px-10 group hover:bg-gray-50/50 transition-colors">
                      <span className="w-full sm:w-72 text-sm font-medium text-brand-blue">{item.label}</span>
                      <div className="flex-1 mt-1 sm:mt-0">
                         {item.isStatus ? (
                           <div className="flex items-center gap-2">
                              <div className={cn("w-2 h-2 rounded-full", item.status === 'success' ? 'bg-brand-success' : 'bg-brand-error')} />
                              <span className={cn("text-sm font-bold", item.status === 'success' ? 'text-brand-success' : 'text-brand-error')}>{item.value}</span>
                           </div>
                         ) : item.isHighlight ? (
                           <span className="text-sm font-bold text-brand-orange">{item.value}</span>
                         ) : (
                           <span className={cn("text-sm font-bold text-brand-navy", item.isMono && "font-mono text-xs text-gray-500")}>{item.value}</span>
                         )}
                      </div>
                   </div>
                 ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                 <table className="w-full text-left text-xs">
                    <thead>
                       <tr className="bg-gray-50/50 border-b border-gray-100 uppercase tracking-widest text-brand-blue font-bold">
                          <th className="px-10 py-6 w-20">ID</th>
                          <th className="px-10 py-6">Task</th>
                          <th className="px-10 py-6">Duration</th>
                          <th className="px-10 py-6">Status</th>
                          <th className="px-10 py-6 text-right">Logs</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                       {tasks.map((task, i) => (
                         <tr key={i} className="hover:bg-brand-blue/[0.02] transition-colors group">
                            <td className="px-10 py-6 font-bold text-gray-400">{task.id}</td>
                            <td className="px-10 py-6 font-bold text-brand-navy">{task.task}</td>
                            <td className="px-10 py-6 text-gray-400 font-medium">{task.duration}</td>
                            <td className="px-10 py-6">
                               <div className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-brand-success" />
                                  <span className="font-bold text-brand-success uppercase tracking-widest text-[10px]">{task.status}</span>
                               </div>
                            </td>
                            <td className="px-10 py-6 text-right">
                               <button className="p-2 text-gray-300 hover:text-brand-blue transition-colors">
                                  <Terminal className="w-4 h-4" />
                               </button>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
            )}
         </div>
      </div>

      {/* Real-time Log Stream Placeholder */}
      <div className="bg-[#0F172A] rounded-[40px] shadow-2xl border border-white/5 overflow-hidden">
         <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
               <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Live Deployment Logs</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-white/20" />
               <div className="w-2 h-2 rounded-full bg-white/20" />
               <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
         </div>
         <div className="p-10 font-mono text-xs leading-relaxed text-gray-400">
            <p className="text-gray-500">[2026-03-17 16:05:12] <span className="text-brand-success">INFO:</span> Starting deployment process...</p>
            <p className="text-gray-500">[2026-03-17 16:05:14] <span className="text-brand-success">INFO:</span> Downloading artifact from S3...</p>
            <p className="text-gray-500">[2026-03-17 16:05:22] <span className="text-brand-success">INFO:</span> Artifact downloaded (37f1eaf7-3e5b-4211-b9fb-d823576828f2.gz)</p>
            <p className="text-gray-500">[2026-03-17 16:05:25] <span className="text-brand-success">INFO:</span> Extracting files to /tmp/build_1502...</p>
            <p className="text-gray-500">[2026-03-17 16:06:10] <span className="text-brand-orange">WARN:</span> Node.js version mismatch, using fallback 18.x</p>
            <p className="text-gray-500">[2026-03-17 16:06:45] <span className="text-brand-success">INFO:</span> Build successful.</p>
            <p className="text-gray-500">[2026-03-17 16:07:12] <span className="text-brand-success">INFO:</span> Swapping symlinks...</p>
            <p className="text-white font-bold animate-pulse mt-4">_</p>
         </div>
      </div>
    </DashboardLayout>
  );
}
