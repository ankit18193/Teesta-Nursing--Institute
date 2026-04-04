import ContactLayout from "@/components/contact/ContactLayout";


export default function ContactPage() {
  return (
    <ContactLayout>
      <div className="space-y-12">

        {/* 🔷 HEADER */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Contact Us
          </h1>
          <p className="text-gray-500 text-sm">
            We’re here to help you with admissions, queries, and support
          </p>
        </div>

        {/* 🔷 FORM + INFO */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* 📝 FORM */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            ></textarea>

            <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold 
                               hover:bg-primary/90 transition-all duration-300 shadow-md">
              Send Message
            </button>
          </div>

          {/* 📍 INFO */}
          <div className="bg-gradient-to-br from-primary/10 to-white rounded-2xl p-6 border border-primary/20 shadow-md space-y-5">

            <div>
              <h3 className="text-lg font-semibold text-primary">Address</h3>
              <p className="text-gray-600 text-sm mt-1">
                Sevoke Road, Siliguri, West Bengal 734001
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary">Phone</h3>
              <p className="text-gray-600 text-sm mt-1">
                +91 9876543210
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary">Email</h3>
              <p className="text-gray-600 text-sm mt-1">
                info@teesta.edu.in
              </p>
            </div>

            <a
              href="tel:+919876543210"
              className="inline-block mt-3 px-5 py-2 bg-primary text-white rounded-lg 
                         shadow hover:bg-primary/90 transition"
            >
              📞 Call Now
            </a>

          </div>

        </div>

        {/* 🗺️ MAP */}
        <div className="relative rounded-2xl overflow-hidden h-[300px] shadow-lg">

          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              "Teesta Nursing Institute Siliguri"
            )}&z=15&output=embed`}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
          ></iframe>

          

          <div className="relative h-full flex items-end p-4">
            <p className="text-white text-sm font-medium">
              📍 Visit us at our campus location
            </p>
          </div>

        </div>

      </div>
    </ContactLayout>
  );
}