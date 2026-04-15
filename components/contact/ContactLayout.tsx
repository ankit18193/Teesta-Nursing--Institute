export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gray-50 min-h-screen py-10">

      <div className="max-w-6xl mx-auto px-6 space-y-6">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Contact Management
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Update and manage institute contact details
          </p>
        </div>

        {/* CONTENT */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          {children}
        </div>

      </div>

    </section>
  );
}