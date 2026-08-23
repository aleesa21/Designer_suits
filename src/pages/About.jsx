import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const STATS = [
    { label: "Years of Heritage", value: 35, suffix: "+" },
    { label: "Custom Fits Crafted", value: 10000, suffix: "+" },
    { label: "Premium Fabrics Sourced", value: 500, suffix: "+" },
    { label: "Satisfaction Rate", value: 99, suffix: "%" },
  ];

  const CRAFT_STEPS = [
    {
      num: "01",
      title: "Personal Consultation",
      desc: "We discuss your style preferences, body mechanics, and event requirements directly at our Putalisadak atelier.",
    },
    {
      num: "02",
      title: "Fabric Selection",
      desc: "Hand-select from hundreds of world-class wools, linens, and silks curated through Quality Fabrics NP.",
    },
    {
      num: "03",
      title: "Precision Measurement",
      desc: "Over 20 structural body measurements are captured to engineer a paper pattern unique to your proportions.",
    },
    {
      num: "04",
      title: "Basting & Final Fitting",
      desc: "A hand-stitched fitting ensures the silhouette contours flawlessly to your body before final finishing.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Reveal
      gsap.from(".gsap-hero", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Story Section Images & Content Reveal
      gsap.from(".gsap-story-img", {
        scrollTrigger: {
          trigger: ".gsap-story-section",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".gsap-story-text", {
        scrollTrigger: {
          trigger: ".gsap-story-section",
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Stats Counter Animation
      gsap.utils.toArray(".gsap-stat-number").forEach((el) => {
        const targetVal = parseInt(el.getAttribute("data-target"), 10);
        const suffix = el.getAttribute("data-suffix");

        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          innerText: targetVal,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power1.out",
          onUpdate: function () {
            el.innerText =
              Math.floor(this.targets()[0].innerText).toLocaleString() + suffix;
          },
        });
      });

      // Bespoke Process Staggered Reveal
      gsap.from(".gsap-step-card", {
        scrollTrigger: {
          trigger: ".gsap-steps-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // CTA Section Reveal
      gsap.from(".gsap-cta", {
        scrollTrigger: {
          trigger: ".gsap-cta",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-background text-foreground font-sans px-4 sm:px-8 md:px-16 py-24 md:py-28 border-t border-border/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto mb-16 md:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 border-b border-border/30 pb-8 md:pb-12">
        <div className="space-y-3">
          <span className="gsap-hero text-primary-light text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] font-semibold block">
            Since 1989 • Putalisadak, Kathmandu
          </span>
          <h1 className="gsap-hero font-serif text-3xl sm:text-4xl md:text-6xl uppercase tracking-wide font-light leading-tight">
            The Art of{" "}
            <span className="italic text-primary font-normal">Bespoke</span>
          </h1>
        </div>
        <p className="gsap-hero text-foreground-muted text-xs sm:text-sm md:text-base max-w-lg font-light leading-relaxed">
          Crafting sartorial masterpieces for over three decades. Merging
          historic tailoring traditions with modern structural aesthetics.
        </p>
      </div>

      <div className="gsap-story-section max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 md:mb-28">
        <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
          <div className="gsap-story-img relative h-64 sm:h-80 md:h-[420px] rounded-lg overflow-hidden border border-border/40 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800"
              alt="Bespoke Suit Detail"
              className="w-full h-full object-cover grayscale contrast-110 opacity-90 hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="gsap-story-img relative h-64 sm:h-80 md:h-[420px] rounded-lg overflow-hidden border border-border/40 shadow-2xl mt-6 sm:mt-8">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
              alt="Custom Suit Fitting"
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-6 lg:pl-6 text-center md:text-left">
          <span className="gsap-story-text text-primary-light text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold">
            Our Heritage
          </span>
          <h2 className="gsap-story-text font-serif text-2xl sm:text-3xl md:text-5xl leading-tight font-light">
            35 Years of Uncompromising{" "}
            <span className="italic text-primary font-normal">
              Craftsmanship
            </span>
          </h2>

          <div className="gsap-story-text space-y-3 sm:space-y-4 text-foreground-muted text-xs sm:text-sm md:text-base font-light leading-relaxed">
            <p>
              Founded in 1989,{" "}
              <strong className="text-foreground font-medium">
                Designer Suits Nepal
              </strong>{" "}
              began with a single vision: to bring authentic custom tailoring to
              Kathmandu. What started as an intimate tailoring workshop in
              Putalisadak has grown into a renowned landmark for menswear
              excellence.
            </p>
            <p>
              Every garment we craft—from structured tuxedos and double-breasted
              suits to tailored overcoats—is a collaboration between client and
              master tailor, using fine materials sourced directly via{" "}
              <span className="text-primary-light">Quality Fabrics NP</span>.
            </p>
          </div>

          <div className="gsap-story-text pt-2 sm:pt-4">
            <button
              onClick={() => navigate("/products")}
              className="text-[10px] sm:text-xs uppercase tracking-[0.2em] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-primary text-foreground-inverted font-semibold shadow-lg shadow-primary/20 hover:bg-primary-light transition-all duration-300"
            >
              Explore Our Collections
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-20 md:mb-28">
        {STATS.map((s, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-6 md:p-8 bg-surface border border-border/40 rounded-xl text-center space-y-1.5 sm:space-y-2 hover:border-primary/60 transition-colors flex flex-col justify-center items-center"
          >
            <h3
              className="gsap-stat-number font-serif text-2xl sm:text-3xl md:text-5xl text-primary font-normal tracking-tight whitespace-nowrap"
              data-target={s.value}
              data-suffix={s.suffix}
            >
              0
            </h3>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-foreground-subtle font-medium leading-normal">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mb-20 md:mb-28">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2 sm:space-y-3">
          <span className="text-primary-light text-[10px] sm:text-xs uppercase tracking-[0.35em] font-semibold block">
            The Process
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-light">
            How We{" "}
            <span className="italic text-primary font-normal">Tailor</span>
          </h2>
          <p className="text-foreground-subtle text-xs sm:text-sm font-light leading-relaxed">
            Four simple steps to achieving a custom fit crafted strictly to your
            body structure.
          </p>
        </div>

        <div className="gsap-steps-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CRAFT_STEPS.map((step) => (
            <div
              key={step.num}
              className="gsap-step-card p-6 sm:p-8 bg-surface border border-border/40 hover:border-primary/80 rounded-xl transition-colors duration-300 group flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-primary block mb-4 sm:mb-6 font-light">
                  {step.num}
                </span>
                <h3 className="font-serif text-base sm:text-lg text-foreground mb-2 sm:mb-3 font-medium">
                  {step.title}
                </h3>
                <p className="text-foreground-muted text-xs sm:text-sm font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="gsap-cta max-w-7xl mx-auto bg-gradient-to-r from-background via-surface to-background border border-border/40 rounded-lg p-6 sm:p-8 md:p-12 text-center flex flex-col items-center justify-center space-y-4 sm:space-y-6">
        <span className="text-primary-light text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-medium">
          Experience True Bespoke
        </span>
        <h2 className="font-serif text-xl sm:text-2xl md:text-4xl max-w-2xl font-extralight leading-snug">
          Ready to Commission Your Next{" "}
          <span className="italic text-primary">Masterpiece</span>?
        </h2>
        <p className="text-foreground-subtle text-[11px] sm:text-xs max-w-md font-light leading-relaxed">
          Visit our Putalisadak shop for a private consultation and custom
          fabric viewing.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-primary text-foreground-inverted font-medium hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/20"
        >
          Book Your Fitting
        </button>
      </div>
    </section>
  );
}
