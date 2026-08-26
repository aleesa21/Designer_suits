import React from "react";
import ModelCanvas from "./ModelCanvas";

function HeroSection() {
  return (
    <div className="relative bg-[#0c0c0c] text-white overflow-hidden">
      {/* 3D Canvas fixed in background, triggers only over #model-hero-zone */}
      <ModelCanvas url="/model.glb" triggerSelector="#model-hero-zone" />

      {/* ZONE 1: GLB + Alternating Text + Marquee (Total height: 250vh) */}
      <div id="model-hero-zone" className="relative w-full">
        
        {/* 1. Main Title (100vh) */}
        <section className="h-screen flex flex-col justify-between p-6 pt-24 pointer-events-none">
          <div className="w-full text-center mt-12">
            <h1 className="hero-title text-white select-none opacity-90 text-xs font-bold">
              Designer suits
            </h1>
          </div>
          <div className="flex justify-between items-end pb-8">
            <div className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
              KEEP SCROLLING ↓
            </div>
          </div>
        </section>

        {/* 2. Alternating Text - Left Side */}
        <section className="min-h-screen py-24 px-6 md:px-16 flex items-center justify-start pointer-events-auto">
          <div className="max-w-xl space-y-4 bg-black/50 p-6 backdrop-blur-sm border border-white/10">
            <span className="text-xs font-mono uppercase text-neutral-500 tracking-widest block">
              01 / VISION
            </span>
            <p className="text-2xl font-light leading-snug">
              Crafting bespoke fine-line and micro-realism tattoos tailored to your body narrative.
            </p>
          </div>
        </section>

        {/* 3. Alternating Text - Right Side */}
        <section className="min-h-screen py-24 px-6 md:px-16 flex items-center justify-end pointer-events-auto">
          <div className="max-w-xl space-y-4 bg-black/50 p-6 backdrop-blur-sm border border-white/10 text-right">
            <span className="text-xs font-mono uppercase text-neutral-500 tracking-widest block">
              02 / ARTISTRY
            </span>
            <p className="text-2xl font-light leading-snug">
              Every design is conceptualized by world-renowned resident and visiting masters.
            </p>
          </div>
        </section>

        {/* 4. Marquee (End of GLB Zone) */}
        <section className="py-16 border-y border-white/10 overflow-hidden bg-black/60 backdrop-blur-md">
          <div className="marquee-text flex gap-8 text-6xl md:text-8xl font-extrabold uppercase text-white/20 select-none whitespace-nowrap">
            <span>MEET THE ARTISTS ✦ MONOLITH STUDIO BROOKLYN ✦ MEET THE ARTISTS ✦</span>
          </div>
        </section>

      </div>

      {/* ZONE 2: Photo Section (Hides GLB background completely with solid bg-black) */}
      <section className="relative z-20 bg-[#0c0c0c] min-h-screen py-24 px-6 md:px-12 border-t border-neutral-800">
        <h2 className="text-4xl font-bold mb-8">Photo Gallery Section</h2>
        <p className="text-neutral-400 mb-8 font-mono text-sm">
          (The GLB background stops before this section)
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="aspect-square bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center">
            Photo 01
          </div>
          <div className="aspect-square bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center">
            Photo 02
          </div>
          <div className="aspect-square bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center">
            Photo 03
          </div>
        </div>
      </section>

    </div>
  );
}

export default HeroSection;