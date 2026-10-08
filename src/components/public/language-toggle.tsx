"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "ko" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center rounded-md p-2 hover:bg-slate-100 transition-colors"
      title="Toggle Language"
      style={{ marginLeft: "12px", border: "1px solid #e2e8f0" }}
    >
      <Globe size={18} className="mr-2" />
      <span className="font-semibold text-sm">
        {locale === "en" ? "KO" : "EN"}
      </span>
    </button>
  );
}
