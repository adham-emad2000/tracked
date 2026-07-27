import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./compnant/Footer";
import Hero from "./compnant/Hero";
import Navbar from "./compnant/Nav";
import Partners from "./compnant/Partner";
import Products from "./compnant/Products";
import Categories from "./Pages/Categories";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* الصفحة الرئيسية (فيها الهوم والبارتنرز والمنتجات العادية) */}
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

          {/* صفحة الكاتجوريز وكل المنتجات */}
          <Route path="/categories" element={<Categories />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
