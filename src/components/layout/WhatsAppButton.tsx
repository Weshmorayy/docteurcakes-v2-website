"use client";

import React from "react";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function WhatsAppSticky() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-full bg-dark-950 text-gold-300 text-xs font-medium border border-gold-500/40 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Discuter & Commander
      </span>

      <a
        href={buildGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-gold-600 via-gold-500 to-gold-400 text-dark-950 shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group-hover:ring-4 group-hover:ring-gold-400/30"
        aria-label="Commander directement sur WhatsApp"
      >
        {/* Radar wave pulse */}
        <span className="absolute inset-0 rounded-full bg-gold-400 opacity-30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
}
