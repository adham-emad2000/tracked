import { useState, useEffect } from "react";
import logo from "../logo/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // حالة الـ Theme (بنجيبها من المتصفح لو موجودة، أو بنخليها فاتح كافتراضي)
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  // الكود ده بيتنفذ كل مرة الـ theme يتغير عشان يطبق الكلاس ويحفظ في المتصفح
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // دالة تغيير اللون
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="bg-[var(--bg-main)]/90 backdrop-blur-md shadow-lg border-b border-[var(--border-color)] w-full sticky top-0 z-50 transition-colors duration-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* جزء اللوجو */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-16 sm:h-20 w-auto object-contain cursor-pointer"
              src={logo}
              alt="Company Logo"
            />
          </div>

          {/* اللينكات وزرار الألوان (شاشات كبيرة) */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <a
              href="#"
              className="text-[var(--text-main)] hover:text-[var(--color-primary)] font-bold transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-[var(--text-main)] hover:text-[var(--color-primary)] font-bold transition duration-300"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-[var(--text-main)] hover:text-[var(--color-primary)] font-bold transition duration-300"
            >
              Contact Us
            </a>

            {/* زرار تبديل اللون (شمس وقمر) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--color-primary)] hover:scale-110 transition-transform duration-300 shadow-sm"
              title="Toggle Theme"
            >
              {theme === "light" ? (
                // أيقونة القمر (للوضع الغامق)
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                // أيقونة الشمس (للوضع الفاتح)
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* الموبايل: زرار المنيو وزرار اللون */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-[var(--color-primary)]"
            >
              {theme === "light" ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--text-main)] hover:text-[var(--color-primary)] focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الموبايل */}
      {isOpen && (
        <div className="md:hidden bg-[var(--bg-surface)] border-t border-[var(--border-color)] absolute w-full left-0 top-20 shadow-xl transition-colors duration-400">
          <div className="px-4 pt-2 pb-4 space-y-1 text-center">
            <a
              href="#"
              className="block px-3 py-3 text-[var(--text-main)] hover:text-[var(--color-primary)] font-bold rounded-md"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-3 text-[var(--text-main)] hover:text-[var(--color-primary)] font-bold rounded-md"
            >
              About Us
            </a>
            <a
              href="#"
              className="block px-3 py-3 text-[var(--text-main)] hover:text-[var(--color-primary)] font-bold rounded-md"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
