import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#0F0D09] overflow-hidden" id="about">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#BFA15A]/5 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Cinematic Image Wrap */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-[#BFA15A]/20 rounded-sm translate-x-2 translate-y-2 hidden md:block" />
            <div className="relative overflow-hidden aspect-4/5 rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80" 
                alt="The Craft" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#BFA15A] p-6 hidden md:block">
              <p className="text-[#0F0D09] font-black text-[10px] tracking-[0.3em] uppercase leading-tight">
                Quality <br /> Guaranteed
              </p>
            </div>
          </motion.div>

          {/* Right Side: Manifesto Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1px bg-[#BFA15A]" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#BFA15A] font-bold">
                  Our Philosophy
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-serif text-[#F5EF09] leading-tight uppercase tracking-tighter">
                Crafting <br />
                <em className="text-[#BFA15A] italic normal-case font-medium">Confidence</em>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6 text-zinc-400 font-light leading-relaxed"
            >
              <p className="text-lg md:text-xl italic border-l-2 border-[#BFA15A]/30 pl-6 py-2">
                "At BOSSCHIGO, we don’t just cut hair — we define character."
              </p>
              
              <p className="text-sm md:text-base">
                Every session is a masterclass in precision. We believe that your haircut 
                is your silent introduction to the world. Our goal is to ensure that 
                introduction is nothing short of powerful.
              </p>

              <div className="pt-6 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[#F5EF09] text-[10px] uppercase tracking-widest font-bold mb-2">The Vision</h4>
                  <p className="text-xs text-zinc-500 italic">Sharp lines, clean fades, and timeless style.</p>
                </div>
                <div>
                  <h4 className="text-[#F5EF09] text-[10px] uppercase tracking-widest font-bold mb-2">The Goal</h4>
                  <p className="text-xs text-zinc-500 italic">Leaving the chair feeling unstoppable.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;