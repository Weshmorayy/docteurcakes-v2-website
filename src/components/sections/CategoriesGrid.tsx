"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CategoriesGrid() {
  const categories = [
    {
      title: "Gâteaux d'Anniversaire",
      desc: "Créations à la crème ou en pâte à sucre sculptée, chiffres dorés et décors à thème.",
      price: "Dès 17 500 FCFA",
      image: "/images/cakes/gateau-anniversaire-marbre-bleu-or.jpg",
      href: "/catalogue?cat=anniversaire",
      span: "lg:col-span-7",
      highlight: "Plus de 12 parfums au choix",
    },
    {
      title: "Wedding Cakes & Mariage",
      desc: "Pièces montées féériques de 3 à 5 étages, cascades de fleurs comestibles et finitions or pur.",
      price: "Dès 140 000 FCFA",
      image: "/images/cakes/wedding-cake-floral-3-etages.jpg",
      href: "/mariage",
      span: "lg:col-span-5",
      highlight: "Dégustation & Conseil",
    },
    {
      title: "Gâteaux de Dot & Traditionnels",
      desc: "Hommage aux traditions ivoiriennes : motifs géométriques Baoulé en sucre, libation Akan et tissu Wax.",
      price: "Dès 90 000 FCFA",
      image: "/images/cakes/gateau-dot-baoule-wax.jpg",
      href: "/mariage#dot",
      span: "lg:col-span-4",
      highlight: "Design Coutumier",
    },
    {
      title: "Baptêmes & Communions",
      desc: "Symboles sacrés, colombes du Saint-Esprit, font baptismal et dorures angéliques.",
      price: "Dès 35 000 FCFA",
      image: "/images/cakes/gateau-bapteme-saint-esprit.jpg",
      href: "/catalogue?cat=bapteme",
      span: "lg:col-span-4",
      highlight: "Fête de Famille",
    },
    {
      title: "Plateaux Salés & Mignardises",
      desc: "Cocktails d'exception : plateaux d'apéro froids gourmets et plateaux Affro (pastels croustillants & mini-burgers).",
      price: "Dès 30 000 FCFA",
      image: "/images/cakes/plateau-affro-gourmet.jpg",
      href: "/catalogue?cat=mignardises",
      span: "lg:col-span-4",
      highlight: "Cocktails & Buffets",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-dark-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-gray-200 pb-8">
          <div>
            <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
              Nos Univers Gourmands
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 mt-2">
              Chaque Célébration a son Gâteau
            </h2>
          </div>
          <p className="text-sm text-gray-600 max-w-md">
            Des recettes artisanales élaborées à Cocody avec des ingrédients sélectionnés. Choisissez votre événement pour découvrir nos réalisations réelles.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className={`group relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 hover:border-gold-500/60 transition-all duration-500 hover:shadow-2xl flex flex-col justify-between ${cat.span}`}
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-white">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 bg-dark-900/90 text-gold-400 text-[11px] font-bold px-3 py-1 rounded-md tracking-wider uppercase backdrop-blur-sm">
                  {cat.highlight}
                </span>
              </div>

              {/* Text & Pricing Information */}
              <div className="p-6 bg-ivory-50 border-t border-gray-100 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl font-bold text-dark-900 group-hover:text-gold-700 transition-colors">
                      {cat.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-dark-900 group-hover:bg-gold-500 group-hover:text-dark-950 group-hover:border-gold-500 transition-colors shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200/60 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Tarif indicatif :</span>
                  <span className="text-sm font-bold text-gold-700 tracking-wide">
                    {cat.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
