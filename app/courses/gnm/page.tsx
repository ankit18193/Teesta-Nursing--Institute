import CoursesLayout from "@/components/courses/CoursesLayout";

export default function GNMPage() {
  return (
    <CoursesLayout title="GNM Nursing">

      <div className="space-y-14">

        {/* 🔥 HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src="/images/courses/gnm.jpg"
              alt="GNM Nursing"
              className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              General Nursing & Midwifery (GNM)
            </h2>

            <p className="text-gray-600 leading-relaxed text-[15px]">
              The General Nursing and Midwifery (GNM) program is designed to prepare
              students for a rewarding career in the healthcare sector. It focuses on
              building strong clinical skills, patient care expertise, and professional
              ethics required in modern nursing practice.
              <br /><br />
              Through structured academic learning and hospital-based training,
              students develop confidence and competence to handle real-world
              healthcare challenges effectively.
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
              Real-time clinical exposure through associated hospitals.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Expert Faculty
            </h3>
            <p className="text-sm text-gray-600">
              Guidance from experienced nursing professionals.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Career Ready
            </h3>
            <p className="text-sm text-gray-600">
              Training aligned with real healthcare industry requirements.
            </p>
          </div>

        </div>

        {/* 🔥 INSTITUTION ADVANTAGE */}
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-primary mb-3">
            Our Institutional Advantage
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Teesta Group of Institutions provides students with access to multiple
            healthcare institutions and hospitals, ensuring diverse clinical exposure.
            This integrated ecosystem helps students gain hands-on experience and
            enhances their confidence, making them industry-ready professionals.
          </p>
        </div>

        {/* 🔥 ELIGIBILITY SECTION (UPGRADED) */}
        <div className="border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Eligibility Criteria
          </h3>

          <ul className="text-gray-600 text-sm space-y-2 list-disc pl-4">
            <li>
              10+2 with English securing minimum 40% marks from a recognized board
            </li>
            <li>
              Candidates from State Open School and NIOS are eligible
            </li>
            <li>
              10+2 with 40% marks in Vocational ANM course (INC recognized)
            </li>
            <li>
              10+2 with 40% marks in Vocational Healthcare Science (CBSE recognized)
            </li>
            <li>
              Registered ANM candidates are eligible
            </li>
            <li className="font-medium text-primary/80">
              Science (Biology) background is preferred
            </li>
          </ul>

          {/* FOREIGN STUDENTS */}
          <p className="text-gray-600 text-sm mt-4">
            <span className="font-semibold text-primary">For Foreign Nationals:</span>{" "}
            Eligibility equivalency must be certified by the Association of Indian
            Universities (AIU), New Delhi. Institutions and State Nursing Councils
            will ensure compliance with prescribed standards.
          </p>
        </div>

        {/* 🔥 RESERVATION
        <div className="border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Reservation Policy
          </h3>

          <ul className="text-gray-600 text-sm space-y-2 list-disc pl-4">
            <li>
              3% reservation for candidates with locomotor disability (40%–50%)
            </li>
            <li>
              Disability eligibility assessed by medical board + nursing expert panel
            </li>
            <li>
              5% relaxation in marks for SC/ST candidates
            </li>
            <li>
              Additional reservations as per State Government policy
            </li>
            <li className="italic">
              Reservations are included within sanctioned seats (not additional)
            </li>
          </ul>
        </div> */}

        {/* 🔥 ADMISSION RULES */}
        <div className="border rounded-xl p-6 shadow-sm">
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

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Duration
            </h3>
            <p className="text-gray-600">
              3 Years + Internship
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Career Opportunities
            </h3>
            <p className="text-gray-600 text-sm">
              Staff Nurse, Clinical Assistant, Community Health Worker,
              Healthcare Supervisor with opportunities for higher studies.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm md:col-span-2">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Training & Clinical Exposure
            </h3>
            <p className="text-gray-600 text-sm">
              Students undergo intensive clinical training through Teesta Group’s
              hospitals and healthcare institutions, ensuring real-world experience
              in patient care, emergency handling, and clinical procedures.
            </p>
          </div>

        </div>

      </div>

    </CoursesLayout>
  );
}