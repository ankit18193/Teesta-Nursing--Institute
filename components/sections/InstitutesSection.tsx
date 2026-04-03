"use client";

import { motion } from "framer-motion";

const institutes = [
  {
    title: "TEESTA Nursing Institute",
    desc: "Empowering the next generation of nurses with knowledge, skills, and real-world healthcare experience.",
    bg: "bg-[#4FC3F7]",
  },
  {
    title: "Nivedita Institute of Nursing",
    desc: "Nurturing compassionate nursing professionals with quality education.",
    bg: "bg-[#1E6FA8]",
  },
  {
    title: "Hillside School of Nursing(Male)",
    desc: "Shaping future business innovators with practical learning.",
    bg: "bg-[#4FC3F7]",
  },
  {
    title: "Vivekananda College Of Pharmacy",
    desc: "Empowering tomorrow’s healthcare leaders with excellence.",
    bg: "bg-[#1E6FA8]",
  },

];

export default function InstitutesSection() {
  return (
    <section className="relative z-20 -mt-32 px-6">

      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden shadow-2xl ">
          

          {institutes.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className={`${item.bg} text-white p-8 flex flex-col justify-between
                          backdrop-blur-sm border border-white/10
                          hover:brightness-110 hover:-translate-y-1
                           transition duration-300`}
            >

              <div className="space-y-4">
                <h3 className="text-xl font-semibold tracking-wide mb-4 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <button className="self-start bg-white/15 backdrop-blur-md border border-white/20
                     hover:bg-white hover:text-primary px-5 py-2.5 rounded-lg text-sm font-semibold
                     transition duration-300">
                Read More
              </button>

            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
}