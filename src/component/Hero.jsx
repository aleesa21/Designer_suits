import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroVideoRef = useRef(null);
  const pinnedSectionRef = useRef(null);
  const philosophySectionRef = useRef(null);

  const [activePillar, setActivePillar] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const pillarImages = [
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=80&w=1000",
  ];

  const philosophyCards = [
    {
      title: "Hand-Basted Canvas",
      subtitle: "Structure & Drape",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
      desc: "Built over 40+ hours using traditional horsehair interlining.",
    },
    {
      title: "Precision Cut Geometry",
      subtitle: "Modern Ergonomics",
      img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
      desc: "Engineered individually to match your natural posture.",
    },
    {
      title: "Bespoke Finishing",
      subtitle: "Artisan Craftsmanship",
      img: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=80&w=800",
      desc: "Working Milanese buttonholes and silk thread linings.",
    },
    {
      title: "Silken Foundations",
      subtitle: "Textile Excellence",
      img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800",
      desc: "Pure Mulberry silk lining for seamless movement.",
    },
    {
      title: "Architectural Lapels",
      subtitle: "Visual Balance",
      img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=800",
      desc: "Proportionally balanced roll lines tailored to shoulder width.",
    },
    {
      title: "Horn Button Detailing",
      subtitle: "Natural Elegance",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
      desc: "Hand-milled buffalo horn buttons dyed to match weave.",
    },
    {
      title: "Italian Cashmere",
      subtitle: "Thermal Refinement",
      img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
      desc: "Unstructured warmth sourced directly from Biella mills.",
    },
    {
      title: "Floating Canvas Core",
      subtitle: "Adaptive Fit",
      img: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=80&w=800",
      desc: "Molds progressively to your torso over wear.",
    },
    {
      title: "Double-Vent Symmetry",
      subtitle: "Functional Design",
      img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800",
      desc: "Ensures clean lines whether seated or standing.",
    },
    {
      title: "Master Patterning",
      subtitle: "Individual Draft",
      img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=800",
      desc: "Drawn entirely from scratch based on 30 measurements.",
    },
  ];

  const reviewsRow1 = [
    {
      name: "MICHAEL R.",
      role: "GOOGLE REVIEW",
      initials: "MR",
      text: "My wedding tuxedo was flawless. The way it draped and photographed was beyond expectation. Highly recommend for special occasions.",
    },
    {
      name: "DAVID W.",
      role: "GOOGLE REVIEW",
      initials: "DW",
      text: "Impeccable service from start to finish. The floating canvas makes the jacket feel incredibly light while maintaining structure.",
    },
    {
      name: "JAMES A.",
      role: "GOOGLE REVIEW",
      initials: "JA",
      text: "The craftsmanship is unparalleled. I've worn Savile Row suits, but the attention to detail here surpasses them. A truly bespoke experience.",
    },
  ];

  const reviewsRow2 = [
    {
      name: "RICHARD C.",
      role: "GOOGLE REVIEW",
      initials: "RC",
      text: "I've never felt more confident. The charcoal flannel suit is a masterpiece. The silhouette is sharp yet comfortable.",
    },
    {
      name: "THOMAS H.",
      role: "GOOGLE REVIEW",
      initials: "TH",
      text: "The fabric selection is vast and curated beautifully. The final product fits like a second skin. Worth every penny.",
    },
    {
      name: "ALEXANDER P.",
      role: "GOOGLE REVIEW",
      initials: "AP",
      text: "The tailor walked me through every detail, explaining the 'why' behind every stitch. The result was incredible.",
    },
  ];

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - left, y: e.clientY - top });
  };

  useGSAP(
    () => {
      // ----------------------------------------------------
      // 1. HERO ANIMATIONS
      // ----------------------------------------------------
      const heroTl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.4 },
      });
      heroTl.from(".fade-hero", { y: 80, opacity: 0, stagger: 0.15 });

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

      // ----------------------------------------------------
      // 2. SECTION 2: CONTINUOUS ELEVATED WAVE ROW
      // ----------------------------------------------------
      const cards = gsap.utils.toArray(".philosophy-card");
      const totalCards = cards.length;

      // Initial setup: Standard width, full opacity, uniform styling
      cards.forEach((card) => {
        gsap.set(card, {
          opacity: 1,
          scale: 1,
          filter: "none",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        });
      });

      ScrollTrigger.create({
        trigger: philosophySectionRef.current,
        start: "top top",
        end: `+=${totalCards * 65}%`,
        pin: true,
        scrub: 0.8,
        onUpdate: (self) => {
          // Offset range moves from left to right smoothly across all 10 cards
          // Subtracting offset ensures card 0 starts visible on the left side
          const currentProgress = self.progress * (totalCards - 2.5);

          cards.forEach((card, index) => {
            // Calculate relative position to screen focus
            const distance = index - currentProgress;

            // Distance from the horizontal center (normalized around distance = 1.5)
            const distFromCenter = Math.abs(distance - 1.5);

            // Parabolic curve for smooth shallow arc elevation (max lift: -36px)
            const lift =
              Math.max(
                0,
                Math.cos(Math.min(distFromCenter, 2) * (Math.PI / 4)),
              ) * -36;

            gsap.to(card, {
              xPercent: distance * 108, // Spacing gap allowing 4-5 cards on screen
              y: lift,
              duration: 0.15,
              ease: "power1.out",
              overwrite: "auto",
            });
          });
        },
      });
      // ----------------------------------------------------
      // 3. SECTION 3: PINNED BREAKDOWN (SYNCED TEXT & IMAGE)
      // ----------------------------------------------------
      const pillarItems = gsap.utils.toArray(".pillar-item");
      const totalPillars = pillarItems.length;

      ScrollTrigger.create({
        trigger: pinnedSectionRef.current,
        start: "top top",
        end: `+=${totalPillars * 100}%`,
        pin: true,
        pinSpacing: true,
        scrub: 0.8,
        onUpdate: (self) => {
          // Calculate step progress smoothly between 0 and 2
          const rawProgress = self.progress * (totalPillars - 1);
          const activeIndex = Math.min(
            Math.floor(rawProgress + 0.5),
            totalPillars - 1,
          );
          setActivePillar(activeIndex);
        },
      });

      pillarItems.forEach((item, index) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: pinnedSectionRef.current,
            start: () => `top+=${index * 100}% top`,
            end: () => `top+=${(index + 1) * 100}% top`,
            scrub: true,
          },
        });
      });

      // ----------------------------------------------------
      // 4. COLLECTION & JOURNEY REVEALS
      // ----------------------------------------------------
      gsap.from(".collection-card", {
        y: 90,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".collection-section",
          start: "top 70%",
        },
      });

      gsap.from(".journey-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".journey-section",
          start: "top 65%",
        },
      });

      gsap.from(".journey-step", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".journey-section",
          start: "top 60%",
        },
      });

      // ----------------------------------------------------
      // 5. GOOGLE REVIEWS OPPOSING MARQUEES
      // ----------------------------------------------------
      gsap.to(".marquee-left", {
        xPercent: -50,
        ease: "none",
        duration: 35,
        repeat: -1,
      });

      gsap.to(".marquee-right", {
        xPercent: 50,
        ease: "none",
        duration: 35,
        repeat: -1,
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-full bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-400 selection:text-neutral-950 overflow-x-hidden"
    >
      {/* Spotlight Ambient Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(217, 119, 6, 0.06), transparent 70%)`,
        }}
      />

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-neutral-950/50 border-b border-white/5">
        <div className="text-sm tracking-[0.35em] font-light uppercase text-neutral-200">
          ATELIER
        </div>
        <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.25em] text-neutral-300 uppercase font-light">
          <a href="#home" className="hover:text-amber-300 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-amber-300 transition-colors">
            Philosophy
          </a>
          <a
            href="#breakdown"
            className="hover:text-amber-300 transition-colors"
          >
            Craftsmanship
          </a>
          <a href="#reviews" className="hover:text-amber-300 transition-colors">
            Reviews
          </a>
        </nav>
        <button className="text-xs tracking-[0.2em] uppercase px-5 py-2.5 border border-amber-400/40 text-amber-200 hover:bg-amber-400/10 hover:border-amber-400/70 transition-all duration-300">
          Book Consultation
        </button>
      </header>

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
          <span className="fade-hero text-amber-400 mb-6 text-xs font-medium tracking-[0.4em] uppercase">
            Est. 1989 &middot; Bespoke Tailoring
          </span>

          <h1 className="fade-hero font-serif text-neutral-100 mb-8 tracking-wide text-5xl sm:text-7xl lg:text-9xl font-extralight leading-[1.02] uppercase">
            Crafted For <br />
            <span className="text-amber-300/90 italic font-normal">
              Distinction
            </span>
          </h1>

          <p className="fade-hero font-sans font-light text-base sm:text-lg leading-relaxed text-neutral-300 max-w-2xl mb-12">
            Handcrafted Made-to-Measure Suitings. Architectural precision
            designed around your natural movement—never a standard size chart.
          </p>

          <div className="fade-hero flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-amber-400 text-neutral-950 px-9 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20 hover:scale-[1.02] active:scale-[0.98]">
              Book Consultation
            </button>
            <button className="w-full sm:w-auto border border-neutral-700 text-neutral-200 px-9 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase hover:border-amber-400/60 hover:text-amber-300 transition-all backdrop-blur-sm">
              Explore Collection
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10 pointer-events-none">
          <span className="text-[9px] tracking-[0.3em] uppercase text-neutral-400">
            Scroll Story
          </span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-amber-400 to-transparent animate-pulse" />
        </div>
      </section>

      {/* SECTION 2: CONTINUOUS ELEVATED WAVE ROW */}
      <section
        ref={philosophySectionRef}
        id="about"
        className="relative h-screen w-full flex flex-col justify-center items-center px-4 overflow-hidden border-t border-white/5 bg-neutral-950"
      >
        <div className="text-center mb-12 space-y-2 z-20 pointer-events-none">
          <span className="text-amber-400 text-xs tracking-[0.35em] uppercase">
            The Heritage
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-neutral-100">
            Architectural{" "}
            <span className="italic text-amber-300/90">Elegance</span>
          </h2>
        </div>

        {/* Continuous Horizontal Track */}
        <div className="relative w-full max-w-[1440px] h-[480px] flex items-center justify-start overflow-visible">
          {philosophyCards.map((card, idx) => (
            <div
              key={idx}
              className="philosophy-card absolute left-[5%] w-[250px] sm:w-[270px] md:w-[290px] rounded-2xl bg-neutral-900/90 backdrop-blur-xl p-5 shadow-2xl transition-shadow duration-300 hover:shadow-amber-400/10"
            >
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4 border border-white/5">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-amber-400 text-[10px] tracking-[0.25em] uppercase block mb-1 font-medium">
                {card.subtitle}
              </span>
              <h3 className="font-serif text-lg text-neutral-100 font-light mb-2">
                {card.title}
              </h3>
              <p className="text-neutral-400 font-light text-xs leading-relaxed line-clamp-2">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: PINNED STORY BREAKDOWN */}
      <section
        ref={pinnedSectionRef}
        id="breakdown"
        className="relative h-screen w-full border-t border-white/5 flex items-center pt-20 overflow-hidden bg-neutral-950"
      >
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Dynamic Image Cross-fader */}
          <div className="hidden md:block md:col-span-6">
            <div className="relative w-full aspect-[3/4] max-h-[72vh] max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
              {pillarImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="Craftsmanship Breakdown"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                    activePillar === idx
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105 pointer-events-none"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs tracking-[0.2em] uppercase text-neutral-300 border-t border-white/10 pt-4 backdrop-blur-sm">
                <span>Phase 0{activePillar + 1}</span>
                <span className="text-amber-400 font-medium">
                  Master Craftsmanship
                </span>
              </div>
            </div>
          </div>

          {/* Sync Active Text Items */}
          <div className="md:col-span-6 flex flex-col justify-center space-y-6">
            {/* Item 1 */}
            <div
              className={`pillar-item p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                activePillar === 0
                  ? "border-amber-400/60 bg-neutral-900/90 backdrop-blur-xl shadow-[0_0_30px_rgba(251,191,36,0.12)] scale-[1.02]"
                  : "border-white/5 bg-neutral-950/40 opacity-25 scale-95 hover:opacity-40"
              }`}
            >
              <span
                className={`text-xs tracking-[0.3em] font-medium uppercase block mb-2 transition-colors ${activePillar === 0 ? "text-amber-400" : "text-neutral-500"}`}
              >
                01 / Sourcing
              </span>
              <h3
                className={`font-serif text-2xl lg:text-3xl font-light mb-3 transition-colors ${activePillar === 0 ? "text-neutral-50" : "text-neutral-400"}`}
              >
                European Cloth Heritage
              </h3>
              <p
                className={`font-light text-xs lg:text-sm leading-relaxed max-w-md transition-colors ${activePillar === 0 ? "text-neutral-300" : "text-neutral-500"}`}
              >
                Exclusively milled fabrics sourced directly from historic looms
                in Biella and Yorkshire, including Loro Piana and Vitale
                Barberis Canonico.
              </p>
            </div>

            {/* Item 2 */}
            <div
              className={`pillar-item p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                activePillar === 1
                  ? "border-amber-400/60 bg-neutral-900/90 backdrop-blur-xl shadow-[0_0_30px_rgba(251,191,36,0.12)] scale-[1.02]"
                  : "border-white/5 bg-neutral-950/40 opacity-25 scale-95 hover:opacity-40"
              }`}
            >
              <span
                className={`text-xs tracking-[0.3em] font-medium uppercase block mb-2 transition-colors ${activePillar === 1 ? "text-amber-400" : "text-neutral-500"}`}
              >
                02 / Architecture
              </span>
              <h3
                className={`font-serif text-2xl lg:text-3xl font-light mb-3 transition-colors ${activePillar === 1 ? "text-neutral-50" : "text-neutral-400"}`}
              >
                Full-Canvas Construction
              </h3>
              <p
                className={`font-light text-xs lg:text-sm leading-relaxed max-w-md transition-colors ${activePillar === 1 ? "text-neutral-300" : "text-neutral-500"}`}
              >
                Hand-sewn natural horsehair canvas core that gradually adapts to
                your body's natural warmth, creating an individually molded
                silhouette over time.
              </p>
            </div>

            {/* Item 3 */}
            <div
              className={`pillar-item p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                activePillar === 2
                  ? "border-amber-400/60 bg-neutral-900/90 backdrop-blur-xl shadow-[0_0_30px_rgba(251,191,36,0.12)] scale-[1.02]"
                  : "border-white/5 bg-neutral-950/40 opacity-25 scale-95 hover:opacity-40"
              }`}
            >
              <span
                className={`text-xs tracking-[0.3em] font-medium uppercase block mb-2 transition-colors ${activePillar === 2 ? "text-amber-400" : "text-neutral-500"}`}
              >
                03 / Tailoring
              </span>
              <h3
                className={`font-serif text-2xl lg:text-3xl font-light mb-3 transition-colors ${activePillar === 2 ? "text-neutral-50" : "text-neutral-400"}`}
              >
                Hand-Finished Details
              </h3>
              <p
                className={`font-light text-xs lg:text-sm leading-relaxed max-w-md transition-colors ${activePillar === 2 ? "text-neutral-300" : "text-neutral-500"}`}
              >
                Working horn buttonholes, hand-picked lapel stitching, and
                custom silk linings tailored precisely to your exact
                preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LOOKBOOK */}
      <section className="collection-section py-36 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-white/5">
        <div className="text-center mb-16 space-y-4">
          <span className="text-amber-400 text-xs tracking-[0.3em] uppercase">
            Lookbook
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-neutral-100 uppercase tracking-wide">
            Curated Collections
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "The Executive Line",
              subtitle: "Charcoal & Navy Staples",
              img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800",
            },
            {
              title: "Evening Wear",
              subtitle: "Black-Tie Tuxedos",
              img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
            },
            {
              title: "Seasonal Cashmere",
              subtitle: "Unstructured Blazer Fits",
              img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=800",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="collection-card group relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 cursor-pointer"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-amber-400 text-[10px] tracking-[0.25em] uppercase block mb-1">
                  {card.subtitle}
                </span>
                <h3 className="font-serif text-2xl text-neutral-100 font-light">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: PROCESS TIMELINE */}
      <section className="journey-section py-36 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-white/5">
        <div className="text-center mb-20 space-y-4">
          <span className="text-amber-400 text-xs tracking-[0.3em] uppercase">
            Process
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-neutral-100 uppercase tracking-wide">
            The Bespoke Journey
          </h2>
        </div>

        <div className="relative">
          <div className="journey-line hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-gradient-to-r from-amber-400/20 via-amber-400 to-amber-400/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                name: "Consultation",
                desc: "Understanding your lifestyle, preference, and movement needs.",
              },
              {
                step: "02",
                name: "Cloth Selection",
                desc: "Choosing from over 500 European weaves and silk linings.",
              },
              {
                step: "03",
                name: "Canvas Fitting",
                desc: "Refining the structural core for flawless natural draping.",
              },
              {
                step: "04",
                name: "Final Delivery",
                desc: "Hand-delivered in a luxury garment sleeve, built for a lifetime.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="journey-step relative z-10 p-8 rounded-xl border border-white/5 bg-neutral-900/40 backdrop-blur-md space-y-4"
              >
                <span className="text-amber-400 font-serif text-3xl font-light block">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl text-neutral-100">
                  {item.name}
                </h3>
                <p className="text-neutral-400 font-light text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: DUAL MARQUEE GOOGLE REVIEWS */}
      <section
        id="reviews"
        className="py-32 border-t border-white/5 bg-neutral-950/50 overflow-hidden relative"
      >
        <div className="text-center mb-16 space-y-3 px-6">
          <span className="text-amber-400 text-xs tracking-[0.35em] uppercase">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-neutral-100">
            Client <span className="italic text-amber-300/90">Experiences</span>
          </h2>
        </div>

        {/* Row 1: Leftward Infinite Marquee */}
        <div className="flex w-max gap-6 mb-8 marquee-left">
          {[...reviewsRow1, ...reviewsRow1, ...reviewsRow1].map((rev, idx) => (
            <div
              key={idx}
              className="w-[360px] sm:w-[420px] shrink-0 rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-md p-8 flex flex-col justify-between space-y-6"
            >
              {/* Star Rating */}
              <div className="flex text-amber-400 gap-1.5 text-sm">
                {"★".repeat(5)}
              </div>

              <p className="text-neutral-200 font-light text-sm italic leading-relaxed">
                "{rev.text}"
              </p>

              <div className="flex items-center gap-4 pt-2">
                <div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-xs font-semibold tracking-wider text-amber-300">
                  {rev.initials}
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-neutral-100 uppercase">
                    {rev.name}
                  </h4>
                  <span className="text-[10px] tracking-widest text-neutral-500 uppercase">
                    {rev.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Rightward Infinite Marquee */}
        <div className="flex w-max gap-6 marquee-right -ml-[100%]">
          {[...reviewsRow2, ...reviewsRow2, ...reviewsRow2].map((rev, idx) => (
            <div
              key={idx}
              className="w-[360px] sm:w-[420px] shrink-0 rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-md p-8 flex flex-col justify-between space-y-6"
            >
              {/* Star Rating */}
              <div className="flex text-amber-400 gap-1.5 text-sm">
                {"★".repeat(5)}
              </div>

              <p className="text-neutral-200 font-light text-sm italic leading-relaxed">
                "{rev.text}"
              </p>

              <div className="flex items-center gap-4 pt-2">
                <div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-xs font-semibold tracking-wider text-amber-300">
                  {rev.initials}
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-neutral-100 uppercase">
                    {rev.name}
                  </h4>
                  <span className="text-[10px] tracking-widest text-neutral-500 uppercase">
                    {rev.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-36 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto p-12 sm:p-20 rounded-3xl border border-amber-400/30 bg-neutral-900/50 backdrop-blur-md space-y-8 shadow-2xl">
          <h2 className="font-serif text-3xl sm:text-6xl font-light text-neutral-100 uppercase tracking-wide">
            Experience The Custom Fit
          </h2>
          <p className="text-neutral-400 font-light text-sm max-w-md mx-auto">
            Reserve your private measurement session at our atelier.
          </p>
          <button className="bg-amber-400 text-neutral-950 px-10 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20 hover:scale-[1.02] active:scale-[0.98]">
            Reserve Your Appointment
          </button>
        </div>
      </section>
    </div>
  );
}
