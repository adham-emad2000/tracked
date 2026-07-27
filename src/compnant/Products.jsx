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

  const formatDescription = (desc) => {
    if (!desc) return "لا يوجد وصف متاح حالياً للمنتج.";

    return desc
      .split(/[,،]|\b(Speed Range|Emissions)\b/)
      .filter(Boolean)
      .map((item, index) => (
        <span key={index} className="block mt-1">
          {item.trim()}
        </span>
      ));
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white dark:bg-[var(--bg-surface)] border border-slate-200 dark:border-[var(--border-color)] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative"
              >
                <div>
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

                  <div className="text-slate-600 dark:text-[var(--text-muted)] text-sm leading-relaxed mb-6 font-medium">
                    {formatDescription(product.description)}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full py-3 px-4 bg-slate-900 dark:bg-[var(--color-primary)] text-white dark:text-slate-950 font-semibold rounded-xl hover:opacity-95 transition-all cursor-pointer text-sm shadow-sm flex items-center justify-center gap-2"
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

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div
            className="bg-white dark:bg-[var(--bg-surface)] border border-slate-200 dark:border-[var(--border-color)] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-red-500 bg-slate-100 dark:bg-slate-800 w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer font-bold z-10"
            >
              ✕
            </button>

            <div className="relative h-64 w-full bg-slate-100 dark:bg-slate-900/40 rounded-xl mb-5 flex items-center justify-center p-4 border border-slate-100 dark:border-slate-800">
              {selectedProduct.image && (
                <img
                  src={urlFor(selectedProduct.image).url()}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-[var(--text-main)] mb-3">
              {selectedProduct.name}
            </h3>

            <div className="text-slate-600 dark:text-[var(--text-muted)] text-sm sm:text-base leading-relaxed mb-6 font-medium">
              {formatDescription(selectedProduct.description)}
            </div>

            <a
              href="tel:01011989145"
              className="flex items-center justify-center gap-2 w-full bg-amber-500 dark:bg-[var(--color-primary)] text-slate-950 font-bold py-3.5 px-6 rounded-xl shadow-md hover:opacity-90 transition-all text-base cursor-pointer"
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
