"use client";

import CoursesLayout from "@/components/courses/CoursesLayout";

export default function BScPage() {
  return (
    <CoursesLayout title="B.Sc Nursing">

      <div className="space-y-16">

        {/* 🔥 HERO (ADDED) */}
        <section className="relative h-[300px] md:h-[380px] rounded-3xl overflow-hidden flex items-center">

          <div className="absolute inset-0">
            <img
              src="/images/courses/bsc.jpg"
              alt="B.Sc Nursing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>
          </div>

          <div className="relative z-10 p-6 md:p-16 max-w-3xl text-white space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">
              Bachelor of Science in Nursing
            </h1>

            <p className="text-sm md:text-base opacity-90">
              Preparing skilled nursing professionals with advanced clinical knowledge,
              practical exposure, and compassionate patient care.
            </p>
          </div>

        </section>


        {/* 🔥 EXISTING HERO CONTENT (UNCHANGED) */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="w-full">
            <div className="aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/courses/bsc2.png"
                alt="B.Sc Nursing"
                className="w-full h-full object-cover object-center hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Bachelor of Science in Nursing (B.Sc Nursing)
            </h2>

            <p className="text-gray-600 leading-relaxed text-[15px]">
              The B.Sc Nursing program is a comprehensive undergraduate course designed
              to develop highly skilled nursing professionals equipped with advanced
              clinical knowledge and patient care expertise.
              <br /><br />
              With a strong emphasis on scientific learning, practical exposure, and ethical
              responsibility, students are trained to confidently handle complex healthcare
              situations in modern medical environments.
            </p>
          </div>

        </div>


        {/* 🔥 HIGHLIGHTS (UPGRADED UI) */}
        <div className="grid md:grid-cols-3 gap-6">

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
            At Teesta Group of Institutions, students benefit from access to multiple
            hospitals and healthcare facilities, ensuring diverse and real-world clinical exposure.
            <br /><br />
            This integrated ecosystem enhances practical learning, professional development,
            and prepares students to become confident and competent healthcare professionals.
          </p>
        </div>


        {/* 🔥 ELIGIBILITY */}
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
        <div className="max-w-3xl">
          <p className="text-gray-600 leading-relaxed text-[15px]">
            The B.Sc Nursing program prepares students to meet the dynamic needs of
            the healthcare sector through academic excellence and practical training.
            <br /><br />
            Graduates are well-equipped for multidisciplinary healthcare roles
            and higher education opportunities.
          </p>
        </div>

      </div>

    </CoursesLayout>
  );
}