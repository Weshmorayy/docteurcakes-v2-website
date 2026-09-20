import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { formatPrice } from "@/lib/utils";
import { buildGeneralWhatsAppUrl, buildCakeOrderUrl } from "@/lib/whatsapp";
import { constructMetadata } from "@/lib/seo";
import { Sparkles, MessageCircle, CheckCircle2, Heart, Award, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "Wedding Cakes & Gâteaux de Dot Traditionnels",
  description: "Création de pièces montées majestueuses et gâteaux de mariage coutumier (Baoulé, Akan, Wax) à Cocody, Abidjan.",
  pathname: "/mariage",
});

export default function MariagePage() {
  const weddingCakes = siteConfig.products.filter(
    (p) => p.category === "mariage" || p.category === "dot"
  );

  return (
    <div className="bg-dark-900 text-ivory-50 min-h-screen pt-28 pb-24">
      
      {/* 1. Hero Mariage Plein Écran */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 bg-dark-950 p-8 sm:p-16 min-h-[460px] flex items-center shadow-2xl">
          <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('/images/cakes/wedding-cake-royal-4-etages.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-transparent" />
          
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs text-gold-400 font-semibold tracking-widest uppercase bg-gold-950/80 px-3 py-1.5 rounded-full border border-gold-500/40">
              <Heart className="w-3.5 h-3.5 text-gold-400 fill-current" />
              <span>Mariages Civils & Cérémonies Coutumières</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-ivory-50 leading-tight">
              Le Gâteau du Plus Beau Jour de <br />
              <span className="gold-text-gradient italic font-normal">Votre Vie</span>
            </h1>

            <p className="text-sm sm:text-base text-ivory-200/80 leading-relaxed">
              Une création magistrale conçue pour être le joyau de votre réception. De la pièce montée blanche perlée aux symboles sacrés du mariage traditionnel Baoulé.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={buildGeneralWhatsAppUrl("Bonjour Docteur Cakes, je prépare mon mariage et j'aimerais échanger sur le gâteau.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-dark-950 font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg shadow-gold-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Prendre Rendez-vous / WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Tarification Wedding Cakes Réelle (Tableau Éditorial) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="bg-white text-dark-900 rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold text-gold-700 tracking-widest uppercase">
              Grille Tarifaire Transparente
            </span>
            <h2 className="font-serif text-3xl font-bold text-dark-900">
              Comment sont calculés nos Wedding Cakes ?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Le tarif au part varie selon le niveau de complexité, la finition (crème soyeuse ou pâte à sucre sculptée) et le nombre d'étages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-ivory-50 border border-gray-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-gold-700 uppercase">Formule Crème</span>
                <h3 className="font-serif text-xl font-bold text-dark-900 mt-1 mb-3">Élégance Texturée</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Glaçage à la crème soyeuse, finitions striées ou lisses, bouquets de fleurs fraîches et topper inclus.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <span className="text-2xl font-bold text-dark-900">3 500 F</span>
                <span className="text-xs text-gray-500"> / part (dès 35 parts)</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-dark-950 text-ivory-50 border border-gold-500/40 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <span className="absolute top-3 right-3 bg-gold-500 text-dark-950 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded">
                Recommandé
              </span>
              <div>
                <span className="text-xs font-bold text-gold-400 uppercase">Pâte à Sucre Couture</span>
                <h3 className="font-serif text-xl font-bold text-ivory-50 mt-1 mb-3">Prestige Sculpté</h3>
                <p className="text-xs text-ivory-200/80 leading-relaxed mb-4">
                  Structure renforcée à étages multiples, perles de nacre, décors floraux stabilisés et reflets or pur.
                </p>
              </div>
              <div className="pt-4 border-t border-dark-800">
                <span className="text-2xl font-bold text-gold-400">4 000 à 8 000 F</span>
                <span className="text-xs text-ivory-200/60"> / part selon design</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-ivory-50 border border-gray-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-gold-700 uppercase">Dot & Cérémonies</span>
                <h3 className="font-serif text-xl font-bold text-dark-900 mt-1 mb-3">Coutumes Ivoiriennes</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Reproduction fidèle du pagne Baoulé, pagne kita, pièces de dot en or et bouteille de libation sculptée.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <span className="text-2xl font-bold text-dark-900">Dès 90 000 F</span>
                <span className="text-xs text-gray-500"> / modèle complet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Galerie Réalisations Mariage & Dot */}
      <section id="dot" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-semibold text-gold-400 tracking-widest uppercase">
            Nos Réalisations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory-50">
            Pièces Montées & Gâteaux Coutumiers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {weddingCakes.map((cake) => (
            <div
              key={cake.id}
              className="rounded-3xl bg-dark-950 border border-gold-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-gold-400 transition-all duration-300 group"
            >
              <div>
                <div className="relative h-80 w-full rounded-2xl overflow-hidden bg-dark-900 border border-dark-800 mb-6">
                  <Image
                    src={cake.image}
                    alt={cake.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {cake.badge && (
                    <span className="absolute top-4 left-4 bg-dark-950/90 text-gold-400 text-[10px] font-bold uppercase px-3 py-1 rounded-md border border-gold-500/30 backdrop-blur-md">
                      {cake.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="font-serif text-2xl font-bold text-ivory-50 group-hover:text-gold-300 transition-colors">
                      {cake.name}
                    </h3>
                    <span className="text-lg font-bold text-gold-400 shrink-0">
                      {formatPrice(cake.price)}
                    </span>
                  </div>
                  <p className="text-xs text-ivory-200/70 leading-relaxed">
                    {cake.description}
                  </p>
                  {cake.priceNote && (
                    <p className="text-[11px] text-gold-400/80 font-medium">
                      💡 {cake.priceNote}
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-dark-800 flex items-center justify-between">
                <a
                  href={buildCakeOrderUrl(cake)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 text-dark-950 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Demander les disponibilités pour ce modèle</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Contact Mariage */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6 bg-dark-950 border border-gold-500/30 rounded-3xl p-8 sm:p-12">
        <Award className="w-10 h-10 text-gold-400 mx-auto" />
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-50">
          Un Accompagnement Personnalisé de A à Z
        </h3>
        <p className="text-xs sm:text-sm text-ivory-200/80 max-w-xl mx-auto leading-relaxed">
          Nous vous accueillons à notre atelier de Cocody pour définir le thème, le choix des parfums et le calendrier précis de livraison sur votre lieu de réception.
        </p>
        <a
          href={buildGeneralWhatsAppUrl("Bonjour, je souhaite convenir d'un rendez-vous dégustation/mariage à l'atelier de Cocody.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-dark-950 font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-xl shadow-gold-500/20"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Échanger avec notre Chef Pâtissier</span>
        </a>
      </section>

    </div>
  );
}
