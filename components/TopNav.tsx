'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, ChevronDown, LogOut, Settings, User, CreditCard, Check, Key } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useClient } from '@/context/ClientContext';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

interface TopNavProps {
  onMenuClick?: () => void;
}

export function TopNav({ onMenuClick }: TopNavProps) {
  const { currentClient, clients, setClient } = useClient();
  const [isClientOpen, setIsClientOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const clientRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (clientRef.current && !clientRef.current.contains(event.target as Node)) setIsClientOpen(false);
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) setIsProfileOpen(false);
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-[240px] h-16 bg-white/70 backdrop-blur-md border-b border-gray-100 z-40 flex items-center justify-between px-4 lg:px-8">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Search className="w-5 h-5" /> {/* Placeholder hamburger icon */}
        </button>

        {/* Client Switcher */}
        <div className="flex items-center relative" ref={clientRef}>
          <button 
            onClick={() => setIsClientOpen(!isClientOpen)}
            className={cn(
              "flex items-center gap-2 px-3 lg:px-4 py-2 rounded-full border transition-all group",
              isClientOpen ? "bg-white border-brand-blue/30 shadow-premium" : "bg-gray-50/50 border-gray-100 hover:bg-gray-100/50"
            )}
          >
            <span className="hidden sm:inline text-[10px] text-gray-400 font-bold uppercase tracking-wider">Viewing:</span>
            <span className="text-xs text-brand-navy font-bold">{currentClient.name}</span>
            <ChevronDown className={cn("w-3 h-3 text-gray-400 transition-transform duration-300", isClientOpen && "rotate-180 text-brand-blue")} />
          </button>

          <AnimatePresence>
            {isClientOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-premium border border-gray-100 p-2 overflow-hidden"
              >
                <div className="px-3 py-2 mb-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Switch Workspace</p>
                </div>
                {clients.map((client) => (
                  <button
                    key={client.id}
                    onClick={() => {
                      setClient(client.id);
                      setIsClientOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all group",
                      currentClient.id === client.id ? "bg-brand-blue/5 text-brand-blue font-bold" : "hover:bg-gray-50 text-gray-600"
                    )}
                  >
                    <div className="flex flex-col">
                      <span className="text-xs">{client.name}</span>
                      <span className="text-[10px] text-gray-400 font-medium">{client.role}</span>
                    </div>
                    {currentClient.id === client.id && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Global Search */}
      <div className="hidden md:flex flex-1 max-w-[480px] mx-10 relative group">
        <div className="absolute left-5 top-1/2 -translate-y-1/2">
          <Search className="w-4 h-4 text-gray-400 group-focus-within:text-brand-blue transition-colors duration-500" />
        </div>
        <input 
          ref={searchInputRef}
          type="text" 
          placeholder="Search metadata, deployments, or tickets..." 
          className="w-full h-11 pl-12 pr-4 bg-gray-50/80 border border-gray-100 rounded-2xl text-[13px] focus:outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue/30 focus:bg-white transition-all duration-500 shadow-sm font-medium tracking-tight"
        />
        <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-40 group-focus-within:opacity-100 transition-opacity">
          <kbd className="px-2 py-0.5 text-[9px] font-bold text-gray-500 border border-gray-200 rounded-lg bg-white shadow-sm font-mono">/</kbd>
        </div>
      </div>

      {/* User Controls */}
      <div className="flex items-center gap-2 lg:gap-4">
        <button className="relative p-2 text-gray-400 hover:text-brand-navy transition-colors bg-gray-50/50 rounded-lg hover:bg-gray-100/50 border border-transparent hover:border-gray-100 transition-all">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-brand-orange rounded-full ring-2 ring-white" />
        </button>
        
        <div className="hidden sm:block h-6 w-[1px] bg-gray-100 mx-2" />

        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 group px-1 py-1 rounded-xl transition-all hover:bg-gray-50"
          >
            <div className="hidden sm:flex flex-col items-end mr-1">
              <span className="text-xs font-bold text-gray-900 leading-none">Alex Rivera</span>
              <span className="text-[10px] text-gray-400 font-medium">Administrator</span>
            </div>
            <div className="w-9 h-9 rounded-xl bg-brand-navy flex items-center justify-center text-white text-xs font-bold ring-4 ring-transparent group-hover:ring-brand-blue/10 transition-all shadow-premium">
              AR
            </div>
          </button>

          <AnimatePresence>
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-premium border border-gray-100 p-2 overflow-hidden"
              >
                <div className="px-3 py-3 border-b border-gray-50 mb-1">
                  <p className="text-xs font-bold text-gray-900">Alex Rivera</p>
                  <p className="text-[10px] text-gray-400">alex@corefinity.io</p>
                </div>
                
                {[
                  { label: 'My Profile', icon: User, href: '/profile' },
                  { label: 'SSH Keys', icon: Key, href: '/ssh-keys' },
                  { label: 'Cloud Settings', icon: Settings, href: '/settings' },
                  { label: 'Billing & Plans', icon: CreditCard, href: '/billing' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsProfileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-gray-600 hover:bg-gray-50 hover:text-brand-blue transition-all group"
                  >
                    <item.icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-blue" />
                    {item.label}
                  </Link>
                ))}
                
                <div className="mt-1 pt-1 border-t border-gray-50">
                  <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-brand-error hover:bg-brand-error/5 transition-all group">
                    <LogOut className="w-3.5 h-3.5" />
                    Sign Out
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
