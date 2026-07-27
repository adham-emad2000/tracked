import React from "react";
import Navbar from "../compnant/Nav";
import Footer from "../compnant/Footer";
import eq from "../logo/loader.png";
import eqa from "../logo/images.jpg";

function About() {
  return (
    <div className="bg-[var(--bg-main)] min-h-screen transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20 animate-fade-in">
          <span className="text-4xl md:text-6xl font-black uppercase tracking-widest text-[var(--text-main)] mb-4 block drop-shadow-sm">
            Who We <span className="text-[var(--color-primary)]">Are</span>
          </span>
          <div className="w-24 h-2 bg-[var(--color-primary)] mx-auto rounded-full shadow-[0_0_20px_rgba(234,179,8,0.6)] transition-all duration-500 hover:w-36"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28">
          <div
            className="space-y-6 transform transition-all duration-700 hover:translate-x-1 text-right"
            dir="rtl"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-main)] tracking-tight leading-snug">
              توريد وصيانة أحدث المعدات الثقيلة واللودرات ومعدات النقل
            </h2>
            <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed font-normal">
              نحن في{" "}
              <span className="text-[var(--color-primary)] font-bold text-lg">
                الحوت تراك
              </span>{" "}
              نمتلك خبرة واسعة في توريد وتجهيز المعدات الثقيلة ذات الجودة
              العالمية، وخاصة{" "}
              <span className="text-[var(--text-main)] font-semibold">
                اللودرات، الحفارات، ومعدات النقل الإنشائية
              </span>{" "}
              المصممة لتحمل أصعب ظروف العمل والمواقع الشاقة بكفاءة فائقة.
            </p>
            <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed font-normal">
              نحرص على تقديم حلول معدات متكاملة تطابق أعلى معايير الجودة
              العالمية وتلبي الاحتياجات الدقيقة للقطاعات الإنشائية والصناعية في
              مصر.
            </p>
          </div>

          <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-4 rounded-3xl shadow-2xl overflow-hidden group transition-all duration-500 hover:border-[var(--color-primary)]/50 hover:shadow-[0_25px_50px_-12px_rgba(234,179,8,0.25)]">
            <div className="relative h-72 sm:h-80 w-full bg-slate-900/5 dark:bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden border border-[var(--border-color)]">
              <img
                src={eq}
                alt="CAT Heavy Machinery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1 bg-[var(--bg-surface)] border border-[var(--border-color)] p-4 rounded-3xl shadow-2xl overflow-hidden group transition-all duration-500 hover:border-[var(--color-primary)]/50 hover:shadow-[0_25px_50px_-12px_rgba(234,179,8,0.25)]">
            <div className="relative h-72 sm:h-80 w-full bg-slate-900/5 dark:bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden border border-[var(--border-color)]">
              <img
                src={eqa}
                alt="Heavy Equipment Fleet"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-1"
              />
            </div>
          </div>

          <div
            className="order-1 lg:order-2 space-y-6 transform transition-all duration-700 hover:-translate-x-1 text-right"
            dir="rtl"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-main)] tracking-tight leading-snug">
              قطع الغيار الأصلية والحلول الصناعية المتكاملة
            </h2>
            <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed font-normal">
              لا يقتصر دورنا على التوريد فحسب، بل نقوم بتوفير{" "}
              <span className="text-[var(--text-main)] font-semibold">
                قطع الغيار الأصلية وعالية الأداء
              </span>{" "}
              الخاصة باللودرات ومعدات النقل لضمان استدامة عمل الأساطيل بأقصى
              كفاءة وتقليل أي زمن توقف محتمل للعمليات.
            </p>
            <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed font-normal">
              هدفنا هو بناء شراكات حقيقية وموثوقة مع عملائنا عبر تقديم الدعم
              الفني المستمر والاستشارات الهندسية المتخصصة لكل مشاريعهم
              الإنشائية.
            </p>

            <div className="p-6 bg-[var(--bg-surface)] border-2 border-[var(--color-primary)]/40 rounded-3xl shadow-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(234,179,8,0.2)] group/box flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[var(--text-main)] font-bold text-base sm:text-lg text-right">
                📞 للاستفسار عن اللودرات وقطع الغيار:
              </p>
              <div className="flex-shrink-0">
                <a
                  href="tel:01011989145"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[var(--color-primary)] to-amber-500 text-slate-950 font-black text-xl rounded-2xl shadow-lg transform transition-all duration-300 group-hover/box:scale-105 active:scale-95 tracking-wider"
                >
                  01011989145
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
