import React from "react";
import { NavLink, Link } from "react-router";

function Header() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-neutral-950/50 border-b border-white/5">
      <div className="text-sm tracking-[0.35em] font-light uppercase text-neutral-200">
        ATELIER
      </div>
      <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.25em] text-neutral-300 uppercase font-light">
        {links.map((link) => (
          <NavLink
            key={link.href}
            to={link.href}
            end={link.href === "/"}
            className={({ isActive }) =>
              `transition-colors pb-1 border-b ${
                isActive
                  ? "text-primary border-primary"
                  : "border-transparent hover:text-amber-300"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <button className="text-xs tracking-[0.2em] uppercase px-5 py-2.5 border border-[#AE8A3E]/40 text-[#EDE7DD] hover:bg-[#14432A]/20 hover:border-[#3E6F55]/70 transition-all duration-300">
        Book Consultation
      </button>
    </header>
  );
}

export default Header;
