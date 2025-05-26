import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en";
import hr from "./locales/hr";
import de from "./locales/de";
import fr from "./locales/fr";
import pl from "./locales/pl";
import it from "./locales/it";
import cs from "./locales/cs";

// Only initialize i18n on the client side
if (typeof window !== "undefined") {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        hr: { translation: hr },
        de: { translation: de },
        fr: { translation: fr },
        pl: { translation: pl },
        it: { translation: it },
        cs: { translation: cs },
      },
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
