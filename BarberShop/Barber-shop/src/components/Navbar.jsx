import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBook = () => {
    const message = `Hi BOSSCHIGO, I want to book a haircut.`;
    const url = `https://wa.me/+2348101349997?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ${
        isScrolled 
        ? "bg-black/80 backdrop-blur-lg py-3 border-b border-gold/10" 
        : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        
        {/* Logo - Matching the Gallery Style */}
        <div className="flex flex-col group cursor-pointer">
          <h1 className="font-serif text-2xl md:text-3xl text-white leading-none tracking-tighter">
            BOSSCHIGO<span className="text-gold">.</span>
          </h1>
          <span className="text-[8px] tracking-[0.4em] uppercase text-gold font-bold opacity-0 group-hover:opacity-100 transition-opacity">
            Est. 2026
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">
          {["Gallery", "Pricing", "Location"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="hover:text-gold transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-1px bg-gold transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Side: Button + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleBook}
            className="hidden sm:block bg-gold hover:bg-white text-black px-6 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all transform active:scale-95"
          >
            Book Now
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-[2px] w-full bg-white transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-[2px] w-full bg-gold transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-full bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen bg-black z-101 flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-serif text-2xl text-white">BOSSCHIGO.</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-gold uppercase text-xs tracking-widest">Close</button>
            </div>

            <div className="flex flex-col gap-8">
              {["Gallery", "Pricing", "Location"].map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif text-cream italic hover:text-gold transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto">
              <button
                onClick={handleBook}
                className="w-full bg-gold text-black py-5 rounded-sm font-black uppercase tracking-widest text-xs"
              >
                Schedule Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;