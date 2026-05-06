"use client";

import { business } from "@/lib/content";
import { Phone, MessageCircle, FileText } from "lucide-react";
import Link from "next/link";

export function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#333333] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)] border-t border-slate-200 dark:border-[#444444]" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
      <div className="grid grid-cols-3 divide-x divide-slate-200 dark:divide-[#444444]">
        <a
          href={business.phoneHref}
          className="flex flex-col items-center justify-center py-3 text-slate-900 dark:text-white hover:text-accent active:bg-slate-200 dark:active:bg-[#444444] transition-colors"
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Call</span>
        </a>
        <a
          href={business.whatsAppHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 text-slate-900 dark:text-white hover:text-accent active:bg-slate-200 dark:active:bg-[#444444] transition-colors"
        >
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-3 bg-accent hover:bg-accent-600 text-white active:bg-accent-700 transition-colors"
        >
          <FileText className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Quote</span>
        </Link>
      </div>
    </div>
  );
}
