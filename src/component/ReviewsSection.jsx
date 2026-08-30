import React, { useEffect } from "react";

function ReviewsSection() {
  useEffect(() => {
    // Check if script is already added to prevent duplicates
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]',
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className=" ">
      {/* Elfsight Google Reviews Container */}
      <div
        className="elfsight-app-0c9db0bb-eb18-43a2-adc4-776fc79ad347"
        data-elfsight-app-lazy
      />
    </section>
  );
}

export default ReviewsSection;
