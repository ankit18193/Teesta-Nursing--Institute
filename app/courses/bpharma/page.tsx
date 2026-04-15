"use client";

import CTASection from "@/components/common/CTASection";
import CoursesLayout from "@/components/courses/CoursesLayout";

export default function BPharmaPage() {
  return (
    <CoursesLayout title="B.Pharm">

      {/* ✅ MATCHED: spacing system like GNM */}
      <div className="space-y-12 sm:space-y-16 md:space-y-20">

        {/* 🔥 HERO */}
        {/* ✅ MATCHED: hero scaling */}
        <section className="relative flex h-[220px] items-center overflow-hidden rounded-2xl sm:h-[340px] md:h-[400px] md:rounded-3xl">

          <div className="absolute inset-0">
            <img
              src="/images/courses/bpharma.jpg"
              alt="B.Pharm"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>
          </div>

          {/* ✅ MATCHED: text scaling */}
          <div className="relative z-10 max-w-3xl space-y-3 p-4 text-white sm:p-6 md:space-y-4 md:p-12 lg:p-16">
            <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              Bachelor of Pharmacy (B.Pharm)
            </h1>

            <p className="text-xs leading-relaxed opacity-90 sm:text-sm md:text-base">
              Building expertise in pharmaceutical sciences, drug development,
              and healthcare innovation through practical and academic excellence.
            </p>
          </div>

        </section>


        {/* 🔥 IMAGE + CONTENT */}
        {/* ✅ MATCHED: grid + gap scaling */}
        <div className="grid items-center gap-6 sm:gap-8 md:grid-cols-2 md:gap-10">

          {/* ✅ MATCHED: image scaling */}
          <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl shadow-md md:mx-0 md:max-w-none">
            <img
              src="/images/courses/bp.png"
              alt="B.Pharm"
              className="h-[220px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[340px] md:h-[420px] lg:h-[520px]"
            />
          </div>

          <div>
            {/* ✅ MATCHED: heading scaling */}
            <h2 className="mb-3 text-xl font-semibold text-primary sm:text-2xl">
              Bachelor of Pharmacy (B.Pharm)
            </h2>

            {/* ✅ MATCHED: text scaling */}
            <p className="text-[13px] leading-relaxed text-gray-600 sm:text-[14px] md:text-[15px] text-justify">
              The Bachelor of Pharmacy (B.Pharm) program provides a strong foundation in
              pharmaceutical sciences, drug formulation, and healthcare systems. It is
              designed to equip students with the knowledge and technical skills required
              to understand the development, production, and proper use of medicines.
              <br /><br />
              Through practical laboratory training and academic learning, students gain
              experience in drug analysis, quality control, and pharmaceutical research.
              The program also focuses on professional ethics and industry exposure,
              preparing graduates for careers in pharmaceutical companies, hospitals,
              and research organizations, as well as higher education opportunities.
            </p>
          </div>

        </div>


        {/* 🔥 HIGHLIGHTS */}
        {/* ✅ MATCHED: card system (removed heavy animation) */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">

          {[
            {
              title: "Modern Laboratories",
              desc: "Well-equipped labs for pharmaceutical analysis and formulation.",
            },
            {
              title: "Industry Exposure",
              desc: "Industrial visits and training aligned with pharma industry standards.",
            },
            {
              title: "Research Focus",
              desc: "Exposure to drug development and pharmaceutical research.",
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
            Teesta Group provides access to advanced laboratories and industry-linked
            training environments. Students benefit from real-world exposure through
            pharmaceutical training, research activities, and institutional support.
            <br /><br />
            This integrated ecosystem enhances practical learning, professional development, and prepares students to become confident and competent healthcare professionals.
          </p>

        </div>


        {/* 🔥 ELIGIBILITY */}
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Eligibility Criteria
          </h3>

          <ul className="text-gray-600 text-sm space-y-2 list-disc pl-4">
            <li>10+2 with Physics and Chemistry + Maths/Biology</li>
            <li>Minimum marks as per PCI norms</li>
            <li>Recognized board (CBSE/ICSE/State)</li>
            <li>Medically fit</li>
          </ul>

          <p className="text-gray-600 text-sm mt-4">
            <span className="font-semibold text-primary">Lateral Entry:</span>{" "}
            D.Pharm students can directly enter second year.
          </p>
        </div>


        {/* 🔥 ADMISSION */}
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Admission Guidelines
          </h3>

          <ul className="text-gray-600 text-sm space-y-2 list-disc pl-4">
            <li>Minimum age: 17 years</li>
            <li>Once per academic year</li>
            <li>Merit / entrance based selection</li>
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
              4 Years (8 Semesters)
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Career Opportunities
            </h3>
            <p className="text-gray-600 text-sm">
              Pharmacist, Drug Inspector, Quality Analyst, Research Associate,
              Production Executive, Regulatory Affairs Specialist.
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm md:col-span-2 hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Training & Exposure
            </h3>
            <p className="text-gray-600 text-sm">
              Students undergo practical training in labs, industries, and research environments.
            </p>
          </div>

        </div>




        {/* 🔥 EXTRA */}
        {/* ✅ MATCHED: text scaling */}
        <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl border rounded-2xl p-4 sm:p-5 md:p-6 bg-gray-50 shadow-sm">

          <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] text-justify">
            The Bachelor of Pharmacy (B.Pharm) program is designed to provide a strong
            foundation in pharmaceutical sciences, drug formulation, and healthcare
            systems. The course combines theoretical knowledge with practical laboratory
            training, enabling students to understand the complete lifecycle of medicines,
            from development to patient use.
            <br /><br />
            Students gain hands-on experience in modern laboratories, where they learn
            techniques related to drug analysis, formulation, and quality control. The
            program also emphasizes research, innovation, and industry exposure, preparing
            students to adapt to the rapidly evolving pharmaceutical sector.
            <br /><br />
            Graduates of the B.Pharm program have diverse career opportunities in
            pharmaceutical companies, hospitals, research laboratories, and regulatory
            organizations. The course also provides a strong pathway for higher education,
            allowing students to specialize further and build long-term careers in the
            healthcare and pharmaceutical industries.
          </p>

        </div>


        <CTASection
          title="Enter the World of Pharmacy"
          subtitle="Learn drug development and build a career in pharmaceutical sciences."
          primaryBtn={{ label: "Apply Now", href: "/resources/application" }}
          secondaryBtn={{ label: "View Details", href: "/courses/bpharma" }}
        />

      </div>




    </CoursesLayout>
  );
}