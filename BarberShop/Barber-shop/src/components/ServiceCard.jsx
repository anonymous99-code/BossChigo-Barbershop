import React from "react";

const ServiceCard = ({ service }) => {
  const handleBook = () => {
    const message = `Hi BOSSCHIGO, I want to book:
Service: ${service.name}
Price: ₦${service.price}
Details: ${service.description}`;

    const url = `https://wa.me/+2348101349997?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="group relative bg-white border border-gray-100 shadow-sm hover:shadow-xl rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">
            {service.name}
          </h2>
          <span className="bg-gray-50 text-gray-400 text-[10px] uppercase tracking-widest px-2 py-1 rounded-md">
            Premium
          </span>
        </div>
        
        <p className="text-gray-500 text-sm leading-relaxed mt-2 line-clamp-3">
          {service.description}
        </p>
        
        <div className="mt-6 flex items-baseline gap-1">
          <span className="text-sm font-medium text-gray-400">₦</span>
          <span className="text-2xl font-black text-gray-900">
            {service.price.toLocaleString()}
          </span>
        </div>
      </div>

      <button
        onClick={handleBook}
        className="mt-6 w-full bg-zinc-900 text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:bg-black hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
      >
        <span>Book Now</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 transition-transform group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );
};

export default ServiceCard;