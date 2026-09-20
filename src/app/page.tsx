import { HeroInstant } from "@/components/sections/HeroInstant";
import { CategoriesGrid } from "@/components/sections/CategoriesGrid";
import { ParallaxShowcase } from "@/components/sections/ParallaxShowcase";
import { FlavorsBar } from "@/components/sections/FlavorsBar";
import { DeliveryInfo } from "@/components/sections/DeliveryInfo";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata();

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Instantané — Photos de gâteaux visibles immédiatement sans scroll */}
      <HeroInstant />

      {/* 2. Mosaïque Événements & Univers (Fond Blanc Pur) */}
      <CategoriesGrid />

      {/* 3. Parallax Showcase Mariages & Cérémonies de Dot (Fond Noir) */}
      <ParallaxShowcase />

      {/* 4. Le Bar à Parfums 14 Saveurs (Fond Noir & Or) */}
      <FlavorsBar />

      {/* 5. Tarifs de Livraison & Modalités d'Acompte (Fond Blanc) */}
      <DeliveryInfo />
    </>
  );
}
