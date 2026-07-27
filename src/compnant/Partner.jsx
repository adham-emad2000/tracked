import React from "react";

// استدعاء الصور
import cat from "../logo/cat.png";
import ctp from "../logo/ctp-logo-png_seeklogo-405369.png";
import itr from "../logo/itr.png";

function Partners() {
  const partnersList = [
    { id: 1, name: "CAT", logo: cat },
    { id: 2, name: "ITR", logo: itr },
    { id: 3, name: "CTP", logo: ctp },
    { id: 4, name: "CAT", logo: cat },
    { id: 5, name: "ITR", logo: itr },
    { id: 6, name: "CTP", logo: ctp },
  ];

  // بنكرر المصفوفة مرتين عشان الحركة تفضل مستمرة
  const duplicatedPartners = [...partnersList, ...partnersList];

  return (
    <div className="bg-[var(--bg-surface)] py-16 border-t border-b border-slate-800 overflow-hidden relative group">
      {/* منطقة العنوان بالأنيميشن */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 inline-block text-[var(--text-main)] drop-shadow-sm transition-transform duration-700 hover:scale-105">
          Our Partners
        </h2>
        {/* الخط التفاعلي: بيبدأ بعرض صغير وبيكبر لما تقف على القسم */}
        <div className="w-12 h-1.5 bg-[var(--color-primary)] mx-auto rounded-full transition-all duration-700 ease-out group-hover:w-32 group-hover:bg-[var(--color-primary-hover)] shadow-[0_0_10px_rgba(234,179,8,0.3)]"></div>
      </div>

      {/* شريط اللوجوهات المتحرك */}
      <div className="flex w-max animate-scroll items-center gap-16 md:gap-24 px-8 mt-4">
        {duplicatedPartners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[120px] sm:w-[150px]"
          >
            <img
              src={partner.logo}
              alt={`${partner.name} Logo`}
              // تأثير أبيض وأسود يتلغي لما الماوس يقف عليه (لمسة المينيماليست)
              className="max-h-16 md:max-h-20 w-auto object-contain transition-all duration-500 cursor-pointer grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:-translate-y-2 hover:scale-105"
              title={partner.name}
            />
          </div>
        ))}
      </div>

      {/* ظل خفيف يمين وشمال متناسق مع لون الخلفية */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[var(--bg-surface)] to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[var(--bg-surface)] to-transparent pointer-events-none z-10"></div>
    </div>
  );
}

export default Partners;
