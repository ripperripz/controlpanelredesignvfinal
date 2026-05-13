'use client';

import React from 'react';
import { 
  Shield, 
} from 'lucide-react';
import { ProfileLayout } from '@/components/ProfileLayout';

export default function Profile() {
  return (
    <ProfileLayout>
      <div className="space-y-8 max-w-4xl">
        
        {/* Profile Section */}
        <section className="bg-white rounded-2xl shadow-card p-8">
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-brand-navy tracking-tight mb-2">Profile</h2>
            <p className="text-sm text-gray-500 font-medium">Update your account's profile information and email address.</p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-navy">Name</label>
              <input 
                type="text" 
                defaultValue="Example user" 
                className="w-full h-11 px-4 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-navy">Email address</label>
              <input 
                type="email" 
                defaultValue="example@corefinity.com" 
                className="w-full h-11 px-4 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-navy">Position</label>
              <input 
                type="text" 
                defaultValue="Manager" 
                className="w-full h-11 px-4 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" 
              />
            </div>

            <div className="flex justify-end pt-4 bg-gray-50/50 -mx-8 -mb-8 p-6 mt-8 rounded-b-2xl border-t border-gray-100">
              <button className="px-6 py-2 bg-brand-orange text-white font-bold rounded-lg shadow-sm hover:bg-[#E55A1E] transition-colors text-sm">
                Save
              </button>
            </div>
          </div>
        </section>

        {/* Mobile Number Section */}
        <section className="bg-white rounded-2xl shadow-card p-8">
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-brand-navy tracking-tight mb-2">Mobile number</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-2 max-w-md">
              <select className="h-11 px-3 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all w-36">
                <option>🇬🇧 (GB) +44</option>
                <option>🇺🇸 (US) +1</option>
              </select>
              <input 
                type="tel" 
                className="w-full h-11 px-4 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all flex-1" 
              />
            </div>
            <p className="text-[11px] text-gray-400 italic">
              Please enter your mobile number using the international format (including country code).
            </p>

            <div className="flex justify-end pt-4 bg-gray-50/50 -mx-8 -mb-8 p-6 mt-8 rounded-b-2xl border-t border-gray-100">
              <button className="px-6 py-2 bg-brand-orange text-white font-bold rounded-lg shadow-sm hover:bg-[#E55A1E] transition-colors text-sm">
                Update
              </button>
            </div>
          </div>
        </section>

        {/* Update Password Section */}
        <section className="bg-white rounded-2xl shadow-card p-8">
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-brand-navy tracking-tight mb-2">Update Password</h2>
            <p className="text-sm text-gray-500 font-medium">Ensure your account is using a long, random password to stay secure.</p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-navy">Current Password</label>
              <input 
                type="password" 
                className="w-full h-11 px-4 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-navy">New Password</label>
              <input 
                type="password" 
                className="w-full h-11 px-4 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-navy">Confirm Password</label>
              <input 
                type="password" 
                className="w-full h-11 px-4 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" 
              />
            </div>

            <div className="flex justify-end pt-4 bg-gray-50/50 -mx-8 -mb-8 p-6 mt-8 rounded-b-2xl border-t border-gray-100">
              <button className="px-6 py-2 bg-brand-orange text-white font-bold rounded-lg shadow-sm hover:bg-[#E55A1E] transition-colors text-sm">
                Update
              </button>
            </div>
          </div>
        </section>

      </div>
    </ProfileLayout>
  );
}
