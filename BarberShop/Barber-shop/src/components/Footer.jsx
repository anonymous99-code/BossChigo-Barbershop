import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-rich-black text-cream py-16 px-6 border-t border-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-serif text-3xl text-white tracking-tighter">
              BOSSCHIGO<span className="text-gold">.</span>
            </h3>
            <p className="text-zinc-500 text-sm font-light italic leading-relaxed max-w-xs">
              Premium cuts. Clean fades. Real confidence. Dedicated to the art of grooming and the modern gentleman.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Navigation</h4>
            {["Gallery", "Pricing", "Location"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-zinc-400 hover:text-white transition-colors text-sm font-light w-fit"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Connect</h4>
            <div className="flex gap-5 mb-2">
              {["Instagram", "Twitter", "WhatsApp"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-sm text-zinc-400 hover:text-gold transition-colors underline underline-offset-8 decoration-gold/20"
                >
                  {social}
                </a>
              ))}
            </div>
            <p className="text-zinc-500 text-sm font-light italic mt-2">
              Lagos, Nigeria
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
            © {new Date().getFullYear()} BOSSCHIGO STUDIO. ALL RIGHTS RESERVED.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[10px] text-gold uppercase tracking-widest font-bold"
          >
            Back to Top
            <motion.span 
              animate={{ y: [0, -4, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="group-hover:text-white"
            >
              ↑
            </motion.span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;