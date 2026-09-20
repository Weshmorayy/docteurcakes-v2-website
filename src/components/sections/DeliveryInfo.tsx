import React from "react";
import { siteConfig } from "@/config/site";
import { formatPrice } from "@/lib/utils";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { Truck, CreditCard, Clock, MapPin, MessageCircle } from "lucide-react";

export function DeliveryInfo() {
  return (
    <section id="livraison" className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-dark-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
            Transparence & Sérénité
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-900">
            Livraison Sécurisée & Modalités
          </h2>
          <p className="text-sm text-gray-600">
            Tous nos gâteaux sont transportés avec précaution dans des caisses adaptées pour garantir une arrivée impeccable à votre lieu de réception.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Delivery Tariffs */}
          <div className="bg-ivory-50 p-8 rounded-2xl border border-gray-200 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-700">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-dark-900">Tarifs de Livraison</h3>
                  <p className="text-xs text-gray-500">Service dédié climatisé</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {siteConfig.deliveryZones.map((zone, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-lg border border-gray-200/80">
                    <div className="flex justify-between items-center text-xs font-bold text-dark-900 mb-1">
                      <span>{zone.name}</span>
                      <span className="text-gold-700">{formatPrice(zone.price)}</span>
                    </div>
                    <p className="text-[11px] text-gray-500">{zone.delay}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-gray-500 mt-6 pt-4 border-t border-gray-200">
              * Retrait gratuit possible directement à notre atelier de Cocody.
            </p>
          </div>

          {/* Card 2: Payment & Deposit */}
          <div className="bg-ivory-50 p-8 rounded-2xl border border-gray-200 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-700">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-dark-900">Acompte & Validation</h3>
                  <p className="text-xs text-gray-500">Paiement Mobile Money sécurisé</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {siteConfig.paymentMethods.map((pm, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-lg border border-gray-200/80 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-dark-900">{pm.name}</p>
                      <p className="text-[11px] text-gray-500">{pm.instructions}</p>
                    </div>
                    <span className="font-semibold text-gold-700">{pm.phone}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 p-3 rounded-lg border border-amber-200/80 text-[11px] text-amber-900 mt-6">
              ⚠️ Un acompte non remboursable est exigé pour bloquer votre date de commande dans notre planning.
            </div>
          </div>

          {/* Card 3: Atelier Cocody & Schedule */}
          <div className="bg-ivory-50 p-8 rounded-2xl border border-gray-200 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-dark-900">Notre Atelier</h3>
                  <p className="text-xs text-gray-500">Cocody, Abidjan</p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-gray-700">
                <div className="p-3 bg-white rounded-lg border border-gray-200/80 space-y-1">
                  <p className="font-bold text-dark-900">Adresse précise :</p>
                  <p>{siteConfig.contact.address.full}</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-gray-200/80 flex items-start gap-2">
                  <Clock className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-dark-900">Horaires :</p>
                    <p className="text-[11px] text-gray-600">{siteConfig.contact.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={buildGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-dark-900 hover:bg-gold-600 hover:text-dark-950 text-gold-400 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contacter l'Atelier</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
