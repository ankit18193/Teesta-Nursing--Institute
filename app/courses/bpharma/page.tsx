import CoursesLayout from "@/components/courses/CoursesLayout";

export default function BPharmaPage() {
  return (
    <CoursesLayout title="B.Pharm">

      <div className="space-y-14">

        {/* 🔥 HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src="/images/courses/bpharma.jpg"
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

        {/* 🔥 HIGHLIGHTS */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Modern Laboratories
            </h3>
            <p className="text-sm text-gray-600">
              Well-equipped labs for pharmaceutical analysis and formulation.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Industry Exposure
            </h3>
            <p className="text-sm text-gray-600">
              Industrial visits and training aligned with pharma industry standards.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Research Focus
            </h3>
            <p className="text-sm text-gray-600">
              Exposure to drug development and pharmaceutical research.
            </p>
          </div>

        </div>

        {/* 🔥 INSTITUTION ADVANTAGE */}
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
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

        {/* 🔥 ELIGIBILITY (PCI BASED) */}
        <div className="border rounded-xl p-6 shadow-sm">
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
              Candidates must have passed from a recognized board (CBSE/ICSE/State Board)
            </li>
            <li>
              Candidates should be medically fit
            </li>
          </ul>

          {/* LATERAL ENTRY */}
          <p className="text-gray-600 text-sm mt-4">
            <span className="font-semibold text-primary">Lateral Entry:</span>{" "}
            Candidates who have completed Diploma in Pharmacy (D.Pharm) from a
            PCI-approved institution are eligible for direct admission into the
            second year of B.Pharm.
          </p>
        </div>

        {/* 🔥 ADMISSION GUIDELINES */}
        <div className="border rounded-xl p-6 shadow-sm">
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

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Duration
            </h3>
            <p className="text-gray-600">
              4 Years (8 Semesters)
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Career Opportunities
            </h3>
            <p className="text-gray-600 text-sm">
              Pharmacist, Drug Inspector, Quality Analyst, Research Associate,
              Production Executive, Regulatory Affairs Specialist.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm md:col-span-2">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Training & Exposure
            </h3>
            <p className="text-gray-600 text-sm">
              Students undergo practical training in pharmaceutical laboratories,
              industrial settings, and research environments, gaining exposure to
              drug formulation, quality control, and regulatory standards.
            </p>
          </div>

        </div>

        {/* 🔥 EXTRA DESCRIPTION */}
        <div className="max-w-3xl">
          <p className="text-gray-600 leading-relaxed text-[15px]">
            The B.Pharm program prepares students for a dynamic career in the
            pharmaceutical industry by combining theoretical knowledge with
            practical skills. Students are trained in drug safety, formulation,
            and healthcare systems.
            <br /><br />
            Graduates can pursue careers in pharmaceutical companies, hospitals,
            research labs, and regulatory bodies or continue higher education such
            as M.Pharm and specialized fields.
          </p>
        </div>

      </div>

    </CoursesLayout>
  );
}