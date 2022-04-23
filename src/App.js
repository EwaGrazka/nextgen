import { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./app/components/Header/Header";
import { FAQ } from "./app/pages/FAQ/FAQ";
import { Products } from "./app/pages/Products/Products";
import { Privacy } from "./app/pages/Privacy/Privacy";
import { Contact } from "./app/pages/Contact/Contact";
import { Home } from "./app/pages/Home/Home";
import { Footer } from "./app/components/Footer/Footer";

function App() {
  const [isNight, setIsNight] = useState(true);
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
        <Route path="/" element={<Home isNight={isNight} />} />
        <Route path="/products" element={<Products isNight={isNight} />} />
        <Route path="/faq" element={<FAQ isNight={isNight} />} />
        <Route path="/contact" element={<Contact isNight={isNight} />} />
        <Route path="/privacy" element={<Privacy isNight={isNight} />} />
      </Routes>
      <Footer isNight={isNight} />
    </div>
  );
}

export default App;
