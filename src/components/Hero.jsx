import React from "react";
import Button from "../components/Button.jsx";
import heroImg from "../assets/hero.png";


export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center px-10 py-20">
      <div>
        <h1 className="text-4xl font-bold mb-6  leading-snug">
          Navigating the <br /> digital landscape <br /> for success
        </h1>
        <p className="text-gray-600  mb-6 max-w-lg">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button text="Book a consultation" variant="primary" />
      </div>

      <div className="flex justify-center">
        
   <img
          src={heroImg}
          alt="Marketing Illustration"
          className="w-80 h-full"
        />
      </div>
    </section>
  );
}
