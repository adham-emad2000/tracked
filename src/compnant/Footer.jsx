import React from "react";
import logo from "../logo/logo.jpg";

function Footer() {
  return (
    <footer className="bg-white dark:bg-[var(--bg-surface)] border-t border-slate-200 dark:border-[var(--border-color)] pt-20 pb-12 transition-colors duration-500 relative overflow-hidden shadow-sm">
      {/* خلفية جمالية خفيفة متناسقة مع الستايل */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[var(--color-primary)] opacity-10 dark:opacity-5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* العمود الأول: اللوجو ونبذة سريعة */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Company Logo"
                className="h-14 w-auto object-contain rounded-xl shadow-md border border-slate-200 dark:border-[var(--border-color)] bg-white p-1"
              />
              <span className="text-2xl font-black text-slate-900 dark:text-[var(--text-main)] tracking-wider">
                HOOT TRACK
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-[var(--text-muted)] leading-relaxed font-normal">
              Your trusted destination for world-class heavy machinery,
              high-performance spare parts, and reliable industrial solutions.
            </p>

            {/* أيقونات السوشيال ميديا (روش وتفاعلية وظاهرة بقوة في النور والضلمة) */}
            <div className="flex items-center gap-3 pt-2">
              {/* فيسبوك */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-[var(--bg-main)] border border-slate-200 dark:border-[var(--border-color)] flex items-center justify-center text-slate-800 dark:text-[var(--text-main)] hover:bg-[var(--color-primary)] hover:text-slate-900 hover:border-[var(--color-primary)] transition-all duration-300 shadow-sm hover:scale-110"
                title="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* انستجرام */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-[var(--bg-main)] border border-slate-200 dark:border-[var(--border-color)] flex items-center justify-center text-slate-800 dark:text-[var(--text-main)] hover:bg-[var(--color-primary)] hover:text-slate-900 hover:border-[var(--color-primary)] transition-all duration-300 shadow-sm hover:scale-110"
                title="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>

              {/* إيميل (Gmail) */}
              <a
                href="mailto:hoottrack@gmail.com"
                className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-[var(--bg-main)] border border-slate-200 dark:border-[var(--border-color)] flex items-center justify-center text-slate-800 dark:text-[var(--text-main)] hover:bg-[var(--color-primary)] hover:text-slate-900 hover:border-[var(--color-primary)] transition-all duration-300 shadow-sm hover:scale-110"
                title="Email Us"
              >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-[var(--text-main)] uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-600 dark:text-[var(--text-muted)] hover:text-[var(--color-primary)] font-medium transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-sm text-slate-600 dark:text-[var(--text-muted)] hover:text-[var(--color-primary)] font-medium transition-colors"
                >
                  Products & Fleet
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="text-sm text-slate-600 dark:text-[var(--text-muted)] hover:text-[var(--color-primary)] font-medium transition-colors"
                >
                  Our Partners
                </a>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: بيانات التواصل والعنوان */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-[var(--text-main)] uppercase tracking-widest">
              Contact Info
            </h4>
            <div className="space-y-3.5 text-sm text-slate-600 dark:text-[var(--text-muted)]">
              {/* العنوان */}
              <p className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-amber-500 dark:text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="leading-relaxed font-medium">
                  شارع عبد الرحمن بن عوف - خلف المعهد الأزهرى - مدينة السلام -
                  القاهرة
                </span>
              </p>

              {/* البريد الإلكتروني */}
              <p className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-amber-500 dark:text-[var(--color-primary)] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <a
                  href="mailto:hoottrack@gmail.com"
                  className="text-slate-800 dark:text-[var(--text-main)] hover:text-[var(--color-primary)] font-semibold transition-colors"
                >
                  hoottrack@gmail.com
                </a>
              </p>

              {/* رقم التليفون */}
              <p className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-amber-500 dark:text-[var(--color-primary)] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <a
                  href="tel:01140503271"
                  className="text-slate-900 dark:text-[var(--text-main)] hover:text-[var(--color-primary)] transition-colors font-bold tracking-wide text-base"
                >
                  01140503271
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* خط فاصل وحقوق النشر */}
        <div className="border-t border-slate-200 dark:border-[var(--border-color)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-slate-500 dark:text-[var(--text-muted)] font-medium">
            &copy; {new Date().getFullYear()} HOOT TRACK. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500 dark:text-[var(--text-muted)]">
            <a
              href="#"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
