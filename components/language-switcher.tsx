"use client";

import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

const languages = {
  en: "English",
  hr: "Hrvatski",
  de: "Deutsch",
  fr: "Français",
  pl: "Polski",
  it: "Italiano",
  cs: "Čeština",
};

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    i18n.changeLanguage(value);
    localStorage.setItem("i18nextLng", value);
  };

  return (
    <div className="relative">
      <select
        value={i18n.language}
        onChange={handleLanguageChange}
        className="w-[140px] h-10 px-3 py-2 bg-background border border-input rounded-md text-sm ring-offset-background appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
      >
        {Object.entries(languages).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50 pointer-events-none text-gray-500" />
    </div>
  );
};
