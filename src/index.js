import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18next from 'i18next';
import AR_LANG from "./locales/ar/common.json"
import EN_LANG from "./locales/en/common.json"
import { I18nextProvider } from 'react-i18next';
import { TranslateProvider } from './utilis/TranslateContext';

i18next.init({
  interpolation: {
    escapeValue: false 
  },
  resources: {
    en: {
      global: EN_LANG,
    },
    ar: {
      global: AR_LANG,
    }
  },
  lng: "en"
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <TranslateProvider>
        <App />
      </TranslateProvider>
    </I18nextProvider>
  </React.StrictMode>
);
