"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "../../lib/hooks/useTranslation";
import { useLang } from "../../lib/i18n/LanguageProvider";
import { ROUTES_NAVBAR } from "../../app/constants/routes";

const NavbarComponent: React.FC = () => {
  const { t } = useTranslation();
  const { locale, setLocale } = useLang();
  const navBarData = ROUTES_NAVBAR.navBar;

  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  const closeDropdown = () => setOpenDropdownIndex(null);
  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(prev => (prev === index ? null : index));
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

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm py-4 z-50">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
          <span className="font-bold text-xl text-gray-800">{t('appName')}</span>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-6 text-gray-600 font-medium">
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
                    // Elemento con submenú: botón que abre/cierra
                    <button
                      onClick={() => toggleDropdown(idx)}
                      className="flex items-center gap-1 hover:text-blue-600 focus:outline-none"
                    >
                      {link.title}
                      <svg
                        className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
                    // Elemento simple: enlace que navega
                    <a href={link.href} className="hover:text-blue-600">
                      {link.title}
                    </a>
                  )}

                  {/* Submenú desplegable solo si tiene downBar y está abierto */}
                  {hasDownBar && isOpen && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10">
                      {link.downBar.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <a
                            href={sub.href}
                            onClick={closeDropdown}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
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

          <select
            aria-label="Select language"
            value={locale}
            onChange={(e) => setLocale(e.target.value as 'es' | 'en')}
            className="border border-gray-300 rounded px-2 py-1 text-sm text-black"
          >
            <option className="text-black" value="es">ES</option>
            <option className="text-black" value="en">EN</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default NavbarComponent;