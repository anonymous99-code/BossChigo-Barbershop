import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Pricing from "../components/Pricing";
import Location from "../components/Location";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Hero />

      <section id="gallery">
        <Gallery />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="location">
        <Location />
      </section>

      <Footer />
    </div>
  );
};

export default Home;