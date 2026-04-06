"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import NewsPreviewModal from "@/components/resources/NewsPreviewModal";

import "swiper/css";

interface NoticeItem {
  title: string;
  description: string;
  pdf?: string;
}

const notices = [
  {
    title: "Examination Notice",
    description:
      "Final examination schedule for GNM, B.Sc Nursing, and Pharmacy courses has been published.",
    pdf: "/pdfs/exam.pdf", // ✅ added
  },
  {
    title: "Admission Open 2026",
    description:
      "Applications are now open for the 2026 academic session.",
  },
  {
    title: "Clinical Training Update",
    description:
      "New hospital-based training modules have been introduced.",
    pdf: "/pdfs/training.pdf", // ✅ added
  },
];

export default function NoticeStrip() {
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);

  return (
    <section className="relative z-30 mt-10 mb-6 px-6">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            speed={3000}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            loop
          >
            {notices.map((item, index) => (
              <SwiperSlide key={index}>
                {/* 🔥 CLICKABLE BAR */}
                <div
                  onClick={() => setSelectedNotice(item)}
                  className="cursor-pointer group
                             bg-gradient-to-r from-[#4FC3F7] to-[#1E6FA8]
                             text-center rounded-xl px-8 py-5
                             shadow-md hover:shadow-xl
                             transition-all duration-300 hover:scale-[1.01]"
                >
                  {/* TITLE */}
                  <h3 className="text-white font-semibold text-base md:text-lg tracking-wide">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-white/90 text-sm mt-2">
                    {item.description}
                  </p>

                  

                  {/* SUBTLE HOVER INDICATOR */}
                  <div className="mt-3 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition">
                    Click to view more →
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* 🔥 MODAL */}
      <NewsPreviewModal
        news={selectedNotice}
        onClose={() => setSelectedNotice(null)}
      />
    </section>
  );
}