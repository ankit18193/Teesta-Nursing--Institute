"use client";

import CTASection from "@/components/common/CTASection";
import CoursesLayout from "@/components/courses/CoursesLayout";

export default function DPharmaPage() {
  return (
    <CoursesLayout title="D.Pharm">

      {/* ✅ MATCHED: spacing system */}
      <div className="space-y-12 sm:space-y-16 md:space-y-20">

        {/* 🔥 HERO */}
        {/* ✅ MATCHED: hero scaling */}
        <section className="relative flex h-[220px] items-center overflow-hidden rounded-2xl sm:h-[340px] md:h-[400px] md:rounded-3xl">

          <div className="absolute inset-0">
            <img
              src="/images/courses/dpharma.png"
              alt="D.Pharm"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>
          </div>

          {/* ✅ MATCHED: text scaling */}
          <div className="relative z-10 max-w-3xl space-y-3 p-4 text-white sm:p-6 md:space-y-4 md:p-12 lg:p-16">
            <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              Diploma in Pharmacy (D.Pharm)
            </h1>

            <p className="text-xs leading-relaxed opacity-90 sm:text-sm md:text-base">
              Building a strong foundation in pharmaceutical sciences with practical
              skills, industry exposure, and real-world healthcare training.
            </p>
          </div>

        </section>


        {/* 🔥 IMAGE + CONTENT */}
        {/* ✅ MATCHED: grid + gap scaling */}
        <div className="grid items-center gap-6 sm:gap-8 md:grid-cols-2 md:gap-10">

          {/* ✅ MATCHED: image scaling */}
          <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl shadow-md md:mx-0 md:max-w-none">
            <img
              src="/images/courses/dp.png"
              alt="D.Pharm"
              className="h-[220px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[340px] md:h-[420px] lg:h-[520px]"
            />
          </div>

          <div>
            {/* ✅ MATCHED: heading scaling */}
            <h2 className="mb-3 text-xl font-semibold text-primary sm:text-2xl">
              Diploma in Pharmacy (D.Pharm)
            </h2>

            {/* ✅ MATCHED: text scaling */}
            <p className="text-[13px] leading-relaxed text-gray-600 sm:text-[14px] md:text-[15px] text-justify">
              The Diploma in Pharmacy (D.Pharm) program is designed to provide essential
              knowledge of pharmaceutical sciences and prepare students for entry-level
              roles in the healthcare sector. The course focuses on practical skills such
              as drug dispensing, prescription handling, and patient care in pharmacy settings.
              <br /><br />
              With a strong emphasis on hands-on training and real-world exposure, students
              develop the confidence to work in medical stores, hospitals, and healthcare
              environments. The program also lays a foundation for further studies like
              B.Pharm, allowing students to expand their career opportunities in the
              pharmaceutical field.
            </p>
          </div>

        </div>


        {/* 🔥 HIGHLIGHTS */}
        {/* ✅ MATCHED: card system */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">

          <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-primary mb-2">
              Practical Training
            </h3>
            <p className="text-sm text-gray-600">
              Hands-on learning in pharmacy operations and drug dispensing.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-primary mb-2">
              Quick Career Entry
            </h3>
            <p className="text-sm text-gray-600">
              Short-duration course enabling early employment opportunities.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-primary mb-2">
              Industry Ready
            </h3>
            <p className="text-sm text-gray-600">
              Curriculum aligned with pharmaceutical industry standards.
            </p>
          </div>

        </div>


        {/* 🔥 ADVANTAGE */}
        {/* ✅ MATCHED: highlight style */}
        <div className="space-y-4 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-gray-50 p-4 text-xs leading-relaxed text-gray-600 shadow-sm text-justify sm:p-5 sm:text-sm md:p-6">

          <h3 className="text-primary font-semibold flex items-center gap-2">
            <span className="h-4 w-1 bg-primary rounded-full"></span>
            Our Institutional Advantage
          </h3>

          <p>
            At Teesta Group of Institutions, students benefit from access to
            modern pharmacy laboratories and healthcare environments.
            <br /><br />
            This integrated learning ecosystem ensures strong practical exposure,
            helping students develop the skills required for real-world pharmacy
            practice and healthcare services.
          </p>

        </div>


        {/* 🔥 ELIGIBILITY */}
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Eligibility Criteria
          </h3>

          <ul className="text-gray-600 text-sm space-y-2 list-disc pl-4">
            <li>
              10+2 with Physics and Chemistry as compulsory subjects along with
              Mathematics or Biology
            </li>
            <li>
              Minimum qualifying marks as per PCI / State Government norms
            </li>
            <li>
              Must have passed from a recognized board (CBSE/ICSE/State Board)
            </li>
            <li className="font-medium text-primary/80">
              Candidate must be medically fit
            </li>
          </ul>
        </div>


        {/* 🔥 ADMISSION */}
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Admission Guidelines
          </h3>

          <ul className="text-gray-600 text-sm space-y-2 list-disc pl-4">
            <li>Minimum age: 17 years at the time of admission</li>
            <li>Admission is conducted once per academic year</li>
            <li>Selection based on merit or entrance criteria as per regulations</li>
          </ul>
        </div>


        {/* 🔥 COURSE DETAILS */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Duration
            </h3>
            <p className="text-gray-600">
              2 Years + Practical Training
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Career Opportunities
            </h3>
            <p className="text-gray-600 text-sm">
              Pharmacist, Medical Store Manager, Hospital Pharmacy Assistant,
              Community Pharmacy Professional.
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm md:col-span-2 hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Training & Exposure
            </h3>
            <p className="text-gray-600 text-sm">
              Students receive practical training in pharmacy labs, drug dispensing,
              and healthcare environments, gaining real-world experience in
              pharmaceutical operations and patient care.
            </p>
          </div>

        </div>




        {/* 🔥 EXTRA */}
        {/* ✅ MATCHED: text scaling */}
        <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl border rounded-2xl p-4 sm:p-5 md:p-6 bg-gray-50 shadow-sm">

          <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] text-justify">
            The Diploma in Pharmacy (D.Pharm) program is designed to build a strong
            foundation in pharmaceutical sciences and prepare students for immediate
            entry into the healthcare sector. The course focuses on practical knowledge,
            enabling students to understand drug dispensing, prescription handling, and
            patient care effectively.
            <br /><br />
            Through hands-on training in laboratories and pharmacy environments, students
            develop essential skills required for real-world pharmaceutical practice. The
            program also emphasizes professional ethics, communication skills, and
            responsibility, which are crucial for working in healthcare settings.
            <br /><br />
            Graduates of the D.Pharm program can pursue careers as pharmacists, medical
            store managers, and healthcare assistants in hospitals and community settings.
            The course also provides an opportunity to continue higher education, such as
            B.Pharm, enabling students to expand their career prospects and achieve
            long-term professional growth.
          </p>

        </div>

        <CTASection
          title="Kickstart Your Pharmacy Career"
          subtitle="Gain practical skills and step into the healthcare industry quickly."
          primaryBtn={{ label: "Apply Now", href: "/resources/application" }}
          secondaryBtn={{ label: "Know More", href: "/courses/dpharma" }}
        />

      </div>

    </CoursesLayout>
  );
}