'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  Globe, 
  MapPin, 
  ChevronRight, 
  Activity, 
  Shield, 
  Zap,
  Server
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const locations = [
  { id: 'europe-west2', name: 'London, UK', status: 'Optimal', latency: '12ms', load: '42%', color: 'bg-brand-blue' },
  { id: 'us-east1', name: 'South Carolina, US', status: 'Good', latency: '68ms', load: '28%', color: 'bg-emerald-500' },
  { id: 'asia-east1', name: 'Taiwan', status: 'Warning', latency: '142ms', load: '89%', color: 'bg-brand-orange' },
  { id: 'europe-west3', name: 'Frankfurt, DE', status: 'Optimal', latency: '18ms', load: '35%', color: 'bg-brand-blue' },
];

export default function ServerLocationsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-brand-navy tracking-tight mb-2">
            Global Infrastructure
          </h1>
          <p className="text-sm font-medium text-gray-400">Real-time status and latency of all Google Cloud server regions.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* World Map Container */}
        <div className="lg:col-span-8 bg-brand-navy rounded-[40px] p-1 shadow-premium overflow-hidden relative min-h-[500px] group">
           <div className="absolute inset-0 bg-[#0F172A] opacity-50" />
           
           {/* Simulated Map Background */}
           <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
              <Globe className="w-[600px] h-[600px] text-brand-blue animate-pulse-slow" />
           </div>

           {/* Location Pins */}
           <div className="relative z-10 w-full h-full p-12">
              {/* London Pin */}
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} 
                className="absolute top-[35%] left-[45%] group/pin cursor-pointer"
              >
                 <div className="relative">
                    <div className="absolute inset-0 bg-brand-blue blur-xl opacity-40 group-hover/pin:opacity-100 transition-opacity" />
                    <div className="w-4 h-4 bg-brand-blue rounded-full border-2 border-white relative z-10" />
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl min-w-[120px] opacity-0 group-hover/pin:opacity-100 transition-all scale-95 group-hover/pin:scale-100">
                       <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">London, UK</p>
                       <p className="text-[9px] text-brand-blue font-bold">Latency: 12ms</p>
                    </div>
                 </div>
              </motion.div>

              {/* Taiwan Pin */}
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}
                className="absolute top-[50%] left-[75%] group/pin cursor-pointer"
              >
                 <div className="relative">
                    <div className="absolute inset-0 bg-brand-orange blur-xl opacity-40 group-hover/pin:opacity-100 transition-opacity" />
                    <div className="w-4 h-4 bg-brand-orange rounded-full border-2 border-white relative z-10" />
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl min-w-[120px] opacity-0 group-hover/pin:opacity-100 transition-all scale-95 group-hover/pin:scale-100">
                       <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">Taiwan</p>
                       <p className="text-[9px] text-brand-orange font-bold">Latency: 142ms</p>
                    </div>
                 </div>
              </motion.div>

              {/* US East Pin */}
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }}
                className="absolute top-[40%] left-[25%] group/pin cursor-pointer"
              >
                 <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500 blur-xl opacity-40 group-hover/pin:opacity-100 transition-opacity" />
                    <div className="w-4 h-4 bg-emerald-500 rounded-full border-2 border-white relative z-10" />
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl min-w-[120px] opacity-0 group-hover/pin:opacity-100 transition-all scale-95 group-hover/pin:scale-100">
                       <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">US East</p>
                       <p className="text-[9px] text-emerald-500 font-bold">Latency: 68ms</p>
                    </div>
                 </div>
              </motion.div>
           </div>

           {/* Stats Overlay */}
           <div className="absolute bottom-8 left-8 right-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 flex items-center justify-around">
              {[
                { label: 'Active Regions', value: '14' },
                { label: 'Avg Latency', value: '38ms' },
                { label: 'System Uptime', value: '99.999%' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                   <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">{s.label}</p>
                   <p className="text-xl font-display font-bold text-white">{s.value}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Region List Sidebar */}
        <div className="lg:col-span-4 space-y-6">
           <div className="bg-white rounded-[40px] p-8 shadow-card border border-gray-50">
              <h3 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-8">Region Status</h3>
              <div className="space-y-6">
                 {locations.map((loc, i) => (
                   <div key={i} className="flex items-center justify-between group cursor-pointer hover:translate-x-2 transition-transform">
                      <div className="flex items-center gap-4">
                         <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm", loc.color)}>
                            <Server className="w-5 h-5" />
                         </div>
                         <div>
                            <p className="text-sm font-bold text-brand-navy">{loc.name}</p>
                            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{loc.id}</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <p className={cn("text-[10px] font-bold uppercase tracking-widest", loc.status === 'Optimal' ? 'text-brand-success' : 'text-brand-orange')}>{loc.status}</p>
                         <p className="text-[11px] font-bold text-brand-navy">{loc.latency}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-white rounded-[40px] p-8 shadow-card border border-gray-50">
              <h3 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-6">Network Health</h3>
              <div className="space-y-8">
                 <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                       <Shield className="w-5 h-5 text-brand-blue" />
                       <span className="text-[10px] font-bold text-brand-success uppercase tracking-widest">Active</span>
                    </div>
                    <p className="text-xs font-bold text-brand-navy mb-2">DDoS Protection</p>
                    <p className="text-[10px] text-gray-400 font-medium leading-relaxed">Advanced protection is active across all entry nodes globally.</p>
                 </div>
                 <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                       <Zap className="w-5 h-5 text-brand-orange" />
                       <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">CDN</span>
                    </div>
                    <p className="text-xs font-bold text-brand-navy mb-2">Global Edge Caching</p>
                    <p className="text-[10px] text-gray-400 font-medium leading-relaxed">Assets are being served from 42 edge locations worldwide.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
