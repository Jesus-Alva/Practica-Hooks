"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "../../lib/hooks/useTranslation";
import { useLang } from "../../lib/i18n/LanguageProvider";
import { ROUTES_NAVBAR } from "../../app/constants/routes";

import { navBar } from "../../types/navBar";

const NavbarComponent: React.FC = () => {
  const { t } = useTranslation();
  const { locale, setLocale } = useLang();
  const navBarData = ROUTES_NAVBAR.navBar;

  const globalData = t("global", { returnObjects: true }) as navBar;

  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpenIndex, setMobileSubOpenIndex] = useState<number | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  const closeDropdown = () => setOpenDropdownIndex(null);
  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(prev => (prev === index ? null : index));
  };

  const toggleMobileSub = (index: number) => {
    setMobileSubOpenIndex(prev => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdownIndex !== null) {
        const currentRef = dropdownRefs.current[openDropdownIndex];
        if (currentRef && !currentRef.contains(event.target as Node)) {
          closeDropdown();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdownIndex]);

  // Cierra el menú mobile si la ventana crece a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
        setMobileSubOpenIndex(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#1f2826] bg-[#0a0e0f]/90 backdrop-blur-sm font-mono">
      <nav className="container mx-auto px-4 max-w-4xl flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-7 w-7 items-center justify-center rounded border border-[#1f2826] bg-[#101516] text-sm font-bold text-[#5eead4]">
            {'>'}
          </span>
          <span className="font-bold text-[15px] text-[#d4d8d6] tracking-tight">
            {globalData.titleApp}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm text-[#9aa3a0]">
            {navBarData.map((link, idx) => {
              const hasDownBar = 'downBar' in link;
              const isOpen = openDropdownIndex === idx;

              return (
                <div
                  key={idx}
                  ref={el => { dropdownRefs.current[idx] = el; }}
                  className="relative"
                >
                  {hasDownBar ? (
                    <button
                      onClick={() => toggleDropdown(idx)}
                      className="flex items-center gap-1 transition-colors hover:text-[#5eead4] focus:outline-none focus-visible:text-[#5eead4]"
                    >
                      {link.title}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 9-7 7-7-7"
                        />
                      </svg>
                    </button>
                  ) : (
                    <a href={link.href} className="transition-colors hover:text-[#5eead4]">
                      {link.title}
                    </a>
                  )}

                  {hasDownBar && isOpen && (
                    <ul className="absolute left-0 mt-3 w-48 rounded-lg border border-[#1f2826] bg-[#101516] py-1 shadow-xl shadow-black/40 overflow-hidden">
                      {link.downBar.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <a
                            href={sub.href}
                            onClick={closeDropdown}
                            className="block px-4 py-2 text-sm text-[#c2c8c5] transition-colors hover:bg-[#1f2826] hover:text-[#5eead4]"
                          >
                            {sub.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          <LangToggle locale={locale} setLocale={setLocale} />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <LangToggle locale={locale} setLocale={setLocale} compact />
          <button
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(prev => !prev)}
            className="flex h-8 w-8 items-center justify-center rounded border border-[#1f2826] bg-[#101516] text-[#d4d8d6]"
          >
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#1f2826] bg-[#0a0e0f] px-4 py-3">
          <div className="flex flex-col">
            {navBarData.map((link, idx) => {
              const hasDownBar = 'downBar' in link;
              const isSubOpen = mobileSubOpenIndex === idx;

              return (
                <div key={idx} className="border-b border-[#1f2826] last:border-b-0">
                  {hasDownBar ? (
                    <>
                      <button
                        onClick={() => toggleMobileSub(idx)}
                        className="flex w-full items-center justify-between py-3 text-sm text-[#c2c8c5]"
                      >
                        {link.title}
                        <svg
                          className={`w-3.5 h-3.5 text-[#5f6b68] transition-transform ${isSubOpen ? 'rotate-180' : ''}`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                        </svg>
                      </button>
                      {isSubOpen && (
                        <div className="flex flex-col pb-2 pl-3">
                          {link.downBar.map((sub, subIdx) => (
                            <a
                              key={subIdx}
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="py-2 text-sm text-[#9aa3a0] hover:text-[#5eead4]"
                            >
                              {sub.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-sm text-[#c2c8c5] hover:text-[#5eead4]"
                    >
                      {link.title}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

function LangToggle({
  locale,
  setLocale,
  compact = false,
}: {
  locale: string;
  setLocale: (l: 'es' | 'en') => void;
  compact?: boolean;
}) {
  return (
    <div
      role="group"
      aria-label="Seleccionar idioma"
      className={`inline-flex items-center rounded border border-[#1f2826] bg-[#101516] p-0.5 text-xs ${compact ? '' : ''}`}
    >
      {(['es', 'en'] as const).map((lng) => (
        <button
          key={lng}
          onClick={() => setLocale(lng)}
          aria-pressed={locale === lng}
          className={`rounded-sm px-2 py-1 font-medium uppercase transition-colors ${
            locale === lng
              ? 'bg-[#1f2826] text-[#5eead4]'
              : 'text-[#5f6b68] hover:text-[#9aa3a0]'
          }`}
        >
          {lng}
        </button>
      ))}
    </div>
  );
}

export default NavbarComponent;
