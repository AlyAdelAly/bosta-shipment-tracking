import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Ar from "./Ar.json";
import En from "./En.json";

const resources = {
  ar: {
    translation: Ar,
  },
  en: {
    translation: En,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: ["en","ar"],
    keySeparator: false,
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;