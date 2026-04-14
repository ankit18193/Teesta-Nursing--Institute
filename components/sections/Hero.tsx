"use client";

import Link from "next/link";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
    
    
    {
        img: "/images/hero/hero1.jpg",
        align: "center",
        title: "Excellence in",
        highlight: "Nursing Education",
        desc: "Empowering future healthcare professionals with advanced training and real clinical exposure.",
    },
    {
        img: "/images/hero/hero0.jpg",
        align: "left",
        title: "Dedicated to",
        highlight: "Medical Mastery",
        desc: "Building skilled professionals through innovation, discipline, and practical excellence.",
    },
    {
        img: "/images/hero/hero2.jpg",
        align: "right",
        title: "Shaping Future",
        highlight: "Healthcare Leaders",
        desc: "Modern labs, expert faculty, and industry-focused curriculum to build strong careers.",
    },
    {
        img: "/images/hero/hero3.jpg",
        align: "left",
        title: "Your Journey to",
        highlight: "Medical Success",
        desc: "Join a community dedicated to excellence, compassion, and professional growth.",
    },
];

export default function Hero() {
    const [animateIndex, setAnimateIndex] = useState(0);

    return (
        <section className="relative w-full h-[52vh] sm:h-[62vh] md:h-[75vh] lg:h-[90vh]">

            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                speed={1800}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                loop

                /* 🔥 KEY FIX */
                onSlideChangeTransitionStart={() => {
                    setAnimateIndex(-1); // reset animation
                }}

                onSlideChangeTransitionEnd={(swiper) => {
                    setAnimateIndex(swiper.realIndex); // trigger animation AFTER slide finishes
                }}

                className="h-full"
            >

                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="w-full h-full bg-cover bg-center relative overflow-hidden"
                            style={{ backgroundImage: `url(${slide.img})` }}
                        >

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

                            {/* CONTENT */}
                            <div
                                className={`absolute inset-0 flex items-center ${slide.align === "right"
                                    ? "justify-end"
                                    : slide.align === "center"
                                        ? "justify-center"
                                        : "justify-start"
                                    }`}
                            >

                                <div
                                    className={`max-w-[92vw] sm:max-w-[78vw] md:max-w-[600px] px-4 sm:px-6 md:px-10 text-white ${slide.align === "right"
                                        ? "text-right mr-4 sm:mr-6 md:mr-10"
                                        : slide.align === "center"
                                            ? "text-center"
                                            : "ml-4 sm:ml-6 md:ml-10"
                                        }`}
                                >

                                    {/* HEADING */}
                                    <h1
                                        className={`mb-2 text-2xl font-extrabold leading-tight sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl
                                            ${animateIndex === index ? "animate-drop" : "opacity-0"}
                                               `}
                                    >
                                        {slide.title}{" "}
                                        <span className="bg-gradient-to-r from-[#4FC3F7] to-[#1E6FA8] bg-clip-text text-transparent">
                                            {slide.highlight}
                                        </span>
                                    </h1>

                                    {/* DESCRIPTION */}
                                    <p
                                        className={`mb-4 text-xs text-gray-200 sm:text-base md:mb-6 md:text-lg lg:text-xl
                                          ${animateIndex === index ? "animate-fadeUp delay-200" : "opacity-0"}
                                           `}
                                    >
                                        {slide.desc}
                                    </p>

                                    {/* BUTTONS */}
                                    <div
                                        className={`flex flex-col sm:flex-row gap-4
                      ${animateIndex === index
                                                ? "animate-drop delay-300"
                                                : "opacity-0"
                                            }
                      ${slide.align === "right"
                                                ? "justify-end"
                                                : slide.align === "center"
                                                    ? "justify-center"
                                                    : ""
                                            }`}
                                    >
                                        <Link href="/resources/application" className="inline-block">
                                        <button className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold shadow-md transition duration-200 hover:bg-primary/90 hover:shadow-lg sm:px-6 sm:py-3 sm:text-base">
                                            Apply Now
                                        </button>
                                        </Link>

                                        <button className="rounded-lg border border-white px-4 py-2 text-xs font-semibold transition duration-200 hover:bg-white hover:text-black sm:px-6 sm:py-3 sm:text-base">
                                            Explore Courses
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

            {/* ARROWS */}
            <div className="pointer-events-none absolute inset-0 z-20 hidden items-center justify-between px-6 md:flex">

                <button className="swiper-button-prev-custom pointer-events-auto bg-white/20 backdrop-blur-md border border-white/30 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition">
                    ❮
                </button>

                <button className="swiper-button-next-custom pointer-events-auto bg-white/20 backdrop-blur-md border border-white/30 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition">
                    ❯
                </button>

            </div>

        </section>
    );
}