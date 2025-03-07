import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", {
      duration: 1,
      opacity: 1,
      y: 20,
      ease: "power4.out",
      delay: 0.5,
    });
  });
  return (
    <section className="w-full nav-heigth bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
      </div>
    </section>
  );
};

export default Hero;
