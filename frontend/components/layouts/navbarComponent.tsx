"use client";

import React from "react";
import { useTranslation } from "../../lib/hooks/useTranslation";
import { useLang } from "../../lib/i18n/LanguageProvider";

interface ComponentProps {}

const NavbarComponent: React.FC<ComponentProps> = () => {
    const { t } = useTranslation();
    const { locale, setLocale } = useLang();

    return (
        <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
            <span className="font-bold text-xl text-gray-800">{t('appName')}</span>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="space-x-6 text-gray-600 font-medium">
              <a href="#inicio" className="hover:text-blue-600">{t('inicio')}</a>
              <a href="#tecnologias" className="hover:text-blue-600">{t('tecnologias')}</a>
              <a href="#" className="hover:text-blue-600">{t('documentacion')}</a>
            </nav>

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
        </div>
      </header>
    )
}

export default NavbarComponent;