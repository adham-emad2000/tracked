import React, { useState, useEffect } from "react";
// استدعينا الـ client بالشكل الصحيح اللي بيحل مشكلة الشاشة البيضا
import { client } from "../clint";

function Partners() {
  // عملنا State فاضية هنملاها بالصور اللي هتيجي من Sanity
  const [partnersList, setPartnersList] = useState([]);

  useEffect(() => {
    // هنجيب الصور من الـ Schema بتاعة الـ hero زي ما طلبت
    client
      .fetch(`*[_type == "hero"][0].heroImages[].asset->url`)
      .then((data) => {
        if (data && data.length > 0) {
          // بنحول مسارات الصور لشكل الأوبجكت اللي كود الـ Map بتاعك متعود عليه
          const fetchedPartners = data.map((imgUrl, index) => ({
            id: index,
            name: `Partner ${index + 1}`,
            logo: imgUrl,
          }));
          setPartnersList(fetchedPartners);
        }
      })
      .catch(console.error);
  }, []);

  // بنكرر المصفوفة عشان تأثير الـ Infinite Scroll يشتغل
  const duplicatedPartners = [...partnersList, ...partnersList];

  return (
    <div className="bg-[var(--bg-surface)] py-16 border-t border-b border-slate-800 overflow-hidden relative group">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 inline-block text-[var(--text-main)] drop-shadow-sm transition-transform duration-700 hover:scale-105">
          Our Partners
        </h2>
        <div className="w-12 h-1.5 bg-[var(--color-primary)] mx-auto rounded-full transition-all duration-700 ease-out group-hover:w-32 group-hover:bg-[var(--color-primary-hover)] shadow-[0_0_10px_rgba(234,179,8,0.3)]"></div>
      </div>

      {/* ضفنا شرط هنا عشان الكود يشتغل بس لو في داتا رجعت من Sanity */}
      {partnersList.length > 0 && (
        <div className="flex w-max animate-scroll items-center gap-16 md:gap-24 px-8 mt-4">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[120px] sm:w-[150px]"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                /* شيلنا الـ grayscale والـ opacity عشان الصور تفضل منورة دايماً */
                className="max-h-16 md:max-h-20 w-auto object-contain transition-all duration-500 cursor-pointer hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:-translate-y-2 hover:scale-105"
                title={partner.name}
              />
            </div>
          ))}
        </div>
      )}

      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[var(--bg-surface)] to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[var(--bg-surface)] to-transparent pointer-events-none z-10"></div>
    </div>
  );
}

export default Partners;
