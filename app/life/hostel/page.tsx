import LifeLayout from "@/components/life/LifeLayout";

const features = [
  {
    title: "Comfortable Rooms",
    desc: "Spacious and well-maintained rooms ensuring a peaceful stay.",
  },
  {
    title: "24/7 Security",
    desc: "CCTV surveillance and wardens ensure complete safety.",
  },
  {
    title: "Healthy Food",
    desc: "Nutritious and hygienic meals served daily.",
  },
  {
    title: "Study Environment",
    desc: "Quiet and disciplined atmosphere for academic focus.",
  },
];

export default function HostelPage() {
  return (
    <LifeLayout title="Hostel Life">
      <div className="space-y-12">

        {/* 🔥 INTRO */}
        <section className="max-w-3xl">
          <h2 className="text-xl font-semibold text-primary mb-3">
            Comfortable & Secure Living
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our hostel facilities are designed to provide a safe, disciplined,
            and homely environment. We ensure that students feel comfortable
            while maintaining focus on their academic journey.
          </p>
        </section>

        {/* 🔥 IMAGE SECTION */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/images/hostel.jpg"
              alt="Hostel"
              className="w-full h-[250px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/images/hostel-room.jpg"
              alt="Hostel Room"
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

        {/* 🔥 RULES / CARE SECTION */}
        <section className="bg-white border rounded-2xl p-6 shadow-sm">

          <h3 className="text-lg font-semibold text-primary mb-3">
            Discipline & Care
          </h3>

          <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
            <li>Strict discipline and structured daily routine</li>
            <li>Dedicated wardens for supervision and support</li>
            <li>Cleanliness and hygiene maintained regularly</li>
            <li>Friendly environment promoting student well-being</li>
          </ul>

        </section>

        {/* 🔥 HIGHLIGHT STRIP */}
        <section className="bg-gradient-to-r from-primary/10 to-white border rounded-2xl p-6 text-center">

          <h3 className="text-lg font-semibold text-primary mb-2">
            A Home Away From Home
          </h3>

          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Our hostel ensures students feel safe, comfortable, and supported
            throughout their academic journey.
          </p>

        </section>

      </div>
    </LifeLayout>
  );
}