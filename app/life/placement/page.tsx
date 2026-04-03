import LifeLayout from "@/components/life/LifeLayout";

const stats = [
  { label: "Students Placed", value: "120+" },
  { label: "Top Recruiters", value: "25+" },
  { label: "Placement Rate", value: "90%" },
];

const recruiters = [
  "Apollo Hospital",
  "Fortis Healthcare",
  "AIIMS",
  "Medanta",
  "Max Healthcare",
  "Narayana Health",
];

const students = [
  {
    name: "Anjali Sharma",
    role: "GNM Nursing",
    company: "Apollo Hospital",
  },
  {
    name: "Rahul Verma",
    role: "B.Pharm",
    company: "Fortis Healthcare",
  },
  {
    name: "Priya Singh",
    role: "B.Sc Nursing",
    company: "AIIMS",
  },
];

export default function PlacementPage() {
  return (
    <LifeLayout title="Our Placement">
      <div className="space-y-12">

        {/* 🔥 INTRO */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">
            Placement Overview
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Teesta Group of Institutions ensures strong placement support through
            hospital tie-ups, internships, and career guidance. Our students are
            placed in reputed healthcare institutions across India.
          </p>
        </section>

        {/* 🔥 STATS */}
        <section className="grid md:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/10 to-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-primary mb-2">
                {item.value}
              </h3>
              <p className="text-sm text-gray-600 tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        {/* 🔥 RECRUITERS */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-5">
            Our Recruiters
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {recruiters.map((company, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <p className="font-medium text-gray-700">{company}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🔥 STUDENT SUCCESS */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-5">
            Student Success Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {students.map((student, index) => (
              <div
                key={index}
                className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-semibold text-lg mb-1">
                  {student.name}
                </h3>

                <p className="text-sm text-gray-500 mb-3">
                  {student.role}
                </p>

                <p className="text-sm text-gray-600">
                  Placed at{" "}
                  <span className="text-primary font-semibold">
                    {student.company}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 🔥 CTA */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl p-8 text-center shadow-md">

          <h2 className="text-xl font-semibold mb-2">
            Build Your Career With Us
          </h2>

          <p className="text-sm text-white/90 mb-5">
            Join Teesta Group of Institutions and step into a successful healthcare career.
          </p>

          <button className="bg-white text-primary px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 shadow-sm">
            Apply Now
          </button>

        </section>

      </div>
    </LifeLayout>
  );
}