import React from "react";

function HeroSection() {
  return (
    <section>
      <div className=" min-h-screen">
        <section className="relative w-full min-h-screen flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full mix-blend-luminosity opacity-[] hero-bg"
            style={{
              backgroundImage: "url('/hero-bg.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/95" />
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-24">
            <div className="md:col-span-7 flex flex-col items-start text-left">
              <span
                className="fade-up-item font-body text-primary mb-6 text-xs font-semibold tracking-[0.3em] uppercase"
                style={{ animationDelay: "0.05s" }}
              >
                Est. 1989 &middot; Bespoke Atelier
              </span>

              <h1
                className="fade-up-item font-display text-on-surface mb-8 tracking-tighter text-[56px] leading-[60px] sm:text-[72px] sm:leading-[80px] lg:text-[96px] lg:leading-[100px]"
                style={{ animationDelay: "0.15s" }}
              >
                Suits That <br />
                <span className="text-primary italic font-light">Command</span>
                <br></br>
                the Room
              </h1>

              <p
                className="fade-up-item font-body font-light text-lg leading-8 text-on-surface-variant max-w-xl mb-12"
                style={{ animationDelay: "0.3s" }}
              >
                Bespoke artistry for the modern gentleman. Every stitch, every
                silhouette, crafted from scratch around the way you actually
                move, sit, and stand &mdash; not a size chart.
              </p>

              <div
                className="fade-up-item flex flex-col sm:flex-row gap-6 items-center"
                style={{ animationDelay: "0.45s" }}
              >
                <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-body text-xs font-semibold tracking-widest uppercase hover:brightness-110 transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]">
                  Book Fitting
                </button>
              </div>
            </div>

            <div
              className="fade-up-item hidden md:flex md:col-span-5 justify-center"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-xl overflow-hidden border border-glass-border shadow-[0_20px_60px_rgba(0,0,0,0.45)] group">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Midnight blue tuxedo jacket detail"
                  src="#"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="font-body text-primary text-[10px] tracking-widest uppercase">
                    Evening Wear
                  </span>
                  <h3 className="font-display text-lg text-on-surface">
                    The Midnight Tuxedo
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default HeroSection;
