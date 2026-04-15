"use client";

import CTASection from "@/components/common/CTASection";
import LifeLayout from "@/components/life/LifeLayout";

const stats = [
  { label: "Students Placed", value: "120+" },
  { label: "Top Recruiters", value: "25+" },
  { label: "Placement Rate", value: "90%" },
];

const recruiters = [
  "Mitra Hospital",
  "Kurseong Sub-Divisional Hospital",
  "Hope & Hill Cancer Hospital",
  "Malbazar Super Hospital",
  "Malbazar Hospital",
  "Siliguri Sub-Divisional Hospital",
  "Sun Hospital & Diagnostic Center",
  "Tufanganj Hospital",
];

const students = [
  {
    name: "Anjali Sharma",
    role: "GNM Nursing",
    company: "Apollo Hospital",
  },
  {
    name: "Rahul Verma",
    role: "B.Pharm",
    company: "Fortis Healthcare",
  },
  {
    name: "Priya Singh",
    role: "B.Sc Nursing",
    company: "AIIMS",
  },
];

export default function PlacementPage() {
  return (
    <LifeLayout title="Our Placement">

      <div className="space-y-20">

        {/* 🔥 HERO */}
        <section className="relative rounded-3xl overflow-hidden">

          <div className="absolute inset-0">
            <img
              src="/images/life/placement.png"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
          </div>

          <div className="relative p-10 md:p-16 text-white max-w-3xl space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">
              Building Careers, Creating Futures
            </h1>

            <p className="text-sm md:text-base opacity-90">
              Strong industry connections, practical training, and expert guidance
              ensure our students step confidently into professional healthcare careers.
            </p>
          </div>

        </section>

        {/* 🔥 STATS (PREMIUM) */}
        <section className="grid sm:grid-cols-3 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-6 shadow-md text-center hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-bold text-primary">
                {item.value}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {item.label}
              </p>
            </div>
          ))}

        </section>

        {/* 🔥 RECRUITERS */}
        <section className="space-y-10">

          {/* 🔥 HEADER */}
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Our Recruiters
            </h2>

            <p className="text-sm text-gray-500">
              Trusted healthcare institutions where our students build their careers.
            </p>
          </div>

          {/* 🔥 GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {recruiters.map((company, index) => (
              <div
                key={index}
                className="
          group relative
          bg-white border rounded-2xl p-5
          flex flex-col items-center justify-center text-center
          shadow-sm hover:shadow-xl
          hover:-translate-y-2
          transition-all duration-300
        "
              >

                {/* 🔥 LOGO / INITIAL */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg mb-3 group-hover:scale-110 transition">
                  {company.charAt(0)}
                </div>

                {/* 🔥 NAME */}
                <p className="text-sm font-medium text-gray-700 group-hover:text-primary transition">
                  {company}
                </p>

                {/* 🔥 HOVER GLOW */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition pointer-events-none"></div>

              </div>
            ))}

          </div>

        </section>

        {/* 🔥 STUDENTS (UPGRADED) */}
        <section className="space-y-6">

          <h2 className="text-2xl font-semibold text-gray-800">
            Student Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {students.map((student, index) => (
              <div
                key={index}
                className="group bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition"
              >

                {/* AVATAR */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary font-semibold mb-3">
                  {student.name.charAt(0)}
                </div>

                <h3 className="font-semibold text-lg text-gray-800">
                  {student.name}
                </h3>

                <p className="text-sm text-gray-500 mb-3">
                  {student.role}
                </p>

                <p className="text-sm text-gray-600">
                  Placed at{" "}
                  <span className="text-primary font-semibold">
                    {student.company}
                  </span>
                </p>

              </div>
            ))}

          </div>

        </section>

        
      </div>

      <div className="w-full mt-5  max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl border rounded-2xl p-4 sm:p-5 md:p-6 bg-gray-50 shadow-sm">
        <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] text-justify">
          The placement cell at Teesta Group of Institutions is dedicated to helping
          students build successful careers. With strong industry connections and
          professional training, students are prepared to meet real-world job requirements.
          <br /><br />
          Regular training sessions, mock interviews, and skill development programs
          ensure that students gain confidence and improve their employability.
          <br /><br />
          The institution focuses on providing placement opportunities in reputed
          hospitals, healthcare organizations, and industries, helping students achieve
          their career goals.
        </p>
      </div>

      <CTASection
        title="Build a Successful Career"
        subtitle="Get placement support and start your professional journey with confidence."
        primaryBtn={{ label: "View Opportunities", href: "/life/placement" }}
        secondaryBtn={{ label: "Apply Now", href: "/resources/application" }}
      />

    </LifeLayout>
  );
}