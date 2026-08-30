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
    <section className="relative min-h-screen bg-background text-foreground font-sans px-6 md:px-12 py-26 border-t border-border/30 overflow-hidden">
      {/* Subtle left glow */}
      <div
        className="pointer-events-none absolute -left-[15%] top-[-10%] w-[55%] h-[70%] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,168,108,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="relative max-w-7xl mx-auto mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-primary-light text-xs uppercase tracking-[0.4em] font-medium block mb-2">
            Signature Collections
          </span>
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wide font-extralight">
            Our{" "}
            <span className="italic text-primary font-normal">Products</span>
          </h2>
        </div>
        <p className="text-foreground-subtle text-xs max-w-md font-light leading-relaxed">
          Explore our handcrafted collection of bespoke garments and
          accessories, tailored to perfection for every occasion.
        </p>
      </div>

      {/* Filters */}
      <div className="relative max-w-7xl mx-auto mb-8 flex items-center justify-between border-b border-border/30 pb-4">
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] uppercase tracking-[0.2em] px-5 py-2.5 rounded-full transition-all duration-300 border ${
                  isActive
                    ? "bg-primary/10 border-primary text-primary font-medium"
                    : "bg-transparent border-border/40 text-foreground-subtle hover:text-foreground hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <span className="text-xs text-foreground-subtle uppercase tracking-widest hidden sm:block">
          Showing {filteredProducts.length} Piece
          {filteredProducts.length > 1 ? "s" : ""}
        </span>
      </div>

      {/* Product Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="group relative flex flex-col rounded-xl overflow-hidden cursor-pointer
                 border border-white/10
                 bg-white/[0.03] backdrop-blur-md
                 hover:border-primary/40 hover:bg-white/[0.05]
                 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative aspect-square w-full overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center 
                     transition-transform duration-700 group-hover:scale-105
                     opacity-90 group-hover:opacity-100"
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                        bg-black/25 backdrop-blur-[2px]"
              >
                <span
                  className="text-[11px] uppercase tracking-[0.25em] text-foreground 
                           border border-primary/60 bg-black/30 px-6 py-3 rounded-sm"
                >
                  View Detail
                </span>
              </div>
            </div>

            {/* Info section BELOW the image – transparent glass */}
            <div className="p-4 bg-black/25 backdrop-blur-md border-t border-white/5">
              <span className="text-[9px] uppercase tracking-[0.25em] text-primary-light block mb-1">
                {product.category}
              </span>
              <h3
                className="font-serif text-[15px] text-foreground 
                       group-hover:text-primary transition-colors line-clamp-1"
              >
                {product.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
