import React, { useEffect, useRef } from "react";

function Socials() {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Inject script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      document
        .querySelectorAll("script[src*='elfsightcdn']")
        .forEach((node) => node.remove());
    };
  }, []);

  return (
    <section className="relative bg-background text-foreground font-sans overflow-hidden min-h-screen pt-28 pb-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div ref={containerRef}>
          <div
            className="elfsight-app-072fa13f-4cad-451e-b1c7-0eff4d01f704"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
}

export default Socials;
