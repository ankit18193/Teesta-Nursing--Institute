"use client";

import CTASection from "@/components/common/CTASection";
import LifeLayout from "@/components/life/LifeLayout";

const facilities = [
    {
        title: "Modern Laboratories",
        desc: "Fully equipped labs for practical learning and clinical training.",
        image: "/images/hero/hero2.jpg",
    },
    {
        title: "Library",
        desc: "Access to a wide range of books, journals, and digital resources.",
        image: "/images/life/library2.jpg",
    },
    {
        title: "Wi-Fi Campus",
        desc: "High-speed internet access across the campus.",
        image: "/images/life/wifi.jpg",
    },
    {
        title: "Medical Support",
        desc: "Immediate healthcare assistance available for students.",
        image: "/images/why/why1.jpg",
    },
    {
        title: "Cafeteria",
        desc: "Hygienic and nutritious food for students and staff.",
        image: "/images/life/cafe.jpg",
    },
    {
        title: "Sports & Recreation",
        desc: "Indoor and outdoor sports facilities for overall well-being.",
        image: "/images/life/sports.jpg",
    },
];

const languagePrograms = [
    {
        title: "German Language Training",
        desc: "Specialized training programs to prepare students for international healthcare opportunities in Germany.",
    },
    {
        title: "Japanese Language Training",
        desc: "Focused language courses to help students explore career paths in Japan’s healthcare sector.",
    },
];

export default function FacilityPage() {
    return (
        <LifeLayout title="Our Facilities">

            <div className="space-y-20">

                {/* 🔥 HERO */}
                <section className="relative rounded-3xl overflow-hidden">

                    <div className="absolute inset-0">
                        <img
                            src="/images/life/outh.jpg"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
                    </div>

                    <div className="relative p-10 md:p-16 text-white max-w-3xl space-y-3">
                        <h1 className="text-3xl md:text-4xl font-bold">
                            Designed for Comfort & Excellence
                        </h1>

                        <p className="text-sm md:text-base opacity-90">
                            Our campus provides world-class infrastructure and facilities
                            that support both academic growth and personal well-being.
                        </p>
                    </div>

                </section>

                {/* 🔥 FACILITIES GRID */}
                <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {facilities.map((item, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden shadow-md"
                        >

                            {/* IMAGE */}
                            <img
                                src={item.image}
                                className="w-full h-[240px] object-cover group-hover:scale-110 transition duration-500"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

                            {/* CONTENT */}
                            <div className="absolute bottom-0 p-5 text-white space-y-1">
                                <h3 className="text-lg font-semibold">
                                    {item.title}
                                </h3>
                                <p className="text-xs opacity-90">
                                    {item.desc}
                                </p>
                            </div>

                        </div>
                    ))}

                </section>

                {/* 🔥 LANGUAGE PROGRAMS */}
                <section className="relative rounded-3xl overflow-hidden p-8 md:p-12">

                    {/* 🔥 BACKGROUND GLOW */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-primary/5"></div>

                    <div className="relative space-y-8">

                        {/* 🔥 HEADER */}
                        <div className="max-w-2xl space-y-2">
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                                Global Language Programs
                            </h2>

                            <p className="text-sm text-gray-500">
                                Opening doors to international career opportunities through specialized language training.
                            </p>
                        </div>

                        {/* 🔥 CARDS */}
                        <div className="grid md:grid-cols-2 gap-6">

                            {languagePrograms.map((item, index) => (
                                <div
                                    key={index}
                                    className="
            group relative overflow-hidden
            bg-white/80 backdrop-blur-md
            border border-primary/20
            rounded-2xl p-6
            shadow-md hover:shadow-xl
            hover:-translate-y-1
            transition-all duration-300
          "
                                >

                                    {/* 🔥 TOP ACCENT */}
                                    <div className="absolute top-0 left-0 w-full h-[3px] bg-primary"></div>

                                    {/* 🔥 ICON CIRCLE */}
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-3 text-sm font-bold">
                                        🌍
                                    </div>

                                    {/* 🔥 CONTENT */}
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary transition">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {item.desc}
                                    </p>

                                    {/* 🔥 HOVER GLOW */}
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition rounded-2xl pointer-events-none"></div>

                                </div>
                            ))}

                        </div>

                    </div>

                </section>

                

            </div>

            <div className="w-full mt-5 max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl border rounded-2xl p-4 sm:p-5 md:p-6 bg-gray-50 shadow-sm">
                <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] text-justify">
                    Teesta Group of Institutions offers modern facilities designed to support
                    academic excellence and student well-being. From well-equipped laboratories
                    to advanced classrooms, every facility is created to enhance the learning
                    experience.
                    <br /><br />
                    Students have access to libraries, clinical training centers, and recreational
                    spaces that contribute to both academic and personal development. These
                    facilities ensure that students receive practical exposure along with
                    theoretical knowledge.
                    <br /><br />
                    The institution continuously upgrades its infrastructure to meet industry
                    standards and provide students with the best possible environment for growth.
                </p>
            </div>

            <CTASection
                title="Explore Our Modern Facilities"
                subtitle="Learn in an environment equipped with advanced infrastructure and resources."
                primaryBtn={{ label: "View Campus", href: "/life/campus" }}
                secondaryBtn={{ label: "Apply Now", href: "/resources/application" }}
            />

        </LifeLayout>
    );
}