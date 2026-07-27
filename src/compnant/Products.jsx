import React, { useState } from "react";
import drils from "../logo/drills.webp";
import lwlb from "../logo/lwlb.webp";
import sam from "../logo/sam.webp";

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsList = [
    {
      id: 1,
      category: "Off-Highway Trucks",
      name: "789 (04) Water Truck",
      image: drils,
      specs: [
        { label: "Engine Model", value: "Cat® 3516C HD" },
        { label: "Gross Power", value: "1566 kW" },
        { label: "Tank Capacity", value: "up to 165 000 L (43,588 gal)" },
      ],
      description:
        "Designed for high-production mining and heavy-duty construction applications. Delivers lower cost per ton across various demanding operations.",
      selected: true,
    },
    {
      id: 2,
      category: "Off-Highway Trucks",
      name: "785 (04) Water Truck",
      image: lwlb,
      specs: [
        { label: "Engine Model", value: "Cat® 3516C HD" },
        { label: "Gross Power", value: "1082 kW" },
        { label: "Tank Capacity", value: "up to 121 133 L (32,000 gal)" },
      ],
      description:
        "Built to optimize payload and performance, ensuring maximum reliability and efficiency in harsh environments.",
      selected: false,
    },
    {
      id: 3,
      category: "Off-Highway Trucks",
      name: "777 (05) Water Truck",
      image: sam,
      specs: [
        { label: "Engine Model", value: "Cat® C32B" },
        { label: "Gross Power", value: "765 kW" },
        { label: "Tank Capacity", value: "up to 75 700 L (20,000 gal)" },
      ],
      description:
        "A compact yet powerful off-highway solution engineered for exceptional operator comfort and long component life.",
      selected: false,
    },
  ];

  return (
    <div className="bg-[var(--bg-main)] py-24 transition-colors duration-500 relative overflow-hidden">
      {/* خلفية جمالية خفيفة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* عنوان القسم */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-3 block">
            World-Class Fleet
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[var(--text-main)] tracking-tight">
            Featured Products
          </h2>
          <div className="w-16 h-1.5 bg-[var(--color-primary)] mx-auto rounded-full shadow-[0_0_15px_rgba(234,179,8,0.4)]"></div>
          <p className="mt-4 text-base md:text-lg text-[var(--text-muted)] max-w-xl mx-auto font-light">
            Engineered for high performance, maximum durability, and reliability
            in harsh environments.
          </p>
        </div>

        {/* شبكة الكروت (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {productsList.map((product) => (
            <div
              key={product.id}
              className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-3xl p-7 flex flex-col justify-between group hover:-translate-y-2.5 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 relative overflow-hidden"
            >
              {/* بادج مختار */}
              {product.selected && (
                <div className="absolute top-5 right-5 bg-slate-900 text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-md z-20 border border-slate-700 tracking-wider uppercase">
                  Selected
                </div>
              )}

              <div>
                <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider block mb-1">
                  {product.category}
                </span>

                <h3 className="text-2xl font-black text-[var(--text-main)] mb-6 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {product.name}
                </h3>

                {/* صورة المنتج */}
                <div className="relative h-64 w-full bg-white rounded-2xl mb-6 flex items-center justify-center overflow-hidden p-4 border border-[var(--border-color)] transition-all duration-500 group-hover:border-[var(--color-primary)]/40 shadow-inner">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* المواصفات الفنية (ديناميكية بالكامل تسحب من مصفوفة specs) */}
                <div className="space-y-3.5 mb-8 border-t border-[var(--border-color)] pt-5">
                  {product.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-xs text-[var(--text-muted)] font-medium">
                        {spec.label}
                      </span>
                      <span className="text-sm font-bold text-[var(--text-main)]">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* زرار عرض التفاصيل يفتح الـ Pop-up */}
              <button
                onClick={() => setSelectedProduct(product)}
                className="w-full py-3.5 px-4 bg-[var(--color-primary)] text-slate-900 font-bold rounded-xl hover:bg-[var(--color-primary-hover)] transition-all duration-300 shadow-md shadow-[var(--color-primary)]/25 active:scale-95 cursor-pointer"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* زرار عرض الكل */}
        <div className="text-center mt-16">
          <button className="bg-transparent border-2 border-[var(--color-primary)] text-[var(--text-main)] font-bold text-base py-4 px-12 rounded-full hover:bg-[var(--color-primary)] hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-[var(--color-primary)]/30">
            View All Products
          </button>
        </div>
      </div>

      {/* =========================================
         POP-UP MODAL (نافذة التفاصيل المنبثقة)
         ========================================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-all animate-fade-up">
          <div
            className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* زرار الإغلاق (X) */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 text-[var(--text-muted)] hover:text-[var(--text-main)] bg-slate-800/10 dark:bg-slate-700/30 p-2 rounded-full transition-colors duration-200 cursor-pointer"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* تصنيف المنتج */}
            <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider block mb-1">
              {selectedProduct.category}
            </span>

            {/* اسم المنتج */}
            <h3 className="text-3xl font-black text-[var(--text-main)] mb-6">
              {selectedProduct.name}
            </h3>

            {/* صورة أكبر بكتير جوه الـ Pop-up */}
            <div className="relative h-96 w-full bg-white rounded-2xl mb-6 flex items-center justify-center p-4 border border-[var(--border-color)] shadow-inner">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>

            {/* جدول المواصفات الفنية (ديناميكي بالكامل يتحدث حسب ما يحدده الأدمن) */}
            <div className="bg-slate-100/50 dark:bg-slate-900/50 rounded-2xl p-5 border border-[var(--border-color)] space-y-4 mb-6">
              {selectedProduct.specs.map((spec, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center ${index !== selectedProduct.specs.length - 1 ? "border-b border-[var(--border-color)] pb-3" : ""}`}
                >
                  <span className="text-sm text-[var(--text-muted)] font-medium">
                    {spec.label}
                  </span>
                  <span className="text-base font-bold text-[var(--text-main)]">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* الوصف التفصيلي الكبير تحت خالص */}
            <div className="border-t border-[var(--border-color)] pt-5 mb-6">
              <p className="text-[var(--text-muted)] text-base leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>

            {/* سطر الطلب ورقم التليفون بشكل احترافي وفخم (Call to Action Banner) */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-[var(--color-primary)]/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-[var(--color-primary)] text-slate-900 p-3 rounded-xl shadow-md">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-widest block font-medium">
                    For Order & Inquiries
                  </span>
                  <span className="text-lg font-bold text-white tracking-wide">
                    Direct Sales Line
                  </span>
                </div>
              </div>
              <a
                href="tel:01011989145"
                className="bg-[var(--color-primary)] text-slate-900 font-extrabold text-lg py-3 px-6 rounded-xl hover:bg-[var(--color-primary-hover)] transition-all duration-300 shadow-md hover:scale-105"
              >
                01011989145
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
