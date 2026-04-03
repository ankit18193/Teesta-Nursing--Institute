import AboutLayout from "@/components/about/AboutLayout";

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
        <div className="text-gray-600 leading-relaxed text-[15px]">

          <h2 className="text-2xl font-semibold text-primary mb-6">
            Message from the Chairman
          </h2>

          <p className="mb-4">
            It gives me immense pleasure to welcome you to the Teesta Group of Institutions,
            where our commitment lies in delivering excellence in education and shaping
            future professionals in the field of healthcare and beyond.
          </p>

          <p className="mb-4">
            At Teesta, we believe that education is not just about acquiring knowledge,
            but about developing character, responsibility, and a deep sense of purpose.
            Our institutions are designed to provide a balanced environment where students
            gain both academic expertise and practical exposure, enabling them to face
            real-world challenges with confidence.
          </p>

          <p className="mb-4">
            With a strong focus on innovation, discipline, and ethical values, we strive
            to create individuals who not only excel in their careers but also contribute
            meaningfully to society. Our dedicated faculty, modern infrastructure, and
            industry-aligned curriculum ensure that students receive the highest standard
            of education.
          </p>

          <p className="mb-6">
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

    </AboutLayout>
  );
}