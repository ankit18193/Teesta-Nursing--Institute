"use client";

import ResourcesLayout from "@/components/resources/ResourcesLayout";

export default function ApplicationPage() {
  return (
    <ResourcesLayout title="Application Form">

      <div className="space-y-16">

        {/* 🔥 HERO */}
        <section className="relative rounded-3xl overflow-hidden">

          <div className="absolute inset-0">
            <img
              src="/images/life/campus.png"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
          </div>

          <div className="relative p-10 md:p-16 text-white max-w-3xl space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">
              Start Your Admission Journey
            </h1>

            <p className="text-sm md:text-base opacity-90">
              Fill out the application form and take the first step toward
              a successful healthcare career with us.
            </p>
          </div>

        </section>

        {/* 🔥 MAIN SECTION */}
        <section className="grid lg:grid-cols-3 gap-10">

          {/* 🔥 FORM */}
          <div className="lg:col-span-2 bg-white border rounded-3xl p-6 md:p-8 shadow-md space-y-6">

            <h2 className="text-xl font-semibold text-gray-800">
              Application Details
            </h2>

            <form className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Full Name"
                className="border p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="border p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none"
              />

              <select className="border p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none">
                <option>Select Course</option>
                <option>GNM Nursing</option>
                <option>B.Sc Nursing</option>
                <option>B.Pharm</option>
                <option>D.Pharm</option>
              </select>

              <textarea
                placeholder="Address"
                className="border p-3 rounded-lg md:col-span-2 focus:ring-2 focus:ring-primary outline-none"
              />

              <button
                type="submit"
                className="bg-primary text-white py-3 rounded-lg md:col-span-2 hover:opacity-90 transition"
              >
                Submit Application
              </button>

            </form>

          </div>

          {/* 🔥 SIDE INFO PANEL */}
          <div className="space-y-6">

            {/* STEPS */}
            <div className="bg-gray-50 border rounded-2xl p-6 space-y-4">

              <h3 className="font-semibold text-gray-800">
                Admission Process
              </h3>

              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Fill out the application form</li>
                <li>• Our team will contact you</li>
                <li>• Submit required documents</li>
                <li>• Confirm your admission</li>
              </ul>

            </div>

            {/* SUPPORT */}
            <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-2">

              <h3 className="font-semibold text-gray-800">
                Need Help?
              </h3>

              <p className="text-sm text-gray-600">
                Contact our admission team for guidance and support throughout
                your application process.
              </p>

              <p className="text-sm text-primary font-medium">
                📞 +91 98765 43210
              </p>

            </div>

          </div>

        </section>

        {/* 🔥 CTA */}
        <section className="relative rounded-3xl bg-primary text-white p-10 text-center overflow-hidden">

          <div className="absolute inset-0 opacity-10 bg-[url('/images/life/campus.png')] bg-cover"></div>

          <div className="relative space-y-3">
            <h3 className="text-2xl font-semibold">
              Your Future Starts Here
            </h3>

            <p className="text-sm opacity-90 max-w-xl mx-auto">
              Take the first step toward a rewarding healthcare career with Teesta.
            </p>

          </div>

        </section>

      </div>

    </ResourcesLayout>
  );
}