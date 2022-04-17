import { useCallback, useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./app/components/Header/Header";
import { FAQ } from "./app/pages/FAQ/FAQ";
import { Products } from "./app/pages/Products/Products";
import { Privacy } from "./app/pages/Privacy/Privacy";
import { Contact } from "./app/pages/Contact/Contact";
import { Home } from "./app/pages/Home/Home";

function App() {
  const [isNight, setIsNight] = useState(false);
  const [lang, setLang] = useState("pl");
  const [y, setY] = useState(window.scrollY);
  const [isScroll, setIsScroll] = useState(false);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > 120) {
        setIsScroll(true);
      } else if (y <= 120) {
        setIsScroll(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div className="App">
      <Header isNight={isNight} setIsNight={setIsNight} isScroll={isScroll} />
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
