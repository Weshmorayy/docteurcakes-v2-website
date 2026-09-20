"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { Menu, X, Phone, MessageCircle, Sparkles } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Nos Gâteaux", href: "/catalogue" },
    { name: "Mariages & Dots", href: "/mariage" },
    { name: "Parfums & Tarifs", href: "/#parfums" },
    { name: "Livraison & Atelier", href: "/#livraison" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark-950/95 backdrop-blur-md py-3 border-b border-gold-500/20 shadow-2xl"
            : "bg-gradient-to-b from-dark-950/90 via-dark-950/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative w-12 h-12 rounded-full border border-gold-500/40 bg-dark-900 p-1 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:border-gold-400 shadow-md">
                <Image
                  src="/images/brand/logo.png"
                  alt="Docteur Cakes Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-ivory-50 group-hover:text-gold-400 transition-colors">
                  DOCTEUR CAKES
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold-400/90 font-sans -mt-0.5">
                  Abidjan · Cocody
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm tracking-wide transition-all duration-200 relative py-1 ${
                      isActive
                        ? "text-gold-400 font-medium"
                        : "text-ivory-100/80 hover:text-gold-300"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.contact.phonePrimary}`}
                className="flex items-center gap-2 text-xs text-ivory-100/80 hover:text-gold-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>{siteConfig.contact.phonePrimary}</span>
              </a>
              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-dark-950 px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-gold-500/10"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Commander</span>
              </a>
            </div>

            {/* Mobile Hamburger Trigger */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-gold-500 text-dark-950 font-semibold"
                aria-label="Commander sur WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-ivory-50 hover:text-gold-400 focus:outline-none"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Mounted at Root Layer) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 !z-[999999] flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-[85vw] max-w-sm bg-dark-950 border-l border-gold-500/30 h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl z-10">
            <div>
              {/* Header Drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-gold-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-gold-500/40 bg-dark-900 p-1 flex items-center justify-center">
                    <Image
                      src="/images/brand/logo.png"
                      alt="Docteur Cakes"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-base text-ivory-50">DOCTEUR CAKES</p>
                    <p className="text-[10px] text-gold-400 tracking-wider">Pâtisserie Abidjan</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-ivory-100 hover:text-gold-400"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Links */}
              <nav className="mt-8 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-serif text-ivory-100 hover:text-gold-400 transition-colors flex items-center justify-between py-2 border-b border-dark-800"
                  >
                    <span>{link.name}</span>
                    <Sparkles className="w-3.5 h-3.5 text-gold-400/50" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Bottom Contact in Drawer */}
            <div className="pt-6 border-t border-gold-500/20 space-y-4">
              <div className="text-xs text-ivory-200/70 space-y-1">
                <p className="font-semibold text-gold-400">Atelier Cocody :</p>
                <p>{siteConfig.contact.address.full}</p>
                <p className="text-ivory-100 font-medium pt-1">
                  📞 {siteConfig.contact.phonePrimary}
                </p>
              </div>

              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-dark-950 py-3 rounded-lg text-sm font-bold uppercase tracking-wider shadow-lg shadow-gold-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Commander sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
