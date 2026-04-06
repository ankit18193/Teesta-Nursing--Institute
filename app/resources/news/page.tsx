"use client";
import ResourcesLayout from "@/components/resources/ResourcesLayout";
import NewsPreviewModal from "@/components/resources/NewsPreviewModal";
import { useState } from "react";


interface NewsItem {
    title: string;
    description: string;
    date: string;
    pdf?: string;
}

// In your actual app, this array will be replaced by your backend fetch/API call
const fetchedNewsData = [
    {
        title: "Annual Function 2026",
        description: "Our annual function was celebrated with great enthusiasm, showcasing student talent.",
        date: "2026-03-20T10:30:00",
        pdf: "/pdfs/exam.pdf"
    },
    {
        title: "Admissions Open 2026",
        description: "Admissions are now open for all nursing and pharmacy programs.",
        date: "2026-04-01T09:00:00",
    },
    {
        title: "Old Alumni Meet",
        description: "Alumni from all over the country joined us for a nostalgic evening. This is an older post to test the layout.",
        date: "2026-01-15T14:15:00", // Older than 30 days; will render as a normal white card
    },
    {
        title: "New Lab Facility",
        description: "We have introduced a new advanced clinical lab for hands-on training.",
        date: "2026-04-02T14:15:00",
    },
];

function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
    });
}

// Helper to check if the news/event is 30 days old or less
function isNewItem(dateStr: string) {
    const itemDate = new Date(dateStr).getTime();
    const now = Date.now();
    // Calculate difference in days
    const differenceInDays = (now - itemDate) / (1000 * 60 * 60 * 24);
    // Returns true if it is 30 days or newer (also handles future events)
    return differenceInDays <= 30;
}

export default function NewsPage() {
    // DYNAMIC SORTING: Automatically sorts data newest-to-oldest based on the date string
    const sortedNews = [...fetchedNewsData].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);



    return (
        <ResourcesLayout title="News & Events">
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Feed</h2>

                {/* DYNAMIC NEWS LIST */}
                <div className="space-y-5">
                    {sortedNews.map((item, index) => {
                        const isNew = isNewItem(item.date);

                        return (
                            <div
                                key={index}
                                onClick={() => setSelectedNews(item)}
                                className={`cursor-pointer border rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${isNew
                                    ? "bg-gradient-to-br from-primary/10 to-white border-primary/20"
                                    : "bg-white"
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className={`text-xl font-semibold ${isNew ? 'text-primary' : 'text-gray-800'}`}>
                                        {item.title}
                                    </h3>

                                    {/* THE 30-DAY TICK/BADGE */}
                                    {isNew && (
                                        <span className="flex items-center gap-1 text-xs font-medium bg-primary text-white px-3 py-1 rounded-full shrink-0">
                                            ✓ NEW
                                        </span>
                                    )}
                                </div>

                                <p className="text-sm text-gray-500 mb-3 font-medium">
                                    {formatDate(item.date)}
                                </p>

                                <p className="text-gray-600 leading-relaxed line-clamp-2">
                                    {item.description}
                                </p>

                                {item.pdf && (
                                    <span className="inline-block mt-2 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                                        📄 PDF Available
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            <NewsPreviewModal
                news={selectedNews}
                onClose={() => setSelectedNews(null)}
            />
        </ResourcesLayout>
    );
}