import React from "react";
import ModelCanvas from "./ModelCanvas";
import ReviewsSection from "./ReviewsSection";
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
];
function HeroSection() {
  return (
    <div className="relative bg-background text-foreground font-sans overflow-hidden">
      {/* 3D Canvas fixed in background */}
      <ModelCanvas url="/model.glb" triggerSelector="#model-hero-zone" />

      {/* HERO & ABOUT ZONE Container - Raised z-index */}
      <div id="model-hero-zone" className="relative w-full ">
        {/* HERO SECTION */}
        <section className="min-h-screen relative flex flex-col justify-between pt-24 pointer-events-none">
          <div className="absolute left-0 right-0 flex items-center justify-center pointer-events-none">
            <h1 className="hero-title text-foreground select-none opacity-90 text-center">
              Designer suits
            </h1>
          </div>

          <div className="w-full" />

          {/* BOTTOM HERO BAR */}
          <div className="flex justify-between items-end pb-8 relative z-20">
            <div className="glass-badge p-4 max-w-xs text-xs space-y-1 pointer-events-auto rounded-sm">
              <p className="font-bold text-foreground">DESIGNER SUITS</p>
              <p className="text-foreground-subtle">
                BESPOKE & SEMI-BESPOKE ATELIER
              </p>
              <p className="text-foreground-subtle">PUTALISADAK, KATHMANDU</p>
            </div>

            <div className="text-xs uppercase tracking-widest text-foreground-subtle font-mono flex items-center gap-2">
              <span>KEEP SCROLLING</span>
              <span className="animate-bounce">↓</span>
            </div>
          </div>
        </section>

        {/* ABOUT / VISION SECTION */}
        <section className="min-h-screen py-32 px-6 2xl:px-16 flex flex-col justify-center space-y-16 2xl:space-y-24">
          {/* HERITAGE BOX */}
          <div className="max-w-md 2xl:max-w-xl glass-badge space-y-4 p-8 2xl:p-12 pointer-events-auto rounded-sm">
            <span className="text-xs font-mono uppercase text-primary tracking-widest block">
              HERITAGE
            </span>
            <p className="text-2xl 2xl:text-4xl font-light leading-snug text-foreground text-left">
              Crafting custom bespoke and semi-bespoke sartorial masterpieces
              with premium fabrics since 1989.
            </p>
          </div>

          {/* OUR CRAFT BOX */}
          <div className="max-w-md 2xl:max-w-xl glass-badge ml-auto space-y-4 p-8 2xl:p-12 pointer-events-auto rounded-sm">
            <span className="text-xs font-mono uppercase text-primary tracking-widest block text-right">
              OUR CRAFT
            </span>
            <p className="text-2xl 2xl:text-4xl font-light leading-snug text-foreground text-right">
              Transforming world-class fabrics into custom-tailored luxury
              garments designed uniquely for you.
            </p>
          </div>
        </section>

        {/* MARQUEE SECTION  */}
        <section className="relative z-40 py-2 2xl:py-8 border-y border-border overflow-hidden bg-background/65 backdrop-blur-sm">
          <div className="flex w-max animate-marquee">
            <div className="flex shrink-0 gap-8 text-4xl md:text-6xl font-display font-extrabold uppercase text-foreground/20 select-none whitespace-nowrap pr-8">
              <span>DESIGNER SUITS ✦ CRAFTING CUSTOM SUITS SINCE 1989 ✦</span>
            </div>
            <div
              className="flex shrink-0 gap-8 text-4xl md:text-6xl font-display font-extrabold uppercase text-foreground/20 select-none whitespace-nowrap pr-8"
              aria-hidden="true"
            >
              <span>DESIGNER SUITS ✦ CRAFTING CUSTOM SUITS SINCE 1989 ✦</span>
            </div>
          </div>
        </section>

        {/* COLLECTION HEADER - Set to z-40 */}
        <section className="relative z-40 bg-background/85 px-6 md:px-12 pt-24 pb-6 border-b border-border backdrop-blur-xs">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground">
                Collections
              </h2>
              <p className="text-xs text-foreground-subtle font-mono mt-2">
                CUSTOM TAILORED APPAREL & FABRICS
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* COLLECTION GRID - Set to z-50 */}
      <section
        id="collections"
        className="relative z-50 py-16 px-6 md:px-12 bg-background/85 backdrop-blur-md"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="aspect-[3/4] border border-border overflow-hidden bg-surface group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* SUBSEQUENT SECTIONS */}
      {/* <section className="relative z-50 py-24 px-6 md:px-12 bg-background border-t border-border"></section> */}

      <ReviewsSection></ReviewsSection>
    </div>
  );
}

export default HeroSection;
