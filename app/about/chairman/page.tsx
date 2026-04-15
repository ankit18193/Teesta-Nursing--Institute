import AboutLayout from "@/components/about/AboutLayout";
import CTASection from "@/components/common/CTASection";

export default function ChairmanPage() {
  return (
    <AboutLayout title="Chairman’s Desk">

      <div className="grid md:grid-cols-2 gap-14 items-start">

        {/* 🔥 IMAGE */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/images/about/chairman.jpg"
            alt="Chairman"
            className="w-full h-[420px] object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* 🔥 MESSAGE */}
        <div className="text-gray-600 leading-relaxed text-[15px] ">

          <h2 className="text-2xl font-semibold text-primary mb-6">
            Message from the Chairman
          </h2>

          <p className="mb-4 text-justify">
            It gives me immense pleasure to welcome you to the Teesta Group of Institutions,
            where our commitment lies in delivering excellence in education and shaping
            future professionals in the field of healthcare and beyond.
          </p>

          <p className="mb-4 text-justify">
            At Teesta, we believe that education is not just about acquiring knowledge,
            but about developing character, responsibility, and a deep sense of purpose.
            Our institutions are designed to provide a balanced environment where students
            gain both academic expertise and practical exposure, enabling them to face
            real-world challenges with confidence.
          </p>

          <p className="mb-4 text-justify">
            With a strong focus on innovation, discipline, and ethical values, we strive
            to create individuals who not only excel in their careers but also contribute
            meaningfully to society. Our dedicated faculty, modern infrastructure, and
            industry-aligned curriculum ensure that students receive the highest standard
            of education.
          </p>

          <p className="mb-6 text-justify">
            I invite you to be a part of this journey of growth, learning, and excellence,
            and together, let us build a future driven by knowledge and compassion.
          </p>

          {/* SIGNATURE */}
          <div className="mt-6">
            <p className="font-semibold text-primary text-lg">
              — Chairman
            </p>
            <p className="text-sm text-gray-500">
              Teesta Group of Institutions
            </p>
          </div>

        </div>

      </div>


      <div className="w-full mt-5 max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl border rounded-2xl p-4 sm:p-5 md:p-6 bg-gray-50 shadow-sm">

        <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] text-justify">
          The vision behind Teesta Group of Institutions is driven by a commitment
          to excellence in education and the holistic development of students.
          Under strong leadership, the institution continues to focus on building
          a learning environment that nurtures discipline, knowledge, and compassion.
          <br /><br />
          The Chairman’s guidance emphasizes the importance of practical learning,
          ethical values, and professional growth, ensuring that students are not
          only academically strong but also prepared to face real-world challenges.
          <br /><br />
          This leadership approach has helped the institution establish itself as
          a trusted name in healthcare and professional education, shaping future
          leaders and responsible citizens.
        </p>

      </div>


      <CTASection
        title="Be a Part of Our Vision"
        subtitle="Join an institution that believes in excellence, discipline, and future-ready education."
        primaryBtn={{ label: "Apply Now", href: "/resources/application" }}
        secondaryBtn={{ label: "Explore Courses", href: "/courses" }}
      />

    </AboutLayout>
  );
}