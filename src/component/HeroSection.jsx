import React from "react";
import ModelCanvas from "./ModelCanvas";

function HeroSection() {
  return (
    <div className="relative bg-[#0c0c0c] text-[#e5e5e5] font-sans overflow-hidden">
      {/* 3D Canvas fixed in background */}
      <ModelCanvas url="/model.glb" triggerSelector="#model-hero-zone" />

      {/* Global Header matching index.html */}
      <header className="fixed top-0 left-0 w-full  px-6 py-4 flex items-center justify-between mix-blend-difference text-xs uppercase tracking-widest font-mono border-b border-white/10">
        <div className="flex items-center space-x-6">
          <a href="#" className="font-bold tracking-tighter text-sm font-sans">
            MONOLITH STUDIO
          </a>
          <span className="hidden md:inline text-neutral-500">4:20 AM EST • 5°C</span>
          <span className="hidden lg:inline text-neutral-500">MONOLITHSTUDIO.COM</span>
        </div>

        <nav className="flex items-center space-x-6 md:space-x-8">
          <a href="#artists" className="hover:opacity-60 transition-opacity">ARTISTS</a>
          <a href="#blog" className="hover:opacity-60 transition-opacity">BLOG</a>
          <a href="#studio" className="hover:opacity-60 transition-opacity hidden sm:inline">STUDIO</a>
          <a href="#book" className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-all flex items-center gap-1">
            BOOK EXPERIENCE <span>↗</span>
          </a>
        </nav>
      </header>

      {/* HERO & ABOUT ZONE (Model Animation Container) */}
      <div id="model-hero-zone" className="relative w-full z-10">

        {/* HERO SECTION */}
        <section className="min-h-screen relative flex flex-col justify-between p-6 pt-24 pointer-events-none">
          <div className="w-full text-center mt-12">
            <h1 className="hero-title text-white select-none opacity-90 font-display font-extrabold text-[clamp(4rem,22vw,24rem)] uppercase leading-[0.8] tracking-tighter">
              MONOLITH
            </h1>
          </div>

          <div className="flex justify-between items-end pb-8">
            <div className="bg-[#121212]/75 backdrop-blur-md border border-white/10 p-4 max-w-xs text-xs space-y-1 pointer-events-auto">
              <p className="font-bold">MONOLITH STUDIO</p>
              <p className="text-neutral-400">CONTEMPORARY TATTOO STUDIO</p>
              <p className="text-neutral-400">BASED IN BROOKLYN, NYC</p>
            </div>

            <div className="text-xs uppercase tracking-widest text-neutral-400 font-mono flex items-center gap-2">
              <span>KEEP SCROLLING</span>
              <span className="animate-bounce">↓</span>
            </div>
          </div>
        </section>

        {/* ABOUT / VISION SECTION */}
        <section className="min-h-screen py-32 px-6 md:px-16 flex flex-col justify-center space-y-32">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono uppercase text-neutral-500 tracking-widest block">
              ABOUT
            </span>
            <p className="text-2xl md:text-4xl font-light leading-snug">
              Monolith Studio, founded by pioneers of Fine Line & Micro Realism, hosts the world's best tattoo masters in Brooklyn, NYC.
            </p>
          </div>

          <div className="max-w-2xl ml-auto space-y-4 text-right">
            <span className="text-xs font-mono uppercase text-neutral-500 tracking-widest block">
              OUR VISION
            </span>
            <p className="text-2xl md:text-4xl font-light leading-snug">
              Transforming your unique stories into stunning visual art on your skin.
            </p>
          </div>
        </section>

        {/* MARQUEE */}
        <section className="py-20 border-y border-white/10 overflow-hidden bg-black/40 backdrop-blur-sm">
          <div className="marquee-text flex gap-8 text-7xl md:text-9xl font-display font-extrabold uppercase text-white/20 select-none whitespace-nowrap">
            <span>MEET THE ARTISTS ✦ MONOLITH STUDIO BROOKLYN ✦ MEET THE ARTISTS ✦</span>
          </div>
        </section>

      </div>

      {/* SOLID CONTENT ZONE (Covers GLB canvas completely) */}
      <section id="artists" className="relative z-20 py-24 px-6 md:px-12 bg-black">
        <div className="flex justify-between items-end mb-16 border-b border-neutral-800 pb-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold">Artists</h2>
            <p className="text-xs text-neutral-500 font-mono mt-2">RESIDENT & GUEST TATTOO MASTERS</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="aspect-[3/4] bg-neutral-900 border border-neutral-800 p-4 flex items-end">
            <span className="font-bold">Okan Uckun</span>
          </div>
          <div className="aspect-[3/4] bg-neutral-900 border border-neutral-800 p-4 flex items-end">
            <span className="font-bold">Oscar Akermo</span>
          </div>
          <div className="aspect-[3/4] bg-neutral-900 border border-neutral-800 p-4 flex items-end">
            <span className="font-bold">Stevo</span>
          </div>
          <div className="aspect-[3/4] bg-neutral-900 border border-neutral-800 p-4 flex items-end">
            <span className="font-bold">
              lorem3000
              Amalie Arsinevici</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
