'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Key, Plus, Copy, Trash2, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

import { ConfirmationModal } from '@/components/ConfirmationModal';

const mockKeys = [
  { name: 'MacBook Pro Personal', fingerprint: 'SHA256:x9B/r8K...sLpA', created: 'Oct 2, 2024' },
  { name: 'Office Workstation', fingerprint: 'SHA256:v1A/d2M...oIpW', created: 'Sep 14, 2024' },
  { name: 'Production Bot', fingerprint: 'SHA256:j4K/m9L...zR2Q', created: 'Aug 22, 2024' },
];

export default function SSHKeys() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [selectedKey, setSelectedKey] = React.useState<string | null>(null);

  const filteredKeys = mockKeys.filter(k => 
    k.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    k.fingerprint.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (name: string) => {
    setSelectedKey(name);
    setIsDeleteModalOpen(true);
  };

  return (
    <DashboardLayout>
      <header className="mb-10 flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-gray-900 tracking-tight mb-2">SSH Keys</h1>
          <p className="text-gray-500 font-medium text-lg">Manage public keys for secure infrastructure access.</p>
        </div>
        <button className="h-11 px-8 bg-brand-orange text-white rounded-xl font-bold text-sm shadow-premium hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
          <Plus className="w-5 h-5" />
          Add New Key
        </button>
      </header>

      <div className="bg-white rounded-[32px] shadow-card overflow-hidden border border-gray-100">
        <div className="p-8 border-b border-gray-50 flex items-center justify-between gap-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search keys by name or fingerprint..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-12 pr-4 bg-gray-50/50 border border-gray-100 rounded-2xl text-xs font-medium focus:outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue/30 focus:bg-white transition-all shadow-sm" 
            />
          </div>
          <button className="h-11 px-4 bg-gray-50 text-gray-400 border border-gray-100 rounded-2xl flex items-center gap-2 hover:bg-white transition-all text-[10px] font-bold uppercase tracking-widest shadow-sm">
            <Filter className="w-4 h-4" />
            Filter & Sort
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/30 border-b border-gray-100">
                <th className="text-left py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest cursor-pointer hover:text-brand-blue transition-colors">
                   <div className="flex items-center gap-2">Name <ChevronDown className="w-3 h-3" /></div>
                </th>
                <th className="text-left py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fingerprint</th>
                <th className="text-left py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest cursor-pointer hover:text-brand-blue transition-colors">Created At</th>
                <th className="text-right py-5 px-8"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredKeys.length > 0 ? (
                filteredKeys.map((key, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="py-6 px-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-brand-blue/5 group-hover:text-brand-blue transition-colors">
                          <Key className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold text-brand-navy">{key.name}</span>
                      </div>
                    </td>
                    <td className="py-6 px-8">
                      <code className="text-[11px] font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100">{key.fingerprint}</code>
                    </td>
                    <td className="py-6 px-8">
                      <span className="text-xs text-gray-400 font-medium">{key.created}</span>
                    </td>
                    <td className="py-6 px-8 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-gray-300 hover:text-brand-blue transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-300 hover:text-brand-orange transition-colors">
                          <Plus className="w-4 h-4" /> {/* Using Plus as pencil placeholder */}
                        </button>
                        <button 
                          onClick={() => handleDelete(key.name)}
                          className="p-2 text-gray-300 hover:text-brand-error transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-20 text-center">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                       <Key className="w-8 h-8" />
                    </div>
                    <p className="text-gray-500 font-bold">No keys found</p>
                    <p className="text-xs text-gray-400">Try adjusting your search criteria.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 border-t border-gray-50 bg-gray-50/30 flex items-center justify-between">
           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Showing {filteredKeys.length} of 3 Keys</p>
           <div className="flex items-center gap-2">
              <button className="h-8 px-4 bg-white border border-gray-100 rounded-xl text-[10px] font-bold text-gray-400 hover:text-brand-blue transition-all">Previous</button>
              <button className="h-8 px-4 bg-brand-blue text-white rounded-xl text-[10px] font-bold shadow-sm">1</button>
              <button className="h-8 px-4 bg-white border border-gray-100 rounded-xl text-[10px] font-bold text-gray-400 hover:text-brand-blue transition-all">Next</button>
           </div>
        </div>
      </div>

      <ConfirmationModal 
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => setIsDeleteModalOpen(false)}
        title="Remove SSH Key?"
        description={`This will permanently remove "${selectedKey}" from your authorized keys. Any active SSH sessions using this key will be terminated.`}
        confirmLabel="Remove Key"
        variant="danger"
      />
    </DashboardLayout>
  );
}
