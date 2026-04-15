"use client";

import ResourcesLayout from "@/components/resources/ResourcesLayout";
import NewsPreviewModal from "@/components/resources/NewsPreviewModal";
import { useState } from "react";
import CTASection from "@/components/common/CTASection";

interface NewsItem {
  title: string;
  description: string;
  date: string;
  image?: string;
  pdf?: string;
}

const fetchedNewsData = [
  {
    title: "Annual Function 2026",
    description:
      "Our annual function was celebrated with great enthusiasm, showcasing student talent.",
    date: "2026-03-20T10:30:00",
    image: "/images/resources/newsHead.jpg",
    pdf: "/pdfs/exam.pdf",
  },
  {
    title: "Admissions Open 2026",
    description:
      "Admissions are now open for all nursing and pharmacy programs.",
    date: "2026-04-01T09:00:00",
    image: "/images/hospitals/h2.jpg",
  },
  {
    title: "Old Alumni Meet",
    description:
      "Alumni from all over the country joined us for a nostalgic evening.",
    date: "2026-01-15T14:15:00",
    image: "/images/hospitals/h3.jpg",
  },
  {
    title: "New Lab Facility",
    description:
      "We have introduced a new advanced clinical lab for hands-on training.",
    date: "2026-04-02T14:15:00",
    image: "/images/hospitals/h4.jpg",
  },
];

export default function NewsPage() {
  const sortedNews = [...fetchedNewsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const featured = sortedNews[0];
  const restNews = sortedNews.slice(1);

  return (
    <ResourcesLayout title="News & Events">

      <div className="space-y-16">

        {/* 🔥 HERO */}
        <section className="relative rounded-3xl overflow-hidden">

          <div className="absolute inset-0">
            <img
              src="/images/resources/Nhead.jpg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
          </div>

          <div className="relative p-10 md:p-16 text-white max-w-3xl space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">
              News & Events
            </h1>

            <p className="text-sm md:text-base opacity-90">
              Stay updated with the latest happenings, announcements,
              and activities across our institution.
            </p>
          </div>

        </section>

        {/* 🔥 FEATURED NEWS */}
        {featured && (
          <section
            onClick={() => setSelectedNews(featured)}
            className="grid md:grid-cols-2 gap-8 items-center cursor-pointer group"
          >

            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={featured.image}
                className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="space-y-3">
              <span className="text-xs text-primary font-medium">
                FEATURED
              </span>

              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-primary transition">
                {featured.title}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                {featured.description}
              </p>

              <span className="text-xs text-gray-400">
                {new Date(featured.date).toDateString()}
              </span>
            </div>

          </section>
        )}

        {/* 🔥 GRID NEWS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {restNews.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedNews(item)}
              className="group cursor-pointer bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-2">

                <h3 className="text-base font-semibold text-gray-800 group-hover:text-primary transition line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex justify-between items-center pt-2">

                  <span className="text-xs text-gray-400">
                    {new Date(item.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>

                  {item.pdf && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      PDF
                    </span>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* MODAL */}
      <NewsPreviewModal
        news={selectedNews}
        onClose={() => setSelectedNews(null)}
      />

      <div className="grid mt-5 sm:grid-cols-2 md:grid-cols-3 gap-5">

        <div className="border rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-primary mb-2">Latest Updates</h3>
          <p className="text-sm text-gray-600">
            Stay informed with real-time announcements and news.
          </p>
        </div>

        <div className="border rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-primary mb-2">Events & Programs</h3>
          <p className="text-sm text-gray-600">
            Discover workshops, seminars, and campus activities.
          </p>
        </div>

        <div className="border rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-primary mb-2">Achievements</h3>
          <p className="text-sm text-gray-600">
            Highlights of student and institutional success.
          </p>
        </div>

      </div>


      <div className="w-full mt-5 max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl border rounded-2xl p-4 sm:p-5 md:p-6 bg-gray-50 shadow-sm">

        <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] text-justify">
          The News & Events section keeps students, parents, and visitors informed
          about the latest activities, achievements, and important updates at Teesta
          Group of Institutions. From academic milestones to cultural programs and
          healthcare initiatives, this section reflects the vibrant and dynamic
          environment of the institution.
          <br /><br />
          Regular updates ensure that students stay connected with ongoing events,
          workshops, seminars, and institutional announcements. It also highlights
          achievements and recognitions that showcase the growth and success of
          both students and the institution.
          <br /><br />
          By staying updated with this section, visitors gain a clear understanding
          of the institution’s active involvement in education, healthcare, and
          community development, making it a reliable and engaging place for learning.
        </p>

      </div>

      <CTASection
        title="Stay Updated With Every Achievement"
        subtitle="Follow our latest news, events, and milestones as we continue to grow and excel."
        primaryBtn={{ label: "View All Updates", href: "/resources/news" }}
        secondaryBtn={{ label: "Apply Now", href: "/resources/application" }}
      />

    </ResourcesLayout>
  );
}