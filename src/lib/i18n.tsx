"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { locales, Locale, defaultLocale } from "@/data/locales";
import { useRouter } from "next/navigation";

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  t: (key: string) => key,
});

export const I18nProvider = ({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) => {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const router = useRouter();

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    router.refresh();
  };

  const t = (path: string): string => {
    const normalizedPath = path.replace(/\[(\d+)\]/g, '.$1');
    const keys = normalizedPath.split(".");
    let current: any = locales[locale];
    for (const key of keys) {
      if (current[key] === undefined) {
        // fallback to english
        let fallback: any = locales[defaultLocale];
        for (const fKey of keys) {
            if (fallback[fKey] === undefined) return path;
            fallback = fallback[fKey];
        }
        return fallback;
      }
      current = current[key];
    }
    return current;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);

