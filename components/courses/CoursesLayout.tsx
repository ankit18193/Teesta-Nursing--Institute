import Link from "next/link";

const courseLinks = [
    { name: "GNM Nursing", href: "/courses/gnm" },
    { name: "B.Sc Nursing", href: "/courses/bsc" },
    { name: "B.Pharm", href: "/courses/bpharma" },
    { name: "D.Pharm", href: "/courses/dpharma" },
];

export default function CoursesLayout({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="bg-gray-50 min-h-screen">

            {/* 🔥 BREADCRUMB */}
            <div className="max-w-7xl mx-auto px-6 pt-8">
                <div className="bg-white border border-gray-100 rounded-xl px-5 py-3 shadow-sm inline-flex items-center gap-3">

                    <Link
                        href="/"
                        className="text-sm text-gray-500 hover:text-primary transition font-medium"
                    >
                        Home
                    </Link>

                    <span className="text-gray-300">›</span>

                    <span className="text-sm text-gray-500 font-medium">
                        Programmes
                    </span>

                    <span className="text-gray-300">›</span>

                    <span className="text-sm text-primary font-semibold">
                        {title}
                    </span>

                </div>
            </div>

            {/* 🔥 MAIN LAYOUT */}
            <div className="max-w-7xl mx-auto flex gap-10 py-10 px-6">

                {/* SIDEBAR */}
                <div className="w-[300px] flex flex-col gap-6">

                    {/* 🔥 PROGRAMMES LIST */}
                    <div className="bg-primary text-white rounded-2xl p-6 shadow-md">

                        <h2 className="text-lg font-semibold mb-5 tracking-wide">
                            Programmes
                        </h2>

                        <div className="flex flex-col gap-2">
                            {courseLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm px-3 py-2 rounded-md hover:bg-white/10 transition"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                    </div>

                    {/* 🔥 QUICK DOWNLOADS */}
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">

                        <h3 className="text-lg font-semibold mb-4">
                            Quick <span className="text-primary">Downloads</span>
                        </h3>

                        <div className="space-y-4">

                            <div className="bg-gray-50 p-4 rounded-lg border">
                                <p className="font-medium text-sm mb-1">Application Form</p>
                                <a
                                    href="/pdf/inc.pdf"
                                    target="_blank"
                                    className="text-sm text-primary hover:underline"
                                >
                                    Download PDF
                                </a>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg border">
                                <p className="font-medium text-sm mb-1">College Brochure</p>
                                <a
                                    href="/pdf/wbnc.pdf"
                                    target="_blank"
                                    className="text-sm text-primary hover:underline"
                                >
                                    Download PDF
                                </a>
                            </div>

                        </div>

                    </div>

                    {/* 🔥 APPLY FORM */}
                    
                    <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-6 text-white shadow-lg">

                        <h3 className="text-xl font-semibold mb-1">
                            Apply Now
                        </h3>

                        <p className="text-xs text-white/80 mb-5">
                            Start your journey with Teesta Group of Institutions
                        </p>

                        <form className="flex flex-col gap-4">

                            {/* NAME */}
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="px-4 py-2.5 rounded-lg bg-white/95 text-gray-800 placeholder-gray-500 
    outline-none focus:ring-2 focus:ring-white transition"
                            />

                            

                            {/* PHONE */}
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="px-4 py-2.5 rounded-lg bg-white/95 text-gray-800 placeholder-gray-500 
                                   outline-none focus:ring-2 focus:ring-white transition"
                            />

                            {/* COLLEGE DROPDOWN */}
                            <select
                                className="px-4 py-2.5 rounded-lg bg-white/95 text-gray-800 
                              outline-none focus:ring-2 focus:ring-white transition"
                            >
                                <option value="">Select College</option>
                                <option>TEESTA Nursing Institute</option>
                                <option>Nivedita Institute of Nursing</option>
                                <option>Hillside School of Nursing</option>
                                <option>Vivekananda College of Pharmacy</option>
                            </select>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="mt-2 bg-white text-primary font-semibold py-2.5 rounded-lg 
    hover:bg-gray-100 active:scale-[0.98] transition-all duration-200 shadow-sm"
                            >
                                Submit Request
                            </button>

                            {/* TRUST TEXT */}
                            <p className="text-[11px] text-white/70 text-center mt-2">
                                🔒 Your information is secure and will not be shared.
                            </p>

                        </form>

                    </div>

                </div>
                {/* CONTENT */}
                <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-10">

                    <h1 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                        {title}
                    </h1>

                    <div className="text-gray-600 leading-relaxed text-[15px]">
                        {children}
                    </div>

                </div>

            </div>

        </div>
    );
}