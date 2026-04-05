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
    image: "/images/about/institute1.jpg",
  },

  {
    title: "Nivedita Institute of Nursing",
    location: "Siliguri, West Bengal",
    courses: ["GNM"],
    desc: `Nivedita Institute of Nursing focuses on delivering foundational nursing education through a structured and disciplined learning approach. The institute provides students with essential knowledge in nursing care, patient handling, and clinical procedures.

Training includes classroom learning combined with supervised practical exposure. Students are introduced to real healthcare scenarios gradually, helping them understand the responsibilities involved in patient care.

The learning environment encourages consistency, attention to detail, and professional conduct. Faculty members support students through regular academic guidance and practical demonstrations.

The institute aims to develop nursing professionals who are capable of working in healthcare environments with a clear understanding of their roles and responsibilities.`,
    image: "/images/about/institute2.jpg",
  },

  {
    title: "Hillside School of Nursing (Male)",
    location: "Darjeeling Region",
    courses: ["GNM"],
    desc: `Hillside School of Nursing (Male) provides nursing education specifically for male students, focusing on building strong clinical skills and professional confidence. The institute supports students in adapting to healthcare environments through structured training and supervision.

Students are trained in patient care practices, hospital procedures, and basic clinical responsibilities. Practical exposure is an important part of the curriculum, allowing students to understand real-time healthcare operations.

The institute promotes discipline, teamwork, and responsibility among students. Faculty guidance ensures that students receive consistent academic and practical support throughout their course.

By focusing on both knowledge and application, Hillside School of Nursing prepares students to work effectively in healthcare institutions.`,
    image: "/images/about/institute3.jpg",
  },

  {
    title: "Vivekananda College of Pharmacy",
    location: "Siliguri, West Bengal",
    courses: ["B Pharma", "D Pharma"],
    desc: `Vivekananda College of Pharmacy offers pharmaceutical education with an emphasis on understanding drug science, laboratory practices, and industry-relevant knowledge. The institution provides a structured academic framework that combines theoretical learning with practical exposure.

Students are introduced to subjects such as pharmacology, pharmaceutics, and pharmaceutical chemistry, along with laboratory sessions to reinforce their understanding. Practical training helps students become familiar with drug formulation and analysis processes.

The college encourages systematic learning, accuracy in laboratory work, and attention to detail. Faculty members guide students through academic coursework and practical exercises to ensure clarity of concepts.

The aim of the institution is to prepare students for careers in the pharmaceutical field by providing them with the necessary academic foundation and practical experience.`,
    image: "/images/about/institute4.jpg",
  },
];

export default function InstitutesSection() {
  return (
    <AboutLayout title="Our Institutions">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-3xl"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              TEESTA GROUP OF INSTITUTION
            </h2>

            <p className="text-gray-600 text-[15px] leading-relaxed">
  <span className="font-semibold text-gray-800">
    Teesta Group of Institutions
  </span>{" "}
  offers education in{" "}
  <span className="font-medium text-primary">
    nursing and pharmaceutical sciences
  </span>
  , focusing on building a strong academic foundation along with practical
  understanding of healthcare systems.

  <br /><br />

  The institutions emphasize{" "}
  <span className="font-medium">academic learning</span>,{" "}
  <span className="font-medium">clinical exposure</span>, and{" "}
  <span className="font-medium">practical skill development</span> to ensure that
  students are prepared for real-world responsibilities in hospitals,
  laboratories, and healthcare environments.

  <br /><br />

  Through a structured approach to teaching, students are guided in understanding
  both theoretical concepts and their application in patient care, drug handling,
  and clinical procedures. The learning process is supported by{" "}
  <span className="font-medium">
    experienced faculty guidance
  </span>{" "}
  and regular practical sessions.

  <br /><br />

  The group aims to develop professionals who are capable of working in healthcare
  settings with{" "}
  <span className="font-medium">
    discipline, responsibility, and clarity of knowledge
  </span>
  , contributing effectively to the healthcare system.
</p>
          </motion.div>

          {/* INSTITUTES */}
          <div className="space-y-24">
            {institutes.map((item, index) => {
              const reverse = index % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`grid md:grid-cols-2 gap-16 items-center ${
                    reverse ? "bg-gray-50 p-8 rounded-2xl" : ""
                  }`}
                >
                  {/* IMAGE */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className={`${reverse ? "md:order-2" : ""}`}
                  >
                    <div className="overflow-hidden rounded-2xl shadow-md">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[560px] object-cover hover:scale-105 transition duration-500"
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
                    <h3 className="text-2xl font-semibold text-primary mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 mb-2">
                      📍 {item.location}
                    </p>

                    <p className="text-sm text-gray-600 mb-4">
                      🎓 Courses: {item.courses.join(", ")}
                    </p>

                    <p className="text-gray-600 text-[15px] leading-relaxed whitespace-pre-line">
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