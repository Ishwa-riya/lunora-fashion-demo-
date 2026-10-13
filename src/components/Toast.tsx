import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, dismissToast } = useShop();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-3 p-4 bg-[#171615] text-[#F8F5F1] rounded-lg shadow-2xl border border-[#302F2D] animate-slide-up transition-all duration-300"
        >
          <div className="shrink-0 mt-0.5">
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#C4A482]" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-[#C4A482]" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-red-400" />}
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D8D0C5]">
              {toast.title}
            </h4>
            <p className="text-xs text-[#A8A29E] mt-0.5 leading-relaxed">{toast.message}</p>
          </div>
          <button
            onClick={() => dismissToast(toast.id)}
            className="shrink-0 text-[#78716C] hover:text-[#F8F5F1] transition-colors p-1"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
