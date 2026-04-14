"use client";

import AboutLayout from "@/components/about/AboutLayout";
import { motion } from "framer-motion";

const institutes = [
  {
    title: "TEESTA Nursing Institute",
    location: "Siliguri, West Bengal",
    courses: ["GNM", "B.Sc Nursing"],
    desc: `TEESTA Nursing Institute provides structured nursing education with a focus on both academic learning and clinical training. The institute emphasizes a balanced approach where students are introduced to theoretical concepts alongside practical applications in healthcare settings.

Students are guided through fundamental and advanced nursing subjects with continuous internal assessments and practical exposure. Clinical training plays a key role in the learning process, allowing students to observe and participate in patient care under supervision.

The institute maintains a disciplined academic environment where students are encouraged to develop responsibility, communication skills, and professional ethics. Regular interaction with faculty members helps students clarify concepts and build confidence in their abilities.

With its focus on consistency and practical readiness, TEESTA Nursing Institute aims to prepare students for real healthcare environments where both technical knowledge and patient interaction are equally important.`,
    image: "/images/about/TNI.png",
  },

  {
    title: "Nivedita Institute of Nursing",
    location: "Siliguri, West Bengal",
    courses: ["GNM"],
    desc: `Nivedita Institute of Nursing focuses on delivering foundational nursing education through a structured and disciplined learning approach. The institute provides students with essential knowledge in nursing care, patient handling, and clinical procedures.

Training includes classroom learning combined with supervised practical exposure. Students are introduced to real healthcare scenarios gradually, helping them understand the responsibilities involved in patient care.

The learning environment encourages consistency, attention to detail, and professional conduct. Faculty members support students through regular academic guidance and practical demonstrations.

The institute aims to develop nursing professionals who are capable of working in healthcare environments with a clear understanding of their roles and responsibilities.`,
    image: "/images/about/NNI.png",
  },

  {
    title: "Hillside School of Nursing (Male)",
    location: "Darjeeling Region",
    courses: ["GNM"],
    desc: `Hillside School of Nursing (Male) provides nursing education specifically for male students, focusing on building strong clinical skills and professional confidence. The institute supports students in adapting to healthcare environments through structured training and supervision.

Students are trained in patient care practices, hospital procedures, and basic clinical responsibilities. Practical exposure is an important part of the curriculum, allowing students to understand real-time healthcare operations.

The institute promotes discipline, teamwork, and responsibility among students. Faculty guidance ensures that students receive consistent academic and practical support throughout their course.

By focusing on both knowledge and application, Hillside School of Nursing prepares students to work effectively in healthcare institutions.`,
    image: "/images/about/HSN.png",
  },

  {
    title: "Vivekananda College of Pharmacy",
    location: "Siliguri, West Bengal",
    courses: ["B Pharma", "D Pharma"],
    desc: `Vivekananda College of Pharmacy offers pharmaceutical education with an emphasis on understanding drug science, laboratory practices, and industry-relevant knowledge. The institution provides a structured academic framework that combines theoretical learning with practical exposure.

Students are introduced to subjects such as pharmacology, pharmaceutics, and pharmaceutical chemistry, along with laboratory sessions to reinforce their understanding. Practical training helps students become familiar with drug formulation and analysis processes.

The college encourages systematic learning, accuracy in laboratory work, and attention to detail. Faculty members guide students through academic coursework and practical exercises to ensure clarity of concepts.

The aim of the institution is to prepare students for careers in the pharmaceutical field by providing them with the necessary academic foundation and practical experience.`,
    image: "/images/about/VCP.png",
  },
];

export default function InstitutesSection() {
  return (
    <AboutLayout title="Our Institutions">
      <section className="px-3 py-8 sm:px-5 sm:py-12 md:px-6 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">

          
          {/* 🔥 HERO SECTION (POLISHED ONLY) */}
          <section className="relative flex h-[220px] items-center overflow-hidden rounded-2xl sm:h-[270px] md:h-[300px] md:rounded-3xl">

            <div className="absolute inset-0">
              <img
                src="/images/life/placement.png"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>
            </div>

            <div className="relative z-10 max-w-3xl space-y-3 p-4 text-white sm:p-6 md:space-y-4 md:p-12 lg:p-16">
              <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                Experience Life Beyond Classrooms
              </h1>

              <p className="text-xs leading-relaxed opacity-90 sm:text-sm md:text-base">
                A vibrant campus designed to inspire learning, creativity,
                and personal growth in every student.
              </p>
            </div>

          </section>

          {/* HEADER */}
           {/* 🔥 HEADER (UI POLISHED — CONTENT SAME) */}
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 mt-8 grid items-start gap-6 sm:mb-14 sm:mt-10 sm:gap-8 md:mb-16 md:mt-12 md:grid-cols-2 md:gap-10"
          >

            {/* LEFT SIDE */}
            <div className="space-y-4">

              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                TEESTA GROUP OF INSTITUTION
              </h2>

              <p className="text-[13px] leading-relaxed text-gray-600 text-justify sm:text-[14px] md:text-[15px]">
                <span className="font-semibold text-gray-800">
                  Teesta Group of Institutions
                </span>{" "}
                offers education in{" "}
                <span className="font-medium text-primary">
                  nursing and pharmaceutical sciences
                </span>
                , focusing on building a strong academic foundation along with practical
                understanding of healthcare systems.
              </p>

              {/* 🔥 HIGHLIGHT TAGS */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  "Academic Learning",
                  "Clinical Exposure",
                  "Practical Skills",
                  "Healthcare Training",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>

            {/* RIGHT SIDE (REST CONTENT — SAME TEXT) */}
            <div className="space-y-4 rounded-2xl border bg-gray-50 p-4 text-xs leading-relaxed text-gray-600 shadow-sm text-justify sm:p-5 sm:text-sm md:p-6">

              <p>
                The institutions emphasize <span className="font-medium">academic learning</span>,{" "}
                <span className="font-medium">clinical exposure</span>, and{" "}
                <span className="font-medium">practical skill development</span> to ensure that
                students are prepared for real-world responsibilities in hospitals,
                laboratories, and healthcare environments.
              </p>

              <p>
                Through a structured approach to teaching, students are guided in understanding
                both theoretical concepts and their application in patient care, drug handling,
                and clinical procedures. The learning process is supported by{" "}
                <span className="font-medium">experienced faculty guidance</span> and regular practical sessions.
              </p>

              <p>
                The group aims to develop professionals who are capable of working in healthcare
                settings with{" "}
                <span className="font-medium">
                  discipline, responsibility, and clarity of knowledge
                </span>
                , contributing effectively to the healthcare system.
              </p>

            </div>

          </motion.div>


          {/* INSTITUTES */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
            {institutes.map((item, index) => {
              const reverse = index % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`grid items-center gap-6 sm:gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 ${reverse ? "rounded-2xl bg-gray-50 p-4 sm:p-6 md:p-8" : ""
                    }`}
                >
                  {/* IMAGE */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className={`${reverse ? "md:order-2" : ""}`}
                  >
                    <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl shadow-md md:mx-0 md:max-w-none">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-[280px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[340px] md:h-[420px] lg:h-[520px]"
                      />
                    </div>
                  </motion.div>

                  {/* CONTENT */}
                  <motion.div
                    initial={{ opacity: 0, x: reverse ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`${reverse ? "md:order-1" : ""}`}
                  >
                    <h3 className="mb-3 text-xl font-semibold text-primary sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mb-2 text-xs text-gray-500 sm:text-sm">
                      📍 {item.location}
                    </p>

                    <p className="mb-4 text-xs text-gray-600 sm:text-sm">
                      🎓 Courses: {item.courses.join(", ")}
                    </p>

                    <p className="text-[13px] leading-relaxed text-gray-600 whitespace-pre-line text-justify sm:text-[14px] md:text-[15px]">
                      {item.desc}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
      {/* 🔷 COURSES OVERVIEW */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-primary">
          Courses Offered
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {[
            {
              name: "GNM",
              duration: "3 Years",
              desc: "Focused on foundational nursing education and patient care practices.",
            },
            {
              name: "B.Sc Nursing",
              duration: "4 Years",
              desc: "Comprehensive nursing program with clinical exposure and advanced subjects.",
            },
            {
              name: "D Pharma",
              duration: "2 Years",
              desc: "Basic pharmaceutical education covering drug formulation and dispensing.",
            },
            {
              name: "B Pharma",
              duration: "4 Years",
              desc: "Detailed study of pharmaceutical sciences with lab-based learning.",
            },
          ].map((course, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-primary mb-2">
                {course.name}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                Duration: {course.duration}
              </p>
              <p className="text-sm text-gray-500">
                {course.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 🔷 TRAINING SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-primary">
          Clinical Training & Practical Exposure
        </h2>

        <p className="text-gray-600 text-[15px] leading-relaxed max-w-4xl">
          The institutions emphasize practical learning through clinical exposure and laboratory sessions.
          Students are introduced to real healthcare environments where they observe patient care,
          assist in procedures, and understand hospital workflows under supervision.
        </p>

        <p className="text-gray-600 text-[15px] leading-relaxed max-w-4xl">
          Training is structured to gradually build confidence, starting from basic observation to
          active participation. Laboratory sessions complement this by providing controlled environments
          for skill development.
        </p>
      </motion.div>

      {/* 🔷 FACILITIES */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-primary">
          Infrastructure & Facilities
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            "Well-equipped Classrooms",
            "Nursing & Pharmacy Laboratories",
            "Library & Study Resources",
            "Hostel Facilities",
            "Transportation",
            "Clinical Training Support",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 border rounded-xl p-4 text-sm font-medium text-gray-700 text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      {/* 🔷 ADMISSION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-primary">
          Admission Information
        </h2>

        <p className="text-gray-600 text-[15px] leading-relaxed max-w-4xl">
          Admissions are conducted based on eligibility criteria for each program. Applicants must have
          completed their qualifying education and submit required documents during the admission process.
        </p>

        <p className="text-gray-600 text-[15px] leading-relaxed max-w-4xl">
          For detailed admission procedures, fee structure, and seat availability, candidates are advised
          to contact the institution directly or visit the admission office.
        </p>
      </motion.div>


      


    </AboutLayout>
  );
}