import React from "react";
import { Link } from "react-router-dom"; // استيراد Link للتحويل السلس بين الصفحات
import loader from "../logo/xm.png";

function Hero() {
  return (
    <div className="relative flex flex-col-reverse lg:flex-row items-center min-h-[85vh] bg-[var(--bg-main)] overflow-hidden">
      <div className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-24 py-16 flex flex-col justify-center z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] leading-tight mb-6 animate-fade-up">
          Your Partner in <br />
          <span className="text-[var(--color-primary)]">Heavy Machinery</span>
        </h1>

        <p
          className="text-lg text-[var(--text-muted)] mb-8 max-w-lg leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Equipped with advanced technology and powerful machinery, we handle
          your most demanding projects. Safe, reliable, and ready for heavy-duty
          work.
        </p>

        <div
          className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {/* زرار Contact Us يوديك لصفحة التواصل */}
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-[var(--color-primary)] text-slate-900 font-bold text-center rounded hover:bg-[var(--color-primary-hover)] transition duration-300 shadow-[0_4px_14px_0_rgba(234,179,8,0.2)] cursor-pointer"
          >
            Contact Us
          </Link>

          {/* زرار Explore Services يوديك لصفحة الكاتجوريز أو المنتجات */}
          <Link
            to="/categories"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-700 text-[var(--text-main)] font-bold text-center rounded hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition duration-300 cursor-pointer"
          >
            Explore Services
          </Link>
        </div>
      </div>

      <div
        className="w-full lg:w-1/2 h-[50vh] lg:h-[85vh] flex items-center justify-center relative p-8 animate-fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-[var(--color-primary)] opacity-10 rounded-full blur-[80px]"></div>

        <img
          src={loader}
          alt="Minimalist Yellow Loader"
          className="relative z-10 w-full max-w-md object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}

export default Hero;
