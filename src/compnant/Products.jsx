import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../clint";

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "product"]')
      .then((data) => {
        setProductsList(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const displayedProducts = productsList.slice(0, 3);

  // التعديل هنا: يحترم السطور اللي الأدمن عملها بـ Enter في سانتي بس
  const formatDescription = (desc) => {
    if (!desc) return "لا يوجد وصف متاح حالياً للمنتج.";

    return (
      <div className="flex flex-col gap-1">
        {desc.split("\n").map((line, index) => (
          <span key={index} className="block min-h-[1.5rem]">
            {line}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-slate-50 dark:bg-[var(--bg-main)] py-24 transition-colors duration-500 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-[var(--color-primary)] mb-3 block">
            World-Class Fleet
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 dark:text-[var(--text-main)] tracking-tight">
            Featured Products
          </h2>
          <div className="w-16 h-1.5 bg-amber-500 dark:bg-[var(--color-primary)] mx-auto rounded-full"></div>
        </div>

        {/* شيلنا items-start من هنا عشان الكروت تتمد كلها لنفس الطول */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <div
                key={product._id}
                // خلينا الكارت ياخد h-full عشان يملى المساحة كلها
                className="bg-white dark:bg-[var(--bg-surface)] border border-slate-200 dark:border-[var(--border-color)] rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative"
              >
                {/* الديف ده هياخد المساحة اللي فوق ويزق الزرار لتحت */}
                <div className="flex-1 mb-5">
                  <div className="relative h-60 w-full bg-slate-100 dark:bg-slate-900/40 rounded-xl mb-5 flex items-center justify-center overflow-hidden p-4 border border-slate-100 dark:border-slate-800">
                    {product.image && (
                      <img
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                      />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-[var(--text-main)] mb-3">
                    {product.name}
                  </h3>

                  {/* السكرول بار لو الكلام كتير */}
                  <div className="text-slate-600 dark:text-[var(--text-muted)] text-sm leading-relaxed font-medium overflow-y-auto max-h-32 pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-amber-500 dark:[&::-webkit-scrollbar-thumb]:bg-[var(--color-primary)] [&::-webkit-scrollbar-thumb]:rounded-full">
                    {formatDescription(product.description)}
                  </div>
                </div>

                {/* الزرار هيفضل تحت دايماً بفضل mt-auto */}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full mt-auto py-3 px-4 bg-slate-900 dark:bg-[var(--color-primary)] text-white dark:text-slate-950 font-semibold rounded-xl hover:opacity-95 transition-all cursor-pointer text-sm shadow-sm flex items-center justify-center gap-2"
                >
                  <span>View Details</span>
                  <span>→</span>
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-slate-500 dark:text-[var(--text-muted)] text-lg">
              جاري تحميل المنتجات...
            </p>
          )}
        </div>

        {productsList.length > 3 && (
          <div className="text-center mt-12">
            <Link
              to="/categories"
              className="inline-block px-8 py-3.5 bg-amber-500 dark:bg-[var(--color-primary)] text-slate-950 font-bold rounded-xl hover:opacity-90 transition-all cursor-pointer shadow-md text-sm"
            >
              View All Products ({productsList.length})
            </Link>
          </div>
        )}
      </div>

      {/* نافذة تفاصيل المنتج */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div
            // ضفنا flex flex-col و max-h-[90vh] عشان النافذة متكبرش عن الشاشة
            className="bg-white dark:bg-[var(--bg-surface)] border border-slate-200 dark:border-[var(--border-color)] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-red-500 bg-slate-100 dark:bg-slate-800 w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer font-bold z-10"
            >
              ✕
            </button>

            {/* ضفنا flex-shrink-0 عشان الصورة متتصغرش مع السكرول */}
            <div className="relative h-64 w-full bg-slate-100 dark:bg-slate-900/40 rounded-xl mb-5 flex-shrink-0 flex items-center justify-center p-4 border border-slate-100 dark:border-slate-800">
              {selectedProduct.image && (
                <img
                  src={urlFor(selectedProduct.image).url()}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-[var(--text-main)] mb-3 flex-shrink-0">
              {selectedProduct.name}
            </h3>

            {/* سكرول بار للنافذة كمان */}
            <div className="text-slate-600 dark:text-[var(--text-muted)] text-sm sm:text-base leading-relaxed mb-6 font-medium overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-amber-500 dark:[&::-webkit-scrollbar-thumb]:bg-[var(--color-primary)] [&::-webkit-scrollbar-thumb]:rounded-full">
              {formatDescription(selectedProduct.description)}
            </div>

            <a
              href="tel:01011989145"
              className="flex-shrink-0 flex items-center justify-center gap-2 w-full bg-amber-500 dark:bg-[var(--color-primary)] text-slate-950 font-bold py-3.5 px-6 rounded-xl shadow-md hover:opacity-90 transition-all text-base cursor-pointer"
            >
              <span>📞 Call for Order: 01011989145</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
