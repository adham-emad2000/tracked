import React, { useState, useEffect } from "react";
import { client, urlFor } from "../clint"; // تأكد من مسار ملف الـ client حسب مكان الفولدر عندك

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productsList, setProductsList] = useState([]);

  // جلب البيانات من Sanity مباشرة
  useEffect(() => {
    client
      .fetch('*[_type == "product"]')
      .then((data) => {
        console.log("Data from Sanity:", data); // لفحص الداتا في الـ Console
        setProductsList(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-[var(--bg-main)] py-24 transition-colors duration-500 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-3 block">
            World-Class Fleet
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[var(--text-main)] tracking-tight">
            Featured Products
          </h2>
          <div className="w-16 h-1.5 bg-[var(--color-primary)] mx-auto rounded-full shadow-[0_0_15px_rgba(234,179,8,0.4)]"></div>
        </div>

        {/* شبكة المنتجات (بتعرض كل اللي في Sanity أوتوماتيك) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {productsList.length > 0 ? (
            productsList.map((product) => (
              <div
                key={product._id}
                className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-3xl p-7 flex flex-col justify-between group hover:-translate-y-2.5 transition-all duration-500 hover:shadow-2xl relative overflow-hidden"
              >
                <div>
                  <h3 className="text-2xl font-black text-[var(--text-main)] mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                    {product.name}
                  </h3>

                  {/* صورة المنتج */}
                  <div className="relative h-64 w-full bg-white rounded-2xl mb-4 flex items-center justify-center overflow-hidden p-4 border border-[var(--border-color)]">
                    {product.image && (
                      <img
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                  </div>

                  {/* الوصف */}
                  <p className="text-[var(--text-muted)] text-sm mb-6 line-clamp-3">
                    {product.description || "لا يوجد وصف متاح حالياً للمنتج."}
                  </p>
                </div>

                {/* زرار التفاصيل */}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full py-3.5 px-4 bg-[var(--color-primary)] text-slate-900 font-bold rounded-xl hover:opacity-90 transition-all cursor-pointer"
                >
                  View Details
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-[var(--text-muted)] text-lg">
              جاري تحميل المنتجات أو لم تقم بإضافة منتجات بعد في Sanity...
            </p>
          )}
        </div>
      </div>

      {/* نافذة التفاصيل المنبثقة (Pop-up) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div
            className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-3xl max-w-lg w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-white bg-slate-800 p-2 rounded-full cursor-pointer"
            >
              ✕
            </button>

            <h3 className="text-2xl font-black text-[var(--text-main)] mb-4">
              {selectedProduct.name}
            </h3>

            <div className="relative h-72 w-full bg-white rounded-2xl mb-4 flex items-center justify-center p-4">
              {selectedProduct.image && (
                <img
                  src={urlFor(selectedProduct.image).url()}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            <p className="text-[var(--text-muted)] text-base mb-6">
              {selectedProduct.description}
            </p>

            <a
              href="tel:01011989145"
              className="block text-center bg-[var(--color-primary)] text-slate-900 font-extrabold py-3 rounded-xl"
            >
              Call for Order: 01011989145
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
