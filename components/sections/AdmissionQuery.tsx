"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AdmissionQuery() {
  return (
    <section className="py-28 bg-white">

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          {/* HEADING */}
          <p className="text-primary font-semibold tracking-widest text-sm mb-2">
            ADMISSION QUERY
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-dark mb-6 leading-tight">
            Start Your Journey with TEESTA Today
          </h2>

          <div className="w-16 h-1 bg-primary mb-6 rounded"></div>

          <p className="text-light leading-relaxed mb-10">
            Explore our nursing programs designed to build strong foundations,
            practical skills, and successful healthcare careers.
          </p>

          {/* 🔥 COURSES */}
          <div className="grid sm:grid-cols-2 gap-6">

            {/* GNM */}
            <div className="bg-softbg border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

              <div className="bg-primary text-white font-semibold px-5 py-3">
                G.N.M Admission
              </div>

              <div className="p-5 space-y-3 text-sm text-light">

                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1" size={16} />
                  <p><span className="font-medium text-dark">Eligibility:</span> 10+2 passed from any recognized board.</p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1" size={16} />
                  <p><span className="font-medium text-dark">Duration:</span> 3 Years</p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1" size={16} />
                  <p><span className="font-medium text-dark">Process:</span> Entrance / Direct Admission</p>
                </div>

              </div>
            </div>

            {/* BSC */}
            <div className="bg-softbg border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

              <div className="bg-primary text-white font-semibold px-5 py-3">
                B.Sc Nursing Admission
              </div>

              <div className="p-5 space-y-3 text-sm text-light">

                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1" size={16} />
                  <p><span className="font-medium text-dark">Eligibility:</span> 10+2 (Science (PCB) & English Core preferred)</p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1" size={16} />
                  <p><span className="font-medium text-dark">Duration:</span> 4 Years</p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1" size={16} />
                  <p><span className="font-medium text-dark">Process:</span> Entrance / Direct Admission</p>
                </div>

              </div>
            </div>

            {/*B Pharma */}
            <div className="bg-softbg border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

              <div className="bg-primary text-white font-semibold px-5 py-3">
                B Pharma Admission
              </div>

              <div className="p-5 space-y-3 text-sm text-light">

                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1" size={16} />
                  <p><span className="font-medium text-dark">Eligibility:</span> 10+2 (Physics, Chemistry, Biology/Mathematics)</p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1" size={16} />
                  <p><span className="font-medium text-dark">Duration:</span> 4 Years</p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1" size={16} />
                  <p><span className="font-medium text-dark">Process:</span> Entrance / Direct Admission</p>
                </div>

              </div>
            </div>
            {/*D Pharma */}
            <div className="bg-softbg border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

              <div className="bg-primary text-white font-semibold px-5 py-3">
                D Pharma Admission
              </div>

              <div className="p-5 space-y-3 text-sm text-light">

                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1" size={16} />
                  <p><span className="font-medium text-dark">Eligibility:</span>  10+2 (Science stream preferred)</p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1" size={16} />
                  <p><span className="font-medium text-dark">Duration:</span> 2 Years</p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1" size={16} />
                  <p><span className="font-medium text-dark">Process:</span> Entrance / Direct Admission</p>
                </div>

              </div>
            </div>



          </div>

        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-softbg p-10 md:p-14 rounded-2xl shadow-xl border border-gray-200 mt-8 lg:mt-10"
        >

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-3.5 rounded-xl border border-gray-300 bg-white
              placeholder:text-gray-400 text-dark
               focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
               transition"
            />

            

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-5 py-3.5 rounded-xl border border-gray-300 bg-white
               placeholder:text-gray-400 text-dark
                 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
                  transition"
            />

            <select
              className="w-full px-5 py-3.5 rounded-xl border border-gray-300 bg-white text-dark
              focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
              transition cursor-pointer"
            >
              <option>Select Course</option>
              <option>GNM Nursing</option>
              <option>B.Sc Nursing</option>
              <option>B Pharma</option>
              <option>D Pharma</option>
            </select>

            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-5 py-3.5 rounded-xl border border-gray-300 bg-white
                           placeholder:text-gray-400 text-dark
                           focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
                           transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl font-semibold
              shadow-md hover:shadow-lg hover:-translate-y-[1px]
              transition-all duration-300"
            >
              Submit Inquiry
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}