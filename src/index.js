import React from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
// import './index.css';
import App from './App';




import reportWebVitals from './reportWebVitals';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  
    supportedLngs:['en','mr','hi'],
    lng: document.querySelector('html').lang, // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    detection:{
        order: ['htmlTag','cookie', 'localStorage', 'path', 'subdomain'],
        caches:['cookie'],
    },
    backend: { loadPath: ('https://wcprojects.in/api/eng/categories') },
   
    react:{useSuspense:false}
  });


ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
