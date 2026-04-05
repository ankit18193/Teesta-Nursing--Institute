"use client";

import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function AdmissionQuery() {

  const [formData,setFormData]=useState({
    name:"",
    phone:"",
    course:"",
    message:"",
  })

  const [isLoading, setIsLoading]=useState(false);
  const [error,setError]=useState("");
  const [success, setSuccess]=useState("");

      const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
    setSuccess("");
  };


   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    
    if (!formData.name.trim()) {  
      setError("Please enter your full name");
      setIsLoading(false);
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number");
      setIsLoading(false);
      return;
    }

    // Phone validation
    const phoneDigits = formData.phone.replace(/[^0-9]/g, '');
    if (phoneDigits.length < 10) {
      setError("Please enter a valid 10-digit phone number");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/leads", {
          name: formData.name.trim(),  
          phone: formData.phone.trim(),
          course: formData.course || null,
          message: formData.message.trim() || null,
      });

      const result = await response.data;

      if (result.success) {
        setSuccess(result.message || "Inquiry submitted successfully! We'll contact you soon.");
        // Reset form
        setFormData({
          name: "",
          phone: "",
          course: "",
          message: "",
        });
      } else {
        setError(result.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };
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

          <form className="space-y-5" onSubmit={handleSubmit} >
            {/* Success Message */}
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
                {success}
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-5 py-3.5 rounded-xl border border-gray-300 bg-white
              placeholder:text-gray-400 text-dark
               focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
               transition"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-5 py-3.5 rounded-xl border border-gray-300 bg-white
               placeholder:text-gray-400 text-dark
                 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
                  transition"
            />

            <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-5 py-3.5 rounded-xl border border-gray-300 bg-white text-dark
              focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
              transition cursor-pointer"
            >
              <option value="">Select Course</option>
              <option value="GNM Nursing">GNM Nursing</option>
              <option value="B.Sc Nursing">B.Sc Nursing</option>
              <option value="B Pharma">B Pharma</option>
              <option value="D Pharma">D Pharma</option>
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your Message"
              className="w-full px-5 py-3.5 rounded-xl border border-gray-300 bg-white
                           placeholder:text-gray-400 text-dark
                           focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
                           transition resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl font-semibold
              shadow-md hover:shadow-lg hover:-translate-y-[1px]
              transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="animate-spin" size={20} />
                  Submitting...
                </span>
              ) : (
                "Submit Inquiry"
              )}
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}