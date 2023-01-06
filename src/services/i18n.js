import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import english from '../lang/en.json';
import french from '../lang/fr.json';

const defaultLanguage = "French";
const resources = {
    English: {
        translation: english
    },
    French: {
        translation: french
    }
};

const lang = localStorage.getItem("i18nextLng");

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: lang ? lang : defaultLanguage,
        keySeparator: ".",
        interpolation: {
            escapeValue: false
        }
    });