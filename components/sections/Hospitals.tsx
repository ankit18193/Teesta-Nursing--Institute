"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const hospitals = [
  {
    name: "Mitra Hospital",
    location: "Siliguri, West Bengal",
    image: "/images/hospitals/h1.jpg",
  },
  {
    name: "Malbazar Super Hospital",
    location: "Siliguri, West Bengal",
    image: "/images/hospitals/h2.jpg",
  },
  {
    name: "Sun Hospital & Diagnostic Center",
    location: "Siliguri, West Bengal",
    image: "/images/hospitals/h3.jpg",
  },
  {
    name: "Hope & Hill Cancer Hospital",
    location: "Darjeeling",
    image: "/images/hospitals/h4.jpg",
  },
  {
    name: "Siliguri Sub-Divisional Hospital",
    location: "Siliguri",
    image: "/images/hospitals/h5.jpg",
  },
  {
    name: "Kurseong Sub-Divisional Hospital",
    location: "Darjeeling",
    image: "/images/hospitals/h6.jpg", // ✅ fixed
  },
  {
    name: "Astha Hospital",
    location: "Siliguri",
    image: "/images/hospitals/h7.jpg",
  },
  {
    name: "Tufanganj Hospital",
    location: "Cooch Behar",
    image: "/images/hospitals/h8.jpg",
  },
  {
    name: "Malbazar Hospital",
    location: "Jalpaiguri",
    image: "/images/hospitals/h9.jpg",
  },
];

export default function Hospitals() {
  return (
    <section className="py-28 bg-white">

      <div className="container-custom">

        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest text-sm mb-2">
            OUR HOSPITALS
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-dark">
            Clinical Training & Hospital Network
          </h2>

          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded"></div>
        </div>

        {/* 🔥 SWIPER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {hospitals.map((item, index) => (
            <SwiperSlide key={item.name + index}>
              
              <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.03 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
  }}
  className="group relative rounded-2xl overflow-hidden shadow-xl"
>

                {/* IMAGE */}
                <div className="relative h-[320px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* CONTENT */}
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-lg font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-sm text-white/80">
                    {item.location}
                  </p>
                </div>

              </motion.div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
}