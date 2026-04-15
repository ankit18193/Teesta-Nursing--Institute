"use client";

import CoursesLayout from "@/components/courses/CoursesLayout";
import CTASection from "@/components/common/CTASection";

export default function GNMPage() {
  return (
    <CoursesLayout title="GNM Nursing">


      <div className="space-y-12 sm:space-y-16 md:space-y-20">

        {/* 🔥 HERO */}

        <section className="relative flex h-[220px] items-center overflow-hidden rounded-2xl sm:h-[340px] md:h-[400px] md:rounded-3xl">

          <div className="absolute inset-0">
            <img
              src="/images/courses/gnm.jpg"
              alt="GNM Nursing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>
          </div>


          <div className="relative z-10 max-w-3xl space-y-3 p-4 text-white sm:p-6 md:space-y-4 md:p-12 lg:p-16">
            <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              General Nursing & Midwifery (GNM)
            </h1>

            <p className="text-xs leading-relaxed opacity-90 sm:text-sm md:text-base">
              Preparing compassionate nursing professionals with strong clinical skills,
              real-world exposure, and patient care expertise.
            </p>
          </div>

        </section>



        <div className="grid items-center gap-6 sm:gap-8 md:grid-cols-2 md:gap-10">


          <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl shadow-md md:mx-0 md:max-w-none">
            <img
              src="/images/courses/GNM2.png"
              alt="GNM Nursing"
              className="h-[220px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[340px] md:h-[420px] lg:h-[520px]"
            />
          </div>

          <div>
            {/* ✅ CHANGED: heading scaling */}
            <h2 className="mb-3 text-xl font-semibold text-primary sm:text-2xl">
              General Nursing & Midwifery (GNM)
            </h2>

            {/* ✅ CHANGED: text scaling */}
            <p className="text-[13px] leading-relaxed text-gray-600 sm:text-[14px] md:text-[15px] text-justify">
              The General Nursing and Midwifery (GNM) program is designed to prepare
              students for a rewarding and responsible career in the healthcare sector.
              It focuses on building strong clinical skills, patient care expertise,
              and professional ethics required in modern nursing practice. The program
              combines academic knowledge with practical training, ensuring that students
              gain a comprehensive understanding of healthcare systems and medical procedures.
              <br /><br />
              Through structured classroom learning and continuous hospital-based training,
              students develop the confidence and competence needed to handle real-world
              healthcare challenges effectively. They are trained to assist in patient care,
              support medical professionals, and respond to various clinical situations
              with precision and responsibility.
              
            </p>
          </div>

        </div>


        {/* 🔥 HIGHLIGHTS */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">


          <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-primary mb-2">
              Practical Training
            </h3>
            <p className="text-sm text-gray-600">
              Real-time clinical exposure through associated hospitals.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-primary mb-2">
              Expert Faculty
            </h3>
            <p className="text-sm text-gray-600">
              Guidance from experienced nursing professionals.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-primary mb-2">
              Career Ready
            </h3>
            <p className="text-sm text-gray-600">
              Training aligned with real healthcare industry requirements.
            </p>
          </div>

        </div>


        {/* 🔥 ADVANTAGE */}
        {/* ✅ CHANGED: same card style as institutions */}
        <div className="space-y-4 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-gray-50 p-4 text-xs leading-relaxed text-gray-600 shadow-sm text-justify sm:p-5 sm:text-sm md:p-6">

          <h3 className="text-primary font-semibold flex items-center gap-2">
            <span className="h-4 w-1 bg-primary rounded-full"></span>
            Our Institutional Advantage
          </h3>

          <p>
            Teesta Group of Institutions provides students with access to multiple
            healthcare institutions and hospitals, ensuring diverse clinical exposure.
            This integrated ecosystem helps students gain hands-on experience and
            enhances their confidence, making them industry-ready professionals.
          </p>

        </div>


        {/* 🔥 ELIGIBILITY */}
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Eligibility Criteria
          </h3>

          <ul className="text-gray-600 text-sm space-y-2 list-disc pl-4">
            <li>10+2 with English securing minimum 40% marks from a recognized board</li>
            <li>Candidates from State Open School and NIOS are eligible</li>
            <li>10+2 with 40% marks in Vocational ANM course (INC recognized)</li>
            <li>10+2 with 40% marks in Vocational Healthcare Science (CBSE recognized)</li>
            <li>Registered ANM candidates are eligible</li>
            <li className="font-medium text-primary/80">Science (Biology) background is preferred</li>
          </ul>

          <p className="text-gray-600 text-sm mt-4">
            <span className="font-semibold text-primary">For Foreign Nationals:</span>{" "}
            Eligibility equivalency must be certified by the Association of Indian
            Universities (AIU), New Delhi.
          </p>
        </div>


        {/* 🔥 ADMISSION */}
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Admission Guidelines
          </h3>

          <ul className="text-gray-600 text-sm space-y-2 list-disc pl-4">
            <li>Admissions are conducted once per academic year</li>
            <li>Candidates must be medically fit</li>
            <li>Minimum age: 17 years (as on 31st December)</li>
            <li>Maximum age: 35 years</li>
            <li>No upper age limit for ANM / LHV candidates</li>
          </ul>
        </div>


        {/* 🔥 COURSE DETAILS */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Duration
            </h3>
            <p className="text-gray-600">
              3 Years + Internship
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Career Opportunities
            </h3>
            <p className="text-gray-600 text-sm">
              Staff Nurse, Clinical Assistant, Community Health Worker,
              Healthcare Supervisor with opportunities for higher studies.
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm md:col-span-2 hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Training & Clinical Exposure
            </h3>
            <p className="text-gray-600 text-sm">
              Students undergo intensive clinical training through Teesta Group’s
              hospitals and healthcare institutions.
            </p>
          </div>

        </div>

      </div>



      <div className="max-w-3xl mt-5 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl border rounded-2xl p-4 sm:p-5 md:p-6 bg-gray-50 shadow-sm">

        <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] text-justify">
          The General Nursing and Midwifery (GNM) program is carefully structured to
          develop competent and compassionate nursing professionals who can effectively
          contribute to the healthcare system. The course emphasizes both theoretical
          knowledge and practical training, ensuring that students gain a deep understanding
          of patient care, medical procedures, and clinical decision-making.
          <br /><br />
          Through continuous exposure to hospital environments, students learn how to
          handle real-life medical situations, assist in patient recovery, and work
          efficiently as part of a healthcare team. The program also focuses on developing
          communication skills, ethical responsibility, and professional discipline,
          which are essential for delivering quality healthcare services.
          <br /><br />
          Graduates of the GNM program are well-prepared to take up roles in hospitals,
          nursing homes, community healthcare centers, and various medical institutions.
          The course also opens pathways for higher education and specialization in
          nursing, enabling students to advance their careers and achieve long-term
          professional growth in the healthcare industry.
        </p>

      </div>

      <CTASection
        title="Start Your Nursing Career Today"
        subtitle="Build strong clinical skills and become a compassionate healthcare professional."
        primaryBtn={{ label: "Apply Now", href: "/resources/application" }}
        secondaryBtn={{ label: "View Courses", href: "/courses" }}
      />

    </CoursesLayout>
  );
}
