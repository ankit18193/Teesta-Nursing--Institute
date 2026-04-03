import LifeLayout from "@/components/life/LifeLayout";

const facilities = [
  {
    title: "Modern Laboratories",
    desc: "Fully equipped labs for practical learning and clinical training.",
  },
  {
    title: "Library",
    desc: "Access to a wide range of books, journals, and digital resources.",
  },
  {
    title: "Wi-Fi Campus",
    desc: "High-speed internet access across the campus.",
  },
  {
    title: "Medical Support",
    desc: "Immediate healthcare assistance available for students.",
  },
  {
    title: "Cafeteria",
    desc: "Hygienic and nutritious food for students and staff.",
  },
  {
    title: "Sports & Recreation",
    desc: "Indoor and outdoor sports facilities for overall well-being.",
  },
];

const languagePrograms = [
  {
    title: "German Language Training",
    desc: "Specialized training programs to prepare students for international healthcare opportunities in Germany.",
  },
  {
    title: "Japanese Language Training",
    desc: "Focused language courses to help students explore career paths in Japan’s healthcare sector.",
  },
];

export default function FacilityPage() {
  return (
    <LifeLayout title="Our Facilities">
      <div className="space-y-12">

        {/* 🔥 INTRO */}
        <section className="max-w-3xl">
          <h2 className="text-xl font-semibold text-primary mb-3">
            World-Class Facilities
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Teesta Group of Institutions provides modern infrastructure and
            student-centric facilities to ensure a comfortable and enriching
            academic experience.
          </p>
        </section>

        {/* 🔥 MAIN FACILITIES */}
        <section className="grid md:grid-cols-2 gap-6">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-semibold text-lg mb-2 text-primary">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        {/* 🔥 LANGUAGE PROGRAMS (NEW SECTION) */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-5">
            Global Language Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {languagePrograms.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 🔥 HIGHLIGHT STRIP */}
        <section className="bg-gradient-to-r from-primary/10 to-white border rounded-2xl p-6 text-center">

          <h3 className="text-lg font-semibold text-primary mb-2">
            Preparing Students for Global Opportunities
          </h3>

          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Along with academic excellence, we focus on skill development and
            international exposure to help students build successful careers.
          </p>

        </section>

      </div>
    </LifeLayout>
  );
}