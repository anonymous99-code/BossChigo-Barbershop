import React from "react";

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = `Hi BOSSCHIGO, I want to book a haircut.`;
    const url = `https://wa.me/+2348101349997?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50"
    >
      💬
    </button>
  );
};

export default WhatsAppButton;