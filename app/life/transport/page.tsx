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
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
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
    </LifeLayout>
  );
}