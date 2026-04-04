export default function AdminDashboard() {
    return (
      <div className="grid md:grid-cols-4 gap-6">
  
        {[
          { title: "Total Notices", value: "12" },
          { title: "News Posts", value: "8" },
          { title: "Downloads", value: "3" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5 shadow-sm border"
          >
            <p className="text-sm text-gray-500">{item.title}</p>
            <h2 className="text-2xl font-bold text-primary mt-2">
              {item.value}
            </h2>
          </div>
        ))}
  
      </div>
    );
  }