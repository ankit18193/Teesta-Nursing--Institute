"use client";

import LifeLayout from "@/components/life/LifeLayout";

const features = [
  {
    title: "Modern Classrooms",
    desc: "Smart classrooms with advanced teaching aids for better learning.",
    image: "/images/life/classroom.jpg",
  },
  {
    title: "Green Campus",
    desc: "A peaceful and eco-friendly environment that enhances focus.",
    image: "/images/life/green.jpg",
  },
  {
    title: "Library Facilities",
    desc: "Access to academic books, journals, and digital resources.",
    image: "/images/life/library.jpg",
  },
  {
    title: "Student Activities",
    desc: "Cultural events, seminars, and workshops for overall development.",
    image: "/images/life/activity.jpg",
  },
];

export default function CampusPage() {
  return (
    <LifeLayout title="Campus Life">

      <div className="space-y-20">

        {/* 🔥 HERO SECTION */}
        <section className="relative rounded-3xl overflow-hidden">

          <div className="absolute inset-0">
            <img
              src="/images/life/campus.png"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
          </div>

          <div className="relative p-10 md:p-16 max-w-3xl text-white space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Experience Life Beyond Classrooms
            </h1>

            <p className="text-sm md:text-base opacity-90">
              A vibrant campus designed to inspire learning, creativity,
              and personal growth in every student.
            </p>
          </div>

        </section>

        {/* 🔥 INTRO + IMAGE SPLIT */}
        <section className="grid md:grid-cols-2 gap-10 items-center">

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Where Learning Meets Lifestyle
            </h2>

            <p className="text-gray-600 leading-relaxed">
              At Teesta Group of Institutions, campus life blends academics
              with real-world experiences. Students grow not only in knowledge
              but also in confidence, creativity, and leadership.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/life/activity1.jpg"
              className="w-full h-[320px] object-cover"
            />
          </div>

        </section>

        {/* 🔥 FEATURES GRID */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-md"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-5 text-white space-y-1">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-xs opacity-90">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </section>

        {/* 🔥 STATS (REDESIGNED) */}
        <section className="grid sm:grid-cols-3 gap-6">

          {[
            { value: "500+", label: "Students" },
            { value: "50+", label: "Faculty" },
            { value: "100%", label: "Exposure" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md text-center border hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-bold text-primary">
                {item.value}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {item.label}
              </p>
            </div>
          ))}

        </section>

        {/* 🔥 EXPERIENCE SECTION */}
        <section className="bg-gray-50 rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-800">
              Student Experience
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              From cultural events to hands-on workshops, students actively
              participate in experiences that shape their future beyond academics.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden">
            <img
              src="/images/life/students.png"
              className="w-full h-[250px] object-cover"
            />
          </div>

        </section>

        {/* 🔥 CTA (UPGRADED) */}
        <section className="relative overflow-hidden rounded-3xl bg-primary text-white p-10 text-center">

          <div className="absolute inset-0 opacity-10 bg-[url('/images/life/campus.png')] bg-cover"></div>

          <div className="relative space-y-3">
            <h3 className="text-2xl font-semibold">
              Start Your Journey With Us
            </h3>

            <p className="text-sm opacity-90 max-w-xl mx-auto">
              Join a community that nurtures growth, builds confidence,
              and prepares you for a successful future.
            </p>
          </div>

        </section>

      </div>

    </LifeLayout>
  );
}