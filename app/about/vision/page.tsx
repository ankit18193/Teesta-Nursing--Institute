"use client";

import AboutLayout from "@/components/about/AboutLayout";
import CTASection from "@/components/common/CTASection";

export default function VisionPage() {
  return (
    <AboutLayout title="Vision & Mission">

      <div className="space-y-20">

        {/* 🔥 HERO */}
        <section className="relative h-[300px] md:h-[300px] rounded-3xl overflow-hidden flex items-center">

          <div className="absolute inset-0">
            <img
              src="/images/life/campus.png"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>
          </div>

          <div className="relative z-10 p-6 md:p-16 max-w-2xl text-white space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">
              Vision & Mission
            </h1>

            <p className="text-sm md:text-base opacity-90">
              Driving excellence in healthcare education through purpose, values,
              and continuous growth.
            </p>
          </div>

        </section>


        {/* 🔥 VISION SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/images/about/vision.jpg"
              alt="Vision"
              className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* CONTENT */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-primary">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-relaxed text-[15px]">
              Our vision is to become a center of excellence in healthcare and
              pharmaceutical education by nurturing highly skilled professionals
              who are guided by strong ethical values and a deep sense of
              responsibility towards society.
              <br /><br />
              We aim to create an environment that fosters innovation, critical
              thinking, and continuous learning, ensuring that our students are
              not only academically strong but also capable of adapting to the
              evolving demands of the global healthcare industry.
            </p>
          </div>

        </div>


        {/* 🔥 MISSION SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* CONTENT */}
          <div className="md:order-1 space-y-3">
            <h2 className="text-2xl font-semibold text-primary">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-relaxed text-[15px]">
              Our mission is to provide high-quality education that combines
              theoretical knowledge with practical experience, enabling students
              to confidently face real-world challenges in healthcare and
              pharmaceutical fields.
              <br /><br />
              We are committed to building a learning ecosystem that emphasizes
              hands-on training, industry exposure, and ethical practices,
              ensuring that our graduates are competent, compassionate, and
              capable of making a meaningful impact in society.
            </p>
          </div>

          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl shadow-lg md:order-2">
            <img
              src="/images/about/mission.jpg"
              alt="Mission"
              className="w-full h-[300px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

        </div>

      </div>

      <div className="w-full mt-5 max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl border rounded-2xl p-4 sm:p-5 md:p-6 bg-gray-50 shadow-sm">

        <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] text-justify">
          The vision of Teesta Group of Institutions is to create a center of excellence
          in education that empowers students with knowledge, skills, and values required
          to succeed in their professional lives. The institution aims to contribute to
          society by producing competent and responsible individuals.
          <br /><br />
          Its mission focuses on providing quality education through modern teaching
          methodologies, practical exposure, and a student-centered approach. The
          institution is committed to fostering innovation, ethical values, and lifelong learning.
          <br /><br />
          By aligning its vision and mission with industry needs, Teesta ensures that
          students are well-prepared to meet the challenges of the modern world.
        </p>

      </div>

      <CTASection
        title="Be Part of Our Mission"
        subtitle="Join us in building a future driven by knowledge, innovation, and excellence."
        primaryBtn={{ label: "Apply Today", href: "/resources/application" }}
        secondaryBtn={{ label: "Know More", href: "/about" }}
      />

    </AboutLayout>
  );
}