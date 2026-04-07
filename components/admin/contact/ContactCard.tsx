"use client";

export default function ContactCard() {
  // dummy data for now
  const data = {
    address: "Sevoke Road, Siliguri, West Bengal 734001",
    phone: "+91 9876543210",
    email: "info@teesta.edu.in",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 space-y-3">

      <h3 className="text-lg font-semibold text-gray-700">
        Current Contact Info
      </h3>

      <p>
        <span className="font-medium">Address:</span> {data.address}
      </p>

      <p>
        <span className="font-medium">Phone:</span> {data.phone}
      </p>

      <p>
        <span className="font-medium">Email:</span> {data.email}
      </p>

    </div>
  );
}