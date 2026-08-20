import React from "react";

function Header() {
  return (
    <header
      className="
        fixed top-0 w-full z-50
        flex justify-between items-center
        px-5 py-3
        bg-transparent
        border border-white/10
        text-on-surface
        backdrop-blur-xs
        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        uppercase
      "
    >
      <div className="logo">logo</div>

      <nav className="flex gap-6">
        <div>home</div>
        <div>about</div>
        <div>contact</div>
      </nav>

      <button className=" text-primary px-5 py-2  border border-primary">
        Book Consultation
      </button>
    </header>
  );
}

export default Header;
