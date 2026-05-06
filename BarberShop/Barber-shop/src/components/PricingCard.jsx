import React from "react";
import { motion } from "framer-motion";

const PricingCard = ({ service }) => {
  const handleBook = () => {
    const message = `Hi BOSSCHIGO, I want to book:
Service: ${service.name}
Price: ₦${service.price}
Details: ${service.description}`;

    const url = `https://wa.me/2348101349997?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative bg-[#FDFBF7] border border-gold/20 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden h-full"
    >
      {/* Subtle Gold Corner Accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gold/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700" />

      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex flex-col mb-6">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold mb-2 block">
            Premium Service
          </span>
          <h3 className="text-2xl md:text-3xl font-serif text-black leading-tight">
            {service.name}
          </h3>
          <div className="h-1px w-12 bg-gold mt-3 transition-all duration-500 group-hover:w-20" />
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-zinc-600 font-light leading-relaxed mb-8 italic">
          "{service.description}"
        </p>

        {/* Pricing Display */}
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-gold font-serif text-lg">₦</span>
          <span className="text-4xl md:text-5xl font-serif font-bold text-black tracking-tighter">
            {service.price.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Button Section */}
      <button
        onClick={handleBook}
        className="mt-8 w-full group/btn relative bg-black text-white py-4 rounded-xl font-bold text-[11px] uppercase tracking-[0.2em] overflow-hidden transition-all active:scale-95 shadow-xl shadow-black/10"
      >
        <span className="relative z-10 flex items-center justify-center gap-3">
          Reserve Appointment
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
        
        {/* Animated Gold Glow on Hover */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-gold/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite] transition-transform" />
        <div className="absolute inset-0 bg-zinc-800 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
      </button>

      {/* CSS for the Shimmer effect */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </motion.div>
  );
};

export default PricingCard;