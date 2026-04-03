import AboutLayout from "@/components/about/AboutLayout";

export default function LeadershipPage() {
  return (
    <AboutLayout title="Leadership">

      {/* 🔥 INTRO */}
      <div className="mb-12 max-w-2xl">
        <p className="text-gray-600 leading-relaxed text-[15px]">
          Our leadership team is the driving force behind the vision and growth of
          Teesta Group of Institutions. With a strong foundation in academic excellence
          and years of industry experience, they guide the institution towards innovation,
          quality education, and holistic development of students.
          <br /><br />
          Their commitment to excellence, integrity, and continuous improvement ensures
          that the institution remains aligned with evolving healthcare and educational standards.
        </p>
      </div>

      {/* 🔥 LEADERSHIP CARDS */}
      <div className="space-y-10">

        {/* DIRECTOR */}
        <div className="grid md:grid-cols-3 gap-8 items-center border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src="/images/about/leader1.jpg"
              alt="Director"
              className="w-40 h-40 rounded-full object-cover shadow-md"
            />
          </div>

          {/* CONTENT */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Director
            </h3>

            <p className="text-gray-600 leading-relaxed text-[15px]">
              The Director plays a pivotal role in shaping the academic direction
              of the institution, ensuring that educational standards remain aligned
              with modern healthcare practices. With a focus on innovation and quality,
              the leadership fosters an environment that encourages excellence in both
              teaching and learning.
              <br /><br />
              Through strategic planning and continuous development initiatives,
              the Director ensures that students receive the best possible education
              and exposure to real-world healthcare challenges.
            </p>
          </div>

        </div>

        {/* PRINCIPAL */}
        <div className="grid md:grid-cols-3 gap-8 items-center border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">

          {/* IMAGE */}
          <div className="flex justify-center md:order-2">
            <img
              src="/images/about/leader2.jpg"
              alt="Principal"
              className="w-40 h-40 rounded-full object-cover shadow-md"
            />
          </div>

          {/* CONTENT */}
          <div className="md:col-span-2 md:order-1">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Principal
            </h3>

            <p className="text-gray-600 leading-relaxed text-[15px]">
              The Principal oversees the day-to-day academic and administrative
              functioning of the institution, ensuring smooth operations and a
              high standard of education. With a student-centric approach, the
              leadership focuses on creating a supportive and disciplined learning environment.
              <br /><br />
              By promoting innovation, professional ethics, and continuous learning,
              the Principal plays a key role in shaping students into competent
              healthcare professionals ready to meet industry demands.
            </p>
          </div>

        </div>

      </div>

    </AboutLayout>
  );
}