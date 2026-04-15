import CTASection from "@/components/common/CTASection";
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



        {/* 🔥 HERO */}
        <section className="relative rounded-3xl overflow-hidden">

          <div className="absolute inset-0">
            <img
              src="/images/life/placement.jpg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
          </div>

          <div className="relative p-10 md:p-16 text-white max-w-3xl space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">
              Building Careers, Creating Futures
            </h1>

            <p className="text-sm md:text-base opacity-90">
            Our hostel facilities are designed to provide a safe, disciplined,
            and homely environment. We ensure that students feel comfortable
            while maintaining focus on their academic journey.
            </p>
          </div>

        </section>

        {/* 🔥 IMAGE SECTION */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/images/life/hostel.png"
              alt="Hostel"
              className="w-full h-[250px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/images/life/hostel2.png"
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


        <div className="w-full mt-5  max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl border rounded-2xl p-4 sm:p-5 md:p-6 bg-gray-50 shadow-sm">
  <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] text-justify">
    Hostel life at Teesta Group of Institutions provides a safe, comfortable,
    and student-friendly living environment. The hostels are designed to ensure
    that students feel at home while focusing on their academic and personal growth.
    <br /><br />
    With proper facilities, disciplined routines, and a supportive atmosphere,
    students develop independence, responsibility, and strong interpersonal skills.
    The hostel environment also encourages bonding and teamwork among students.
    <br /><br />
    A well-managed hostel system ensures that students can focus on their studies
    while enjoying a secure and enriching residential experience.
  </p>
</div>

<CTASection
  title="Comfortable & Secure Hostel Life"
  subtitle="Stay in a safe environment designed for student comfort and growth."
  primaryBtn={{ label: "View Facilities", href: "/life/facility" }}
  secondaryBtn={{ label: "Apply Now", href: "/resources/application" }}
/>

      </div>
    </LifeLayout>
  );
}