'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  Rocket, 
  Terminal, 
  MoreVertical,
  ChevronRight,
  Plus,
  RefreshCcw,
  Trash2,
  Lock,
  Download,
  Eye,
  Settings,
  Activity,
  Cpu,
  Layers,
  Database,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

import { ConfirmationModal } from '@/components/ConfirmationModal';

const tabs = ['Overview', 'Services', 'Backups', 'Access', 'Settings'];

const mockServices = [
  { name: 'PHP 8.2-FPM', status: 'Healthy', version: '8.2.12', uptime: '14d 2h' },
  { name: 'Nginx', status: 'Healthy', version: '1.24.0', uptime: '45d 12h' },
  { name: 'Redis', status: 'Healthy', version: '7.0.12', uptime: '14d 2h' },
  { name: 'MySQL 8.0', status: 'Warning', version: '8.0.34', uptime: '2d 4h' },
];

export default function EnvironmentDetail() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isRestartModalOpen, setIsRestartModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isRestarting, setIsRestarting] = useState(false);

  const handleRestart = (service: string) => {
    setSelectedService(service);
    setIsRestartModalOpen(true);
  };

  const confirmRestart = () => {
    setIsRestarting(true);
    setTimeout(() => {
      setIsRestarting(false);
      setIsRestartModalOpen(false);
    }, 1500);
  };

  return (
    <DashboardLayout>
      <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
        <Link href="/dashboard" className="hover:text-brand-blue">Dashboard</Link> <ChevronRight className="w-3 h-3" />
        <Link href="/environments" className="hover:text-brand-blue">Environments</Link> <ChevronRight className="w-3 h-3" />
        <span className="text-brand-navy">Corefinity-Main-Store</span>
      </nav>

      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-[24px] font-bold text-brand-navy">Corefinity-Main-Store</h1>
          <span className="px-2 py-0.5 bg-brand-success/10 text-brand-success text-[10px] font-bold rounded flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-brand-success rounded-full pulse-live" /> LIVE
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-10 px-6 bg-brand-orange text-white rounded-lg font-bold flex items-center gap-2 shadow-sm hover:scale-105 transition-all">
            <Rocket className="w-4 h-4" /> New Deployment
          </button>
        </div>
      </header>

      <div className="flex border-b border-gray-200 mb-8 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={cn(
            "px-6 py-4 text-sm font-bold transition-all relative whitespace-nowrap",
            activeTab === tab ? "text-brand-orange" : "text-gray-400 hover:text-brand-navy"
          )}>
            {tab}
            {activeTab === tab && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange" />}
          </button>
        ))}
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeTab === 'Overview' && (
          <div className="space-y-8">
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Uptime', value: '99.99%', trend: 'Healthy', icon: Activity, color: 'text-brand-success' },
                  { label: 'Latency', value: '42ms', trend: 'Optimal', icon: Cpu, color: 'text-brand-blue' },
                  { label: 'Nodes', value: '12', trend: 'Scalable', icon: Layers, color: 'text-brand-navy' },
                  { label: 'Disk Usage', value: '65%', trend: 'Moderate', icon: Database, color: 'text-brand-orange' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-8 rounded-[24px] shadow-card border border-transparent hover:border-gray-100 transition-all group">
                    <div className="flex items-center justify-between mb-6">
                       <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center bg-gray-50", stat.color)}>
                         <stat.icon className="w-5 h-5" />
                       </div>
                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.trend}</span>
                    </div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">{stat.label}</p>
                    <p className="text-2xl font-display font-bold text-brand-navy group-hover:text-brand-blue transition-colors">{stat.value}</p>
                  </div>
                ))}
             </div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-[32px] shadow-card p-10">
                  <h2 className="text-xl font-display font-bold mb-8">Deployment History</h2>
                  <div className="space-y-0">
                    {[
                      { id: '#4513', branch: 'main', status: 'Success', time: '12m ago', author: 'Catherine S.' },
                      { id: '#4512', branch: 'main', status: 'Success', time: '2h ago', author: 'Arsh B.' },
                      { id: '#4511', branch: 'hotfix/ssl', status: 'Failed', time: '5h ago', author: 'System' },
                    ].map((job, i) => (
                      <div key={i} className="flex items-center justify-between py-5 border-b border-gray-50 last:border-0 group cursor-pointer hover:bg-gray-50/50 px-4 -mx-4 rounded-xl transition-colors">
                        <div className="flex items-center gap-6">
                          <span className="text-xs font-mono font-bold text-brand-blue">{job.id}</span>
                          <div className="flex flex-col">
                             <code className="text-[11px] bg-gray-100 px-2 py-0.5 rounded text-gray-600 w-fit">{job.branch}</code>
                             <span className="text-[10px] text-gray-400 font-medium mt-1">by {job.author}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-8">
                           <span className={cn(
                             "text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-lg",
                             job.status === 'Success' ? "bg-brand-success/5 text-brand-success" : "bg-brand-error/5 text-brand-error"
                           )}>{job.status}</span>
                           <span className="text-xs text-gray-400 font-medium">{job.time}</span>
                           <ChevronRight className="w-4 h-4 text-gray-300 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-[32px] shadow-card p-10">
                  <h2 className="text-xl font-display font-bold mb-8">System Actions</h2>
                  <div className="space-y-3">
                    {[
                      { label: 'Restart Services', icon: RefreshCcw, action: () => handleRestart('All Services') },
                      { label: 'Clear Cache', icon: Trash2, action: () => handleRestart('Cache Cluster') },
                      { label: 'Flush CDN', icon: ExternalLink, action: () => handleRestart('Edge CDN') },
                    ].map(a => (
                      <button key={a.label} onClick={a.action} className="w-full flex items-center justify-between p-4 bg-gray-50/50 border border-gray-100 rounded-2xl text-sm font-bold text-gray-700 hover:bg-white hover:shadow-premium hover:border-brand-blue/10 transition-all group">
                        <div className="flex items-center gap-3">
                          <a.icon className="w-4 h-4 text-gray-400 group-hover:text-brand-blue" />
                          {a.label}
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
             </div>
          </div>
        )}

        {activeTab === 'Services' && (
          <div className="glass-card rounded-[32px] overflow-hidden border-none shadow-premium bg-white">
            <div className="p-8 border-b border-gray-50">
              <h2 className="text-xl font-display font-bold text-gray-900">Manage Services</h2>
              <p className="text-xs text-gray-400 font-medium mt-1">Real-time status and control of environment stack components.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Service Name</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Version</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Uptime</th>
                    <th className="px-8 py-5"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {mockServices.map((service, i) => (
                    <tr key={i} className="group hover:bg-gray-50/50 transition-colors">
                      <td className="px-8 py-5">
                        <span className="text-sm font-bold text-brand-navy">{service.name}</span>
                      </td>
                      <td className="px-8 py-5">
                        <code className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-500">{service.version}</code>
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-2">
                          <div className={cn("w-1.5 h-1.5 rounded-full", service.status === 'Healthy' ? "bg-brand-success" : "bg-brand-warning")} />
                          <span className={cn("text-xs font-bold", service.status === 'Healthy' ? "text-brand-success" : "text-brand-warning")}>{service.status}</span>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-xs text-gray-400 font-medium">{service.uptime}</td>
                      <td className="px-8 py-5 text-right">
                        <button 
                          onClick={() => handleRestart(service.name)}
                          className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-[10px] font-bold text-gray-400 hover:text-brand-blue hover:border-brand-blue/30 shadow-sm transition-all"
                        >
                          Restart
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'Access' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[32px] shadow-card overflow-hidden">
              <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-display font-bold">SSH Access</h2>
                  <p className="text-xs text-gray-400 font-medium">Manage keys authorized for this environment.</p>
                </div>
                <button className="h-9 px-4 bg-brand-navy text-white text-[10px] font-bold rounded-lg flex items-center gap-2">
                  <Plus className="w-3.5 h-3.5" /> Add User
                </button>
              </div>
              <div className="p-4">
                {[
                  { user: 'catherine_s', key: 'MacBook Pro Personal', added: 'Oct 12' },
                  { user: 'arsh_bot', key: 'CI/CD Deploy Key', added: 'Sep 30' },
                ].map((u, i) => (
                  <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-navy">{u.user}</p>
                        <p className="text-[10px] text-gray-400 font-medium">{u.key}</p>
                      </div>
                    </div>
                    <button className="p-2 text-gray-300 hover:text-brand-error transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[32px] shadow-card p-8">
              <h2 className="text-xl font-display font-bold mb-2">SFTP Credentials</h2>
              <p className="text-xs text-gray-400 font-medium mb-8">Direct file access via encrypted SFTP.</p>
              
              <div className="space-y-6">
                {[
                  { label: 'Host', value: 'sftp.corefinity.io' },
                  { label: 'Username', value: 'corefinity_admin' },
                  { label: 'Password', value: '••••••••••••••••', revealable: true },
                  { label: 'Port', value: '22' },
                ].map((cred, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50/50 border border-gray-100 rounded-2xl">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{cred.label}</p>
                      <p className="text-sm font-mono font-bold text-brand-navy">{cred.value}</p>
                    </div>
                    <div className="flex items-center gap-1">
                       {cred.revealable && (
                         <button className="p-2 text-gray-400 hover:text-brand-blue transition-colors">
                           <Eye className="w-4 h-4" />
                         </button>
                       )}
                       <button className="p-2 text-gray-400 hover:text-brand-blue transition-colors">
                         <Copy className="w-4 h-4" />
                       </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Settings' && (
          <div className="max-w-4xl space-y-8">
            <div className="bg-white rounded-[32px] shadow-card p-10">
               <h2 className="text-xl font-display font-bold mb-8">Environment Configuration</h2>
               <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Environment Name</label>
                    <input type="text" defaultValue="Corefinity-Main-Store" className="w-full h-12 px-5 bg-gray-50 border border-transparent rounded-xl text-sm font-bold focus:outline-none focus:bg-white focus:border-brand-blue transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">PHP Version</label>
                    <select className="w-full h-12 px-5 bg-gray-50 border border-transparent rounded-xl text-sm font-bold focus:outline-none focus:bg-white focus:border-brand-blue transition-all appearance-none">
                      <option>PHP 8.2 (Recommended)</option>
                      <option>PHP 8.1</option>
                      <option>PHP 8.0</option>
                      <option>PHP 7.4 (Legacy)</option>
                    </select>
                  </div>
               </div>

               <div className="space-y-4">
                  {[
                    { label: 'Object Caching (Redis)', desc: 'Store frequently used data in memory for sub-millisecond response times.', enabled: true },
                    { label: 'Edge CDN Delivery', desc: 'Accelerate static assets via global edge network with automatic SSL.', enabled: true },
                    { label: 'Development Mode', desc: 'Bypass caching and enable detailed error reporting for debugging.', enabled: false },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-gray-50/50 rounded-2xl border border-gray-100">
                      <div className="max-w-md">
                        <p className="text-sm font-bold text-brand-navy mb-0.5">{s.label}</p>
                        <p className="text-xs text-gray-400 font-medium">{s.desc}</p>
                      </div>
                      <button className={cn(
                        "w-12 h-6 rounded-full relative transition-all duration-500",
                        s.enabled ? "bg-brand-success" : "bg-gray-200"
                      )}>
                        <div className={cn(
                          "absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-500 shadow-sm",
                          s.enabled ? "right-1" : "left-1"
                        )} />
                      </button>
                    </div>
                  ))}
               </div>

               <div className="flex justify-end pt-10">
                  <button className="px-10 py-3 bg-brand-navy text-white font-bold rounded-xl shadow-premium hover:bg-brand-blue hover:scale-105 transition-all text-sm">Save Configuration</button>
               </div>
            </div>

            <div className="bg-brand-error/5 border border-brand-error/10 rounded-[32px] p-10 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-display font-bold text-brand-error mb-1">Danger Zone</h3>
                <p className="text-xs text-brand-error/60 font-medium">Irreversible actions that affect live infrastructure.</p>
              </div>
              <button className="px-6 py-3 bg-brand-error text-white text-xs font-bold rounded-xl shadow-sm hover:bg-[#D4344E] transition-all">Delete Environment</button>
            </div>
          </div>
        )}

        {activeTab === 'Backups' && (
          <div className="bg-white rounded-[32px] shadow-card overflow-hidden">
             <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-display font-bold">Snapshots & Backups</h2>
                  <p className="text-xs text-gray-400 font-medium">Automated daily backups and manual system snapshots.</p>
                </div>
                <button className="h-10 px-6 bg-brand-blue text-white text-xs font-bold rounded-xl shadow-premium flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Create Snapshot
                </button>
             </div>
             <div className="p-8 text-center py-20">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                  <Database className="w-8 h-8" />
                </div>
                <p className="text-gray-400 font-medium mb-1">Backups table is currently loading data.</p>
                <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">Integrating with AWS S3 Storage...</p>
             </div>
          </div>
        )}
      </div>

      <ConfirmationModal 
        isOpen={isRestartModalOpen}
        onClose={() => setIsRestartModalOpen(false)}
        onConfirm={confirmRestart}
        isLoading={isRestarting}
        title={`Restart ${selectedService}?`}
        description="This action will momentarily interrupt service availability for this environment. Are you sure you want to proceed?"
        confirmLabel="Restart Service"
        variant="warning"
      />
    </DashboardLayout>
  );
}
