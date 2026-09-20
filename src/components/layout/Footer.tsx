import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark-950 text-ivory-100 border-t border-gold-500/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-gold-500/40 bg-dark-900 p-1 flex items-center justify-center">
                <Image
                  src="/images/brand/logo.png"
                  alt="Docteur Cakes Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold tracking-wider text-ivory-50">
                  DOCTEUR CAKES
                </h3>
                <p className="text-[11px] text-gold-400 uppercase tracking-widest">
                  Pâtisserie & Cake Design
                </p>
              </div>
            </div>

            <p className="text-sm text-ivory-200/70 leading-relaxed">
              Créateur de souvenirs sucrés inoubliables. Gâteaux sur mesure, wedding cakes féériques et pièces d'exception livrés dans tout Abidjan.
            </p>

            <div className="pt-2">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-300 font-medium transition-colors"
              >
                <span>Rejoindre nos {siteConfig.social.facebookFollowers} sur Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Rapide */}
          <div>
            <h4 className="font-serif text-base font-semibold text-gold-400 mb-4 pb-2 border-b border-gold-500/20 inline-block">
              Nos Univers
            </h4>
            <ul className="space-y-2.5 text-sm text-ivory-200/80">
              <li>
                <Link href="/catalogue?cat=anniversaire" className="hover:text-gold-300 transition-colors">
                  🎂 Gâteaux d'Anniversaire
                </Link>
              </li>
              <li>
                <Link href="/mariage" className="hover:text-gold-300 transition-colors">
                  💍 Wedding Cakes & Pièces Montées
                </Link>
              </li>
              <li>
                <Link href="/mariage#dot" className="hover:text-gold-300 transition-colors">
                  👑 Gâteaux de Dot & Traditionnels
                </Link>
              </li>
              <li>
                <Link href="/catalogue?cat=bapteme" className="hover:text-gold-300 transition-colors">
                  🕊️ Baptêmes & Communions
                </Link>
              </li>
              <li>
                <Link href="/catalogue?cat=enfants" className="hover:text-gold-300 transition-colors">
                  🎈 Gâteaux Enfants & Thématiques
                </Link>
              </li>
              <li>
                <Link href="/catalogue?cat=mignardises" className="hover:text-gold-300 transition-colors">
                  🍱 Plateaux Salés & Mignardises
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Atelier */}
          <div>
            <h4 className="font-serif text-base font-semibold text-gold-400 mb-4 pb-2 border-b border-gold-500/20 inline-block">
              Atelier & Contact
            </h4>
            <ul className="space-y-3 text-sm text-ivory-200/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span>{siteConfig.contact.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <div>
                  <a href={`tel:${siteConfig.contact.phonePrimary}`} className="hover:text-gold-300 block">
                    {siteConfig.contact.phonePrimary}
                  </a>
                  <a href={`tel:${siteConfig.contact.phoneSecondary}`} className="hover:text-gold-300 text-xs text-ivory-200/60 block">
                    {siteConfig.contact.phoneSecondary}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold-300">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs">{siteConfig.contact.hours}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Paiements & Commande Rapide */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold text-gold-400 mb-2 pb-2 border-b border-gold-500/20 inline-block">
              Acompte & Confirmation
            </h4>
            <p className="text-xs text-ivory-200/70 leading-relaxed">
              Toute commande est validée après versement d'un acompte par Mobile Money :
            </p>

            <div className="space-y-2 bg-dark-900/90 p-3 rounded-lg border border-gold-500/20 text-xs">
              <div className="flex justify-between items-center text-ivory-100">
                <span className="font-semibold text-gold-300">Wave :</span>
                <span>+225 07 49 91 13 90</span>
              </div>
              <div className="flex justify-between items-center text-ivory-100">
                <span className="font-semibold text-gold-300">Orange Money :</span>
                <span>+225 07 89 90 62 93</span>
              </div>
              <div className="flex justify-between items-center text-ivory-100">
                <span className="font-semibold text-gold-300">MTN Money :</span>
                <span>+225 05 84 22 49 49</span>
              </div>
            </div>

            <a
              href={buildGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-dark-950 font-bold py-2.5 px-4 rounded-md text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Discuter sur WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-200/50">
          <p>© {new Date().getFullYear()} {siteConfig.name} — Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Fait avec passion à <span className="text-gold-400">Cocody, Abidjan</span> 🇨🇮
          </p>
        </div>
      </div>
    </footer>
  );
}
