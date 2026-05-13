'use client';

import React from 'react';
import { ProfileLayout } from '@/components/ProfileLayout';
import { Key, Copy, Plus, Trash2 } from 'lucide-react';

export default function APITokens() {
  return (
    <ProfileLayout>
      <div className="bg-white rounded-2xl shadow-card p-8 mb-8">
        <div className="mb-8">
          <h2 className="text-xl font-display font-bold text-brand-navy tracking-tight mb-2">Manage API Tokens</h2>
          <p className="text-sm text-gray-500 font-medium">API Tokens allow to authenticate with our API.</p>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <input 
              type="text" 
              placeholder="Token name" 
              className="w-full h-11 px-4 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" 
            />
          </div>

          <div className="flex justify-end pt-4 bg-gray-50/50 -mx-8 -mb-8 p-6 mt-8 rounded-b-2xl border-t border-gray-100">
            <button className="px-6 py-2 bg-brand-orange text-white font-bold rounded-lg shadow-sm hover:bg-[#E55A1E] transition-colors text-sm">
              Create token
            </button>
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
