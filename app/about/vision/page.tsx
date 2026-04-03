import AboutLayout from "@/components/about/AboutLayout";

export default function VisionPage() {
  return (
    <AboutLayout title="Vision & Mission">

      <div className="space-y-16">

        {/* 🔥 VISION SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src="/images/about/vision.jpg"
              alt="Vision"
              className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-relaxed text-[15px]">
              Our vision is to become a center of excellence in healthcare and
              pharmaceutical education by nurturing highly skilled professionals
              who are guided by strong ethical values and a deep sense of
              responsibility towards society.
              <br /><br />
              We aim to create an environment that fosters innovation, critical
              thinking, and continuous learning, ensuring that our students are
              not only academically strong but also capable of adapting to the
              evolving demands of the global healthcare industry.
            </p>
          </div>

        </div>

        {/* 🔥 MISSION SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* CONTENT */}
          <div className="md:order-1">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-relaxed text-[15px]">
              Our mission is to provide high-quality education that combines
              theoretical knowledge with practical experience, enabling students
              to confidently face real-world challenges in healthcare and
              pharmaceutical fields.
              <br /><br />
              We are committed to building a learning ecosystem that emphasizes
              hands-on training, industry exposure, and ethical practices,
              ensuring that our graduates are competent, compassionate, and
              capable of making a meaningful impact in society.
            </p>
          </div>

          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl shadow-md md:order-2">
            <img
              src="/images/about/mission.jpg"
              alt="Mission"
              className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

        </div>

      </div>

    </AboutLayout>
  );
}