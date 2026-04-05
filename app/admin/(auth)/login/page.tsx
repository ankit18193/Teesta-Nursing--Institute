"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        window.location.href = "/admin";
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center 
                bg-gradient-to-br from-blue-200 via-white to-blue-300 overflow-hidden">

      {/* 🌫️ Background Watermark */}
      <img
        src="/images/logos/Teesta.png"
        alt="bg-logo"
        className="absolute opacity-[0.08] w-[1000px] max-w-[90%]"
      />

      {/* 🔐 Login Card */}
      <div className="relative w-full max-w-md p-10 rounded-3xl
                bg-white/5
                backdrop-blur-3xl
                border border-white/20
                shadow-[0_12px_45px_rgba(0,0,0,0.2)]">

        {/* ✨ Top Light Reflection */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/25 via-transparent to-transparent pointer-events-none" />

        {/* 💎 Subtle Inner Glass Tint */}
        <div className="absolute inset-0 rounded-3xl bg-white/5 pointer-events-none" />

        {/* 🌫️ Soft Glow (depth) */}
        <div className="absolute -top-12 -left-12 w-52 h-52 bg-white/20 rounded-full blur-3xl opacity-20 pointer-events-none" />

        {/* 🏫 Branding */}
        <div className="relative flex flex-col items-center text-center mb-8">

          <img
            src="/images/logos/Teesta.png"
            alt="Teesta Nursing Institute"
            width={150}
            height={150}
            className="object-contain opacity-90 mix-blend-multiply mb-3"
          />

          <h1 className="font-montserrat text-3xl md:text-4xl font-extrabold text-primary tracking-[0.34em] leading-none">
            TEESTA
          </h1>

          <p className="text-[13px] md:text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 mt-2">
            GROUP OF INSTITUTION
          </p>

        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Admin Login
        </h2>

        {/* Form */}
        <div className="relative space-y-5">

          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-white/30 bg-white/30 px-4 py-3 rounded-xl backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-800 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-white/30 bg-white/30 px-4 py-3 rounded-xl backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-800 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-sm text-gray-600 hover:text-gray-800"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-xl font-semibold
       shadow-md
       hover:shadow-lg hover:-translate-y-[1px] hover:bg-primary/90
       active:translate-y-[1px] active:shadow-sm
       transition-all duration-200 ease-in-out 
       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>

        <p className="text-sm text-center mt-6 text-gray-600">
          Forgot password?{" "}
          <span className="text-blue-700 cursor-pointer hover:underline">
            Reset here
          </span>
        </p>

      </div>
    </div>
  );
}