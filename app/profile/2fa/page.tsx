'use client';

import React from 'react';
import { ProfileLayout } from '@/components/ProfileLayout';
import { Smartphone, ShieldCheck, Mail } from 'lucide-react';

export default function TwoFactorAuth() {
  return (
    <ProfileLayout>
      <div className="bg-white p-8 rounded-xl shadow-card">
        <h2 className="text-xl font-bold text-brand-navy mb-2">Two-Factor Authentication</h2>
        <p className="text-sm text-gray-400 font-medium mb-8">Add an extra layer of security to your account by requiring more than just a password to log in.</p>
        
        <div className="space-y-6">
          <div className="p-6 border-2 border-brand-blue/10 bg-brand-blue/5 rounded-xl flex items-center gap-6">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Smartphone className="w-8 h-8 text-brand-blue" />
            </div>
            <div className="flex-1">
              <h4 className="text-base font-bold text-brand-navy mb-1">Authenticator App</h4>
              <p className="text-sm text-gray-500 font-medium">Use apps like Google Authenticator or 1Password to generate one-time codes.</p>
            </div>
            <button className="px-6 py-2 bg-brand-orange text-white font-bold rounded-lg shadow-sm">Enable</button>
          </div>

          <div className="p-6 border border-gray-100 rounded-xl flex items-center gap-6 opacity-60">
            <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-gray-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-base font-bold text-brand-navy mb-1">SMS Authentication</h4>
              <p className="text-sm text-gray-500 font-medium">Receive a verification code via text message to your mobile phone.</p>
            </div>
            <button className="px-6 py-2 border border-gray-200 text-gray-400 font-bold rounded-lg cursor-not-allowed">Disabled</button>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}
