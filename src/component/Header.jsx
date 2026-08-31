import React, { useState } from "react";
import { NavLink, Link } from "react-router";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/socials", label: "Socials" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-neutral-950/20 border-b border-white/10 transition-colors duration-300">
      <div className="flex items-center justify-between px-6 md:px-8 py-4">
        {/* Logo */}
        <Link to="/" className="text-sm tracking-[0.35em] font-light uppercase text-neutral-100 drop-shadow-sm">
          ATELIER
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.25em] text-neutral-200 uppercase font-light">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `transition-colors pb-1 border-b ${
                  isActive
                    ? "text-amber-300 border-amber-300"
                    : "border-transparent hover:text-amber-200"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <button className="hidden md:block text-xs tracking-[0.2em] uppercase px-5 py-2.5 border border-[#AE8A3E]/60 text-[#EDE7DD] bg-neutral-950/30 hover:bg-[#14432A]/40 hover:border-[#3E6F55] transition-all duration-300">
          Book Consultation
        </button>

        {/* Hamburger Toggle Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-100 focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-neutral-950/60 backdrop-blur-xl px-6 py-6 flex flex-col gap-6 text-xs tracking-[0.25em] text-neutral-200 uppercase font-light">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? "text-amber-300 font-normal" : "hover:text-amber-200"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button 
            onClick={closeMenu}
            className="w-full mt-2 text-xs tracking-[0.2em] uppercase px-5 py-3 border border-[#AE8A3E]/60 text-[#EDE7DD] bg-neutral-950/30 hover:bg-[#14432A]/40 transition-all duration-300"
          >
            Book Consultation
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;