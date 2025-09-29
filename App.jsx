import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ConsultationProcessCard  from "./components/ConsultationProcessCards"; 
import Testimonial from "./components/TestimonialCarousel";
import Positivus  from "./components/Positives";

function App() {
  return (
    <>
    <div className="font-sans bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <ConsultationProcessCard />
      <Testimonial />
       
      <Positivus />
    </div>
    </>
  );
}

export default App;
