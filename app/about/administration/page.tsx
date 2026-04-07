"use client";

import AboutLayout from "@/components/about/AboutLayout";

export default function AdministrationPage() {
  return (
    <AboutLayout title="Administration">

      <div className="space-y-16">

        {/* 🔥 HERO */}
        <section className="relative h-[280px] md:h-[300px] rounded-3xl overflow-hidden flex items-center">

          <div className="absolute inset-0">
            <img
              src="/images/life/campus.png"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>
          </div>

          <div className="relative z-10 p-6 md:p-16 max-w-2xl text-white space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">
              Administration
            </h1>

            <p className="text-sm md:text-base opacity-90">
              Supporting academic excellence through efficient management
              and institutional coordination.
            </p>
          </div>

        </section>


        {/* 🔥 INTRO */}
        <div className="max-w-3xl">
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Our administrative team ensures smooth operations and supports the academic
            environment through efficient management and coordination.
          </p>
        </div>


        {/* 🔥 CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {["Registrar", "Accounts Officer", "Office Staff"].map((role) => (
            <div
              key={role}
              className="group bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* PROFILE */}
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mb-4 group-hover:scale-110 transition">
                {role.charAt(0)}
              </div>

              {/* ROLE */}
              <h3 className="text-md font-semibold text-primary mb-1">
                {role}
              </h3>

              <p className="text-xs text-gray-500">
                Administrative Department
              </p>

            </div>
          ))}

        </div>

      </div>

    </AboutLayout>
  );
}