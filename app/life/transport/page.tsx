import CTASection from "@/components/common/CTASection";
import LifeLayout from "@/components/life/LifeLayout";

const features = [
  {
    title: "Wide Route Coverage",
    desc: "Buses operate across major routes connecting nearby towns and cities.",
  },
  {
    title: "Safe & Secure Travel",
    desc: "Regularly maintained vehicles with trained drivers ensure safety.",
  },
  {
    title: "Timely Service",
    desc: "Fixed schedules ensure punctual arrival and departure.",
  },
  {
    title: "Comfortable Journey",
    desc: "Spacious seating and clean buses for a comfortable ride.",
  },
];

const routes = [
  "Siliguri City",
  "Matigara",
  "Bagdogra",
  "Sevoke Road",
  "Jalpaiguri",
];

export default function TransportPage() {
  return (
    <LifeLayout title="Transportation">
      <div className="space-y-12">

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
              Safe & Reliable Transportation
            </h1>

            <p className="text-sm md:text-base opacity-90">
              Our well-managed transport system ensures safe, comfortable, and timely travel for students across multiple routes.
            </p>
          </div>

        </section>

        {/* 🔥 IMAGE SECTION */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/images/life/bus.jpg"
              alt="College Bus"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/images/life/bus2.jpg"
              alt="Transport Facility"
              className="w-full h-[500px] object-cover hover:scale-105 transition duration-500"
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

        {/* 🔥 ROUTES SECTION */}
        <section className="bg-white border rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-primary mb-3">
            Major Routes Covered
          </h3>

          <div className="flex flex-wrap gap-3">
            {routes.map((route, index) => (
              <span
                key={index}
                className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
              >
                {route}
              </span>
            ))}
          </div>
        </section>

        {/* 🔥 HIGHLIGHT STRIP */}
        <section className="bg-gradient-to-r from-primary/10 to-white border rounded-2xl p-6 text-center">

          <h3 className="text-lg font-semibold text-primary mb-2">
            Convenient & Hassle-Free Travel
          </h3>

          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Our transportation system is designed to ensure safety, punctuality,
            and comfort, helping students focus on their academic journey.
          </p>

        </section>

      </div>


      <div className="w-full mt-5 max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl border rounded-2xl p-4 sm:p-5 md:p-6 bg-gray-50 shadow-sm">
        <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] text-justify">
          Teesta Group of Institutions provides reliable and safe transportation
          facilities for students and staff. The transport system is designed to ensure
          convenient connectivity between the campus and surrounding areas.
          <br /><br />
          With well-maintained vehicles and planned routes, students can travel safely
          and comfortably. The transportation service supports punctuality and helps
          students focus on their academic responsibilities.
          <br /><br />
          The institution prioritizes safety, efficiency, and accessibility in its
          transport services to provide a hassle-free commuting experience.
        </p>
      </div>

      <CTASection
        title="Safe & Reliable Transportation"
        subtitle="Travel comfortably with our well-organized transport system."
        primaryBtn={{ label: "Check Routes", href: "/life/transport" }}
        secondaryBtn={{ label: "Apply Now", href: "/resources/application" }}
      />


    </LifeLayout>
  );
}