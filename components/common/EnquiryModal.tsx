"use client";

import { useState } from "react";

export default function EnquiryModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: "",
    message: "",
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* 🔥 BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* 🧾 MODAL */}
      <div
        className="relative w-full max-w-md p-8 rounded-3xl
        bg-white/10 backdrop-blur-2xl
        border border-white/20
        shadow-[0_20px_60px_rgba(0,0,0,0.4)]
        transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >

        {/* 🌫️ Glow Effect */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 blur-3xl rounded-full opacity-30" />

        {/* 🏫 Background Logo */}
        <img
          src="/images/logos/Teesta.png"
          alt="bg-logo"
          className="absolute inset-0 m-auto w-[460px] opacity-[0.06] pointer-events-none"
        />

        {/* ❌ Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white text-lg"
        >
          ✕
        </button>

        {/* 🏷️ Heading */}
        <h2 className="text-2xl font-bold text-white text-center mb-6 tracking-wide">
          Enquiry Form
        </h2>

        {/* 📋 Form */}
        <div className="space-y-4">

          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-white/80 text-gray-800 placeholder-gray-500
            px-4 py-3 rounded-xl border border-white/40
            focus:outline-none focus:ring-2 focus:ring-primary transition"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-white/80 text-gray-800 placeholder-gray-500
            px-4 py-3 rounded-xl border border-white/40
            focus:outline-none focus:ring-2 focus:ring-primary transition"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          {/* Course */}
          <select
            className="w-full bg-white/80 text-gray-800
            px-4 py-3 rounded-xl border border-white/40
            focus:outline-none focus:ring-2 focus:ring-primary transition"
            value={form.course}
            onChange={(e) =>
              setForm({ ...form, course: e.target.value })
            }
          >
            <option value="">Select Course</option>
            <option value="GNM">GNM</option>
            <option value="BSc Nursing">B.Sc Nursing</option>
            <option value="Pharmacy">Pharmacy</option>
          </select>

          {/* 🆕 Message */}
          <textarea
            placeholder="Your Message"
            rows={3}
            className="w-full bg-white/80 text-gray-800 placeholder-gray-500
            px-4 py-3 rounded-xl border border-white/40
            focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          {/* 🚀 Button */}
          <button
            className="w-full bg-primary text-white py-3 rounded-xl font-semibold
            shadow-lg hover:shadow-xl hover:-translate-y-[1px]
            hover:bg-primary/90 active:translate-y-[1px]
            transition-all duration-200"
          >
            Submit Enquiry
          </button>

        </div>
      </div>
    </div>
  );
}