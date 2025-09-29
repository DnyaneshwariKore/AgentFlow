import React from "react";

export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white border rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition w-full sm:w-[45%]">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{title}</h3>
        <img src={`/images/${icon}`} alt={title} className="w-12 h-12" />
      </div>
      <p className="text-gray-600 text-sm mt-4">{description}</p>
      <a
        href="#"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-green-500"
      >
        <span>Learn more</span>
        <i className="ri-arrow-right-line"></i>
      </a>
    </div>
  );
}
