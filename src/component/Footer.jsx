import React from "react";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer className="relative z-50 bg-background border-t border-border text-foreground font-sans">
      <div className="w-full px-6 md:px-12 py-5 space-y-16">
        {/* FLEX LAYOUT CONTAINER */}
        <div className="flex justify-between items-center md:flex-row flex-col gap-10">
          {/* COLUMN 1: DESIGNER SUITS  */}
          <div className="w-full md:max-w-xs space-y-4 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight">
              Designer Suits
            </h2>
            <p className="text-xs font-mono uppercase text-foreground-subtle tracking-widest leading-relaxed">
              Bespoke & Semi-Bespoke Atelier — Since 1989
            </p>

            <div className="glass-badge p-4 text-xs space-y-1 rounded-sm mt-4">
              <p className="font-bold text-foreground capitalize">
                VISIT OUR STORE
              </p>
              <p className="text-foreground-subtle">
                Putalisadak, Ram Shah Path
              </p>
              <p className="text-foreground-subtle">Kathmandu, Nepal</p>
              <p className="text-primary pt-1">01-4521574 / 9851043895</p>
            </div>
          </div>

          {/* COLUMN 2: COMPANY */}
          <div className="text-center md:text-left space-y-4">
            <span className="text-xs font-mono uppercase text-primary tracking-widest block">
              Company
            </span>
            <ul className="space-y-2 text-sm md:block flex justify-around gap-3 flex-wrap text-foreground-subtle">
              <li>
                <a
                  href="/products"
                  className="hover:text-foreground transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-foreground transition-colors"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: OPENING HOURS */}
          <div className="space-y-4 text-center md:text-left">
            <span className="text-xs font-mono uppercase text-primary tracking-widest block">
              Opening Hours
            </span>
            <div className="grid grid-cols-2 md:block gap-4 text-sm  text-foreground-subtle text-center md:text-left">
              <div>
                <p className="font-medium text-foreground">Sun – Fri</p>
                <p>10:00 AM – 7:30 PM</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Saturday</p>
                <p>By Appointment Only</p>
              </div>
            </div>
          </div>

          {/* COLUMN 4: CONNECT */}
          <div className="w-full md:max-w-xs space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
            <span className="text-xs font-mono uppercase text-primary tracking-widest block">
              Connect
            </span>
            <p className="text-xs text-foreground-subtle leading-relaxed">
              Follow our latest collections or contact us directly.
            </p>

            <div className="flex gap-3 pt-2 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/designersuits.np/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-full border border-border text-foreground-subtle hover:text-foreground hover:border-foreground transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16ynmGLhmD%2F%3Fmibextid%3DwwXIfr&e=AUBrCEk_Bn9HIwlSPQZly9xiHXFU3WYAwvbgmspX_4lqi6XIcM_fc1OcZwAoy35V6In24NG0nzPzSnDnfvYNzbI3hCRR4bmaO29ofrlQtUQtXWlVhHUXnKmo9WeP5yRq1URcNyoune6e0g"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-full border border-border text-foreground-subtle hover:text-foreground hover:border-foreground transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://l.instagram.com/?u=https%3A%2F%2Fwww.tiktok.com%2F%40designers_suits.np%3F_t%3DZS-8y5vNleVB01%26_r%3D1&e=AUB7TLo8VsrMTrMEKK-2LwulXmNgPlI5kjc6fqhv6YIxWlnRQtwxYhwxDDtXtaVBJANyuAtbuGX30zznKDTn8uUGE6nF16T9-RZLBAX_7tGBESsmfUOU1ucJaQuf2zwheOc0kIqHWhiKYA"
                target="_blank"
                rel="noreferrer"
                aria-label="Tiktok"
                className="p-2.5 rounded-full border border-border text-foreground-subtle hover:text-foreground hover:border-foreground transition-colors"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
              <a
                href="https://l.instagram.com/?u=https%3A%2F%2Fmaps.google.com%2F%3Fcid%3D7009849515276161712%26entry%3Dgps%26g_st%3Dac&e=AUC1EB8blA93jNKRwO7tbte6yhxjCezXnbmkQAw-Bt3Ay0BZGFCCzjAWVPnVFdWNxA6gPODkmsoefCxZrO9roGlOk1uYfE95ljYIjlaKPgJj46vy7l6PwDW5fhMgAXBoEBnEQQrNh6CkKQ"
                aria-label="Location Map"
                className="p-2.5 rounded-full border border-border text-foreground-subtle hover:text-foreground hover:border-foreground transition-colors"
              >
                <IoLocationOutline className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-8 border-t border-border text-center text-xs font-mono text-foreground-subtle uppercase tracking-widest">
          <p>
            © {new Date().getFullYear()} DESIGNER SUITS NEPAL.
            <a
              href="https://nexoratechnology.com.np/"
              className="underline text-foreground"
            >
              MADE BY NEXORA TECHNOLOGY
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
