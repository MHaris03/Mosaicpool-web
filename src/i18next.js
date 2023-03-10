
import Backend from "i18next-http-backend"
import  LanguageDetector  from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";

i18next.use(Backend)
.use(LanguageDetector)
.use(initReactI18next).init({
    backend: {
        loadPath: "/assets/i18next/{{ns}}/{{lng}}.json",

    },
    fallbackLng: "en",
    debug: false,
    ns: ["sidebar"],
    interpolation: {
        escapeValue: false,
        formatSeparator: ",",
    },
    react: {
        wait: true,
    },

})

export default i18next;    
