import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./../public/locales/en/translationEn.json";
import translationAr from "./../public/locales/ar/translationAr.json";
import translationKu from "./../public/locales/ku/translationKu.json";

const resources = {
  en: {
    translation: translationEn, // Corrected variable name
  },
  ar: {
    translation: translationAr, // Corrected variable name
  },
  ku: {
    translation: translationKu, // Corrected variable name
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  rtl: ["ar"],
});

export default i18n;
