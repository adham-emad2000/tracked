import React from "react";

const Contact = () => {
  return (
    <div className="bg-[var(--bg-main)] min-h-screen py-20 transition-colors duration-500 relative flex items-center justify-center overflow-hidden">
      {/* خلفية بتأثيرات مضيئة وعصرية */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        {/* الهيدر */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest">
            تواصل معنا الآن وانطلق معنا
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[var(--text-main)] tracking-tight mb-4">
            جاهزون دائماً{" "}
            <span className="text-[var(--color-primary)]">لخدمتكم</span>
          </h1>
          <p className="text-[var(--text-muted)] text-base max-w-xl mx-auto font-medium">
            نحن هنا لمساعدتك والإجابة على كل استفساراتك بكل أسرع وقت. اختر
            الوسيلة الأنسب للتواصل معنا.
          </p>
        </div>

        {/* شبكة الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* كارت الواتساب والموبايل */}
          <div className="bg-[var(--bg-surface)] border-2 border-[var(--border-color)] hover:border-[var(--color-primary)] p-8 rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125"></div>

            <div className="w-16 h-16 bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md group-hover:bg-[var(--color-primary)] group-hover:text-slate-950 transition-all duration-300">
              📞
            </div>

            <h3 className="text-xl font-black text-[var(--text-main)] mb-1">
              Call & WhatsApp
            </h3>
            <p className="text-[var(--text-muted)] text-xs mb-6 font-medium">
              متاحون لخدمتكم طوال الوقت
            </p>

            <div className="flex flex-col gap-3 w-full">
              <a
                href="https://wa.me/201140503271"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-500 hover:text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 text-sm border border-emerald-500/20"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>WhatsApp Us</span>
              </a>

              <a
                href="tel:01116733314"
                className="text-[var(--text-main)] hover:text-[var(--color-primary)] font-bold text-sm transition-colors py-1"
              >
                01116733314
              </a>
            </div>
          </div>

          {/* كارت الإيميل */}
          <div className="bg-[var(--bg-surface)] border-2 border-[var(--border-color)] hover:border-[var(--color-primary)] p-8 rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125"></div>

            <div className="w-16 h-16 bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md group-hover:bg-[var(--color-primary)] group-hover:text-slate-950 transition-all duration-300">
              ✉️
            </div>

            <h3 className="text-xl font-black text-[var(--text-main)] mb-1">
              Email Address
            </h3>
            <p className="text-[var(--text-muted)] text-xs mb-6 font-medium">
              أرسل رسالتك في أي وقت
            </p>

            <a
              href="mailto:hoottrack@gmail.com"
              className="bg-[var(--bg-main)] border border-[var(--border-color)] hover:border-[var(--color-primary)] text-[var(--text-main)] font-bold py-3.5 px-4 rounded-xl transition-all duration-300 text-xs break-all w-full flex items-center justify-center shadow-inner"
            >
              hoottrack@gmail.com
            </a>
          </div>

          {/* كارت العنوان */}
          <div className="bg-[var(--bg-surface)] border-2 border-[var(--border-color)] hover:border-[var(--color-primary)] p-8 rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125"></div>

            <div className="w-16 h-16 bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md group-hover:bg-[var(--color-primary)] group-hover:text-slate-950 transition-all duration-300">
              📍
            </div>

            <h3 className="text-xl font-black text-[var(--text-main)] mb-1">
              Our Location
            </h3>
            <p className="text-[var(--text-muted)] text-xs mb-6 font-medium">
              تشرفنا زيارتكم بمقرنا
            </p>

            <div className="bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-muted)] font-medium text-xs leading-relaxed p-3.5 rounded-xl w-full shadow-inner">
              شارع عبد الرحمن ابن عوف، خلف المعهد الأزهرى، مدينة السلام، القاهرة
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
