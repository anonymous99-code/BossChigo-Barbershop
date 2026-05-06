import React from "react";
import { motion } from "framer-motion";

const StickyBookBar = () => {
  const handleBook = () => {
    const message = `Hi BOSSCHIGO, I want to book a haircut.`;
    const url = `https://wa.me/+2348101349997?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed bottom-0 left-0 w-full bg-[#0F0D09]/90 backdrop-blur-md text-white flex justify-between items-center px-6 py-4 md:hidden z-60 border-t border-[#BFA15A]/20"
    >
      {/* Label with brand font style */}
      <div className="flex flex-col">
        <span className="text-[9px] tracking-[0.2em] uppercase text-[#BFA15A] font-bold">
          Ready for a change?
        </span>
        <p className="text-xs font-serif italic text-[#F5EF09]">
          Book your signature cut
        </p>
      </div>

      {/* Pulsing Gold Button */}
      <button
        onClick={handleBook}
        className="relative group overflow-hidden bg-[#BFA15A] text-[#0F0D09] px-6 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all"
      >
        <span className="relative z-10 flex items-center gap-2">
          Reserve
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>

        {/* Subtle Shine Effect */}
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent z-0"
        />
      </button>

      {/* Bottom Safe Area Padding for modern iPhones */}
      <div className="absolute bottom-0 left-0 w-full h-[env(safe-area-inset-bottom)]" />
    </motion.div>
  );
};

export default StickyBookBar;