import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function ContactCard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    const res = await api.get("/contact");
    if (res.data.success) {
      setData(res.data.data);
    }
  };

  if (!data) return null;

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