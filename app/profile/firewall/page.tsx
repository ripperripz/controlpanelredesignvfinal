'use client';

import React from 'react';
import { ProfileLayout } from '@/components/ProfileLayout';
import { Globe, Plus, Trash2 } from 'lucide-react';

export default function Firewall() {
  return (
    <ProfileLayout>
      <div className="bg-white p-8 rounded-xl shadow-card mb-8">
        <h2 className="text-xl font-bold text-brand-navy mb-2">Whitelisted IP Addresses</h2>
        <p className="text-sm text-gray-400 font-medium mb-8">Allow these IP addresses to bypass security filters for SSH and SFTP access.</p>
        
        <div className="flex gap-2">
          <div className="flex-1 space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">IP Address</label>
            <input type="text" placeholder="192.168.1.1" className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/10" />
          </div>
          <div className="flex-1 space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Label / Description</label>
            <input type="text" placeholder="Office Network" className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/10" />
          </div>
          <div className="pt-6">
            <button className="h-11 px-8 bg-brand-orange text-white font-bold rounded-lg flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-50 bg-gray-50/50">
              <th className="text-left py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider">IP Address</th>
              <th className="text-left py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Description</th>
              <th className="text-left py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Added On</th>
              <th className="text-right py-4 px-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[
              { ip: '82.16.24.112', desc: 'Home Office - London', date: 'Oct 2, 2024' },
              { ip: '142.250.12.1', desc: 'Branch Office - UK', date: 'Sep 12, 2024' },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 text-sm font-mono font-bold text-brand-blue">{row.ip}</td>
                <td className="py-4 px-6 text-sm font-bold text-brand-navy">{row.desc}</td>
                <td className="py-4 px-6 text-sm text-gray-400 font-medium">{row.date}</td>
                <td className="py-4 px-6 text-right">
                  <button className="p-2 text-gray-200 hover:text-brand-error transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ProfileLayout>
  );
}
