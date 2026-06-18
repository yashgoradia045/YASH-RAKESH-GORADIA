import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ToastMessage, ToastType } from '../types';
import { ShieldCheck, Info, Flame, X } from 'lucide-react';

interface ToastContextType {
  addToast: (text: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((text: string, type: ToastType = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 5);
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-20 md:bottom-6 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => {
            let bgClass = 'bg-stone-900 text-stone-100';
            let icon = <Info className="w-5 h-5 text-amber-500" />;
            
            if (toast.type === 'success') {
              bgClass = 'bg-emerald-50 border border-emerald-200 text-emerald-950 shadow-md';
              icon = <ShieldCheck className="w-5 h-5 text-emerald-600" />;
            } else if (toast.type === 'info') {
              bgClass = 'bg-amber-50 border border-amber-200 text-amber-950 shadow-md';
              icon = <Info className="w-5 h-5 text-amber-700" />;
            } else if (toast.type === 'fire') {
              bgClass = 'bg-amber-600 text-white shadow-xl shadow-amber-600/20';
              icon = <Flame className="w-5 h-5 text-amber-100 animate-pulse" />;
            }

            return (
              <motion.div
                key={toast.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.2 } }}
                className={`${bgClass} p-4 rounded-xl shadow-lg flex items-start gap-3 pointer-events-auto relative overflow-hidden`}
              >
                {/* Visual Accent glow */}
                {toast.type === 'fire' && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-white animate-pulse" />
                )}
                
                <div className="flex-shrink-0 mt-0.5">{icon}</div>
                <div className="flex-1 pr-6 text-sm font-medium leading-normal">
                  {toast.text}
                </div>
                <button
                  onClick={() => removeToast(toast.id)}
                  className="absolute top-3 right-3 text-current opacity-60 hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
