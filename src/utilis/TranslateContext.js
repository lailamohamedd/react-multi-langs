import React, { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const TranslateContext = createContext();

function TranslateProvider({ children }) {
    const [ArLang, setArLang] = useState(false);
    const { i18n } = useTranslation("global");

    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang && lang.includes("ar")) {
            setArLang(true);
        } else {
            setArLang(false);
        }
        i18n.changeLanguage(lang);
    }, [i18n]);

    function handleChangeLang(lang) {
        setArLang(!ArLang);
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    }

    return (
        <TranslateContext.Provider value={{ handleChangeLang, setArLang, ArLang }}>
            {children}
        </TranslateContext.Provider>
    );
}

export { TranslateContext, TranslateProvider };