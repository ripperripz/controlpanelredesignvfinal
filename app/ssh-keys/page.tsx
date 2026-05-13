'use client';

import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Key, Plus, Trash2, Eye, Search, ChevronDown, Filter, Edit2 } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

import { ConfirmationModal } from '@/components/ConfirmationModal';

const mockKeys = [
  { name: 'example@client.com', signature: 'SHA256:$2y$10$8Si5DWrekrhq0Kq/sa/jb3.ahOlb0t2rqqOr4VjkZhYiHuserfjnse8ZtZK' },
];

export default function SSHKeys() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [selectedKey, setSelectedKey] = React.useState<string | null>(null);

  const filteredKeys = mockKeys.filter(k => 
    k.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    k.signature.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (name: string) => {
    setSelectedKey(name);
    setIsDeleteModalOpen(true);
  };

  return (
    <DashboardLayout>
      <header className="mb-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-6 flex-1">
          <h1 className="text-xl font-display font-bold text-brand-navy tracking-tight whitespace-nowrap">SSH Keys</h1>
          <div className="relative flex-1 max-w-xs group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-blue transition-colors" />
            <input 
              type="text" 
              placeholder="Search" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-11 pr-4 bg-white border border-gray-100 rounded-full text-sm focus:outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue/30 transition-all shadow-sm" 
            />
          </div>
        </div>
        <Link href="/ssh-keys/create">
          <button className="h-10 px-6 bg-brand-orange text-white rounded-lg font-bold text-sm shadow-premium hover:bg-[#E55A1E] transition-all">
            Create SSH Key
          </button>
        </Link>
      </header>

      <div className="bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100">
        <div className="p-4 border-b border-gray-50 flex justify-end">
          <button className="p-2 bg-brand-blue/5 text-brand-blue rounded-lg hover:bg-brand-blue/10 transition-all">
            <div className="flex items-center gap-2 px-1">
              <Filter className="w-4 h-4" />
              <ChevronDown className="w-3 h-3" />
            </div>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/20 border-b border-gray-100">
                <th className="text-left py-4 px-8 text-[10px] font-bold text-brand-blue uppercase tracking-widest cursor-pointer group">
                   <div className="flex items-center gap-2">NAME <div className="flex flex-col"><ChevronDown className="w-2.5 h-2.5 rotate-180 opacity-30" /><ChevronDown className="w-2.5 h-2.5" /></div></div>
                </th>
                <th className="text-left py-4 px-8 text-[10px] font-bold text-brand-blue uppercase tracking-widest cursor-pointer group">
                   <div className="flex items-center gap-2">SIGNATURE <div className="flex flex-col"><ChevronDown className="w-2.5 h-2.5 rotate-180 opacity-30" /><ChevronDown className="w-2.5 h-2.5" /></div></div>
                </th>
                <th className="text-right py-4 px-8"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredKeys.length > 0 ? (
                filteredKeys.map((key, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="py-5 px-8">
                      <span className="text-sm font-bold text-brand-navy">{key.name}</span>
                    </td>
                    <td className="py-5 px-8">
                      <span className="text-xs text-gray-400 font-medium truncate max-w-md block">{key.signature}</span>
                    </td>
                    <td className="py-5 px-8 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button className="text-brand-blue hover:scale-110 transition-transform">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="text-brand-blue hover:scale-110 transition-transform">
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleDelete(key.name)}
                          className="text-brand-error hover:scale-110 transition-transform ml-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="py-20 text-center">
                    <p className="text-gray-500 font-bold">No keys found</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-50 bg-gray-50/10 flex items-center justify-between">
           <button className="text-sm font-bold text-gray-400 hover:text-brand-blue transition-colors disabled:opacity-30" disabled>Previous</button>
           <p className="text-xs font-bold text-brand-navy">1-1 of 1</p>
           <button className="text-sm font-bold text-gray-400 hover:text-brand-blue transition-colors disabled:opacity-30" disabled>Next</button>
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
