"use client";

import ResourcesLayout from "@/components/resources/ResourcesLayout";

const alumni = [
  {
    name: "Anjali Sharma",
    role: "GNM Nursing (2022)",
    company: "Apollo Hospital, Bangalore",
    image: "/images/life/student.png",
  },
  {
    name: "Rahul Verma",
    role: "B.Pharm (2021)",
    company: "Clinical Pharmacist, Delhi",
    image: "/images/life/student.png",
  },
  {
    name: "Priya Singh",
    role: "B.Sc Nursing (2023)",
    company: "AIIMS, Delhi",
    image: "/images/life/student.png",
  },
];

export default function AlumniPage() {
  return (
    <ResourcesLayout title="Alumni">

      <div className="space-y-20">

        {/* 🔥 HERO */}
        <section className="relative rounded-3xl overflow-hidden">

          <div className="absolute inset-0">
            <img
              src="/images/life/activity1.jpg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
          </div>

          <div className="relative p-10 md:p-16 text-white max-w-3xl space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">
              Our Alumni Network
            </h1>

            <p className="text-sm md:text-base opacity-90">
              A strong community of professionals contributing to healthcare
              across the country.
            </p>
          </div>

        </section>

        {/* 🔥 STATS */}
        <section className="grid sm:grid-cols-3 gap-6 text-center">

          <div className="bg-white border rounded-2xl p-6 shadow-md">
            <h3 className="text-2xl font-bold text-primary">500+</h3>
            <p className="text-sm text-gray-500">Alumni Network</p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-md">
            <h3 className="text-2xl font-bold text-primary">100+</h3>
            <p className="text-sm text-gray-500">Hospitals</p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-md">
            <h3 className="text-2xl font-bold text-primary">95%</h3>
            <p className="text-sm text-gray-500">Placement Success</p>
          </div>

        </section>

        {/* 🔥 ALUMNI CARDS */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {alumni.map((item, index) => (
            <div
              key={index}
              className="group bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* PROFILE */}
              <div className="flex items-center gap-4 mb-4">

                <img
                  src={item.image}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-gray-800">
                    {item.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {item.role}
                  </p>
                </div>

              </div>

              {/* COMPANY */}
              <p className="text-sm text-gray-600">
                Working at{" "}
                <span className="text-primary font-semibold">
                  {item.company}
                </span>
              </p>

            </div>
          ))}

        </section>

        {/* 🔥 COMMUNITY SECTION */}
        <section className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center space-y-3">

          <h3 className="text-xl font-semibold text-gray-800">
            A Growing Community of Professionals
          </h3>

          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Our alumni are working in reputed hospitals, contributing to
            healthcare excellence and inspiring future students.
          </p>

        </section>

        {/* 🔥 CTA */}
        <section className="relative rounded-3xl bg-primary text-white p-10 text-center overflow-hidden">

          <div className="absolute inset-0 opacity-10 bg-[url('/images/life/campus.png')] bg-cover"></div>

          <div className="relative space-y-3">
            <h3 className="text-2xl font-semibold">
              Stay Connected With Us
            </h3>

            <p className="text-sm opacity-90">
              Be part of our alumni network and continue your journey with Teesta.
            </p>

            <button className="mt-4 bg-white text-primary px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition shadow-sm">
              Join Alumni Network
            </button>
          </div>

        </section>

      </div>

    </ResourcesLayout>
  );
}