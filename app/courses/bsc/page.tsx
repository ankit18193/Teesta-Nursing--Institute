import CoursesLayout from "@/components/courses/CoursesLayout";

export default function BScPage() {
  return (
    <CoursesLayout title="B.Sc Nursing">

      <div className="space-y-14">

        {/* 🔥 HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src="/images/courses/bsc.jpg"
              alt="B.Sc Nursing"
              className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
            />
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

        {/* 🔥 HIGHLIGHTS */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Advanced Clinical Skills
            </h3>
            <p className="text-sm text-gray-600">
              Training aligned with modern healthcare and patient care practices.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Research-Oriented Learning
            </h3>
            <p className="text-sm text-gray-600">
              Exposure to evidence-based nursing and research methodologies.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Global Opportunities
            </h3>
            <p className="text-sm text-gray-600">
              Opens pathways for higher studies and international careers.
            </p>
          </div>

        </div>

        {/* 🔥 INSTITUTION ADVANTAGE */}
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
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
        <div className="border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Eligibility Criteria
          </h3>

          <ul className="text-gray-600 text-sm space-y-2 list-disc pl-4">
            <li>
              10+2 passed with Science (PCB) & English Core / Elective
            </li>
            <li>
              Minimum 45% aggregate marks from a recognized board (CBSE/ICSE/State Board)
            </li>
            <li>
              Students appearing from NIOS with Science stream are eligible
            </li>
            <li className="font-medium text-primary/80">
              Candidate must be medically fit
            </li>
          </ul>
        </div>

        {/* 🔥 ADMISSION RULES */}
        <div className="border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Admission Guidelines
          </h3>

          <ul className="text-gray-600 text-sm space-y-2 list-disc pl-4">
            <li>
              Minimum age: 17 years as on 31st December of admission year
            </li>
            <li>
              Admission is conducted once in a year
            </li>
          </ul>
        </div>

        {/* 🔥 COURSE DETAILS */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Duration
            </h3>
            <p className="text-gray-600">
              4 Years (Including Internship)
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Career Opportunities
            </h3>
            <p className="text-gray-600 text-sm">
              Registered Nurse, Nursing Officer, Clinical Specialist, Nurse Educator,
              with opportunities for higher education and specialization.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm md:col-span-2">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Training & Clinical Exposure
            </h3>
            <p className="text-gray-600 text-sm">
              Students undergo intensive clinical rotations across multiple hospitals
              and departments under Teesta Group, gaining real-world experience in
              patient care, emergency handling, and advanced nursing practices.
            </p>
          </div>

        </div>

        {/* 🔥 EXTRA DESCRIPTION */}
        <div className="max-w-3xl">
          <p className="text-gray-600 leading-relaxed text-[15px]">
            The B.Sc Nursing program prepares students to meet the dynamic needs of
            the healthcare sector through a blend of academic excellence and practical
            training. Emphasis is placed on leadership, communication, and ethical practice.
            <br /><br />
            Graduates are well-equipped to work in multidisciplinary healthcare teams
            and pursue advanced education or international career opportunities.
          </p>
        </div>

      </div>

    </CoursesLayout>
  );
}