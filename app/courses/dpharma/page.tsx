import CoursesLayout from "@/components/courses/CoursesLayout";

export default function DPharmaPage() {
  return (
    <CoursesLayout title="D.Pharm">

      <div className="space-y-14">

        {/* 🔥 HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src="/images/courses/dpharma.jpg"
              alt="D.Pharm"
              className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Diploma in Pharmacy (D.Pharm)
            </h2>

            <p className="text-gray-600 leading-relaxed text-[15px]">
              The Diploma in Pharmacy (D.Pharm) program is designed to provide
              foundational knowledge in pharmaceutical sciences and prepare students
              for entry-level roles in the healthcare and pharmacy sector.
              <br /><br />
              The course focuses on practical skills such as drug dispensing,
              prescription handling, and patient care, enabling students to become
              job-ready professionals in a short duration.
            </p>
          </div>

        </div>

        {/* 🔥 HIGHLIGHTS */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Practical Training
            </h3>
            <p className="text-sm text-gray-600">
              Hands-on learning in pharmacy operations and drug dispensing.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Quick Career Entry
            </h3>
            <p className="text-sm text-gray-600">
              Short-duration course enabling early employment opportunities.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Industry Ready
            </h3>
            <p className="text-sm text-gray-600">
              Curriculum aligned with pharmaceutical industry standards.
            </p>
          </div>

        </div>

        {/* 🔥 INSTITUTION ADVANTAGE (ADDED) */}
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-primary mb-3">
            Our Institutional Advantage
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            At Teesta Group of Institutions, students benefit from access to
            modern pharmacy laboratories and healthcare environments.
            <br /><br />
            This integrated learning ecosystem ensures strong practical exposure,
            helping students develop the skills required for real-world pharmacy
            practice and healthcare services.
          </p>
        </div>

        {/* 🔥 ELIGIBILITY (PCI BASED - FIXED) */}
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
              Must have passed from a recognized board (CBSE/ICSE/State Board)
            </li>
            <li className="font-medium text-primary/80">
              Candidate must be medically fit
            </li>
          </ul>
        </div>

        {/* 🔥 ADMISSION GUIDELINES (ADDED) */}
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
              2 Years + Practical Training
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Career Opportunities
            </h3>
            <p className="text-gray-600 text-sm">
              Pharmacist, Medical Store Manager, Hospital Pharmacy Assistant,
              Community Pharmacy Professional.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm md:col-span-2">
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

        {/* 🔥 EXTRA DESCRIPTION */}
        <div className="max-w-3xl">
          <p className="text-gray-600 leading-relaxed text-[15px]">
            The D.Pharm program serves as a strong foundation for a career in
            pharmacy. It equips students with essential knowledge and practical
            skills required for professional pharmacy practice.
            <br /><br />
            Graduates can either begin working immediately or pursue higher
            education such as B.Pharm, opening pathways to advanced opportunities
            in the pharmaceutical industry.
          </p>
        </div>

      </div>

    </CoursesLayout>
  );
}