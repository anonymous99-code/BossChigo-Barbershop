import React from "react";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-cream" id="location">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1px bg-gold" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">Studio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-none uppercase">
            Visit the <br />
            <em className="text-gold italic normal-case font-medium">Lounge</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="space-y-8">
              <div>
                <h4 className="text-gold text-[10px] uppercase tracking-widest font-bold mb-3">Address</h4>
                <p className="text-xl md:text-2xl font-serif text-white leading-snug">
                  123 Luxury Way, <br />
                  Victoria Island, Lagos
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-gold text-[10px] uppercase tracking-widest font-bold mb-3">Hours</h4>
                  <ul className="text-sm text-white space-y-1 font-light italic">
                    <li>Mon — Fri: 9am - 8pm</li>
                    <li>Sat: 10am - 9pm</li>
                    <li>Sun: 12pm - 6pm</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-gold text-[10px] uppercase tracking-widest font-bold mb-3">Contact</h4>
                  <p className="text-sm text-zinc-600 font-light italic">
                    +234 810 134 9997 <br />
                    hello@bosschigo.com
                  </p>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://maps.app.goo.gl/V4pui94tHGCCoJyt5" // Replace with your actual Google Maps Link
                target="_blank"
                className="inline-flex items-center gap-4 bg-rich-black text-white px-8 py-4 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-gold transition-colors"
              >
                Get Directions
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 border border-gold/20 rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-700" />
              
              <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl bg-zinc-200">
                <iframe
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126844.06348602283!2d3.3362!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e8a73967a561!2sLagos!5e0!3m2!1sen!2sng!4v1640000000000!5m2!1sen!2sng"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 contrast-125 brightness-90"
                  loading="lazy"
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;