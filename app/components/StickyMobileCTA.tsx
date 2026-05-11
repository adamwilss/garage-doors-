"use client";

import { business } from "@/lib/content";
import { Phone, MessageCircle, FileText } from "lucide-react";
import Link from "next/link";

export function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-accent shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)] border-t border-white/20" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
      <div className="grid grid-cols-3 divide-x divide-slate-200 dark:divide-[#444444]">
        <a
          href={business.phoneHref}
          className="flex flex-col items-center justify-center py-3 bg-urgent hover:bg-urgent-600 text-white font-bold active:bg-urgent-700 transition-colors"
        >
          <Phone className="w-6 h-6 mb-1" />
          <span className="text-sm font-bold">Call</span>
        </a>
        <a
          href={business.whatsAppHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 bg-white/10 hover:bg-white/20 text-white active:bg-white/30 transition-colors"
        >
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-3 bg-white hover:bg-gray-100 text-accent font-bold active:bg-gray-200 transition-colors"
        >
          <FileText className="w-5 h-5 mb-1" />
          <span className="text-xs font-bold">Quote</span>
        </Link>
      </div>
    </div>
  );
}
