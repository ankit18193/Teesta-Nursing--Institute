"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const accreditations = [
  {
    name: "Indian Nursing Council (INC)",
    logo: "/images/logos/inclogo.png",
    pdf: "/pdf/inc.pdf",
  },
  {
    name: "West Bengal Nursing Council (WBNC)",
    logo: "/images/logos/wbnclogo.png",
    pdf: "/pdf/wbnc.pdf",
  },
  {
    name: "Pharmacy Council of India (PCI)",
    logo: "/images/logos/pci.png",
    // no pdf → handled safely
  },
];

export default function Accreditation() {
  return (
    <section className="py-28 glass-section relative">

      {/* 🔥 Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-0"></div>

      <div className="container-custom text-center glass-content relative z-10">

        {/* HEADING */}
        <p className="text-base md:text-3xl font-extrabold tracking-[0.2em] mb-3
          bg-gradient-to-r from-[#4FC3F7] via-[#38BDF8] to-[#1E6FA8] 
          bg-clip-text text-transparent">
          ACCREDITATION & RECOGNITION
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
          Recognized by Leading Authorities
        </h2>

        <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded"></div>

        {/* DESCRIPTION */}
        <p className="max-w-2xl mx-auto text-white/80 leading-relaxed text-[15.5px] mb-16">
          TEESTA Group of Institutions is accredited and recognized by the West Bengal Nursing Council (WBNC), Indian Nursing Council (INC), Government of West Bengal, and the Pharmacy Council of India (PCI), ensuring the highest standards in education, clinical training, and professional excellence.
        </p>

        {/* LOGOS */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">

          {accreditations.map((item, index) => (
            <a
              key={index}
              href={item.pdf || "#"} // ✅ safe fallback
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.04 }} // ✅ FIXED HOVER
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                className="group bg-white px-10 py-8 rounded-2xl 
                            shadow-md border border-gray-200
                              transition-all duration-500 ease-out
                                flex flex-col items-center w-[260px]
                                  cursor-pointer
                                   hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                                     hover:border-primary/40
                                      hover:bg-gradient-to-br hover:from-white      hover:to-blue-50"
              >

                {/* LOGO */}
                <div className="relative w-28 h-28 mb-5">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* NAME */}
                <p className="text-sm text-dark font-semibold text-center leading-snug">
                  {item.name}
                </p>

              </motion.div>
            </a>
          ))}

        </div>

      </div>

    </section>
  );
}