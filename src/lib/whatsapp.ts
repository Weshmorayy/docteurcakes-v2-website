import { siteConfig } from "@/config/site";
import { CakeProduct } from "@/types";

export function buildGeneralWhatsAppUrl(customMessage?: string): string {
  const defaultText = "Bonjour Docteur Cakes ! J'aimerais commander un gâteau personnalisé. Pouvez-vous m'indiquer vos disponibilités ?";
  const message = customMessage || defaultText;
  return `https://wa.me/${siteConfig.contact.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function buildCakeOrderUrl(cake: CakeProduct, flavor?: string, portions?: number): string {
  const parts = [
    `🎂 *COMMANDE GÂTEAU — DOCTEUR CAKES*`,
    ``,
    `• *Modèle :* ${cake.name}`,
    `• *Tarif indicatif :* ${new Intl.NumberFormat("fr-FR").format(cake.price)} FCFA`,
    portions ? `• *Nombre de parts :* ${portions} parts` : (cake.portions ? `• *Parts recommandées :* ${cake.portions} parts` : ``),
    flavor ? `• *Parfum souhaité :* ${flavor}` : ``,
    ``,
    `📍 *Lieu de livraison souhaité :* (Cocody / Autre commune)`,
    `📅 *Date de l'événement :* `,
    ``,
    `Merci de me confirmer la disponibilité et les modalités d'acompte 🙏`
  ].filter(Boolean);

  return `https://wa.me/${siteConfig.contact.phoneRaw}?text=${encodeURIComponent(parts.join("\n"))}`;
}

export function buildCustomCakeUrl(data: {
  category: string;
  portions: number;
  flavor: string;
  zone: string;
}): string {
  const parts = [
    `🎂 *DEMANDE DE CRÉATION SUR-MESURE*`,
    ``,
    `• *Type d'événement :* ${data.category}`,
    `• *Nombre de personnes :* ${data.portions} parts`,
    `• *Parfum choisi :* ${data.flavor}`,
    `• *Zone de livraison :* ${data.zone}`,
    ``,
    `Merci de me faire parvenir un devis personnalisé 🙏`
  ];

  return `https://wa.me/${siteConfig.contact.phoneRaw}?text=${encodeURIComponent(parts.join("\n"))}`;
}
