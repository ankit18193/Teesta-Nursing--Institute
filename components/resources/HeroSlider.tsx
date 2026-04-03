"use client";

import { useEffect, useState, useRef } from "react";

const slides = [
  {
    image: "/images/hero/hero6.png",
    title: "Top Nursing Institute",
    subtitle: "Building Future Healthcare Professionals",
  },
  {
    image: "/images/hero/hero5.png",
    title: "Advanced Labs",
    subtitle: "Hands-on Clinical Training",
  },
  {
    image: "/images/hero/hero4.png",
    title: "100+ Placements",
    subtitle: "Strong Career Opportunities",
  },
  {
    image: "/images/about/about1.jpg",
    title: "Admissions Open 2026",
    subtitle: "Start Your Journey Today",
  },
  {
    image: "/images/hero/hero7.png",
    title: "Expert Faculty",
    subtitle: "Learn from highly experienced healthcare professionals",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isHovered = useRef(false);

  // Autoplay Logic
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    }, 4000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  return (
    <div
      className="relative rounded-2xl shadow-lg h-[420px] overflow-hidden bg-gray-900"
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      {/* SLIDES CONTAINER */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={index}
            // The Cross-Fade Magic: Transitioning opacity instead of translating X
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* IMAGE */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* TEXT with subtle slide-up effect */}
            <div
              className={`absolute bottom-6 left-6 right-6 text-white transform transition-all duration-700 delay-300 ${
                isActive
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <h2 className="text-xl font-semibold mb-1">{slide.title}</h2>
              <p className="text-sm text-white/80">{slide.subtitle}</p>
            </div>
          </div>
        );
      })}

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-white scale-110"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}