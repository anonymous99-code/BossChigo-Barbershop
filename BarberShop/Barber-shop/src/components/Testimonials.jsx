import React from "react";

const testimonials = [
  {
    name: "Emeka J.",
    text: "Best fade I’ve ever had. Very clean work and professional service.",
  },
  {
    name: "Daniel K.",
    text: "Always sharp cuts. I don’t go anywhere else again.",
  },
  {
    name: "Samuel A.",
    text: "The attention to detail is crazy. Worth every naira.",
  },
  {
    name: "Chris M.",
    text: "Fast, clean, and very professional. Highly recommended.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Clients Say
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg"
          >
            <p className="text-gray-300 italic">"{t.text}"</p>
            <h4 className="mt-4 font-semibold">— {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;