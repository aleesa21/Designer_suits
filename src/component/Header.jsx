import React from "react";

function Header() {
  return (
     <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-neutral-950/50 border-b border-white/5">
        <div className="text-sm tracking-[0.35em] font-light uppercase text-neutral-200">
          ATELIER
        </div>
        <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.25em] text-neutral-300 uppercase font-light">
          <a href="#home" className="hover:text-amber-300 transition-colors">Home</a>
          <a href="#about" className="hover:text-amber-300 transition-colors">Products</a>
          <a href="#breakdown" className="hover:text-amber-300 transition-colors">About</a>
          <a href="#reviews" className="hover:text-amber-300 transition-colors">Reviews</a>
        </nav>
        <button className="text-xs tracking-[0.2em] uppercase px-5 py-2.5 border border-amber-400/40 text-amber-200 hover:bg-amber-400/10 hover:border-amber-400/70 transition-all duration-300">
          Book Consultation
        </button>
      </header>
  );
}

export default Header;
