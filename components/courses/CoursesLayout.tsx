import Link from "next/link";
import HeroSlider from "../resources/HeroSlider";

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
        <div className="min-h-screen bg-gray-50">

            {/* 🔥 BREADCRUMB */}
            <div className="mx-auto max-w-7xl px-3 pt-4 sm:px-5 sm:pt-6 md:px-6 md:pt-8">
                <div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-100 bg-white px-2.5 py-1.5 shadow-sm sm:gap-2 sm:px-4 sm:py-2.5">

                    <Link href="/" className="text-[11px] font-medium text-gray-500 hover:text-primary sm:text-xs md:text-sm">
                        Home
                    </Link>

                    <span className="text-[11px] text-gray-300 sm:text-xs md:text-sm">›</span>

                    <span className="text-[11px] font-medium text-gray-500 sm:text-xs md:text-sm">
                        Programmes
                    </span>

                    <span className="text-[11px] text-gray-300 sm:text-xs md:text-sm">›</span>

                    <span className="text-[11px] font-semibold text-primary sm:text-xs md:text-sm">
                        {title}
                    </span>

                </div>
            </div>

            {/* 🔥 MAIN LAYOUT */}
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-3 py-6 sm:px-5 sm:py-7 md:px-6 md:py-8 lg:flex-row lg:gap-7 lg:py-9">

                {/* 🔥 MOBILE DROPDOWN */}
                <div className="lg:hidden">
                    <div className="rounded-xl bg-primary p-3 text-white shadow-md sm:p-4">
                        <details>
                            <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold">
                                <span>Programmes</span>
                                <span className="text-xs">▼</span>
                            </summary>

                            <div className="mt-3 flex flex-col gap-2">
                                {courseLinks.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="rounded-md px-2.5 py-1.5 text-xs hover:bg-white/10 sm:px-3 sm:py-2 sm:text-sm"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </details>
                    </div>
                </div>

                {/* 🔥 DESKTOP SIDEBAR */}
                <div className="hidden w-[220px] min-w-[220px] flex-col gap-4 lg:flex xl:w-[240px] xl:min-w-[240px] sm:gap-5">

                    <div className="rounded-xl bg-primary p-3.5 text-white shadow-md sm:p-4.5 xl:p-5">
                        <h2 className="mb-3 text-sm font-semibold sm:text-base xl:text-lg">
                            Programmes
                        </h2>

                        <div className="flex flex-col gap-2">
                            {courseLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="rounded-md px-2.5 py-1.5 text-xs hover:bg-white/10 sm:px-3 sm:py-2 sm:text-sm"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl shadow-md">
                        <HeroSlider />
                    </div>

                    <div className="rounded-xl border border-gray-100 bg-[#4FC3F7] p-3.5 shadow-sm sm:p-4.5">
                        <h3 className="mb-3 text-sm font-semibold sm:text-base xl:text-lg">
                            Quick <span className="text-primary">Downloads</span>
                        </h3>

                        <div className="space-y-3 sm:space-y-4">
                            <div className="rounded-lg border bg-gray-50 p-2.5 sm:p-3.5">
                                <p className="text-xs font-medium sm:text-sm">Application Form</p>
                                <a href="/pdf/inc.pdf" target="_blank" className="text-xs text-primary hover:underline sm:text-sm">
                                    Download PDF
                                </a>
                            </div>

                            <div className="rounded-lg border bg-gray-50 p-2.5 sm:p-3.5">
                                <p className="text-xs font-medium sm:text-sm">College Brochure</p>
                                <a href="/pdf/wbnc.pdf" target="_blank" className="text-xs text-primary hover:underline sm:text-sm">
                                    Download PDF
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* 🔥 CONTENT */}
                <div className="flex-1 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6 lg:p-8">

                    <h1 className="mb-4 text-lg font-bold text-primary sm:text-xl md:text-2xl lg:text-[28px]">
                        {title}
                    </h1>

                    <div className="text-[13px] leading-relaxed text-gray-600 sm:text-[14px] lg:text-[15px]">
                        {children}
                    </div>

                </div>

                {/* 🔥 MOBILE BOTTOM */}
                <div className="flex flex-col gap-4 sm:gap-5 lg:hidden">

                    <div className="overflow-hidden rounded-2xl shadow-md">
                        <HeroSlider />
                    </div>

                    {/* MOBILE BOTTOM WIDGETS */}
                <div className="flex flex-col gap-4 sm:gap-5 lg:hidden">
                    

                    <div className="rounded-xl border border-gray-100 bg-[#4FC3F7] p-3.5 shadow-sm sm:p-4.5">
                        <h3 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">
                            Quick <span className="text-primary">Downloads</span>
                        </h3>
                        <div className="space-y-3 sm:space-y-4">
                            <div className="rounded-lg border bg-gray-50 p-2.5 sm:p-3.5">
                                <p className="mb-1 text-xs font-medium sm:text-sm">Application Form</p>
                                <a
                                    href="/pdf/inc.pdf"
                                    target="_blank"
                                    className="text-xs text-primary hover:underline sm:text-sm"
                                >
                                    Download PDF
                                </a>
                            </div>
                            <div className="rounded-lg border bg-gray-50 p-2.5 sm:p-3.5">
                                <p className="mb-1 text-xs font-medium sm:text-sm">College Brochure</p>
                                <a
                                    href="/pdf/wbnc.pdf"
                                    target="_blank"
                                    className="text-xs text-primary hover:underline sm:text-sm"
                                >
                                    Download PDF
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                </div>

            </div>

        </div>
    );
}