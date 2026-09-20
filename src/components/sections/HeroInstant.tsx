"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Sparkles, ArrowRight, Award, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function HeroInstant() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-dark-900 overflow-hidden">
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 bg-radial-gradient from-gold-500/10 via-dark-950/80 to-dark-950 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Presentation */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Top Local Anchor Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-850 border border-gold-500/40 text-gold-300 text-xs tracking-wider uppercase font-medium shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Atelier Cake Design · Cocody, Abidjan</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory-50 leading-[1.15]">
              L'Art du Gâteau <br />
              <span className="gold-text-gradient italic font-normal">Haute Couture</span>
            </h1>

            {/* Direct WhatsApp-friendly Pitch */}
            <p className="text-base sm:text-lg text-ivory-100/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Gâteaux d'anniversaire personnalisés dès <strong className="text-gold-300 font-semibold">17 500 FCFA</strong>, pièces montées de mariage féériques et créations traditionnelles de dot en pâte à sucre.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-ivory-200/80">
              <div className="flex items-center gap-1.5 bg-dark-850/80 px-3 py-1.5 rounded-md border border-dark-700">
                <Award className="w-4 h-4 text-gold-400" />
                <span>14 Parfums Signatures</span>
              </div>
              <div className="flex items-center gap-1.5 bg-dark-850/80 px-3 py-1.5 rounded-md border border-dark-700">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>Livraison climatisée Abidjan</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-dark-950 font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-gold-500/20"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Commander sur WhatsApp</span>
              </a>

              <Link
                href="/catalogue"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-sm font-semibold text-ivory-100 bg-dark-850 hover:bg-dark-800 border border-gold-500/30 hover:border-gold-400 transition-all"
              >
                <span>Explorer le Catalogue</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: INSTANT VISUAL OF CAKES (Cakes Upfront) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            {/* Main Featured Cake Display */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/40 bg-dark-850 p-2 shadow-2xl">
                <div className="relative h-[380px] sm:h-[440px] w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/cakes/wedding-cake-royal-4-etages.jpg"
                    alt="Wedding Cake Royal 4 Étages devant le logo doré Docteur Cakes"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent" />

                  {/* On-image caption badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs bg-dark-950/85 backdrop-blur-md p-3.5 rounded-lg border border-gold-500/30">
                    <div>
                      <p className="text-gold-300 font-semibold font-serif text-sm">Wedding Cake Royal 4 Étages</p>
                      <p className="text-ivory-200/70 text-[11px]">Pièce montée couture & cascade florale</p>
                    </div>
                    <span className="text-gold-400 font-bold bg-gold-950/80 px-2.5 py-1 rounded border border-gold-500/30">
                      Sur Mesure
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Quick Previews (Anniversaire & Dot) */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-dark-900 border border-gold-500/50 p-2 rounded-xl shadow-2xl items-center gap-3 backdrop-blur-md max-w-[220px]">
                <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/images/cakes/gateau-anniversaire-hello-30-or.jpg"
                    alt="Gâteau Anniversaire Hello 30"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-[11px] leading-tight">
                  <p className="font-semibold text-ivory-50">Anniversaires</p>
                  <p className="text-gold-400 font-bold mt-0.5">Dès 17 500 F</p>
                </div>
              </div>

              <div className="hidden sm:flex absolute -top-6 -right-4 bg-dark-900 border border-gold-500/50 p-2 rounded-xl shadow-2xl items-center gap-3 backdrop-blur-md max-w-[220px]">
                <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/images/cakes/gateau-dot-baoule-wax.jpg"
                    alt="Gâteau de Dot Baoulé"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-[11px] leading-tight">
                  <p className="font-semibold text-ivory-50">Mariage Coutumier</p>
                  <p className="text-gold-400 font-bold mt-0.5">Dès 90 000 F</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
