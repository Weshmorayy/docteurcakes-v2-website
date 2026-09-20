"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function ParallaxShowcase() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-900 text-ivory-50 relative overflow-hidden border-y border-gold-500/20">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-gold-600/5 via-dark-950 to-dark-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs text-gold-400 font-semibold tracking-widest uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Créations Majestueuses</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory-50 leading-tight">
            Les Moments Inoubliables Méritent une <br />
            <span className="gold-text-gradient italic font-normal">Pièce d'Exception</span>
          </h2>
          <p className="text-sm sm:text-base text-ivory-200/70">
            Du gâteau de mariage princier au gâteau de dot respectant les rites traditionnels Akan et Baoulé.
          </p>
        </div>

        {/* Two Featured Big Pieces Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-stretch">
          
          {/* Piece 1: Wedding Cake */}
          <motion.div 
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-dark-950 border border-gold-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400 bg-gold-950/80 px-3 py-1 rounded-md border border-gold-500/40">
                  Mariage & Fiançailles
                </span>
                <span className="text-xs text-ivory-200/60 font-serif italic">
                  Dès 140 000 FCFA
                </span>
              </div>

              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-dark-900 border border-dark-700">
                <Image
                  src="/images/cakes/wedding-cake-perle-love.jpg"
                  alt="Wedding Cake Perlé LOVE"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif text-xl font-bold text-ivory-50">Wedding Cake Perlé 'LOVE'</p>
                  <p className="text-xs text-gold-300">Cascade de roses pastel & médaillon cœur doré</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-ivory-200/80 leading-relaxed">
                Sculpté à la main, chaque étage est ajusté pour sublimer votre salle de banquet et offrir une découpe spectaculaire.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-dark-800 flex items-center justify-between">
              <span className="text-xs text-gold-400 font-semibold">4 000 à 8 000 F / part</span>
              <Link
                href="/mariage"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-ivory-100 group-hover:text-gold-400 uppercase tracking-wider transition-colors"
              >
                <span>Découvrir l'univers Mariage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Piece 2: Gâteau de Dot */}
          <motion.div 
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-dark-950 border border-gold-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400 bg-gold-950/80 px-3 py-1 rounded-md border border-gold-500/40">
                  Cérémonie de Dot Coutumière
                </span>
                <span className="text-xs text-ivory-200/60 font-serif italic">
                  Dès 90 000 FCFA
                </span>
              </div>

              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-dark-900 border border-dark-700">
                <Image
                  src="/images/cakes/gateau-dot-libation-akan.jpg"
                  alt="Gâteau de Dot Libation Akan et Bouteille de Gin"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif text-xl font-bold text-ivory-50">Gâteau de Dot Libation Akan</p>
                  <p className="text-xs text-gold-300">Bouteille sculptée en sucre & pièces d'or de dot</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-ivory-200/80 leading-relaxed">
                Une alliance rare entre traditions séculaires et haute pâtisserie : motifs géométriques Baoulé, pagne kita et symboles de bénédiction.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-dark-800 flex items-center justify-between">
              <span className="text-xs text-gold-400 font-semibold">Tissu Baoulé & Symboles</span>
              <Link
                href="/mariage#dot"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-ivory-100 group-hover:text-gold-400 uppercase tracking-wider transition-colors"
              >
                <span>Découvrir les Gâteaux de Dot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
