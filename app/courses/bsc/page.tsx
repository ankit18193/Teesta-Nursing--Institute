"use client";

import CTASection from "@/components/common/CTASection";
import CoursesLayout from "@/components/courses/CoursesLayout";

export default function BScPage() {
  return (
    <CoursesLayout title="B.Sc Nursing">

      {/* ✅ MATCHED: spacing system like GNM */}
      <div className="space-y-12 sm:space-y-16 md:space-y-20">

        {/* 🔥 HERO */}
        {/* ✅ MATCHED: same hero scaling as GNM */}
        <section className="relative flex h-[220px] items-center overflow-hidden rounded-2xl sm:h-[340px] md:h-[400px] md:rounded-3xl">

          <div className="absolute inset-0">
            <img
              src="/images/courses/bsc.jpg"
              alt="B.Sc Nursing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>
          </div>

          {/* ✅ MATCHED: text scaling */}
          <div className="relative z-10 max-w-3xl space-y-3 p-4 text-white sm:p-6 md:space-y-4 md:p-12 lg:p-16">
            <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              Bachelor of Science in Nursing
            </h1>

            <p className="text-xs leading-relaxed opacity-90 sm:text-sm md:text-base">
              Preparing skilled nursing professionals with advanced clinical knowledge,
              practical exposure, and compassionate patient care.
            </p>
          </div>

        </section>


        {/* 🔥 IMAGE + CONTENT */}
        {/* ✅ MATCHED: grid + gap scaling */}
        <div className="grid items-center gap-6 sm:gap-8 md:grid-cols-2 md:gap-10">

          {/* ✅ FIXED: replaced aspect-ratio with GNM-style scaling */}
          <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl shadow-md md:mx-0 md:max-w-none">
            <img
              src="/images/courses/bsc2.png"
              alt="B.Sc Nursing"
              className="h-[220px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[340px] md:h-[420px] lg:h-[520px]"
            />
          </div>

          <div>
            {/* ✅ MATCHED: heading scaling */}
            <h2 className="mb-3 text-xl font-semibold text-primary sm:text-2xl">
              Bachelor of Science in Nursing (B.Sc Nursing)
            </h2>

            {/* ✅ MATCHED: text scaling */}
            <p className="text-[13px] leading-relaxed text-gray-600 sm:text-[14px] md:text-[15px] text-justify">
              The Bachelor of Science in Nursing (B.Sc Nursing) program is designed to
              prepare students for professional roles in the healthcare sector by combining
              strong academic knowledge with practical clinical training. The course focuses
              on developing critical thinking, patient care skills, and a deep understanding
              of modern medical practices required in nursing.
              <br /><br />
              Through structured learning and hospital exposure, students gain hands-on
              experience in patient management, emergency care, and clinical procedures.
              The program also emphasizes communication, teamwork, and ethical
              responsibilities, ensuring that graduates are well-equipped to work in
              hospitals and healthcare institutions or pursue higher education.
            </p>
          </div>

        </div>


        {/* 🔥 HIGHLIGHTS */}
        {/* ✅ MATCHED: card system like GNM (removed heavy animation) */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">

          {[
            {
              title: "Advanced Clinical Skills",
              desc: "Training aligned with modern healthcare and patient care practices.",
            },
            {
              title: "Research-Oriented Learning",
              desc: "Exposure to evidence-based nursing and research methodologies.",
            },
            {
              title: "Global Opportunities",
              desc: "Opens pathways for higher studies and international careers.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>


        {/* 🔥 ADVANTAGE */}
        {/* ✅ MATCHED: highlight style from GNM */}
        <div className="space-y-4 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-gray-50 p-4 text-xs leading-relaxed text-gray-600 shadow-sm text-justify sm:p-5 sm:text-sm md:p-6">

          <h3 className="text-primary font-semibold flex items-center gap-2">
            <span className="h-4 w-1 bg-primary rounded-full"></span>
            Our Institutional Advantage
          </h3>

          <p>
            At Teesta Group of Institutions, students benefit from access to multiple
            hospitals and healthcare facilities, ensuring diverse and real-world clinical exposure.
            <br /><br />
            This integrated ecosystem enhances practical learning, professional development,
            and prepares students to become confident and competent healthcare professionals.
          </p>

        </div>


        {/* 🔥 ELIGIBILITY */}
        {/* ✅ MATCHED: padding scaling */}
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Eligibility Criteria
          </h3>

          <ul className="text-gray-600 text-sm space-y-2 list-disc pl-4">
            <li>10+2 with PCB & English</li>
            <li>Minimum 45% marks</li>
            <li>Recognized board</li>
            <li className="font-medium text-primary/80">Medically fit</li>
          </ul>
        </div>


        {/* 🔥 ADMISSION */}
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Admission Guidelines
          </h3>

          <ul className="text-gray-600 text-sm space-y-2 list-disc pl-4">
            <li>Minimum age: 17 years</li>
            <li>Admission once per year</li>
          </ul>
        </div>


        {/* 🔥 COURSE DETAILS */}
        {/* ✅ MATCHED: grid scaling */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Duration
            </h3>
            <p className="text-gray-600">
              4 Years (Including Internship)
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Career Opportunities
            </h3>
            <p className="text-gray-600 text-sm">
              Registered Nurse, Nursing Officer, Clinical Specialist, Nurse Educator.
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm md:col-span-2 hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Training & Clinical Exposure
            </h3>
            <p className="text-gray-600 text-sm">
              Students undergo clinical rotations across hospitals and departments.
            </p>
          </div>

        </div>




        {/* 🔥 EXTRA */}
        {/* ✅ MATCHED: text scaling */}
        <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl border rounded-2xl p-4 sm:p-5 md:p-6 bg-gray-50 shadow-sm">

          <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] text-justify">
            The Bachelor of Science in Nursing (B.Sc Nursing) program is designed to
            develop highly skilled healthcare professionals equipped with advanced
            clinical knowledge, critical thinking abilities, and a strong sense of
            professional responsibility. The curriculum integrates theoretical learning
            with extensive practical training, enabling students to understand modern
            medical practices and patient care techniques in depth.
            <br /><br />
            Students are trained in diverse healthcare environments, where they gain
            hands-on experience in patient management, emergency care, and clinical
            procedures. The program also emphasizes leadership, communication, and
            decision-making skills, preparing students to take on responsibilities in
            multidisciplinary healthcare teams.
            <br /><br />
            Graduates of the B.Sc Nursing program have a wide range of career
            opportunities in hospitals, healthcare institutions, research organizations,
            and international medical sectors. The course also provides a strong
            foundation for higher education and specialization, allowing students to
            pursue advanced studies and build long-term careers in the healthcare
            industry.
          </p>

        </div>


        <CTASection
          title="Shape Your Future in Healthcare"
          subtitle="Gain advanced knowledge and unlock global opportunities in nursing."
          primaryBtn={{ label: "Apply Now", href: "/resources/application" }}
          secondaryBtn={{ label: "Explore Program", href: "/courses/bsc" }}
        />

      </div>

    </CoursesLayout>
  );
}