"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 bg-softbg">

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
         className="relative w-full h-[600px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200"
        >
          <Image
            src="/images/about/about1.jpg"
            alt="About TEESTA Institute"
            fill
            className="object-cover  object-top"
          />

          {/* subtle overlay for premium feel */}
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >

          {/* SMALL HEADING */}
          <p className="text-primary font-semibold mb-3 tracking-widest text-sm">
            ABOUT US
          </p>

          {/* MAIN HEADING */}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-dark mb-6 leading-tight">
            Building Future Healthcare Professionals with Excellence
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-6"></div>

          {/* CONTENT BLOCKS */}
          <div className="space-y-5 text-light leading-relaxed text-[15.5px]">

            <p>
              <span className="font-semibold text-dark">
                Welcome to TEESTA Group of Institutions!
              </span>{" "}
              Nurses play a vital role in delivering quality healthcare services
              and creating a safe, compassionate healing environment. They are
              truly the backbone of the healthcare system in every nation.
            </p>

            <p>
              Recognizing the growing demand for skilled and dedicated nursing
              professionals in India and abroad, TEESTA Group of Institutions is
              committed to shaping the next generation of healthcare leaders
              through comprehensive education and practical training.
            </p>

            <p>
              The institution is duly recognized and affiliated with the{" "}
              <span className="text-dark font-medium">
                Indian Nursing Council (INC)
              </span>
              ,{" "}
              <span className="text-dark font-medium">
                West Bengal Nursing Council (WBNC)
              </span>
              ,{" "}
              <span className="text-dark font-medium">
                Pharmacy Council Of India (PCI)
              </span>
              , Government of West Bengal, and other statutory bodies, ensuring
              high academic standards and global relevance.
            </p>

            <p>
              With a student-centric approach, TEESTA integrates modern teaching
              methodologies, advanced infrastructure, and real-world clinical
              exposure to ensure both academic excellence and professional
              growth.
            </p>

            <p>
              The institution emphasizes holistic development by maintaining a
              balance between curricular, co-curricular, and extracurricular
              activities—nurturing confident, compassionate, and skilled
              healthcare professionals.
            </p>

            <p>
              Through structured training, hands-on experience, and continuous
              skill development, TEESTA prepares students for successful careers
              both in India and internationally.
            </p>

          </div>

          {/* CTA */}
          <button className="mt-8 bg-primary hover:bg-primary/90 text-white px-7 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300">
            Learn More
          </button>

        </motion.div>

      </div>

    </section>
  );
}