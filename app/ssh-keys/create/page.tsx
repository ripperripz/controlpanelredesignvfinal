'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { 
  Key, 
  ChevronLeft, 
  Save, 
  AlertCircle,
  Shield,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function CreateSSHKeyPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8">
        <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
        <span className="text-gray-300">/</span>
        <Link href="/ssh-keys" className="hover:text-brand-blue transition-colors">SSH Keys</Link>
        <span className="text-gray-300">/</span>
        <span className="text-brand-blue">Add New Key</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-brand-navy tracking-tight mb-2">
            Add New SSH Key
          </h1>
          <p className="text-sm font-medium text-gray-400">Add a public SSH key to your account for secure access to your environments.</p>
        </div>
        <Link href="/ssh-keys" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 text-brand-navy text-xs font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-all">
          <ChevronLeft className="w-4 h-4" /> Back to List
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Form Content */}
        <div className="lg:col-span-8 space-y-8">
           <div className="bg-white rounded-[32px] shadow-premium border border-gray-50 overflow-hidden">
              <div className="p-10 border-b border-gray-50 bg-gray-50/20">
                 <div className="w-12 h-12 bg-brand-navy rounded-2xl flex items-center justify-center text-white shadow-lg mb-6">
                    <Key className="w-6 h-6" />
                 </div>
                 <h2 className="text-xl font-display font-bold text-brand-navy tracking-tight mb-2">SSH Key Configuration</h2>
                 <p className="text-sm text-gray-400 font-medium">Please provide a descriptive name and your public SSH key content.</p>
              </div>
              <div className="p-10 space-y-8">
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Key Label</label>
                    <input 
                      type="text" 
                      placeholder="e.g. MacBook Pro - Home Office" 
                      className="w-full h-12 px-5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all placeholder:font-medium placeholder:text-gray-300" 
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Public Key Content</label>
                    <textarea 
                      placeholder="Starts with ssh-rsa, ssh-ed25519, etc." 
                      className="w-full min-h-[200px] p-6 bg-gray-50 border border-gray-100 rounded-2xl text-[13px] font-mono text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all resize-none placeholder:font-sans placeholder:font-medium placeholder:text-gray-300"
                    />
                 </div>
              </div>
              <div className="p-10 bg-gray-50/50 border-t border-gray-100 flex justify-end">
                 <button className="flex items-center gap-2 px-10 py-4 bg-brand-orange text-white text-xs font-bold rounded-2xl shadow-premium hover:bg-[#E55A1E] transition-all uppercase tracking-widest">
                    <Save className="w-4 h-4" /> Save SSH Key
                 </button>
              </div>
           </div>
        </div>

        {/* Instructions / Sidebar */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-white rounded-[32px] p-8 shadow-card border border-gray-50">
              <h3 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-6">How to generate a key</h3>
              <div className="space-y-6">
                 {[
                   { step: 1, text: 'Open your terminal and run the following command:' },
                   { step: 2, text: 'Copy the content of your public key (usually ~/.ssh/id_rsa.pub)' },
                   { step: 3, text: 'Paste the content into the field on the left and save.' },
                 ].map((s, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue text-[10px] font-bold flex-shrink-0">{s.step}</div>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">{s.text}</p>
                   </div>
                 ))}
                 <div className="bg-[#0F172A] rounded-xl p-4 mt-4 font-mono text-[10px] text-gray-300 border border-white/5 relative overflow-hidden">
                    <p>ssh-keygen -t ed25519 -C "your_email@example.com"</p>
                 </div>
              </div>
           </div>

           <div className="bg-brand-navy rounded-[32px] p-8 text-white shadow-premium relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 blur-[60px] rounded-full -mr-16 -mt-16" />
              <Shield className="w-10 h-10 text-brand-orange mb-6 relative z-10" />
              <h3 className="text-lg font-display font-bold mb-2 relative z-10">Secure Access</h3>
              <p className="text-[11px] text-gray-400 font-medium mb-6 leading-relaxed relative z-10">SSH keys allow for secure authentication without requiring a password each time you connect.</p>
              <div className="flex items-center gap-2 text-brand-success text-[10px] font-bold uppercase tracking-widest relative z-10">
                 <CheckCircle2 className="w-4 h-4" /> AES-256 Encrypted
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
