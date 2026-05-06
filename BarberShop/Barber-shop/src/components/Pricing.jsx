import React from "react";
import { motion } from "framer-motion";
import { services } from "../data/services";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section className="relative py-24 px-6 bg-cream overflow-hidden" id="pricing">
      {/* Subtle Background Accent - Abstract Gold Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-1px bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase  text-[#F5EF09] font-bold">
              Investment
            </span>
            <div className="w-8 h-1px bg-gold" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-serif text-[#F5EF09] leading-none text-center uppercase tracking-tighter"
          >
            Services <br className="md:hidden" />
            <span className="md:ml-4 text-gold italic normal-case font-medium">& Rates</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6  text-[#F5EF09] text-sm md:text-base font-light italic text-center max-w-md"
          >
            Meticulous grooming tailored to your unique identity. 
            Choose your signature experience below.
          </motion.p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-10 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PricingCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium">
            Custom packages available upon request • Lagos, Nigeria
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;