"use client";
import Link from "next/link";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-[#1E6FA8] py-14">

      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
            Secure Your Future with TEESTA
          </h2>

          <p className="text-white/90 text-sm md:text-base">
            Let’s Make a Difference Together.
          </p>
        </motion.div>

        {/* BUTTON */}
        <motion.button
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white text-primary px-6 py-3 rounded-lg font-semibold
          hover:bg-gray-100 transition duration-300 shadow-md"
        >
          <Link href="/contact">
          Contact Now
          </Link>
        </motion.button>

      </div>

    </section>
  );
}