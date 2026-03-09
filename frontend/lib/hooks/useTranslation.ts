"use client";

import { useLang } from "../i18n/LanguageProvider";

export const useTranslation = () => {
  const { t, locale } = useLang();
  return { t, locale };
};
