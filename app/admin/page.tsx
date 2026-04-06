import { FileText, Newspaper, Download, Star, Image } from "lucide-react";
import AdminProtected from "../../components/AdminProtected";

export default function AdminDashboard() {
  const data = [
    { title: "Total Notices", value: "12", icon: FileText },
    { title: "News Posts", value: "8", icon: Newspaper },
    { title: "Downloads", value: "3", icon: Download },
    { title: "Testimonials", value: "3", icon: Star },
    { title: "Gallery", value: "3", icon: Image },
  ];

  return (
    <AdminProtected>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

      {data.map((item, i) => {
        const Icon = item.icon;

        return (
          <div
            key={i}
            className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-200
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >

            {/* Top Section */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-500 font-medium">
                {item.title}
              </p>

              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition">
                <Icon size={18} />
              </div>
            </div>

            {/* Value */}
            <h2 className="text-3xl font-bold text-gray-800">
              {item.value}
            </h2>

            {/* Bottom subtle line */}
            <div className="mt-4 h-1 w-10 bg-primary rounded-full group-hover:w-16 transition-all duration-300" />

          </div>
        );
      })}

    </div>
    </AdminProtected>
  );
}