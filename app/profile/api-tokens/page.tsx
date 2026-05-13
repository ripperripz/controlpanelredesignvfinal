'use client';

import React from 'react';
import { ProfileLayout } from '@/components/ProfileLayout';
import { Key, Copy, Plus, Trash2 } from 'lucide-react';

export default function APITokens() {
  return (
    <ProfileLayout>
      <div className="bg-white p-8 rounded-xl shadow-card mb-8">
        <h2 className="text-xl font-bold text-brand-navy mb-2">API Access Tokens</h2>
        <p className="text-sm text-gray-400 font-medium mb-8">Generate tokens to interact with the Corefinity API programmatically.</p>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Token Label</label>
            <div className="flex gap-2">
              <input type="text" placeholder="e.g. CI/CD Runner" className="flex-1 h-11 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/10" />
              <button className="px-6 bg-brand-orange text-white font-bold rounded-lg whitespace-nowrap">Generate Token</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-50 bg-gray-50/50">
              <th className="text-left py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Token Name</th>
              <th className="text-left py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Created</th>
              <th className="text-left py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Last Used</th>
              <th className="text-right py-4 px-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[
              { name: 'Terraform Provider', created: 'Oct 12, 2024', last: '2h ago' },
              { name: 'External Monitor', created: 'Sep 30, 2024', last: '5d ago' },
            ].map((token, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 text-sm font-bold text-brand-navy">{token.name}</td>
                <td className="py-4 px-6 text-sm text-gray-400 font-medium">{token.created}</td>
                <td className="py-4 px-6 text-sm text-gray-400 font-medium">{token.last}</td>
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
