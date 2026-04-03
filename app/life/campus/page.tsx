import LifeLayout from "@/components/life/LifeLayout";

const features = [
  {
    title: "Modern Classrooms",
    desc: "Smart classrooms with advanced teaching aids for better learning.",
  },
  {
    title: "Green Campus",
    desc: "A peaceful and eco-friendly environment that enhances focus.",
  },
  {
    title: "Library Facilities",
    desc: "Access to academic books, journals, and digital resources.",
  },
  {
    title: "Student Activities",
    desc: "Cultural events, seminars, and workshops for overall development.",
  },
];

export default function CampusPage() {
  return (
    <LifeLayout title="Campus Life">
      <div className="space-y-12">

        {/* 🔥 INTRO */}
        <section className="max-w-3xl">
          <h2 className="text-xl font-semibold text-primary mb-3">
            Experience Campus Life
          </h2>

          <p className="text-gray-600 leading-relaxed">
            The campus of Teesta Group of Institutions offers a perfect blend of
            modern infrastructure and natural surroundings, ensuring students
            experience both academic excellence and personal growth.
          </p>
        </section>

        {/* 🔥 IMAGE SECTION */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/images/campus.jpg"
              alt="Campus"
              className="w-full h-[250px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/images/students.jpg"
              alt="Students"
              className="w-full h-[250px] object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </section>

        {/* 🔥 FEATURES */}
        <section className="grid md:grid-cols-2 gap-6">
          {features.map((item, index) => (
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

        {/* 🔥 HIGHLIGHT STRIP */}
        <section className="bg-gradient-to-r from-primary/10 to-white border rounded-2xl p-6 text-center">

          <h3 className="text-lg font-semibold text-primary mb-2">
            A Campus That Inspires Growth
          </h3>

          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            From academics to extracurricular activities, our campus is designed
            to support students in every aspect of their journey.
          </p>

        </section>

      </div>
    </LifeLayout>
  );
}