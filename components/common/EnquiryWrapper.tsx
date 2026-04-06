"use client";

import { useState, useEffect } from "react";
import EnquiryModal from "./EnquiryModal";

export default function EnquiryWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
    const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("enquiryShown");

    if (!alreadyShown) {
      setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem("enquiryShown", "true");
      }, 3000);
    }
  }, []);

  return (
    <>
      {children}

      <EnquiryModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}