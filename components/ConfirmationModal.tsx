'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'danger' | 'warning' | 'info';
  isLoading?: boolean;
}

export function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = 'Confirm Action',
  cancelLabel = 'Cancel',
  variant = 'danger',
  isLoading = false
}: ConfirmationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[101] p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-md bg-white rounded-[32px] shadow-premium pointer-events-auto overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center",
                    variant === 'danger' && "bg-brand-error/10 text-brand-error",
                    variant === 'warning' && "bg-brand-orange/10 text-brand-orange",
                    variant === 'info' && "bg-brand-blue/10 text-brand-blue"
                  )}>
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8">{description}</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={onClose}
                    className="flex-1 h-12 px-6 bg-gray-50 text-gray-500 font-bold rounded-xl hover:bg-gray-100 transition-all text-sm"
                  >
                    {cancelLabel}
                  </button>
                  <button
                    onClick={onConfirm}
                    disabled={isLoading}
                    className={cn(
                      "flex-1 h-12 px-6 text-white font-bold rounded-xl transition-all text-sm shadow-sm flex items-center justify-center gap-2",
                      variant === 'danger' && "bg-brand-error hover:bg-[#D4344E]",
                      variant === 'warning' && "bg-brand-orange hover:bg-[#E55A1E]",
                      variant === 'info' && "bg-brand-blue hover:bg-[#0055D4]"
                    )}
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      confirmLabel
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
