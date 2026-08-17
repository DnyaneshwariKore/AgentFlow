import React from "react";
import Button from "../components/Button.jsx";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center py-6 px-10 border-b">
      <div className="text-xl font-bold flex items-center gap-2">
        <i className="ri-star-fill text-black"></i>
        Positivus
      </div>

      <nav className="hidden md:flex gap-8 text-sm font-medium">
        <a href="#" className="hover:text-green-500">
          About us
        </a>
        <a href="#" className="hover:text-green-500">
          Services
        </a>
        <a href="#" className="hover:text-green-500">
          Use Cases
        </a>
        <a href="#" className="hover:text-green-500">
          Pricing
        </a>
        <a href="#" className="hover:text-green-500">
          Blog
        </a>
      </nav>

      <Button text="Request a quote" variant="outline" />
    </header>
  );
}
