import Link from "next/link";
import HeroSlider from "../resources/HeroSlider";

const aboutLinks = [
    { name: "Our Institutions", href: "/about/institutions" },
    { name: "Chairman’s Desk", href: "/about/chairman" },
    { name: "Leadership", href: "/about/leadership" },
    { name: "Administration", href: "/about/administration" },
    { name: "Vision & Mission", href: "/about/vision" },
];

export default function AboutLayout({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="bg-gray-50 min-h-screen">

            {/* 🔥 PREMIUM BREADCRUMB */}
            <div className="max-w-7xl mx-auto px-6 pt-8">
                <div className="bg-white border border-gray-100 rounded-xl px-5 py-3 shadow-sm inline-flex items-center gap-3">

                    <Link
                        href="/"
                        className="text-sm text-gray-500 hover:text-primary transition font-medium"
                    >
                        Home
                    </Link>

                    <span className="text-gray-300 text-sm">›</span>

                    <span className="text-sm text-gray-500 font-medium">
                        About Us
                    </span>

                    <span className="text-gray-300 text-sm">›</span>

                    <span className="text-sm text-primary font-semibold">
                        {title}
                    </span>

                </div>
            </div>

            {/* MAIN LAYOUT */}
            <div className="max-w-7xl mx-auto flex gap-10 py-10 px-6">
                <div className="w-[260px] flex flex-col gap-6">

                    {/* 🔥 SIDEBAR */}
                    <div className="w-[260px] bg-primary text-white rounded-2xl p-6 h-fit shadow-md">

                        <h2 className="text-lg font-semibold mb-5 tracking-wide">
                            About Us
                        </h2>

                        <div className="flex flex-col gap-2">

                            {aboutLinks.map((item) => (
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

                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <HeroSlider />
                    </div>


                    {/* 🔥 QUICK DOWNLOADS */}
                    <div className="bg-[#4FC3F7]  rounded-xl p-5 shadow-sm border border-gray-100">

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
                </div>





                {/* 🔥 CONTENT */}
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