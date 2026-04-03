import ResourcesLayout from "@/components/resources/ResourcesLayout";

export default function ApplicationPage() {
  return (
    <ResourcesLayout title="Application Form">
      <div>
        <p className="mb-6">
          Fill out the application form below to start your admission process.
        </p>

        <form className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 rounded-lg"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-3 rounded-lg"
          />

          <select className="border p-3 rounded-lg">
            <option>Select Course</option>
            <option>GNM Nursing</option>
            <option>B.Sc Nursing</option>
            <option>B.Pharm</option>
            <option>D.Pharm</option>
          </select>

          <textarea
            placeholder="Address"
            className="border p-3 rounded-lg md:col-span-2"
          />

          <button
            type="submit"
            className="bg-primary text-white py-3 rounded-lg md:col-span-2 hover:opacity-90"
          >
            Submit Application
          </button>

        </form>
      </div>
    </ResourcesLayout>
  );
}