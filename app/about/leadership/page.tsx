"use client";

import AboutLayout from "@/components/about/AboutLayout";

export default function LeadershipPage() {
  return (
    <AboutLayout title="Leadership">

      <div className="space-y-16">

        {/* 🔥 HERO */}
        <section className="relative h-[300px] md:h-[300px] rounded-3xl overflow-hidden flex items-center">

          <div className="absolute inset-0">
            <img
              src="/images/life/campus.png"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>
          </div>

          <div className="relative z-10 p-6 md:p-16 max-w-2xl text-white space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">
              Our Leadership
            </h1>

            <p className="text-sm md:text-base opacity-90">
              Guiding the institution with vision, experience, and a commitment to excellence.
            </p>
          </div>

        </section>


        {/* 🔥 INTRO */}
        <div className="max-w-3xl">
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
        <div className="space-y-12">

          {/* DIRECTOR */}
          <div className="grid md:grid-cols-3 gap-8 items-center bg-white border rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300">

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src="/images/about/leader1.jpg"
                alt="Director"
                className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white"
              />
            </div>

            {/* CONTENT */}
            <div className="md:col-span-2 space-y-2">
              <h3 className="text-xl font-semibold text-primary">
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
          <div className="grid md:grid-cols-3 gap-8 items-center bg-white border rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300">

            {/* IMAGE */}
            <div className="flex justify-center md:order-2">
              <img
                src="/images/about/leader2.jpg"
                alt="Principal"
                className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white"
              />
            </div>

            {/* CONTENT */}
            <div className="md:col-span-2 md:order-1 space-y-2">
              <h3 className="text-xl font-semibold text-primary">
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

      </div>

    </AboutLayout>
  );
}