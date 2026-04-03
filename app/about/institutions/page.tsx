"use client";

import AboutLayout from "@/components/about/AboutLayout";
import { motion } from "framer-motion";

const institutes = [
    {
        title: "TEESTA Nursing Institute",
        desc: `TEESTA Nursing Institute stands as a cornerstone of healthcare education, 
    dedicated to shaping highly skilled and compassionate nursing professionals. 
    The institute emphasizes not only academic excellence but also the human values 
    essential in healthcare, ensuring that students develop both technical expertise 
    and emotional intelligence.

    With a strong mentorship culture, experienced faculty members guide students 
    individually, helping them grow academically and professionally. The institution 
    fosters discipline, responsibility, and a deep sense of care, preparing graduates 
    who are ready to contribute meaningfully to the healthcare system.`,
        image: "/images/about/institute1.jpg",
    },
    {
        title: "Nivedita Institute of Nursing",
        desc: `Nivedita Institute of Nursing is committed to nurturing a generation of 
    compassionate and competent healthcare professionals through a student-focused 
    learning environment. The institution blends strong theoretical foundations with 
    practical training, enabling students to develop confidence in their abilities.

    The institute takes pride in its disciplined and supportive atmosphere, where students 
    are encouraged to grow holistically. By fostering empathy, communication skills, and 
    professional integrity, Nivedita Institute ensures that its graduates stand out as 
    responsible and skilled healthcare providers.`,
        image: "/images/about/institute2.jpg",
    },
    {
        title: "Hillside School of Nursing (Male)",
        desc: `Hillside School of Nursing (Male) is uniquely dedicated to empowering male 
    students in the nursing profession, promoting inclusivity and excellence in healthcare 
    education. The institution focuses on building strong clinical skills, leadership 
    qualities, and adaptability in a rapidly evolving healthcare environment.

    By encouraging teamwork, leadership, and responsibility, Hillside School of Nursing 
    prepares its students to take on critical roles in healthcare systems. Graduates emerge 
    as confident professionals capable of delivering quality patient care and contributing 
    to healthcare innovation.`,
        image: "/images/about/institute3.jpg",
    },
    {
        title: "Vivekananda College of Pharmacy",
        desc: `Vivekananda College of Pharmacy is dedicated to advancing pharmaceutical 
    education through a blend of academic excellence and practical innovation. The 
    institution equips students with a deep understanding of drug development, 
    pharmacology, and modern healthcare technologies.

    
    

    Through collaborations, expert faculty guidance, and research opportunities, students 
    are exposed to the latest advancements in healthcare and medicine. The college aims 
    to produce professionals who not only excel in their careers but also contribute to 
    improving global healthcare standards through innovation and dedication.`,
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
                    className="mb-20 max-w-3xl"
                >
                    <h2 className="text-3xl font-bold text-primary mb-5">
                        Our Institutions
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-[15px]">
                        Teesta Group of Institutions represents a collective vision of academic
                        excellence, professional integrity, and innovation in healthcare and
                        pharmaceutical sciences. Each institution under the group is committed
                        to nurturing future professionals through quality education, practical
                        exposure, and a strong ethical foundation.
                    </p>
                </motion.div>

                {/* INSTITUTES */}
                <div className="space-y-28">

                    {institutes.map((item, index) => {
                        const isReverse = index % 2 !== 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className={`grid md:grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? "bg-gray-50 p-10 rounded-2xl" : ""
                                    }`}
                            >

                                {/* IMAGE */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                    className={`${isReverse ? "md:order-2" : ""}`}
                                >
                                    <div className="overflow-hidden rounded-2xl shadow-xl">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-[380px] object-cover hover:scale-105 transition duration-500"
                                        />
                                    </div>
                                </motion.div>

                                {/* CONTENT */}
                                <motion.div
                                    initial={{ opacity: 0, x: isReverse ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className={`${isReverse ? "md:order-1" : ""}`}
                                >

                                    <h3 className="text-2xl font-semibold text-primary mb-6">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed text-[15px] whitespace-pre-line space-y-4">
                                        {item.desc}
                                    </p>

                                </motion.div>

                            </motion.div>
                        );
                    })}

                </div>

            </div>

        </section>
        </AboutLayout>
    );
}