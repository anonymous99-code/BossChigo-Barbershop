import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const handleBook = () => {
    const message = `Hi BOSSCHIGO, I want to book a haircut.`;
    const url = `https://wa.me/+2348101349997?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#0F0D09] overflow-hidden">
      {/* Cinematic Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-[#0F0D09] via-[#0F0D09]/80 to-transparent z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1600&q=80"
          className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
          alt="barber"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          {/* Top Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-1px bg-[#BFA15A]" />
            <span className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-[#BFA15A] font-black">
              Lagos Finest Grooming
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif text-[#F5EF09] leading-[0.9] uppercase tracking-tighter"
          >
            BOSSCHIGO <br />
            <em className="text-[#BFA15A] italic normal-case font-medium">Studio</em>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 text-zinc-400 text-base md:text-xl font-light italic leading-relaxed max-w-lg"
          >
            Precision meets artistry. Premium cuts and clean fades designed for the man who leads with confidence.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={handleBook}
              className="bg-[#BFA15A] text-[#0F0D09] px-10 py-4 rounded-sm text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all transform active:scale-95 shadow-lg shadow-[#BFA15A]/10"
            >
              Book Appointment
            </button>
            <button
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/10 text-white px-10 py-4 rounded-sm text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
            >
              View Styles
            </button>
          </motion.div>
        </div>
      </div>

      {/* Side Decorative Text (Desktop Only) */}
      <div className="hidden lg:block absolute right-12 bottom-12 overflow-hidden">
        <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.5em] [writing-mode:vertical-rl]">
          ESTABLISHED — 2026
        </p>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#0F0D09] to-transparent z-10" />
    </section>
  );
};

export default Hero;