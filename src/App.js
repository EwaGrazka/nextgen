import { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./app/components/Header/Header";
import { FAQ } from "./app/pages/FAQ/FAQ";
import { Privacy } from "./app/pages/Privacy/Privacy";
import { Contact } from "./app/pages/Contact/Contact";
import { Home } from "./app/pages/Home/Home";
import { Footer } from "./app/components/Footer/Footer";
import { Rules } from "./app/pages/Rules/Rules";
import { AllProductsWrapper } from "./app/components/AllProductsWrapper/AllProductsWrapper";
import { ProductPage } from "./app/components/ProductPage/ProductPage";
import { ProgressBar } from "./app/components/ProgressBar/ProgressBar";
import MenuMobile from "./app/components/MenuMobile/MenuMobile";

function App() {
  const [isNight, setIsNight] = useState(true);
  const [y, setY] = useState(window.scrollY);
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const documentHeight = document.documentElement.offsetHeight;
    const windowHeight = window.innerHeight;
    const windowTopEdge = window.scrollY;
    setScrollValue(
      (windowTopEdge / (documentHeight - windowHeight)).toFixed(2) * 100
    );
  }, [window.scrollY]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  return (
    <div className="scroller">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isNight={isNight}
        setIsNight={setIsNight}
        isScroll={isScroll}
      />
      {isMenuOpen && <MenuMobile isNight={isNight} />}

      <ProgressBar isNight={isNight} scrollValue={scrollValue} />

      <Routes>
        <Route path="/nextgen" element={<Home isNight={isNight} />} />
        <Route
          path="/products"
          element={<AllProductsWrapper isNight={isNight} />}
        />
        <Route path="/faq" element={<FAQ isNight={isNight} />} />
        <Route path="/contact" element={<Contact isNight={isNight} />} />
        <Route path="/privacy" element={<Privacy isNight={isNight} />} />
        <Route path="/rules" element={<Rules isNight={isNight} />} />
        <Route path="/product:id" element={<ProductPage isNight={isNight} />} />
      </Routes>

      <Footer isNight={isNight} />
    </div>
  );
}

export default App;
