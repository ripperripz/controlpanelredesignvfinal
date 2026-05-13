'use client';

import React, { useEffect, useRef } from 'react';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';

import Lenis from 'lenis';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (contentRef.current) {
      gsap.fromTo(contentRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'cubic-bezier(0.16, 1, 0.3, 1)', delay: 0.1 }
      );
    }

    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="noise-bg" />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className={cn(
        "flex flex-col min-h-screen transition-all duration-500 ease-premium",
        "lg:pl-[240px]"
      )}>
        <TopNav onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 pt-16">
          <div className="sky-gradient min-h-[calc(100vh-64px)] p-6 lg:p-12" ref={contentRef}>
            <div className="max-w-[1400px] mx-auto">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
