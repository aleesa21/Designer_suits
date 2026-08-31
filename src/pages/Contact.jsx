import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaLocationDot,
  FaPhone,
  FaShareNodes,
  FaFacebook,
  FaTiktok,
  FaStar,
  FaChevronDown,
} from "react-icons/fa6";

export default function Contact() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    serviceInterestedIn: "Bespoke Suit",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(
      "Thank you for contacting Designer Suits Nepal. We will get back to you shortly.",
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gsap-contact-hero", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".gsap-contact-card", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-[#0a0a0a] text-[#EDE7DD] font-sans px-4 sm:px-8 md:px-16 py-16 md:py-28 border-t border-neutral-800/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16 text-center space-y-3">
        <span className="gsap-contact-hero text-[#C9A664] text-[10px] sm:text-xs uppercase tracking-[0.35em] font-semibold block">
          Get In Touch
        </span>
        <h1 className="gsap-contact-hero font-serif text-3xl sm:text-4xl md:text-6xl uppercase tracking-wide font-light text-white">
          Book Your{" "}
          <span className="italic text-[#AE8A3E] font-normal">Fitting</span>
        </h1>
        <p className="gsap-contact-hero text-neutral-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
          Visit our Putalisadak atelier or send us a message to schedule a
          private consultation for your custom garments.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch ">
        <div className="gsap-contact-card lg:col-span-7 h-full flex flex-col bg-[#121212]/90 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#AE8A3E]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <form
            onSubmit={handleSubmit}
            className="h-full flex flex-col relative z-10"
          >
            <div className="space-y-8 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-neutral-200 font-medium block">
                    First Name <span className="text-[#AE8A3E]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Ram"
                    className="w-full bg-[#18181b] border border-neutral-700/60 focus:border-[#AE8A3E] focus:ring-1 focus:ring-[#AE8A3E]/50 text-sm text-white placeholder-neutral-500 rounded-xl px-4 py-3.5 outline-none transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-neutral-200 font-medium block">
                    Last Name <span className="text-[#AE8A3E]">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Dahal"
                    className="w-full bg-[#18181b] border border-neutral-700/60 focus:border-[#AE8A3E] focus:ring-1 focus:ring-[#AE8A3E]/50 text-sm text-white placeholder-neutral-500 rounded-xl px-4 py-3.5 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-neutral-200 font-medium block">
                    Email Address <span className="text-[#AE8A3E]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ram@example.com"
                    className="w-full bg-[#18181b] border border-neutral-700/60 focus:border-[#AE8A3E] focus:ring-1 focus:ring-[#AE8A3E]/50 text-sm text-white placeholder-neutral-500 rounded-xl px-4 py-3.5 outline-none transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-neutral-200 font-medium block">
                    Company Name <span className="text-[#AE8A3E]">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full bg-[#18181b] border border-neutral-700/60 focus:border-[#AE8A3E] focus:ring-1 focus:ring-[#AE8A3E]/50 text-sm text-white placeholder-neutral-500 rounded-xl px-4 py-3.5 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-neutral-200 font-medium block">
                  Service Interested In
                </label>
                <div className="relative">
                  <select
                    name="serviceInterestedIn"
                    value={formData.serviceInterestedIn}
                    onChange={handleChange}
                    className="w-full bg-[#18181b] border border-neutral-700/60 focus:border-[#AE8A3E] focus:ring-1 focus:ring-[#AE8A3E]/50 text-sm text-white rounded-xl px-4 py-3.5 outline-none transition-all duration-200 appearance-none cursor-pointer pr-10"
                  >
                    <option
                      value="Bespoke Suit"
                      className="bg-[#18181b] text-white"
                    >
                      Bespoke Suit
                    </option>
                    <option
                      value="Semi-Bespoke Suit"
                      className="bg-[#18181b] text-white"
                    >
                      Semi-Bespoke Suit
                    </option>
                    <option
                      value="Custom Shirts"
                      className="bg-[#18181b] text-white"
                    >
                      Custom Shirts
                    </option>
                    <option
                      value="Overcoats & Pea Coats"
                      className="bg-[#18181b] text-white"
                    >
                      Overcoats & Pea Coats
                    </option>
                  </select>
                  <FaChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2 flex-1 flex flex-col">
                <label className="text-xs uppercase tracking-widest text-neutral-200 font-medium block">
                  Message <span className="text-[#AE8A3E]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements or preferred fitting schedule..."
                  className="w-full flex-1 min-h-[7rem] bg-[#18181b] border border-neutral-700/60 focus:border-[#AE8A3E] focus:ring-1 focus:ring-[#AE8A3E]/50 text-sm text-white placeholder-neutral-500 rounded-xl px-4 py-3.5 outline-none transition-all duration-200 resize-none"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer text-xs uppercase tracking-[0.25em] py-4 rounded-xl bg-primary text-foreground-inverted font-bold hover:bg-[#977531] active:scale-[0.99] transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 mt-6"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="gsap-contact-card lg:col-span-5 h-full flex flex-col gap-6">
          <div className="bg-surface/90 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="relative z-10">
              <h2 className="font-serif text-xl sm:text-2xl text-foreground">
                Atelier Information
              </h2>
              <div className="w-10 h-[2px] bg-primary mt-3 mb-2" />

              <div>
                <div className="flex items-start gap-4 py-5 border-b border-border/40">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 border border-primary/30 shrink-0">
                    <FaLocationDot className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <div className="pt-1">
                    <strong className="text-foreground-subtle block font-medium uppercase tracking-wider text-[10px] mb-1">
                      Address
                    </strong>
                    <span className="text-foreground-muted text-xs sm:text-sm font-light">
                      Putalisadak, Ram Shah Path, Kathmandu, Nepal
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-5 border-b border-border/40">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 border border-primary/30 shrink-0">
                    <FaPhone className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <div className="pt-1">
                    <strong className="text-foreground-subtle block font-medium uppercase tracking-wider text-[10px] mb-1">
                      Phone Numbers
                    </strong>
                    <span className="text-foreground-muted text-xs sm:text-sm font-light">
                      01-4521574, 9851043895
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-5">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 border border-primary/30 shrink-0">
                    <FaShareNodes className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <div className="pt-1">
                    <strong className="text-foreground-subtle block font-medium uppercase tracking-wider text-[10px] mb-2">
                      Follow Us
                    </strong>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href="https://www.facebook.com/share/16ynmGLhmD/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-foreground-muted hover:text-primary-light border border-border/60 hover:border-primary/50 rounded-full px-3 py-1.5 transition-colors"
                      >
                        <FaFacebook className="w-3.5 h-3.5" />
                        Facebook
                      </a>
                      <a
                        href="https://www.tiktok.com/@designers_suits.np"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-foreground-muted hover:text-primary-light border border-border/60 hover:border-primary/50 rounded-full px-3 py-1.5 transition-colors"
                      >
                        <FaTiktok className="w-3.5 h-3.5" />
                        TikTok
                      </a>
                      <a
                        href="https://g.page/r/CbDS-o7-_EdhEAE/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-foreground-muted hover:text-primary-light border border-border/60 hover:border-primary/50 rounded-full px-3 py-1.5 transition-colors"
                      >
                        <FaStar className="w-3.5 h-3.5" />
                        Google Review
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-[16rem] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl relative bg-[#121212]">
            <iframe
              title="Designer Suits Nepal Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.428610738318!2d85.3228899!3d27.7045837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1952b1bef31d%3A0x6147fcfe8efad2b0!2sDesigner%20Suits%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
