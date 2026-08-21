import React, { useState } from "react";
import { useNavigate } from "react-router";

const PRODUCTS = [
  {
    id: 1,
    name: "The Midnight Tuxedo",
    category: "male",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
    details:
      "Bespoke 3-piece tuxedo with silk peak lapel and hand-stitched lining.",
  },
  {
    id: 2,
    name: "Charcoal Double-Breasted",
    category: "female",
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800",
    details: "Architectural structured silhouette utilizing English flannel.",
  },
  {
    id: 3,
    name: "Sandstone Linen Suit",
    category: "male",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    details: "Unstructured summer jacket in 100% Irish heavyweight linen.",
  },
  {
    id: 4,
    name: "Royal Navy Pinstripe",
    category: "female",
    image:
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&q=80&w=800",
    details: "Classic power suit tailored with high-twist Worsted wool.",
  },
  {
    id: 5,
    name: "Emerald Dinner Jacket",
    category: "male",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    details: "Deep emerald velvet jacket designed for formal evening wear.",
  },
  {
    id: 6,
    name: "Ivory Silk Blazer",
    category: "female",
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800",
    details: "Minimalist relaxed fit in pure raw silk weave.",
  },
];

const CATEGORIES = ["All Collections", "male", "female"];

export default function Product() {
  const [activeCategory, setActiveCategory] = useState("All Collections");

  const navigate = useNavigate();

  const filteredProducts =
    activeCategory === "All Collections"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-[#EDE7DD] font-sans px-6 md:px-12 py-26 border-t border-[#404040]/30">
      <div className="max-w-7xl mx-auto mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[#C9A664] text-xs uppercase tracking-[0.4em] font-medium block mb-2">
            Signature Collections
          </span>
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wide font-extralight">
            Our{" "}
            <span className="italic text-[#AE8A3E] font-normal">Products</span>
          </h2>
        </div>
        <p className="text-neutral-400 text-xs max-w-md font-light leading-relaxed">
          Explore our handcrafted collection of bespoke garments and
          accessories, tailored to perfection for every occasion.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mb-8 flex items-center justify-between border-b border-[#404040]/30 pb-4">
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] uppercase tracking-[0.2em] px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#AE8A3E] text-[#0a0a0a] font-medium shadow-md shadow-[#AE8A3E]/20"
                  : "text-neutral-400 hover:text-[#EDE7DD] border border-[#404040]/40 hover:border-[#AE8A3E]/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className="text-xs text-neutral-500 uppercase tracking-widest hidden sm:block">
          Showing {filteredProducts.length} Piece
          {filteredProducts.length > 1 ? "s" : ""}
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="group relative flex flex-col bg-[#0a0a0a]/60 backdrop-blur-md border border-[#404040]/30 hover:border-[#AE8A3E]/70 rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-lg shadow-black/60 cursor-pointer"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-neutral-900">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-[2px]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#EDE7DD] bg-neutral-900/90 border border-[#AE8A3E]/60 px-4 py-2 rounded-full">
                  View Detail
                </span>
              </div>
            </div>

            <div className="p-4 flex flex-col justify-between bg-black/40 backdrop-blur-sm">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#C9A664]">
                    {product.category}
                  </span>
                </div>
                <h3 className="font-serif text-base text-[#EDE7DD] group-hover:text-[#AE8A3E] transition-colors line-clamp-1">
                  {product.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
