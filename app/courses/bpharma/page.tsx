"use client";

import CoursesLayout from "@/components/courses/CoursesLayout";

export default function BPharmaPage() {
  return (
    <CoursesLayout title="B.Pharm">

      <div className="space-y-16">

        {/* 🔥 HERO SECTION (UPGRADED) */}
        <section className="relative h-[300px] md:h-[380px] rounded-3xl overflow-hidden flex items-center">

          <div className="absolute inset-0">
            <img
              src="/images/courses/bpharma.jpg"
              alt="B.Pharm"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>
          </div>

          <div className="relative z-10 p-6 md:p-16 max-w-3xl text-white space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">
              Bachelor of Pharmacy (B.Pharm)
            </h1>

            <p className="text-sm md:text-base opacity-90">
              Building expertise in pharmaceutical sciences, drug development,
              and healthcare innovation through practical and academic excellence.
            </p>
          </div>

        </section>


        {/* 🔥 HERO CONTENT (UNCHANGED STRUCTURE) */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/images/courses/bp.png"
              alt="B.Pharm"
              className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Bachelor of Pharmacy (B.Pharm)
            </h2>

            <p className="text-gray-600 leading-relaxed text-[15px]">
              The Bachelor of Pharmacy (B.Pharm) program is designed to provide
              in-depth knowledge of pharmaceutical sciences, drug formulation,
              and healthcare systems. Students develop strong foundations in
              pharmacology, chemistry, and drug development.
              <br /><br />
              With modern laboratory facilities and industry exposure, students
              gain practical experience that prepares them for roles in the
              pharmaceutical and healthcare sectors.
            </p>
          </div>

        </div>


        {/* 🔥 HIGHLIGHTS (UPGRADED UI) */}
        <div className="grid md:grid-cols-3 gap-6">

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
              className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>


        {/* 🔥 INSTITUTION ADVANTAGE */}
        <div className="bg-gradient-to-br from-primary/10 to-white border border-primary/20 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-primary mb-3">
            Our Institutional Advantage
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
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
        <div className="max-w-3xl">
          <p className="text-gray-600 leading-relaxed text-[15px]">
            The B.Pharm program prepares students for a dynamic career in the
            pharmaceutical industry by combining theoretical knowledge with
            practical skills.
            <br /><br />
            Graduates can pursue careers in pharma companies, hospitals,
            research labs, or higher education like M.Pharm.
          </p>
        </div>

      </div>

    </CoursesLayout>
  );
}