'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  Server, 
  ExternalLink, 
  Search, 
  Plus, 
  MoreVertical, 
  Shield, 
  Cpu, 
  Database,
  Globe,
  Settings,
  ChevronRight,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

const environments = [
  { 
    id: 'env-1',
    name: 'Corefinity-Prod', 
    type: 'Production',
    region: 'US-East (Virginia)',
    uptime: '99.99%', 
    cpu: '12%', 
    ram: '4.2GB / 16GB',
    ip: '34.120.91.241',
    status: 'Healthy',
    url: 'https://corefinity.io'
  },
  { 
    id: 'env-2',
    name: 'Magento-Store-Stg', 
    type: 'Staging',
    region: 'EU-West (Ireland)',
    uptime: '99.85%', 
    cpu: '45%', 
    ram: '8.1GB / 16GB',
    ip: '35.241.11.82',
    status: 'Warning',
    url: 'https://stg.corefinity.io'
  },
  { 
    id: 'env-3',
    name: 'Laravel-App-UAT', 
    type: 'UAT',
    region: 'US-East (Virginia)',
    uptime: '98.24%', 
    cpu: '8%', 
    ram: '2.1GB / 8GB',
    ip: '34.90.112.5',
    status: 'Healthy',
    url: 'https://uat.corefinity.io'
  },
  { 
    id: 'env-4',
    name: 'Dev-Sandbox', 
    type: 'Development',
    region: 'Asia-South (Mumbai)',
    uptime: '0.00%', 
    cpu: '-', 
    ram: '-',
    ip: '104.18.2.141',
    status: 'Offline',
    url: 'https://dev.corefinity.io'
  },
];

export default function Environments() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const filteredEnvs = environments.filter(env => 
    env.name.toLowerCase().includes(search.toLowerCase()) ||
    env.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-display font-bold text-gray-900 tracking-tight mb-2">Environments</h1>
          <p className="text-gray-500 font-medium">Manage and monitor your cloud instances globally.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Filter environments..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 h-11 w-64 bg-white border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue/30 transition-all shadow-sm"
            />
          </div>
          <button className="h-11 px-6 bg-brand-blue text-white rounded-xl font-bold text-sm shadow-premium hover:bg-brand-blue/90 transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Environment
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredEnvs.map((env, i) => (
            <motion.div
              layout
              key={env.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={() => router.push(`/environments/${env.id}`)}
              transition={{ delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-[32px] p-10 overflow-hidden cursor-pointer group relative"
            >
              {/* Status Indicator Bar */}
              <div className={cn(
                "absolute top-0 left-0 w-1.5 h-full transition-colors duration-500",
                env.status === 'Healthy' ? "bg-brand-success" : env.status === 'Warning' ? "bg-brand-warning" : "bg-brand-error"
              )} />

              <div className="flex items-start justify-between mb-8">
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500",
                    env.status === 'Healthy' ? "bg-brand-success/5 text-brand-success" : env.status === 'Warning' ? "bg-brand-warning/5 text-brand-warning" : "bg-brand-error/5 text-brand-error"
                  )}>
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors">{env.name}</h3>
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-bold rounded uppercase">{env.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
                      <Globe className="w-3.5 h-3.5" />
                      {env.region}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href={env.url} 
                    target="_blank" 
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 text-gray-400 hover:text-brand-blue transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button 
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 text-gray-400 hover:text-brand-blue transition-colors rounded-lg hover:bg-gray-50"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Uptime</p>
                  <div className="flex items-center gap-2">
                    <Activity className={cn("w-3.5 h-3.5", env.status === 'Healthy' ? "text-brand-success" : "text-gray-300")} />
                    <span className="text-sm font-bold text-gray-900">{env.uptime}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">CPU LOAD</p>
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-brand-blue" />
                    <span className="text-sm font-bold text-gray-900">{env.cpu}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Memory</p>
                  <div className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-brand-purple" />
                    <span className="text-sm font-bold text-gray-900">{env.ram}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-gray-400" />
                  <code className="text-xs font-mono text-gray-400">{env.ip}</code>
                </div>
                <button className="flex items-center gap-2 text-xs font-bold text-brand-blue group-hover:translate-x-1 transition-transform">
                  Configure Instance
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
}
