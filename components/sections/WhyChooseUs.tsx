"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaUserNurse, FaHospital, FaChalkboardTeacher, FaFlask, FaAward, FaGlobe } from "react-icons/fa";

const features = [
  {
    icon: <FaUserNurse />,
    title: "Experienced Faculty",
    desc: "Learn from highly qualified and experienced professionals dedicated to your success.",
  },
  {
    icon: <FaHospital />,
    title: "Clinical Exposure",
    desc: "Hands-on training in real hospital environments for practical experience.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Modern Teaching",
    desc: "Advanced teaching methods with smart classrooms and digital learning.",
  },
  {
    icon: <FaFlask />,
    title: "Well-Equipped Labs",
    desc: "State-of-the-art laboratories for practical and research-based learning.",
  },
  {
    icon: <FaAward />,
    title: "Recognized Courses",
    desc: "Approved by INC, WBNC and other statutory bodies ensuring quality education.",
  },
  {
    icon: <FaGlobe />,
    title: "Career Opportunities",
    desc: "Strong placement support with opportunities in India and abroad.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-white">

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          {/* HEADING */}
          <div className="text-center lg:text-left mb-10">
            <p className="text-primary font-semibold tracking-widest text-sm mb-3">
              WHY CHOOSE US
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-dark leading-tight">
              Why TEESTA Stands Out
            </h2>

            <div className="w-16 h-1 bg-primary mt-5 rounded mx-auto lg:mx-0"></div>
          </div>

          {/* PARAGRAPH */}
          <div className="space-y-5 text-light leading-relaxed text-[15.5px] text-left md:text-justify sm:text-justify text-justify  custom-justify p-1 ">
          <p className="text-light leading-relaxed text-[15.5px] mb-12 space-y-4">
            At <span className="text-dark font-medium">TEESTA Group of Institutions</span>, we believe that true healthcare education goes far beyond textbooks. With experienced faculty, modern teaching methodologies, and well-equipped laboratories, we ensure that every student receives a strong foundation in both academic knowledge and practical skills.
          </p>

          <p className="text-light leading-relaxed text-[15.5px] mb-12">
            Our emphasis on clinical exposure allows students to gain real-world experience in professional healthcare environments, helping them build confidence from the very beginning. Recognized by leading authorities such as <span className="text-dark font-medium">INC</span>,<span className="text-dark font-medium">PCI</span> and <span className="text-dark font-medium">WBNC</span>, our programs open doors to rewarding career opportunities in India and abroad.
          </p>

          <p className="text-light leading-relaxed text-[15.5px] mb-14">
            At TEESTA, we don’t just educate — we nurture compassionate, skilled, and future-ready healthcare professionals who are prepared to make a meaningful impact on society.
          </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="bg-softbg p-6 rounded-2xl border border-gray-200
                hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20
                transition-all duration-300 group"
              >

                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg 
                bg-primary/10 text-primary text-xl mb-4
                group-hover:bg-primary group-hover:text-white transition duration-300">
                  {item.icon}
                </div>

                {/* TITLE + DESC */}
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-dark tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-light text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

        {/* RIGHT IMAGE */}
        
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-[290px] sm:h-[590px] md:h-[620px] lg:h-[620px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200"
        >
          
            <Image
              src="/images/why/why1.jpg"
              alt="Clinical Training"
              
              fill
              className="object-cover object-[center_50%]"
            />
            
          
        </motion.div>

      </div>

    </section>
  );
}