import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
function HeroSection() {
  const containerRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroVideoRef = useRef(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - left, y: e.clientY - top });
  };

  useGSAP(
    () => {
      // Entrance animation for elements with class .fade-hero
      const heroTl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.4 },
      });
      heroTl.from(".fade-hero", { y: 80, opacity: 0, stagger: 0.15 });

      // Scroll-triggered text fade and blur out
      gsap.to(heroTextRef.current, {
        y: -100,
        opacity: 0,
        filter: "blur(8px)",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Scroll-triggered video scale
      gsap.to(heroVideoRef.current, {
        scale: 1.2,
        brightness: 0.3,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-full bg-neutral-950 text-neutral-100 font-sans overflow-x-hidden"
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(217, 119, 6, 0.06), transparent 70%)`,
        }}
      />

   {/* SECTION 1: HERO */}
     <section
  id="home"
  className="hero-section relative w-full min-h-screen flex items-center justify-center overflow-hidden"
>
  <div className="absolute inset-0 z-0">
    <video
      ref={heroVideoRef}
      autoPlay
      loop
      muted
      playsInline
      className="h-full w-full object-cover opacity-40 scale-105"
    >
      <source src="/abc.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-neutral-950/80" />
  </div>

  <div
    ref={heroTextRef}
    className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-28"
  >
    <span className="fade-hero text-[#C9A96A] mb-6 text-xs font-medium tracking-[0.4em] uppercase">
      Est. 1989 &middot; Bespoke Tailoring
    </span>

    <h1 className="fade-hero font-serif text-neutral-100 mb-8 tracking-wide text-5xl sm:text-7xl lg:text-9xl font-extralight leading-[1.02] uppercase">
      Crafted For <br />
      <span className="text-[#C9A96A]/90 italic font-normal">
        Distinction
      </span>
    </h1>

    <p className="fade-hero font-sans font-light text-base sm:text-lg leading-relaxed text-neutral-300 max-w-2xl mb-12">
      Handcrafted Made-to-Measure Suitings. Architectural precision
      designed around your natural movement—never a standard size chart.
    </p>

    <div className="fade-hero flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto">
      <button className="w-full sm:w-auto bg-[#C9A96A] text-neutral-950 px-9 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#D4B67D] transition-all shadow-lg shadow-[#C9A96A]/20 hover:scale-[1.02] active:scale-[0.98]">
        Book Consultation
      </button>
      <button className="w-full sm:w-auto border border-neutral-700 text-neutral-200 px-9 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase hover:border-[#C9A96A]/60 hover:text-[#C9A96A] transition-all backdrop-blur-sm">
        Explore Collection
      </button>
    </div>
  </div>

  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10 pointer-events-none">
    <span className="text-[9px] tracking-[0.3em] uppercase text-neutral-400">
      Scroll Story
    </span>
    <div className="w-[1px] h-6 bg-gradient-to-b from-[#C9A96A] to-transparent animate-pulse" />
  </div>
</section>


    </div>

    // <section>
    //   <div className=" min-h-screen">
    //     <section className="relative w-full min-h-screen flex items-center overflow-hidden">
    //       <div
    //         className="absolute inset-0 bg-cover bg-center w-full h-full mix-blend-luminosity opacity-[] hero-bg"
    //         style={{
    //           backgroundImage: "url('/hero-bg.jpg')",
    //         }}
    //       />
    //       <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/95" />
    //       <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />

    //       <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-24">
    //         <div className="md:col-span-7 flex flex-col items-start text-left">
    //           <span
    //             className="fade-up-item font-body text-primary mb-6 text-xs font-semibold tracking-[0.3em] uppercase"
    //             style={{ animationDelay: "0.05s" }}
    //           >
    //             Est. 1989 &middot; Bespoke Atelier
    //           </span>

    //           <h1
    //             className="fade-up-item font-display text-on-surface mb-8 tracking-tighter text-[56px] leading-[60px] sm:text-[72px] sm:leading-[80px] lg:text-[96px] lg:leading-[100px]"
    //             style={{ animationDelay: "0.15s" }}
    //           >
    //             Suits That <br />
    //             <span className="text-primary italic font-light">Command</span>
    //             <br></br>
    //             the Room
    //           </h1>

    //           <p
    //             className="fade-up-item font-body font-light text-lg leading-8 text-on-surface-variant max-w-xl mb-12"
    //             style={{ animationDelay: "0.3s" }}
    //           >
    //             Bespoke artistry for the modern gentleman. Every stitch, every
    //             silhouette, crafted from scratch around the way you actually
    //             move, sit, and stand &mdash; not a size chart.
    //           </p>

    //           <div
    //             className="fade-up-item flex flex-col sm:flex-row gap-6 items-center"
    //             style={{ animationDelay: "0.45s" }}
    //           >
    //             <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-body text-xs font-semibold tracking-widest uppercase hover:brightness-110 transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]">
    //               Book Fitting
    //             </button>
    //           </div>
    //         </div>

    //         <div
    //           className="fade-up-item hidden md:flex md:col-span-5 justify-center"
    //           style={{ animationDelay: "0.5s" }}
    //         >
    //           <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-xl overflow-hidden border border-glass-border shadow-[0_20px_60px_rgba(0,0,0,0.45)] group">
    //             <img
    //               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    //               alt="Midnight blue tuxedo jacket detail"
    //               src="#"
    //             />
    //             <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
    //             <div className="absolute bottom-6 left-6">
    //               <span className="font-body text-primary text-[10px] tracking-widest uppercase">
    //                 Evening Wear
    //               </span>
    //               <h3 className="font-display text-lg text-on-surface">
    //                 The Midnight Tuxedo
    //               </h3>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </section>
  );
}

export default HeroSection;
