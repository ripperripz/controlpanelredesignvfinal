'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  Server, 
  Ticket, 
  Rocket, 
  ShieldCheck, 
  ArrowUpRight, 
  Search,
  Plus,
  Key,
  Shield,
  Clock,
  ExternalLink,
  ChevronRight,
  MoreVertical,
  Play
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

import Link from 'next/link';

const kpis = [
  { label: 'Active Environments', value: '12', trend: '+2 this month', icon: Server, variant: 'blue' },
  { label: 'Open Tickets', value: '5', trend: '3 critical', icon: Ticket, variant: 'orange' },
  { label: 'Deployments Today', value: '24', trend: 'last 2h ago', icon: Rocket, variant: 'purple' },
  { label: 'Uptime Average', value: '99.98%', trend: '99.9% SLA', icon: ShieldCheck, variant: 'green' },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* Header */}
      <header className="mb-12">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-gray-900 tracking-tight mb-3"
        >
          Good morning, Catherine <span className="text-brand-blue">.</span>
        </motion.h1>
        <p className="text-gray-500 font-medium text-lg">Your global infrastructure is healthy and performing at peak efficiency.</p>
      </header>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {kpis.map((kpi, i) => {
          const href = kpi.label === 'Active Environments' ? '/environments' : 
                       kpi.label === 'Open Tickets' ? '/tickets' : 
                       kpi.label === 'Deployments Today' ? '/deployments' : '#';
          
          return (
            <Link key={kpi.label} href={href} className="block">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-10 rounded-3xl h-full flex flex-col items-start"
              >
                <div className="flex items-center justify-between w-full mb-10">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm shadow-black/5",
                    kpi.variant === 'blue' && "bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white",
                    kpi.variant === 'orange' && "bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white",
                    kpi.variant === 'green' && "bg-brand-success/10 text-brand-success group-hover:bg-brand-success group-hover:text-white",
                    kpi.variant === 'purple' && "bg-indigo-100 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white"
                  )}>
                    <kpi.icon className="w-7 h-7" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-brand-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <div className="mt-auto space-y-2">
                  <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">{kpi.label}</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-display font-bold text-gray-900 tracking-tighter group-hover:text-brand-blue transition-colors duration-500">{kpi.value}</span>
                    <div className={cn(
                      "text-[9px] font-bold px-2 py-1 rounded-lg border",
                      kpi.variant === 'orange' ? "bg-brand-error/5 text-brand-error border-brand-error/10" : "bg-brand-success/5 text-brand-success border-brand-success/10"
                    )}>{kpi.trend}</div>
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { label: 'New Deployment', icon: Rocket, href: '/deployments', color: 'bg-brand-orange' },
          { label: 'Open Ticket', icon: Ticket, href: '/tickets', color: 'bg-brand-navy' },
          { label: 'Add SSH Key', icon: Key, href: '/ssh-keys', color: 'bg-brand-blue' },
          { label: 'Firewall Settings', icon: Shield, href: '/profile/firewall', color: 'bg-brand-success' },
        ].map((action, i) => (
          <Link key={i} href={action.href}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="group p-6 bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-premium transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform group-hover:scale-110 duration-500",
                action.color
              )}>
                <action.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-gray-900">{action.label}</span>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (60%) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Recent Deployments */}
          <div className="glass-card rounded-[32px] overflow-hidden border-none shadow-premium">
            <div className="flex items-center justify-between p-8 border-b border-gray-50/50">
              <div>
                <h2 className="text-xl font-display font-bold text-gray-900 tracking-tight">Recent Infrastructure Jobs</h2>
                <p className="text-xs text-gray-400 font-medium mt-1">Live updates from your CI/CD pipelines.</p>
              </div>
              <Link href="/deployments" className="h-10 px-6 flex items-center justify-center rounded-xl bg-gray-50 text-gray-500 text-xs font-bold hover:bg-brand-blue hover:text-white transition-all duration-300">
                View History
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50/30">
                    <th className="text-left py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Environment</th>
                    <th className="text-left py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Branch</th>
                    <th className="text-left py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                    <th className="text-left py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Duration</th>
                    <th className="text-right py-5 px-8"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50/50">
                  {[
                    { id: '1', env: 'Production', branch: 'main', status: 'Success', time: '12m ago', color: 'bg-brand-success', duration: '2m 14s' },
                    { id: '2', env: 'Staging', branch: 'feat/checkout', status: 'Running', time: '1h ago', color: 'bg-brand-blue', duration: '1m 02s' },
                    { id: '3', env: 'Development', branch: 'fix/navbar', status: 'Failed', time: '4h ago', color: 'bg-brand-error', duration: '45s' },
                    { id: '4', env: 'Production', branch: 'main', status: 'Success', time: '1d ago', color: 'bg-brand-success', duration: '2m 05s' },
                  ].map((row, i) => (
                    <tr 
                      key={i} 
                      className="hover:bg-brand-blue/[0.02] transition-colors group cursor-pointer" 
                      onClick={() => window.location.href = `/deployments/DP-${8920 + i}`}
                    >
                      <td className="py-5 px-8">
                        <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white border border-gray-100 text-gray-500 uppercase tracking-wider">{row.env}</span>
                      </td>
                      <td className="py-5 px-8">
                        <div className="flex items-center gap-2">
                          <code className="text-xs font-mono text-gray-600 bg-gray-50 px-2 py-0.5 rounded-md">{row.branch}</code>
                        </div>
                      </td>
                      <td className="py-5 px-8">
                        <div className="flex items-center gap-2.5">
                          <div className={cn("w-1.5 h-1.5 rounded-full shadow-sm", row.color, row.status === 'Running' && "pulse-live ring-4 ring-brand-blue/10")} />
                          <span className={cn(
                            "text-xs font-bold",
                            row.status === 'Success' && "text-brand-success",
                            row.status === 'Running' && "text-brand-blue",
                            row.status === 'Failed' && "text-brand-error"
                          )}>{row.status}</span>
                        </div>
                      </td>
                      <td className="py-5 px-8 text-xs text-gray-400 font-medium tracking-tight">
                        <div className="flex flex-col">
                          <span className="text-gray-700 font-bold">{row.duration}</span>
                          <span className="text-[10px]">{row.time}</span>
                        </div>
                      </td>
                      <td className="py-5 px-8 text-right">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 text-gray-300 group-hover:bg-brand-blue group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column (40%) */}
        <div className="lg:col-span-4 space-y-8">
          {/* Environment Health Summary */}
          <div className="glass-card rounded-[32px] p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-display font-bold text-gray-900 tracking-tight">System Health</h2>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-success pulse-live" />
                <span className="text-[10px] font-bold text-brand-success uppercase tracking-widest">All Services Up</span>
              </div>
            </div>
            
            <div className="space-y-3">
              {[
                { name: 'Corefinity-Prod', metric: '99.99%', sub: '42ms latency', status: 'Live' },
                { name: 'Magento-Store-Stg', metric: '99.85%', sub: '124ms latency', status: 'Live' },
                { name: 'Laravel-App-UAT', metric: '98.24%', sub: 'Degraded', status: 'Warning' },
              ].map((env, i) => (
                <div key={i} className="p-5 bg-white/40 border border-white/60 rounded-2xl flex items-center justify-between group hover:border-brand-blue/20 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold shadow-sm",
                      env.status === 'Live' ? "bg-brand-success/10 text-brand-success" : "bg-brand-orange/10 text-brand-orange"
                    )}>
                      {env.name[0]}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 leading-tight">{env.name}</h4>
                      <p className="text-[10px] text-gray-400 font-medium">{env.sub}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-display font-bold text-gray-900">{env.metric}</div>
                    <div className={cn(
                      "text-[9px] font-bold uppercase",
                      env.status === 'Live' ? "text-brand-success" : "text-brand-orange"
                    )}>{env.status}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/environments" className="block w-full mt-8 py-3 text-center bg-gray-900 text-white text-xs font-bold rounded-2xl hover:bg-brand-blue transition-all duration-500 shadow-premium">
              Manage Infrastructure
            </Link>
          </div>

          {/* Quick Support Activity */}
          <div className="glass-card rounded-[32px] p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-display font-bold text-gray-900 tracking-tight">Active Support</h2>
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-brand-navy flex items-center justify-center text-[8px] font-bold text-white uppercase">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-5">
              {[
                { id: 'T-2914', title: 'Checkout 500 Errors', time: '2h ago', level: 'Critical' },
                { id: 'T-2915', title: 'SSL Renewal Failed', time: '5h ago', level: 'High' },
              ].map((ticket, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{ticket.id}</span>
                    <span className={cn(
                      "text-[9px] font-bold border px-1.5 py-0.5 rounded-md",
                      ticket.level === 'Critical' ? "text-brand-error border-brand-error/10 bg-brand-error/5" : "text-brand-orange border-brand-orange/10 bg-brand-orange/5"
                    )}>{ticket.level}</span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-brand-blue transition-colors font-display tracking-tight leading-tight">{ticket.title}</h4>
                  <p className="text-[10px] text-gray-400 mt-1 font-medium italic">Assigned to Sam Watson • {ticket.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
