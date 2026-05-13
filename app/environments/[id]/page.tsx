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
  ChevronDown,
  Search,
  X,
  Edit2,
  Mail,
  Zap,
  Bell,
  Shield,
  Play,
  Pause,
  Monitor,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

import { ConfirmationModal } from '@/components/ConfirmationModal';

const tabs = [
  'General', 'Pods', 'Nodes', 'Deployments', 'Pipelines', 'Emails', 
  'Cache Warmer', 'Actions', 'Diagnostics', 'Notifications', 
  'Autoscaler', 'Monitors', 'Quick Actions', 'Firewall'
];

const mockServices = [
  { name: 'PHP 8.2-FPM', status: 'Healthy', version: '8.2.12', uptime: '14d 2h' },
  { name: 'Nginx', status: 'Healthy', version: '1.24.0', uptime: '45d 12h' },
  { name: 'Redis', status: 'Healthy', version: '7.0.12', uptime: '14d 2h' },
  { name: 'MySQL 8.0', status: 'Warning', version: '8.0.34', uptime: '2d 4h' },
];

export default function EnvironmentDetail() {
  const [activeTab, setActiveTab] = useState('General');
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
        <Link href="/" className="hover:text-brand-orange">Home</Link> <ChevronRight className="w-3 h-3" />
        <Link href="/environments" className="hover:text-brand-orange">Environments</Link> <ChevronRight className="w-3 h-3" />
        <span className="text-brand-navy">Production Environment</span>
      </nav>

      <header className="mb-8 flex items-center justify-between gap-4">
        <h1 className="text-xl font-display font-bold text-brand-navy tracking-tight">Environment Info</h1>
        <div className="flex items-center gap-2">
          <select className="h-10 px-4 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all min-w-[200px]">
            <option>Select Action</option>
          </select>
          <button className="h-10 w-10 flex items-center justify-center bg-brand-orange/10 text-brand-orange rounded-lg hover:bg-brand-orange/20 transition-all">
            <Rocket className="w-4 h-4 fill-current" />
          </button>
          <button className="h-10 w-10 flex items-center justify-center bg-brand-blue/5 text-brand-blue rounded-lg hover:bg-brand-blue/10 transition-all border border-brand-blue/10">
            <Trash2 className="w-4 h-4" />
          </button>
          <button className="h-10 w-10 flex items-center justify-center bg-brand-orange text-white rounded-lg hover:bg-[#E55A1E] transition-all shadow-sm">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </header>

      <div className="flex border-b border-gray-200 mb-8 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={cn(
            "px-5 py-4 text-[10px] font-bold transition-all relative whitespace-nowrap uppercase tracking-widest",
            activeTab === tab ? "text-brand-navy" : "text-gray-400 hover:text-brand-navy"
          )}>
            {tab}
            {activeTab === tab && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange" />}
          </button>
        ))}
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeTab === 'General' && (
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="p-6 bg-gray-50/50 border-b border-gray-100">
              <h3 className="text-xs font-bold text-brand-blue uppercase tracking-widest">Environment Details</h3>
            </div>
            <div className="divide-y divide-gray-50">
              {[
                { label: 'Name', value: 'Production Environment', type: 'text' },
                { label: 'URL', value: 'manage.corefinity.com', type: 'text' },
                { label: 'Website', value: 'Manage.corefinity.com', type: 'link' },
                { label: 'Namespace', value: '—', type: 'text' },
                { label: 'Provider', value: 'Google Compute Platform', type: 'link' },
                { label: 'Platform', value: 'Laravel', type: 'link' },
                { label: 'Cluster', value: 'cf-europe-west2-cluster-1', type: 'link' },
                { label: 'Environment Type', value: 'Production', type: 'text' },
                { label: 'Infrastructure Type', value: 'SingleHost', type: 'text' },
                { label: 'Monitoring', value: 'Monitoring is enabled', type: 'status' },
                { label: 'Current Availability', value: 'No data', type: 'text' },
                { label: 'SSH Gateway Version', value: 'Version 1', type: 'text' },
                { label: 'SSH Port', value: '5004', type: 'text' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center py-4 px-8 group hover:bg-gray-50/50 transition-colors">
                  <span className="w-full sm:w-64 text-sm font-medium text-brand-blue">{item.label}</span>
                  <div className="flex-1 mt-1 sm:mt-0">
                    {item.type === 'link' ? (
                      <span className="text-sm font-bold text-brand-orange hover:underline cursor-pointer">{item.value}</span>
                    ) : item.type === 'status' ? (
                      <div className="flex items-center gap-2 text-sm font-bold text-brand-navy">
                        <div className="w-2 h-2 bg-brand-success rounded-full" />
                        {item.value}
                      </div>
                    ) : (
                      <span className="text-sm font-bold text-brand-navy">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gray-50/50 border-y border-gray-100 mt-8">
              <h3 className="text-xs font-bold text-brand-blue uppercase tracking-widest">SEO</h3>
            </div>
            <div className="p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center py-2">
                <span className="w-full sm:w-64 text-sm font-medium text-brand-blue">Indexing options</span>
                <select className="flex-1 h-11 px-4 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all">
                  <option>Choose an option</option>
                </select>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center py-2">
                <span className="w-full sm:w-64 text-sm font-medium text-brand-blue">Default address</span>
                <select className="flex-1 h-11 px-4 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all">
                  <option>Choose an option</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Pods' && (
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-blue transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search Pods" 
                    className="h-10 pl-11 pr-4 bg-gray-50 border border-gray-100 rounded-full text-sm focus:outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue/30 transition-all min-w-[300px]" 
                  />
                </div>
              </div>
              <Activity className="w-5 h-5 text-brand-success" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/20 border-b border-gray-100">
                    <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest whitespace-nowrap">Name</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest whitespace-nowrap">Node</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest whitespace-nowrap">Node Type</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest whitespace-nowrap">IP</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest whitespace-nowrap">Age</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest whitespace-nowrap">Containers</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest whitespace-nowrap">CPU</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest whitespace-nowrap">Memory</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest whitespace-nowrap">Status</th>
                    <th className="px-8 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { name: 'adminer-deployment-79cfdb74f8-f6x8z', node: '1-a117bd32-njch', type: 'c4a-standard-16', ip: '10.120.16.17', age: '2w', containers: '1/1', cpu: '1m / 500m', mem: '8Mi / 1024Mi', status: 'Running' },
                    { name: 'adminer-deployment-fb689bfc4-b2tjq', node: '2-0b5d2096-cfmn', type: 'n2-custom-16-102400', ip: '10.40.46.119', age: '4h', containers: '1/1', cpu: '1m / 500m', mem: '5Mi / 1024Mi', status: 'Running' },
                    { name: 'alertmanager-k-prometheus-alertmanager-0', node: '2-49bb9ea7-hppf', type: 'n2d-highmem-8', ip: '10.76.21.16', age: '6mos', containers: '2/2', cpu: '1m', mem: '49283072m', status: 'Running' },
                  ].map((pod, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-8 py-4 text-sm font-bold text-brand-navy whitespace-nowrap">{pod.name}</td>
                      <td className="px-8 py-4 text-sm text-brand-navy font-bold whitespace-nowrap">{pod.node}</td>
                      <td className="px-8 py-4 text-sm text-gray-400 whitespace-nowrap">{pod.type}</td>
                      <td className="px-8 py-4 text-sm text-gray-400 font-mono whitespace-nowrap">{pod.ip}</td>
                      <td className="px-8 py-4 text-sm text-gray-400 whitespace-nowrap">{pod.age}</td>
                      <td className="px-8 py-4 text-sm text-gray-600 whitespace-nowrap">{pod.containers}</td>
                      <td className="px-8 py-4 text-sm text-gray-600 whitespace-nowrap">{pod.cpu}</td>
                      <td className="px-8 py-4 text-sm text-gray-600 whitespace-nowrap">{pod.mem}</td>
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full border-2 border-brand-success flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-brand-success rounded-full" />
                          </div>
                          <span className="text-xs font-bold text-gray-400">{pod.status}</span>
                        </div>
                      </td>
                      <td className="px-8 py-4 text-right">
                        <button className="text-brand-blue hover:scale-110 transition-transform">
                          <Eye className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-50 bg-gray-50/10 flex items-center justify-between">
              <button className="text-sm font-bold text-gray-400 hover:text-brand-blue disabled:opacity-30" disabled>Previous</button>
              <p className="text-xs font-bold text-brand-navy">1-3 of 3</p>
              <button className="text-sm font-bold text-gray-400 hover:text-brand-blue disabled:opacity-30" disabled>Next</button>
            </div>
          </div>
        )}

        {activeTab === 'Nodes' && (
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="p-6 bg-gray-50/10 border-b border-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <h3 className="text-lg font-display font-bold text-brand-navy">Nodes</h3>
                <p className="text-xs text-brand-blue font-bold">Nodes: Last updated 30 seconds ago</p>
              </div>
              <Activity className="w-5 h-5 text-brand-success" />
            </div>
            <div className="p-6 border-b border-gray-50">
               <div className="relative max-w-xs group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-blue transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search" 
                    className="w-full h-10 pl-11 pr-4 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all" 
                  />
               </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/20 border-b border-gray-100">
                    <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest">Name</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest">Internal IP</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest">External IP</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest">Version</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest">Kernel Version</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest">CPU</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest">Memory</th>
                    <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest">Status</th>
                    <th className="px-8 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { name: '1-4a631dbe-96dn', internal: '10.154.1.147', external: '—', version: 'v1.33.8-gke.1026000', kernel: '6.6.113+', cpu: '6687m / 16000m (42%)', mem: '34954Mi / 64189Mi (59%)' },
                    { name: '1-a117bd32-732o', internal: '10.154.0.130', external: '—', version: 'v1.33.8-gke.1026000', kernel: '6.6.113+', cpu: '3364m / 16000m (21%)', mem: '28056Mi / 64189Mi (47%)' },
                    { name: '2-f5c2d627-tnhl', internal: '10.154.1.210', external: '—', version: 'v1.33.5-gke.2019000', kernel: '6.6.113+', cpu: '10225m / 16000m (64%)', mem: '117110Mi / 128573Mi (98%)' },
                  ].map((node, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-8 py-5 text-sm font-bold text-brand-navy">{node.name}</td>
                      <td className="px-8 py-5 text-sm text-gray-500 font-mono">{node.internal}</td>
                      <td className="px-8 py-5 text-sm text-gray-400">{node.external}</td>
                      <td className="px-8 py-5 text-sm text-gray-500">{node.version}</td>
                      <td className="px-8 py-5 text-sm text-gray-400">{node.kernel}</td>
                      <td className="px-8 py-5 text-sm text-gray-600 font-bold">{node.cpu}</td>
                      <td className="px-8 py-5 text-sm text-gray-600 font-bold">{node.mem}</td>
                      <td className="px-8 py-5">
                        <div className="w-5 h-5 rounded-full border-2 border-brand-success flex items-center justify-center">
                          <div className="w-2 h-2 bg-brand-success rounded-full" />
                        </div>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <button className="text-brand-blue hover:scale-110 transition-transform">
                          <Eye className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-50 bg-gray-50/10 flex items-center justify-between">
              <button className="text-sm font-bold text-gray-400 hover:text-brand-blue disabled:opacity-30" disabled>Previous</button>
              <p className="text-xs font-bold text-brand-navy">1-5 of 11</p>
              <button className="text-sm font-bold text-gray-400 hover:text-brand-blue disabled:opacity-30" disabled>Next</button>
            </div>
          </div>
        )}

        {activeTab === 'Deployments' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-card p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-display font-bold text-brand-navy">Deployment Configuration</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-brand-success uppercase tracking-widest">Enabled</span>
                  <button className="text-[10px] font-bold text-brand-orange hover:underline uppercase tracking-widest">Disable Deployment Pipeline</button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  <select className="h-10 px-4 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/10 min-w-[120px]">
                    <option>GIT</option>
                  </select>
                  <select className="h-10 px-4 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/10 min-w-[150px]">
                    <option>Laravel</option>
                  </select>
                  <select className="h-10 px-4 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/10 min-w-[180px]">
                    <option>Github (Corefinity-Main)</option>
                  </select>
                  <select className="h-10 px-4 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/10 min-w-[180px]">
                    <option>corefinity/main-store</option>
                  </select>
                  <div className="flex-1 min-w-[200px] relative">
                    <input type="text" placeholder="Branch" defaultValue="main" className="w-full h-10 px-4 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/10" />
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 px-3 text-gray-400">/</span>
                  </div>
                  <button className="w-10 h-10 flex items-center justify-center bg-brand-error/10 text-brand-error rounded-lg hover:bg-brand-error/20 transition-all">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Git Deployment Type</label>
                     <select className="w-full h-11 px-4 bg-gray-50 border border-gray-100 rounded-lg text-sm font-bold text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/10">
                       <option>Automatic</option>
                       <option>Manual</option>
                     </select>
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Deployment Pipeline Version</label>
                     <select className="w-full h-11 px-4 bg-gray-50 border border-gray-100 rounded-lg text-sm font-bold text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/10">
                       <option>Version 1</option>
                       <option>Version 2 (Beta)</option>
                     </select>
                   </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange" />
                    <span className="text-xs font-bold text-brand-navy group-hover:text-brand-orange transition-colors">Use Default Slack Channel</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                <h3 className="text-lg font-display font-bold text-brand-navy">Deployments</h3>
                <button className="px-6 py-2 bg-brand-orange text-white font-bold rounded-lg text-sm shadow-premium hover:bg-[#E55A1E] transition-all">
                  Create Deployment
                </button>
              </div>
              <div className="p-4 border-b border-gray-50 flex items-center justify-between gap-4">
                <div className="relative max-w-xs flex-1 group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-blue transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search" 
                    className="w-full h-10 pl-11 pr-4 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all" 
                  />
                </div>
                <div className="flex items-center gap-2">
                   <select className="h-9 px-4 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold text-gray-400 focus:outline-none">
                     <option>Select Action</option>
                   </select>
                   <button className="h-9 w-9 flex items-center justify-center bg-brand-orange/10 text-brand-orange rounded-lg">
                     <Rocket className="w-4 h-4" />
                   </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/20 border-b border-gray-100">
                      <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest whitespace-nowrap">Deployment Name</th>
                      <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest whitespace-nowrap">Pipeline</th>
                      <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest whitespace-nowrap">Tasks</th>
                      <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest whitespace-nowrap">Status</th>
                      <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest whitespace-nowrap">Created</th>
                      <th className="px-8 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest whitespace-nowrap">Duration</th>
                      <th className="px-8 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { name: "Merge branch 'feature/add-jack-and-ewan-to-view-nova' into 'main'", pipeline: 'Laravel Deployment Pipeline', tasks: 27, status: 'Succeeded (Current)', created: '2023-11-01 13:13:41', duration: '38 seconds' },
                      { name: 'add jack and ewan to view nova', pipeline: 'Laravel Deployment Pipeline', tasks: 27, status: 'Failed', created: '2023-11-01 13:08:02', duration: '—' },
                    ].map((deploy, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-8 py-5 text-xs font-bold text-brand-navy max-w-xs truncate">{deploy.name}</td>
                        <td className="px-8 py-5 text-xs text-brand-blue font-bold">{deploy.pipeline}</td>
                        <td className="px-8 py-5 text-xs text-gray-500 font-bold">{deploy.tasks}</td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-2">
                            <div className={cn("w-2 h-2 rounded-full", deploy.status.includes('Succeeded') ? "bg-brand-success" : "bg-brand-error")} />
                            <span className={cn("text-xs font-bold", deploy.status.includes('Succeeded') ? "text-brand-success" : "text-brand-error")}>{deploy.status}</span>
                          </div>
                        </td>
                        <td className="px-8 py-5 text-xs text-gray-400 font-medium whitespace-nowrap">{deploy.created}</td>
                        <td className="px-8 py-5 text-xs text-gray-400 font-medium whitespace-nowrap">{deploy.duration}</td>
                        <td className="px-8 py-5 text-right">
                          <div className="flex items-center justify-end gap-2">
                             {deploy.status === 'Failed' && (
                               <button className="px-3 py-1.5 bg-brand-orange text-white text-[10px] font-bold rounded-lg shadow-sm">Retry</button>
                             )}
                             <button className="text-brand-blue p-1.5 hover:bg-brand-blue/5 rounded-lg transition-all"><Eye className="w-4 h-4" /></button>
                             <button className="text-brand-blue p-1.5 hover:bg-brand-blue/5 rounded-lg transition-all"><Edit2 className="w-4 h-4" /></button>
                             <button className="text-brand-error p-1.5 hover:bg-brand-error/5 rounded-lg transition-all"><Trash2 className="w-4 h-4" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Pipelines' && (
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex items-center justify-between">
              <h3 className="text-lg font-display font-bold text-brand-navy">Pipelines</h3>
              <button className="px-6 py-2 bg-brand-orange text-white font-bold rounded-lg text-sm shadow-premium hover:bg-[#E55A1E] transition-all">
                Create Environment Deployment Pipeline
              </button>
            </div>
            <div className="p-4 border-b border-gray-50">
               <div className="relative max-w-xs group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-blue transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search" 
                    className="w-full h-10 pl-11 pr-4 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all" 
                  />
               </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/20 border-b border-gray-100 whitespace-nowrap">
                    <th className="px-6 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest">ID</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest">Notes</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest">Environment</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest">Root Web</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest">Pipeline</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest text-center">Nginx Off</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest text-center">Redis Prefix</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest">Build Commands</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { id: '1395', notes: 'Full Deployment Pipeline for Magento 2 auto generated by Corefinity.', env: 'Production', root: '/var/www_m2/example.co.uk/', pipeline: 'Magento 2', nginxOff: false, redisPrefix: false, customBuild: 'Yes' },
                  ].map((pipe, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-6 py-5 text-sm font-bold text-brand-navy">{pipe.id}</td>
                      <td className="px-6 py-5 text-xs text-gray-500 font-medium max-w-md">{pipe.notes}</td>
                      <td className="px-6 py-5 text-sm font-bold text-brand-blue">{pipe.env}</td>
                      <td className="px-6 py-5 text-xs text-gray-400 font-mono">{pipe.root}</td>
                      <td className="px-6 py-5 text-xs font-bold text-brand-navy">{pipe.pipeline}</td>
                      <td className="px-6 py-5 text-center">
                        <div className="w-5 h-5 mx-auto rounded-full border border-brand-error/30 flex items-center justify-center text-brand-error">
                          <X className="w-3 h-3" />
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <div className="w-5 h-5 mx-auto rounded-full border border-brand-error/30 flex items-center justify-center text-brand-error">
                          <X className="w-3 h-3" />
                        </div>
                      </td>
                      <td className="px-6 py-5 text-xs font-bold text-brand-success">{pipe.customBuild}</td>
                      <td className="px-6 py-5 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                           <button className="text-brand-blue p-1.5 hover:bg-brand-blue/5 rounded-lg transition-all"><Eye className="w-4 h-4" /></button>
                           <button className="text-brand-blue p-1.5 hover:bg-brand-blue/5 rounded-lg transition-all"><Edit2 className="w-4 h-4" /></button>
                           <button className="text-brand-error p-1.5 hover:bg-brand-error/5 rounded-lg transition-all"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-50 bg-gray-50/10 flex items-center justify-between">
              <button className="text-sm font-bold text-gray-400 hover:text-brand-blue disabled:opacity-30" disabled>Previous</button>
              <p className="text-xs font-bold text-brand-navy">1-1 of 1</p>
              <button className="text-sm font-bold text-gray-400 hover:text-brand-blue disabled:opacity-30" disabled>Next</button>
            </div>
          </div>
        )}

        {activeTab === 'Cache Warmer' && (
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="p-8 space-y-12">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <span className="text-sm font-bold text-brand-navy">Status</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Enabled</span>
                    <button className="text-xs font-bold text-brand-orange hover:underline uppercase tracking-widest">Disable</button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="text-sm font-bold text-brand-navy">Sitemaps</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Auto Generated</span>
                      <button className="text-xs font-bold text-brand-orange hover:underline uppercase tracking-widest">Enable manual mode</button>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-brand-orange hover:underline uppercase tracking-widest">Run now</button>
                </div>
                <div className="p-4 bg-brand-blue/5 border border-brand-blue/10 rounded-lg">
                   <p className="text-xs text-brand-blue font-medium text-center">Unable to find a suitable sitemap in robots.txt file, Please switch to manual mode and enter your sitemap URL to activate the cache warmer</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-brand-navy">Cache warming schedule</span>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Between</span>
                  <div className="flex items-center gap-2">
                    <select className="h-10 px-3 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold text-brand-navy focus:outline-none">
                      <option>1:00</option>
                    </select>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">and</span>
                    <select className="h-10 px-3 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold text-brand-navy focus:outline-none">
                      <option>6:00</option>
                    </select>
                  </div>
                  <button className="w-10 h-10 flex items-center justify-center bg-brand-orange text-white rounded-lg hover:bg-[#E55A1E] transition-all shadow-sm">
                    <Rocket className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Emails' && (
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="p-6 bg-gray-50/50 border-b border-gray-100">
              <h3 className="text-xs font-bold text-brand-blue uppercase tracking-widest">Email Configuration</h3>
            </div>
            <div className="divide-y divide-gray-50">
              {[
                { label: 'SMTP Details', value: '—', type: 'text' },
                { label: 'Transactional Emails', value: 'Pending setup', type: 'status', color: 'text-brand-error' },
                { label: 'Outgoing emails', value: '—', type: 'text' },
                { label: 'Default outgoing email address', value: 'sales@manage.corefinity.com', type: 'text' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center py-5 px-8 group hover:bg-gray-50/50 transition-colors">
                  <span className="w-full sm:w-64 text-sm font-medium text-brand-blue">{item.label}</span>
                  <div className="flex-1 mt-1 sm:mt-0">
                    <span className={cn("text-sm font-bold", item.color || "text-brand-navy")}>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Actions' && (
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="p-4 border-b border-gray-50 flex items-center justify-between">
              <div className="relative max-w-xs flex-1 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-blue transition-colors" />
                <input type="text" placeholder="Search" className="w-full h-10 pl-11 pr-4 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-gray-50/20 border-b border-gray-100 whitespace-nowrap">
                    <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest">Name</th>
                    <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest">Company</th>
                    <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest">User</th>
                    <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest">Duration</th>
                    <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest">Created At</th>
                    <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest">Status</th>
                    <th className="px-8 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-8 py-5 font-bold text-brand-navy">Environment Firewall Update</td>
                    <td className="px-8 py-5 font-bold text-brand-blue">Test company 123</td>
                    <td className="px-8 py-5 font-bold text-brand-navy">Pemith Fonseka</td>
                    <td className="px-8 py-5 text-gray-400">6s</td>
                    <td className="px-8 py-5 text-gray-400">2025-12-04 11:43:28</td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-success" />
                        <span className="font-bold text-brand-success">Finished</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right"><button className="text-brand-blue p-2 hover:bg-brand-blue/5 rounded-lg transition-all"><Eye className="w-4 h-4" /></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'Diagnostics' && (
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="p-4 border-b border-gray-50 flex items-center justify-between">
              <div className="relative max-w-xs flex-1 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-blue transition-colors" />
                <input type="text" placeholder="Search" className="w-full h-10 pl-11 pr-4 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-gray-50/20 border-b border-gray-100 whitespace-nowrap">
                    <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest">Task</th>
                    <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest">Last Fetched</th>
                    <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest">Result</th>
                    <th className="px-8 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { task: 'Nginx Logs', fetched: '4 years ago', result: 'ERROR: No logs found', isError: true },
                    { task: 'Access Server Attached', fetched: '8 hours ago', result: 'ERROR: Access server is missing', isError: true },
                    { task: 'Load Balancer Logs', fetched: '4 years ago', result: 'ERROR: Load balancer is not attached.', isError: true },
                  ].map((diag, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-8 py-5 font-bold text-brand-navy">{diag.task}</td>
                      <td className="px-8 py-5 text-gray-400">{diag.fetched}</td>
                      <td className="px-8 py-5">
                        <span className={cn("font-bold", diag.isError ? "text-brand-error" : "text-brand-success")}>{diag.result}</span>
                      </td>
                      <td className="px-8 py-5 text-right whitespace-nowrap">
                        <button className="px-4 py-1.5 bg-brand-orange text-white text-[10px] font-bold rounded-lg shadow-sm">Recheck</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'Notifications' && (
          <div className="bg-white rounded-2xl shadow-card p-12 text-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
               <Bell className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-display font-bold text-brand-navy mb-2">Notifications</h3>
            <p className="text-gray-400 font-medium max-w-sm mx-auto">Stay updated with environment events and alerts.</p>
          </div>
        )}

        {activeTab === 'Autoscaler' && (
          <div className="bg-white rounded-2xl shadow-card p-8">
            <div className="flex items-center gap-4 mb-8">
              <button className="px-6 py-2 bg-gray-50 text-brand-navy font-bold rounded-xl border border-gray-100">Status</button>
              <button className="px-6 py-2 bg-brand-orange text-white font-bold rounded-xl shadow-premium">Graphs</button>
            </div>
            <div className="flex items-center gap-2 mb-12">
               {['Hour', 'Day', 'Week', 'Month'].map(t => (
                 <button key={t} className={cn(
                   "px-6 py-2 text-xs font-bold rounded-xl transition-all",
                   t === 'Day' ? "bg-brand-orange text-white" : "bg-white text-brand-navy border border-gray-100 hover:bg-gray-50"
                 )}>{t}</button>
               ))}
            </div>
            <div className="py-20 text-center space-y-4">
               <RefreshCcw className="w-10 h-10 text-brand-error/20 mx-auto animate-spin" />
               <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">There was an error</p>
               <p className="text-[10px] font-mono text-brand-error/60">JSON.PARSE: UNEXPECTED CHARACTER AT LINE 1 COLUMN 1 OF THE JSON DATA</p>
            </div>
          </div>
        )}

        {activeTab === 'Monitors' && (
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="p-4 border-b border-gray-50">
              <div className="relative max-w-xs group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-blue transition-colors" />
                <input type="text" placeholder="Search" className="w-full h-10 pl-11 pr-4 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-gray-50/20 border-b border-gray-100 whitespace-nowrap">
                    <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest">URL</th>
                    <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest text-center">Frequency</th>
                    <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest text-center">Status</th>
                    <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest text-right">View</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { url: 'https://www.example.co.uk/checkout/cart/', freq: '60s', status: 'Up' },
                    { url: 'https://www.example.co.uk/blizzard-hw60-white-fridge', freq: '60s', status: 'Up' },
                  ].map((mon, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-8 py-5 font-medium text-brand-blue underline">{mon.url}</td>
                      <td className="px-8 py-5 text-center text-gray-400 font-bold">{mon.freq}</td>
                      <td className="px-8 py-5 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-success" />
                          <span className="font-bold text-brand-success">{mon.status}</span>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-right">
                         <div className="flex items-center justify-end gap-2">
                           <button className="p-2 bg-brand-orange text-white rounded-lg shadow-sm hover:scale-105 transition-all"><Pause className="w-4 h-4" /></button>
                           <button className="p-2 text-brand-blue hover:bg-brand-blue/5 rounded-lg transition-all"><Monitor className="w-4 h-4" /></button>
                           <button className="text-brand-blue p-2 hover:bg-brand-blue/5 rounded-lg transition-all"><Eye className="w-4 h-4" /></button>
                         </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'Quick Actions' && (
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="divide-y divide-gray-50">
              {[
                'Restart Web Pods', 'Restart Database Pods', 'Restart Redis Pods', 
                'Restart RabbitMQ Pods', 'Restart Elastic Search Pods', 'Restart Cli', 'Restart Varnish'
              ].map((action, i) => (
                <div key={i} className="flex items-center justify-between p-6 hover:bg-gray-50/50 transition-colors group">
                  <span className="text-sm font-bold text-brand-navy">{action}</span>
                  <button className="px-8 py-2 bg-brand-orange text-white text-xs font-bold rounded-xl shadow-premium hover:bg-[#E55A1E] transition-all">Run</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Firewall' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <div className="p-8 border-b border-gray-50">
                <h3 className="text-lg font-display font-bold text-brand-navy mb-1">Whitelisted IPs</h3>
                <p className="text-xs text-gray-400 font-medium">You have granted network access only to these specific IP addresses.</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[10px]">
                  <thead>
                    <tr className="bg-gray-50/20 border-b border-gray-100 whitespace-nowrap">
                      <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest">IP</th>
                      <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest">Type</th>
                      <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest text-center">Access Type</th>
                      <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest">Added By</th>
                      <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest">Status</th>
                      <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest">Comment</th>
                      <th className="px-8 py-4 font-bold text-brand-blue uppercase tracking-widest">Created At</th>
                      <th className="px-8 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-8 py-5 font-bold text-brand-navy">255.255.255.255</td>
                      <td className="px-8 py-5 text-gray-500">Company (Corefinity)</td>
                      <td className="px-8 py-5 text-center font-bold text-brand-blue">SSH</td>
                      <td className="px-8 py-5 text-brand-navy font-bold">Catherine Jarosz</td>
                      <td className="px-8 py-5 text-gray-400">Finished</td>
                      <td className="px-8 py-5 text-gray-400 italic">Test IP</td>
                      <td className="px-8 py-5 text-gray-400">2025-07-14 08:55:20</td>
                      <td className="px-8 py-5 text-right"><button className="text-brand-blue font-bold hover:underline">Edit</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-card p-8">
              <div className="flex items-center justify-between mb-8">
                 <div>
                    <h3 className="text-lg font-display font-bold text-brand-navy mb-1">Whitelist a new IP in Environment (Production)</h3>
                    <p className="text-xs text-gray-400 font-medium">Only IPv4 addresses are supported at this time.</p>
                 </div>
                 <button className="px-6 py-2 bg-brand-orange text-white font-bold rounded-xl shadow-premium flex items-center gap-2">
                   <Plus className="w-4 h-4" /> Add a new IP
                 </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="md:col-span-1">
                  <input type="text" placeholder="P e.g: 255.255.255.255" className="w-full h-11 px-4 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-blue/10" />
                </div>
                <div className="md:col-span-1">
                  <select className="w-full h-11 px-4 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10">
                    <option>SSH</option>
                  </select>
                </div>
                <div className="md:col-span-1">
                  <input type="text" placeholder="Comment" className="w-full h-11 px-4 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-blue/10" />
                </div>
                <div className="md:col-span-1 flex justify-end">
                   <button className="w-11 h-11 bg-brand-success text-white rounded-xl shadow-sm hover:scale-105 transition-all flex items-center justify-center">
                     <Check className="w-5 h-5" />
                   </button>
                </div>
              </div>
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
