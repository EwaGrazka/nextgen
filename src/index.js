import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./app/translations/en.json";
import common_pl from "./app/translations/pl.json";
import { BrowserRouter } from "react-router-dom";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "pl",
  resources: {
    pl: {
      common: common_pl,
    },
    en: {
      common: common_en,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
