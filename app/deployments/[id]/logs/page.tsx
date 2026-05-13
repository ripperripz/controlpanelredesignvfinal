'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  Rocket, 
  Terminal, 
  Settings, 
  ChevronRight, 
  Trash2, 
  Edit2,
  Database,
  Globe,
  Clock,
  Eye,
  CheckCircle2,
  FileCode,
  Box,
  Play,
  RotateCcw,
  CheckCircle,
  Layout,
  List,
  ChevronDown,
  ChevronRight as ChevronRightIcon,
  Circle,
  RefreshCw,
  MoreVertical
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const tasks = [
  { name: 'Pause Alerts', duration: '2s', status: 'finished' },
  { name: 'Preparing Job', duration: '', status: 'finished' },
  { name: 'Checkout Repository', duration: '2s', status: 'finished' },
  { name: 'Create Build Server', duration: '', status: 'finished' },
  { name: 'Check Ssh Connection', duration: '1s', status: 'finished' },
  { name: 'Create Container', duration: '1s', status: 'finished' },
  { name: 'Create Ssh Key', duration: '2s', status: 'finished' },
  { name: 'Create Hosts File In Container', duration: '', status: 'finished' },
  { name: 'Create S S H Tunnels', duration: '21s', status: 'finished' },
  { name: 'Mount Shared Storage', duration: '2s', status: 'finished' },
  { name: 'Upload Artifact', duration: '', status: 'finished' },
  { name: 'Extract Artifact', duration: '', status: 'finished' },
  { name: 'Remove Artifact', duration: '1s', status: 'finished' },
  { name: 'Prepare Release Folder', duration: '1s', status: 'finished' },
  { name: 'Symlink Pub Folders', duration: '1s', status: 'finished' },
  { name: 'Stop Crons', duration: '1s', status: 'finished' },
  { name: 'SSH: composer config -g github-oauth.github.com', duration: '', status: 'finished', logs: 'composer/package-versions-deprecated: Generating version class...\ncomposer/package-versions-deprecated: ...done generating version class' },
  { name: 'SSH: composer install --ignore-platform-reqs --no-dev', duration: '34s', status: 'finished', logs: 'composer/package-versions-deprecated: Generating version class...\ncomposer/package-versions-deprecated: ...done generating version class' },
  { name: 'SSH: composer dump-autoload --no-ansi --no-scripts', duration: '4s', status: 'finished', logs: 'Generating optimized autoload files\ncomposer/package-versions-deprecated: Generating version class...\ncomposer/package-versions-deprecated: ...done generating version class\nGenerated optimized autoload files containing 28227 classes' },
  { name: 'SSH: rm -rf var/.regenerate.lock', duration: '', status: 'finished' },
  { name: 'SSH: cp -r ./wp-content ./wp ; rm -rf ./wp-content', duration: '', status: 'finished' },
  { name: 'SSH: php vendor/bin/ece-patches apply', duration: '3s', status: 'finished', logs: 'Warning for those on a previously minor line! Magento recommends installing a light quality of patches to ensure a smooth upgrade to the latest line. Please begin planning an upgrade to the latest release line.\nPatch MDVA-26694-V2 has been applied\nTitle: Fixes the issue with product and catalog caches expiring daily, though being scheduled to expire differently.\nFile: os/MDVA-40045_2.3.6-p1.patch' },
];

export default function DeploymentLogPage() {
  const [selectedTask, setSelectedTask] = useState(tasks[17]);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  return (
    <DashboardLayout>
      <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">
        <Link href="/" className="hover:text-brand-blue">Home</Link> <ChevronRightIcon className="w-3 h-3" />
        <Link href="/deployments" className="hover:text-brand-blue">Deployments</Link> <ChevronRightIcon className="w-3 h-3" />
        <span className="text-brand-navy">Merge branch &apos;release/v2.22.0&apos;...</span>
      </nav>

      <div className="bg-white rounded-[40px] shadow-premium border border-gray-50 overflow-hidden mb-8">
         <div className="p-8 border-b border-gray-50 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
               <span className="px-3 py-1 bg-brand-success/10 text-brand-success text-[10px] font-bold rounded-full uppercase tracking-widest">Succeeded</span>
               <h2 className="text-sm font-bold text-brand-navy">Merge branch &apos;release/v2.22.0&apos; (892dfb73cf960eb488840ee44ad935f8f51e292d)</h2>
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">• 13m 36s</span>
            </div>
            <button className="flex items-center gap-2 px-6 py-2 bg-gray-50 border border-gray-100 text-brand-navy text-[10px] font-bold rounded-xl hover:bg-gray-100 transition-all uppercase tracking-widest">
               <RefreshCw className="w-3 h-3" /> Retry
            </button>
         </div>
         <div className="grid grid-cols-4 divide-x divide-gray-50">
            {[
               { label: 'Website', value: 'Sensory Direct' },
               { label: 'Environment', value: 'Production' },
               { label: 'Pipeline', value: 'Magento 2' },
               { label: 'Artifact', value: '3301752d-2052-4e83-a77f-a4eb0a76c946.gz' },
            ].map((stat, i) => (
              <div key={i} className="p-6">
                 <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                 <p className="text-[11px] font-bold text-brand-navy truncate">{stat.value}</p>
              </div>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-12 gap-8 h-[calc(100vh-400px)] min-h-[600px]">
         {/* Task List Sidebar */}
         <div className="col-span-3 bg-white rounded-[40px] shadow-card border border-gray-50 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-50 flex items-center justify-between">
               <h3 className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">Tasks</h3>
               <div className="flex items-center gap-2">
                  <input type="checkbox" checked={isAutoScroll} onChange={() => setIsAutoScroll(!isAutoScroll)} className="w-3 h-3 rounded border-gray-300 text-brand-blue focus:ring-brand-blue" />
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Auto-scroll</span>
               </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
               <div className="space-y-1">
                  {tasks.map((task, i) => (
                    <button 
                      key={i}
                      onClick={() => setSelectedTask(task)}
                      className={cn(
                        "w-full flex items-center justify-between p-3 rounded-xl transition-all text-left group",
                        selectedTask.name === task.name ? "bg-brand-blue/5 border border-brand-blue/10" : "hover:bg-gray-50 border border-transparent"
                      )}
                    >
                       <div className="flex items-center gap-3">
                          <CheckCircle2 className={cn("w-4 h-4", selectedTask.name === task.name ? "text-brand-blue" : "text-brand-success")} />
                          <span className={cn("text-[11px] font-bold truncate max-w-[140px]", selectedTask.name === task.name ? "text-brand-blue" : "text-brand-navy")}>{task.name}</span>
                       </div>
                       <span className="text-[9px] font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">{task.duration}</span>
                    </button>
                  ))}
               </div>
            </div>
         </div>

         {/* Log View Area */}
         <div className="col-span-9 bg-[#0F172A] rounded-[40px] shadow-2xl border border-white/5 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5 backdrop-blur-md">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                     <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                     <h4 className="text-[11px] font-bold text-white uppercase tracking-widest">{selectedTask.name}</h4>
                     <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Execution Output</p>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <button className="p-2 text-gray-400 hover:text-white transition-colors"><MoreVertical className="w-4 h-4" /></button>
               </div>
            </div>
            <div className="flex-1 overflow-y-auto p-10 font-mono text-xs leading-relaxed custom-scrollbar text-gray-400">
               <div className="space-y-8">
                  {tasks.map((task, i) => (
                    <div key={i} className="space-y-4">
                       <div className="flex items-center gap-4 group cursor-pointer">
                          <ChevronDown className={cn("w-4 h-4 text-gray-600 transition-transform", selectedTask.name !== task.name && "-rotate-90")} />
                          <div className="w-2 h-2 rounded-full bg-brand-success" />
                          <span className="text-white font-bold">{task.name}</span>
                          <span className="text-gray-600 ml-auto font-bold">{task.duration || ''} Finished</span>
                       </div>
                       {selectedTask.name === task.name && task.logs && (
                         <motion.div 
                           initial={{ opacity: 0, y: -10 }}
                           animate={{ opacity: 1, y: 0 }}
                           className="pl-14 pr-10 py-6 bg-white/5 rounded-2xl border border-white/5"
                         >
                            <pre className="whitespace-pre-wrap">{task.logs}</pre>
                         </motion.div>
                       )}
                    </div>
                  ))}
               </div>
               <div className="h-20" />
            </div>
         </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </DashboardLayout>
  );
}
