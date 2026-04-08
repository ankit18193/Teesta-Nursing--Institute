"use client";

import ContactLayout from "@/components/contact/ContactLayout";

export default function ContactPage() {
  return (
    <ContactLayout>

      <div className="space-y-16">

        {/* 🔥 HERO */}
        <section className="relative rounded-3xl overflow-hidden">

          <div className="absolute inset-0">
            <img
              src="/images/life/outh.jpg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
          </div>

          <div className="relative p-10 md:p-16 text-white max-w-3xl space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">
              Get in Touch With Us
            </h1>

            <p className="text-sm md:text-base opacity-90">
              We’re here to assist you with admissions, queries, and support.
            </p>
          </div>

        </section>

        {/* 🔥 MAIN SECTION */}
        <section className="grid lg:grid-cols-2 gap-10">

          {/* 📝 FORM */}
          <div className="bg-white rounded-3xl shadow-md border p-6 md:p-8 space-y-5">

            <h2 className="text-xl font-semibold text-gray-800">
              Send a Message
            </h2>

            <div className="grid gap-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              ></textarea>

              <button className="bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition shadow">
                Send Message
              </button>

            </div>

          </div>

          {/* 📍 INFO PANEL */}
          <div className="space-y-6">

            <div className="bg-gradient-to-br from-primary/10 to-white rounded-2xl p-6 border border-primary/20 shadow-md space-y-5">

              <h2 className="text-lg font-semibold text-gray-800">
                Contact Information
              </h2>

              {/* ADDRESS */}
              <div className="flex items-start gap-3">
                <span className="text-primary text-lg">📍</span>
                <div>
                  <p className="text-sm font-medium text-gray-700">Address</p>
                  <p className="text-sm text-gray-600">
                  MFV3 + 5FP, Teesta Campus, VIP Road, South Shanti Nagar, Ananda Pally, Siliguri, West Bengal- 734006
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-3">
                <span className="text-primary text-lg">📞</span>
                <div>
                  <p className="text-sm font-medium text-gray-700">Phone</p>
                  <p className="text-sm text-gray-600">
                    +91-9771406258 | +91-9733135555
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3">
                <span className="text-primary text-lg">✉️</span>
                <div>
                  <p className="text-sm font-medium text-gray-700">Email</p>
                  <p className="text-sm text-gray-600">
                    info@teesta.edu.in
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="tel:+919876543210"
                className="inline-block mt-3 px-5 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition"
              >
                Call Now
              </a>

            </div>

          </div>

        </section>

        {/* 🔥 MAP */}
        <section className="relative rounded-3xl overflow-hidden h-[350px] shadow-lg">

          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              "Teesta Nursing Institute Siliguri"
            )}&z=15&output=embed`}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
          ></iframe>

          {/* 🔥 Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

          <div className="relative h-full flex items-end p-6">
            <p className="text-white text-sm font-medium">
              📍 Visit our campus in Siliguri
            </p>
          </div>

        </section>

      </div>

    </ContactLayout>
  );
}