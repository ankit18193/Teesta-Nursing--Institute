"use client";

import AboutLayout from "@/components/about/AboutLayout";
import CTASection from "@/components/common/CTASection";

export default function AdministrationPage() {
  return (
    <AboutLayout title="Administration">

      <div className="space-y-16">

        {/* 🔥 HERO */}
        <section className="relative h-[280px] md:h-[300px] rounded-3xl overflow-hidden flex items-center">

          <div className="absolute inset-0">
            <img
              src="/images/life/campus.png"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>
          </div>

          <div className="relative z-10 p-6 md:p-16 max-w-2xl text-white space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">
              Administration
            </h1>

            <p className="text-sm md:text-base opacity-90">
              Supporting academic excellence through efficient management
              and institutional coordination.
            </p>
          </div>

        </section>


        {/* 🔥 INTRO */}
        <div className="max-w-3xl">
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Our administrative team ensures smooth operations and supports the academic
            environment through efficient management and coordination.
          </p>
        </div>


        {/* 🔥 CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {["Registrar", "Accounts Officer", "Office Staff"].map((role) => (
            <div
              key={role}
              className="group bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* PROFILE */}
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mb-4 group-hover:scale-110 transition">
                {role.charAt(0)}
              </div>

              {/* ROLE */}
              <h3 className="text-md font-semibold text-primary mb-1">
                {role}
              </h3>

              <p className="text-xs text-gray-500">
                Administrative Department
              </p>

            </div>
          ))}

        </div>

      </div>

      <div className="w-full mt-5 max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl border rounded-2xl p-4 sm:p-5 md:p-6 bg-gray-50 shadow-sm">

        <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] text-justify">
          The administrative system of Teesta Group of Institutions ensures smooth
          functioning across all academic and operational activities. It is designed
          to support students, faculty, and staff through efficient processes and
          well-structured management practices.
          <br /><br />
          With a focus on transparency, discipline, and student support, the administration
          ensures that academic schedules, examinations, and institutional activities
          are conducted seamlessly.
          <br /><br />
          This strong administrative framework contributes significantly to maintaining
          a productive learning environment and delivering quality education consistently.
        </p>

      </div>

      <CTASection
        title="Experience a Well-Structured System"
        subtitle="Learn in an environment where everything is organized for your success."
        primaryBtn={{ label: "Apply Now", href: "/resources/application" }}
        secondaryBtn={{ label: "Explore Facilities", href: "/life/facility" }}
      />

    </AboutLayout>
  );
}