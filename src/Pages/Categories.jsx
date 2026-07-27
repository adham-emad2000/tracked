import React, { useState, useEffect } from "react";
import { client, urlFor } from "../clint";

function Categories() {
  const [productsList, setProductsList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    client
      .fetch('*[_type == "product"]')
      .then((data) => {
        setProductsList(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // الأوبشنز المؤقتة اللي هيختار منها
  const categoryOptions = ["all", "x", "y", "z", "n", "r"];

  // فلترة المنتجات بناءً على الاختيار من القائمة
  const filteredProducts =
    selectedCategory === "all"
      ? productsList
      : productsList.filter((product) => product.category === selectedCategory); // لو حقل الفئة عندك اسمه category في سانتي

  return (
    <div className="bg-[var(--bg-main)] min-h-screen transition-colors duration-500 pt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* عنوان الصفحة */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[var(--text-main)] tracking-tight">
            All Categories & Products
          </h1>
          <div className="w-16 h-1.5 bg-[var(--color-primary)] mx-auto rounded-full shadow-[0_0_15px_rgba(234,179,8,0.4)]"></div>
        </div>

        {/* قائمة الـ Options (Select Menu) المودرن */}
        <div className="flex justify-center mb-14">
          <div className="relative w-full max-w-xs">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-[var(--bg-surface)] border-2 border-[var(--border-color)] focus:border-[var(--color-primary)] text-[var(--text-main)] font-bold py-3.5 px-5 rounded-2xl shadow-lg appearance-none cursor-pointer transition-all outline-none"
            >
              <option value="all" disabled>
                Select Category
              </option>
              {categoryOptions.map((opt) => (
                <option
                  key={opt}
                  value={opt}
                  className="bg-[var(--bg-surface)] text-[var(--text-main)]"
                >
                  {opt === "all"
                    ? "All Categories"
                    : `Category: ${opt.toUpperCase()}`}
                </option>
              ))}
            </select>
            {/* سهم صغير شكلة شيك للـ Dropdown */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[var(--color-primary)]">
              ▼
            </div>
          </div>
        </div>

        {/* شبكة المنتجات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsList.length > 0 ? (
            productsList.map((product) => (
              <div
                key={product._id}
                className="group bg-gradient-to-b from-[var(--bg-surface)] to-[var(--bg-main)] border border-[var(--border-color)] hover:border-[var(--color-primary)]/50 rounded-3xl p-6 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden"
              >
                <div>
                  <div className="relative h-64 w-full bg-slate-900/5 dark:bg-white/5 rounded-2xl mb-6 flex items-center justify-center overflow-hidden p-6 border border-[var(--border-color)] shadow-inner">
                    {product.image && (
                      <img
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-xl"
                      />
                    )}
                  </div>

                  <h3 className="text-2xl font-black text-[var(--text-main)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-[var(--text-muted)] text-sm line-clamp-2 leading-relaxed mb-6">
                    {product.description || "لا يوجد وصف متاح حالياً للمنتج."}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full py-3.5 px-4 bg-[var(--bg-main)] border-2 border-[var(--color-primary)] text-[var(--text-main)] font-black rounded-2xl hover:bg-[var(--color-primary)] hover:text-slate-950 transition-all duration-300 cursor-pointer shadow-md flex items-center justify-center gap-2 group/btn"
                >
                  <span>View Details</span>
                  <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-[var(--text-muted)] text-lg">
              جاري تحميل المنتجات...
            </p>
          )}
        </div>
      </div>

      {/* نافذة الـ Pop-up للتفاصيل */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div
            className="bg-[var(--bg-surface)] border border-[var(--color-primary)]/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 text-white bg-slate-800/80 hover:bg-red-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer font-bold z-10"
            >
              ✕
            </button>

            <div className="relative h-72 w-full bg-slate-900/5 dark:bg-white/5 rounded-2xl mb-6 flex items-center justify-center p-6 border border-[var(--border-color)]">
              {selectedProduct.image && (
                <img
                  src={urlFor(selectedProduct.image).url()}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              )}
            </div>

            <h3 className="text-3xl font-black text-[var(--text-main)] mb-3">
              {selectedProduct.name}
            </h3>

            <p className="text-[var(--text-muted)] text-base leading-relaxed mb-8 bg-[var(--bg-main)] p-4 rounded-2xl border border-[var(--border-color)]">
              {selectedProduct.description || "لا يوجد وصف متاح لهذا المنتج."}
            </p>

            <a
              href="tel:01011989145"
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[var(--color-primary)] to-amber-500 text-slate-950 font-black py-4 px-6 rounded-2xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all text-lg cursor-pointer"
            >
              <span>📞 Call for Order: 01011989145</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;
