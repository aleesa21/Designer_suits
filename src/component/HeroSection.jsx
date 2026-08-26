import React from "react";
import ModelCanvas from "./ModelCanvas";

function HeroSection() {
  return (
    <section className="hero-section min-h-screen relative flex flex-col justify-between p-6 pt-24 pointer-events-none overflow-hidden">
      {/* GLB model, sits behind everything in this section */}
      <ModelCanvas url="/model.glb" triggerSelector=".hero-section" />

      <div className="w-full text-center mt-12 relative z-10">
        <h1 className="hero-title text-white select-none opacity-90">
          MONOLITH
        </h1>
      </div> 

      <div className="flex justify-between items-end pb-8 relative z-10">
        <div className="glass-badge p-4 max-w-xs text-xs space-y-1 pointer-events-auto">
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
  );
}

export default HeroSection;
