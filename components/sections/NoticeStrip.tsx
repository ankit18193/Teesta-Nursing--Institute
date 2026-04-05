"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";

import "swiper/css";

const notices = [
    {
      title: "Examination Notice",
      desc: "Final examination schedule for GNM, B.Sc Nursing, and Pharmacy courses has been published. Students are advised to check the timetable and prepare accordingly.",
    },
    {
      title: "Admission Open 2026",
      desc: "Applications are now open for the 2026 academic session. Interested candidates can apply for Nursing and Pharmacy programs as per eligibility criteria.",
    },
    {
      title: "Clinical Training Update",
      desc: "New hospital-based training modules have been introduced to enhance practical exposure for nursing students across all years.",
    },
    {
      title: "Academic Session Commencement",
      desc: "The new academic session will commence from July. Students are required to complete admission formalities before the deadline.",
    },
    {
      title: "Workshop on Patient Care",
      desc: "A practical workshop on patient care and clinical procedures will be conducted for students to strengthen hands-on skills.",
    },
  ];

export default function NoticeStrip() {
  const router = useRouter();

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
                  onClick={() => router.push("/resources/news")}
                  className="cursor-pointer group
                             bg-gradient-to-r from-[#4FC3F7] to-[#1E6FA8]
                             text-center rounded-xl px-8 py-5
                             shadow-md hover:shadow-xl
                             transition-all duration-300"
                >

                  {/* TITLE */}
                  <h3 className="text-white font-semibold text-base md:text-lg tracking-wide">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-white/90 text-sm mt-2">
                    {item.desc}
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

    </section>
  );
}