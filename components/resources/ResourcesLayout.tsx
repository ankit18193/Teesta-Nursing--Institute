import Link from "next/link";
import HeroSlider from "./HeroSlider";

const resourceLinks = [
  { name: "News & Events", href: "/resources/news" },
  { name: "Alumni", href: "/resources/alumni" },
  { name: "Application Form", href: "/resources/application" },
  { name: "Prospectus", href: "/resources/prospectus" },
];

export default function ResourcesLayout({
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
            Resources
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

          {/* 🔥 RESOURCES LIST */}
          <div className="bg-primary text-white rounded-2xl p-6 shadow-md">

            <h2 className="text-lg font-semibold mb-5 tracking-wide">
              Resources
            </h2>

            <div className="flex flex-col gap-2">
              {resourceLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

          </div>

          {/* 🔥 HERO SLIDER */}
          <HeroSlider />

          {/* 🔥 QUICK DOWNLOADS */}
          <div className="bg-[#4FC3F7] rounded-xl p-5 shadow-sm border border-gray-100">

            <h3 className="text-lg font-semibold mb-4">
              Quick <span className="text-primary">Downloads</span>
            </h3>

            <div className="space-y-4">

              <div className="bg-gray-50 p-4 rounded-lg border hover:shadow-sm transition">
                <p className="font-medium text-sm mb-1">
                  College Brochure
                </p>
                <a
                  href="/pdf/application.pdf"
                  target="_blank"
                  className="text-sm text-primary hover:underline"
                >
                  Download PDF
                </a>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border hover:shadow-sm transition">
                <p className="font-medium text-sm mb-1">
                  Prospectus
                </p>
                <a
                  href="/pdf/prospectus.pdf"
                  target="_blank"
                  className="text-sm text-primary hover:underline"
                >
                  Download PDF
                </a>
              </div>

            </div>

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