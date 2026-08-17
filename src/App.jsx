import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import ConsultationProcessCard  from "./components/ConsultationProcessCards.jsx"; 
import Testimonial from "./components/TestimonialCarousel.jsx";
import Positivus  from "./components/Positives.jsx";

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
