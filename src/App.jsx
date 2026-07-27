import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Footer from "./compnant/Footer";
import Hero from "./compnant/Hero";
import Navbar from "./compnant/Nav";
import Partners from "./compnant/Partner";
import Products from "./compnant/Products";
import Categories from "./Pages/Categories";
import About from "./Pages/About"; //

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Partners />
                <Products />
              </>
            }
          />

          <Route path="/categories" element={<Categories />} />

          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
