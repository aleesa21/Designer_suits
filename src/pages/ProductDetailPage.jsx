import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";

const PRODUCT_DETAILS = {
  1: {
    name: "The Midnight Tuxedo",
    category: "Male Evening Wear",
    description:
      "Hand-crafted over 60 hours of master tailoring. Features a classic single-button closure with a pure silk grosgrain peak lapel. Structured canvas chest piece designed to mold to your posture over time.",
    views: [
      {
        label: "Front View",
        url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1000",
      },
      {
        label: "Back Profile",
        url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000",
      },
      {
        label: "Lapel Detail",
        url: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=1000",
      },
      {
        label: "Fabric Close-up",
        url: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&q=80&w=1000",
      },
    ],
    fabrics: [
      "Super 150s Merino Wool",
      "Midnight Silk Blend",
      "Charcoal Worsted",
    ],
  },
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = PRODUCT_DETAILS[id] || PRODUCT_DETAILS[1];
  const [activeImage, setActiveImage] = useState(product.views[0].url);

  return (
    <div className="min-h-screen bg-[#080808] text-[#EDE7DD] font-sans px-6 md:px-16 py-32 flex flex-col justify-between relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#AE8A3E]/10 blur-[150px] pointer-events-none rounded-full" />

      <header className="max-w-7xl mx-auto w-full flex items-center justify-between border-b border-[#222222] pb-6 relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 hover:text-[#C9A664] transition-colors flex items-center gap-3"
        >
          <span>&larr;</span> Return To Collection
        </button>
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A664]">
          Bespoke Atelier No. {id || "01"}
        </span>
      </header>

      <main className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto py-8 relative z-10">
        <div className="lg:col-span-6 flex flex-col gap-5">
          <div className="relative w-full max-h-[440px] aspect-[4/3] rounded-sm overflow-hidden border border-[#262626] bg-[#0c0c0c] shadow-2xl">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
          </div>

          <div className="flex gap-3 justify-start">
            {product.views.map((view, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(view.url)}
                className={`relative w-16 h-16 border transition-all ${
                  activeImage === view.url
                    ? "border-[#AE8A3E] opacity-100 scale-95"
                    : "border-[#222222] opacity-40 hover:opacity-80"
                }`}
              >
                <img
                  src={view.url}
                  alt={view.label}
                  className="w-full h-full object-cover  transition-all"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#AE8A3E]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A664]">
                {product.category}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-[#EDE7DD] mb-6">
              {product.name}
            </h1>

            <p className="text-xs sm:text-sm font-light text-neutral-300 leading-relaxed mb-8 border-l border-[#AE8A3E]/30 pl-4">
              {product.description}
            </p>

            <div className="border-t border-b border-[#222222] py-5 mb-8">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A664] block mb-3">
                Available Textiles
              </span>
              <div className="space-y-2">
                {product.fabrics.map((fab, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-xs text-neutral-300 tracking-wide"
                  >
                    <span className="font-light">{fab}</span>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest">
                      Option 0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <button className="w-full bg-[#141414] hover:bg-[#AE8A3E] text-[#EDE7DD] hover:text-[#080808] border border-[#333333] hover:border-[#AE8A3E] py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 shadow-2xl">
              Request Private Fitting
            </button>
          </div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto w-full flex justify-between items-center text-[9px] uppercase tracking-[0.3em] text-neutral-600 border-t border-[#1a1a1a] pt-4 relative z-10">
        <span>Handcrafted Excellence</span>
        <span>By Appointment Only</span>
      </footer>
    </div>
  );
}
