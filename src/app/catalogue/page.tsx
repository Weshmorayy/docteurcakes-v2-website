"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { CategoryId, CakeProduct } from "@/types";
import { formatPrice } from "@/lib/utils";
import { buildCakeOrderUrl, buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Sparkles, Filter, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CataloguePage() {
  const [selectedCat, setSelectedCat] = useState<CategoryId | "all">("all");
  const [selectedProduct, setSelectedProduct] = useState<CakeProduct | null>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<string>(siteConfig.flavors[0].name);

  const categories: { id: CategoryId | "all"; label: string }[] = [
    { id: "all", label: "Tous nos Gâteaux" },
    { id: "anniversaire", label: "🎂 Anniversaires" },
    { id: "mariage", label: "💍 Wedding Cakes" },
    { id: "dot", label: "👑 Gâteaux de Dot" },
    { id: "bapteme", label: "🕊️ Baptêmes" },
    { id: "enfants", label: "🎈 Enfants" },
    { id: "mignardises", label: "🍱 Mignardises & Salés" },
  ];

  const filteredProducts = useMemo(() => {
    if (selectedCat === "all") return siteConfig.products;
    return siteConfig.products.filter((p) => p.category === selectedCat);
  }, [selectedCat]);

  return (
    <div className="min-h-screen bg-white text-dark-900 pt-28 pb-24">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-dark-950 text-ivory-50 rounded-3xl p-8 sm:p-12 border border-gold-500/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Créations & Tarifs Officiels</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-50">
              Le Catalogue de l'Atelier
            </h1>
            <p className="text-sm text-ivory-200/80 leading-relaxed">
              Toutes les créations présentées ci-dessous ont été réalisées par Docteur Cakes à Cocody. Cliquez sur un modèle pour le personnaliser et commander directement via WhatsApp.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                selectedCat === cat.id
                  ? "bg-dark-950 text-gold-400 shadow-md border border-gold-500/40"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-transparent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl bg-white border border-gray-200 hover:border-gold-500/60 shadow-sm hover:shadow-xl transition-all duration-400 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Photo Container on PURE WHITE (#FFFFFF) as per Anti-AI rules */}
                  <div className="relative h-72 w-full bg-white p-4 flex items-center justify-center border-b border-gray-100">
                    {product.badge && (
                      <span className="absolute top-4 left-4 z-10 bg-dark-900 text-gold-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow-sm">
                        {product.badge}
                      </span>
                    )}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-serif text-lg font-bold text-dark-900 group-hover:text-gold-700 transition-colors">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      {product.description}
                    </p>

                    {product.highlights && (
                      <div className="pt-2 space-y-1">
                        {product.highlights.slice(0, 2).map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-gray-500">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer / Pricing & WhatsApp Action */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-gray-400 block">
                        Tarif indicatif
                      </span>
                      <span className="text-base font-bold text-gold-700">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                    {product.portions && (
                      <span className="text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded border border-gray-200">
                        {product.portions} parts
                      </span>
                    )}
                  </div>

                  <a
                    href={buildCakeOrderUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-dark-950 hover:bg-gold-500 text-gold-400 hover:text-dark-950 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Commander ce modèle</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Bottom Custom Request Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-ivory-50 border border-gray-200 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-dark-900">
              Vous avez une idée ou une photo précise ?
            </h3>
            <p className="text-sm text-gray-600 max-w-xl">
              Envoyez-nous directement votre photo de modèle sur WhatsApp. Nous étudions la faisabilité et vous envoyons un devis personnalisé sous quelques heures.
            </p>
          </div>
          <a
            href={buildGeneralWhatsAppUrl("Bonjour Docteur Cakes, j'ai une photo de gâteau personnalisée à vous soumettre pour un devis.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-dark-950 font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shrink-0 shadow-lg shadow-gold-600/20"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Envoyer ma photo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
