import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Sparkles, CheckCircle2 } from "lucide-react";

export function FlavorsBar() {
  return (
    <section id="parfums" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-950 text-ivory-100 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs text-gold-400 font-semibold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>La Palette des Saveurs</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-50 leading-tight">
              14 Parfums Maison. <br />
              <span className="gold-text-gradient italic font-normal">Lequel choisirez-vous ?</span>
            </h2>

            <p className="text-sm text-ivory-200/70 leading-relaxed">
              Toutes nos génoises sont imbibées de sirops parfumés et garnies de crèmes soyeuses ou ganaches riches faites au jour le jour dans notre atelier de Cocody.
            </p>

            {/* Visual Ambiance Card */}
            <div className="relative h-48 rounded-xl overflow-hidden border border-gold-500/30">
              <Image
                src="/images/ambiance/fruits-rouges-pavlova.jpg"
                alt="Gâteau aux fruits rouges et crème fouettée"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-4 text-xs font-serif text-gold-300">
                Fruits frais sélectionnés · Chocolats intenses
              </p>
            </div>
          </div>

          {/* Right Flavors List */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteConfig.flavors.map((flavor, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-dark-900 border border-gold-500/20 hover:border-gold-400/50 hover:bg-dark-850 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-base font-semibold text-ivory-100 group-hover:text-gold-300 transition-colors">
                          {flavor.name}
                        </h4>
                        {flavor.seasonal && (
                          <span className="text-[10px] bg-gold-950 text-gold-400 px-2 py-0.5 rounded border border-gold-500/40">
                            Saison
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-ivory-200/60 mt-1 leading-normal">
                        {flavor.notes}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
