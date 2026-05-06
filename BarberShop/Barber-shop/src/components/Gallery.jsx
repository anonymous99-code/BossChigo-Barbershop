import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import cut1 from "../assets/cut1.jpeg";
import cut2 from "../assets/cut2.jpeg";
import cut3 from "../assets/cut3.jpeg";
import cut4 from "../assets/cut4.jpeg";
import cut5 from "../assets/cut5.jpeg";
import cut6 from "../assets/cut6.jpeg";
import cut7 from "../assets/cut7.jpeg";
import cut8 from "../assets/cut8.jpeg";
import cut9 from "../assets/cut9.jpeg";
import cut10 from "../assets/cut10.jpeg";
import cut11 from "../assets/cut11.jpeg";
import cut12 from "../assets/cut12.jpeg";
import cut13 from "../assets/cut13.jpeg";
import cut14 from "../assets/cut14.jpeg";
import cut15 from "../assets/cut15.jpeg";

const images = [
  { src: cut1, label: "Fade & Taper", tag: "Signature", span: "tall" },
  { src: cut2, label: "Skin Fade", tag: "Trending", span: "normal" },
  { src: cut3, label: "Clean Fade", tag: "Classic", span: "normal" },
  { src: cut4, label: "Precision Cut", tag: "Premium", span: "normal" },
  { src: cut5, label: "Textured Style", tag: "Modern", span: "wide" },
  { src: cut6, label: "Sharp Lines", tag: "Detail", span: "normal" },
  { src: cut7, label: "Low Fade", tag: "Luxury", span: "normal" },
  { src: cut8, label: "Beard Blend", tag: "Sharp", span: "wide" },
  { src: cut9, label: "Modern Cut", tag: "Elite", span: "normal" },
  { src: cut10, label: "Boss Finish", tag: "Premium", span: "tall" },
  { src: cut11, label: "Fresh Trim", tag: "Luxury", span: "normal" },
  { src: cut12, label: "Sharp Fade", tag: "Trending", span: "normal" },
  { src: cut13, label: "Classic Blend", tag: "Premium", span: "wide" },
  { src: cut14, label: "Modern Fade", tag: "Elite", span: "normal" },
  { src: cut15, label: "Detail Work", tag: "Signature", span: "tall" },
];

// ---------------- LIGHTBOX ----------------
function LightboxModal({ image, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10 backdrop-blur-2xl bg-black/95 cursor-zoom-out"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-full md:max-w-4xl w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img
              src={image.src}
              alt={image.label}
              className="w-full h-auto max-h-[70vh] object-cover"
            />

            <div className="bg-zinc-900 p-6 md:p-8">
              <span className="text-[9px] tracking-[0.3em] uppercase text-gold font-bold mb-1 block">
                {image.tag}
              </span>

              <h3 className="text-2xl md:text-3xl font-serif text-cream italic">
                {image.label}
              </h3>

              <button
                onClick={onClose}
                className="mt-4 text-white/50 text-[10px] uppercase tracking-widest border border-white/10 px-4 py-2 hover:bg-white/5"
              >
                Close View
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ---------------- GALLERY CARD ----------------
function GalleryCard({ image, index, onClick }) {
  const [hovered, setHovered] = useState(false);

  const gridClasses = `
    relative overflow-hidden cursor-zoom-in border border-white/5 transition-all duration-500
    hover:border-gold/30 w-full h-[350px] md:h-auto
    ${image.span === "tall" ? "md:row-span-2 md:min-h-[620px]" : ""}
    ${image.span === "wide" ? "md:col-span-2" : ""}
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onClick={() => onClick(image)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={gridClasses}
    >
      <motion.img
        src={image.src}
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.8 }}
        className={`w-full h-full object-cover transition-all duration-700 ${
          hovered
            ? "brightness-75"
            : "brightness-40 md:brightness-50"
        }`}
      />

      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10">
        <div
          className={`h-1px bg-gold mb-3 transition-all duration-500 ${
            hovered ? "w-10" : "w-0"
          }`}
        />

        <h3 className="text-lg md:text-xl font-serif text-cream tracking-wide">
          {image.label}
        </h3>

        <p
          className={`text-[9px] uppercase tracking-[0.2em] text-gold mt-1 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-80 md:opacity-0"
          }`}
        >
          {image.tag}
        </p>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
    </motion.div>
  );
}

// ---------------- MAIN COMPONENT ----------------
export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-[#0A0A0A] py-16 md:py-24 px-4 md:px-12 min-h-screen overflow-x-hidden">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 md:w-12 h-1px bg-gold" />

          <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-gold font-black">
            Portfolio
          </span>
        </div>

        <h2 className="text-4xl md:text-8xl font-serif text-cream leading-[0.9] uppercase tracking-tighter">
          The <br className="hidden md:block" />
          <em className="text-gold italic normal-case font-medium">
            Gallery
          </em>
        </h2>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-auto md:auto-rows-[300px]">
        {(showAll ? images : images.slice(0, 6)).map((img, i) => (
          <GalleryCard
            key={i}
            image={img}
            index={i}
            onClick={setLightbox}
          />
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-12">
  <button
    onClick={() => setShowAll(!showAll)}
    className="group flex items-center gap-3 border border-gold/30 bg-black text-gold px-8 py-4 uppercase tracking-[0.25em] text-[10px] font-bold hover:bg-gold hover:text-black transition-all duration-500"
  >
    {showAll ? "Show Less" : "See More"}

    <span
      className={`transition-transform duration-500 ${
        showAll ? "rotate-180" : "rotate-0"
      }`}
    >
      ▼
    </span>
  </button>
</div>
      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        <p className="text-zinc-500 text-xs md:text-sm font-light italic max-w-xs">
          Discover the art of precision. Each cut is a masterpiece designed for your unique identity.
        </p>

        <a
          href="https://wa.me/2348101349997?text=Hi%20BOSSCHIGO%2C%20I%20want%20to%20book%20a%20haircut."
          className="w-full md:w-auto bg-gold text-black px-10 py-4 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-cream transition-all transform active:scale-95"
        >
          Book Your Cut
        </a>
      </div>

      {/* Lightbox */}
      <LightboxModal
        image={lightbox}
        onClose={() => setLightbox(null)}
      />
    </section>
  );
}