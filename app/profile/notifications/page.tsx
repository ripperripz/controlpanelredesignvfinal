'use client';

import React from 'react';
import { ProfileLayout } from '@/components/ProfileLayout';

export default function Notifications() {
  const [checkboxes, setCheckboxes] = React.useState({
    emergency: true,
    maintenance: true,
    monitoring: true,
    deployment: true,
    newsletters: true,
    company: true,
    inheritedCompany: true,
  });

  const toggle = (key: keyof typeof checkboxes) => {
    setCheckboxes(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ProfileLayout>
      <div className="bg-white rounded-2xl shadow-card p-8">
        <div className="mb-8">
          <h2 className="text-xl font-display font-bold text-brand-navy tracking-tight mb-2">Notifications</h2>
          <p className="text-sm text-gray-500 font-medium">Update your notifications settings.</p>
        </div>

        <div className="space-y-6">
          {[
            { id: 'emergency', label: 'Emergency Alerts', desc: 'Receive emergency alerts in regards to security and/or availability of the environments you are subscribed to.' },
            { id: 'maintenance', label: 'Maintenance window', desc: 'Receive notifications when a maintenance window is scheduled/created/completed.' },
            { id: 'monitoring', label: 'Monitoring Alerts', desc: 'Receive alerts when monitored services is down.' },
            { id: 'deployment', label: 'Deployment Alerts', desc: 'Receive notifications on deployment completion or failure.' },
            { id: 'newsletters', label: 'Newsletters', desc: 'Receive notifications around new features, functionalities and special offers.' },
          ].map((item) => (
            <div key={item.id} className="flex gap-4 p-4 rounded-xl border border-gray-100/50 hover:bg-gray-50/50 transition-colors">
               <div className="pt-1">
                 <input 
                   type="checkbox" 
                   checked={checkboxes[item.id as keyof typeof checkboxes]}
                   onChange={() => toggle(item.id as keyof typeof checkboxes)}
                   className="w-4 h-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange/20 cursor-pointer accent-brand-orange"
                 />
               </div>
               <div>
                 <p className="text-sm font-bold text-brand-navy">{item.label}</p>
                 <p className="text-xs text-gray-500 font-medium mt-0.5">{item.desc}</p>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-12 mb-8">
          <h2 className="text-lg font-display font-bold text-brand-navy tracking-tight mb-3">Ticket Default Subscriptions</h2>
          <p className="text-xs text-gray-500 font-medium mb-3">Select which companies' tickets you would like to be subscribed to automatically. This setting can be overridden on a per ticket basis using the subscribers section on the ticket page.</p>
          <p className="text-xs text-gray-500 font-medium mb-6">You will always be subscribed to tickets you have raised, regardless of selections below.</p>
          
          <div className="space-y-4">
             <div>
               <p className="text-sm font-bold text-brand-navy mb-3">Your Company:</p>
               <label className="flex items-center gap-3 cursor-pointer group w-fit">
                 <input 
                   type="checkbox" 
                   checked={checkboxes.company}
                   onChange={() => toggle('company')}
                   className="w-4 h-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange/20 cursor-pointer accent-brand-orange"
                 />
                 <span className="text-sm font-medium text-gray-700 group-hover:text-brand-navy transition-colors">Example Agency</span>
               </label>
             </div>
             
             <div>
               <p className="text-sm font-bold text-brand-navy mb-2">Inherited companies:</p>
               <button className="text-[11px] font-bold text-brand-blue hover:underline mb-3">Select / Unselect All</button>
               <div className="ml-6">
                 <label className="flex items-center gap-3 cursor-pointer group w-fit">
                   <input 
                     type="checkbox" 
                     checked={checkboxes.inheritedCompany}
                     onChange={() => toggle('inheritedCompany')}
                     className="w-4 h-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange/20 cursor-pointer accent-brand-orange"
                   />
                   <span className="text-sm font-medium text-gray-700 group-hover:text-brand-navy transition-colors">Example Company</span>
                 </label>
               </div>
             </div>
          </div>
        </div>

        <div className="flex justify-end pt-4 bg-gray-50/50 -mx-8 -mb-8 p-6 mt-8 rounded-b-2xl border-t border-gray-100">
          <button className="px-6 py-2 bg-brand-orange text-white font-bold rounded-lg shadow-sm hover:bg-[#E55A1E] transition-colors text-sm">
            Save
          </button>
        </div>
      </div>
    </ProfileLayout>
  );
}
