"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Anjali Sharma",
    course: "GNM Nursing",
    text: "TEESTA has provided me with the best learning environment. The faculty is supportive and the clinical exposure helped me gain real confidence.",
    image: "/images/testimonials/t1.jpg",
  },
  {
    name: "Ritika Das",
    course: "B.Sc Nursing",
    text: "The infrastructure and teaching methods are excellent. I feel fully prepared for my career in healthcare.",
    image: "/images/testimonials/t2.jpg",
  },
  {
    name: "Priya Kumari",
    course: "Pharmacy",
    text: "The practical training and guidance from teachers have been outstanding. TEESTA truly focuses on student growth.",
    image: "/images/testimonials/t3.jpg",
  },
  {
    name: "Sanjana",
    course: "Pharmacy",
    text: "The practical training and guidance from teachers have been outstanding. TEESTA truly focuses on student growth.",
    image: "/images/testimonials/t3.jpg",
  },
  {
    name: "Neha",
    course: "Pharmacy",
    text: "The practical training and guidance from teachers have been outstanding. TEESTA truly focuses on student growth.",
    image: "/images/testimonials/t3.jpg",
  },
  {
    name: "Anisha",
    course: "Pharmacy",
    text: "The practical training and guidance from teachers have been outstanding. TEESTA truly focuses on student growth.",
    image: "/images/testimonials/t3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 glass-testimonials">

      <div className="container-custom text-center glass-content-testimonials">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-base md:text-4xl font-extrabold tracking-[0.25em] mb-3
            bg-gradient-to-r from-[#4FC3F7] via-[#38BDF8] to-[#1E6FA8] 
            bg-clip-text text-transparent">
            TESTIMONIALS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Students Say
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-[#4FC3F7] to-[#1E6FA8] mx-auto rounded-full"></div>
        </motion.div>

        {/* 🔥 SWIPER (ATHENA STYLE) */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={800}   // smooth transition (NOT fast)
          autoplay={{
            delay: 2500,  // wait → then slide ONE
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, // 🔥 KEY PART (3 CARDS)
          }}
        >

          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >

                {/* CARD */}
                <div className="p-8 rounded-2xl h-full
                bg-white/10 backdrop-blur-xl border border-white/20
                hover:bg-white/15 hover:shadow-2xl hover:-translate-y-2
                transition-all duration-300 flex flex-col justify-between">

                  {/* AVATAR */}
                  <div className="flex justify-center mb-6">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white/40 shadow-md">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* TEXT */}
                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                    “{item.text}”
                  </p>

                  {/* USER */}
                  <div className="border-t border-white/20 pt-4">
                    <h4 className="text-white font-semibold text-sm">
                      {item.name}
                    </h4>
                    <p className="text-white/70 text-xs">
                      {item.course}
                    </p>
                  </div>

                </div>

              </motion.div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
}