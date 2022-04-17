import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./app/components/Header/Header";
import { FAQ } from "./app/pages/FAQ/FAQ";
import { Products } from "./app/pages/Products/Products";
import { Privacy } from "./app/pages/Privacy/Privacy";
import { Contact } from "./app/pages/Contact/Contact";
import { Home } from "./app/pages/Home/Home";

function App() {
  const [night, setNight] = useState(false);
  const [lang, setLang] = useState("pl");

  return (
    <div className="App">
      <Header night={night} setNight={setNight} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
}

export default App;
