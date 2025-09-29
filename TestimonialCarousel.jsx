import React, { useState } from 'react';

const testimonials = [
  {
    name: 'John Smith',
    title: 'Marketing Director at XYZ Corp',
    message:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts.',
  },
  {
    name: 'Jane Doe',
    title: 'CEO at ABC Inc',
    message:
      'Positivus has been a game changer for our digital strategy. Their professionalism and dedication is unmatched.',
  },
  {
    name: 'Michael Lee',
    title: 'CTO at TechWorld',
    message:
      'With Positivus, we were able to revamp our website and grow our audience significantly.',
  },
  {
    name: 'Sara Khan',
    title: 'Founder at StartUp Hub',
    message:
      'We are extremely satisfied with the results. They understand what we need and deliver with precision.',
  },
  {
    name: 'David Green',
    title: 'CMO at FutureCorp',
    message:
      'From SEO to content marketing, Positivus handles it all like a pro.',
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev < testimonials.length - 1 ? prev + 1 : prev
    );
  };

  return (
    <div className="w-full bg-gray-50 py-10 px-4">
      <div className="relative max-w-7xl mx-auto">
        {/* Slider Wrapper */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
              width: `${testimonials.length * 100}%`,
            }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="w-full px-4 sm:px-8 md:px-16 lg:px-32 flex-shrink-0"
                style={{
                  flex: '0 0 100%',
                }}
              >
                <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 h-full flex flex-col justify-between">
                  <div className="bg-gray-100 p-4 rounded-md border-l-4 border-green-500 h-48 overflow-y-auto">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      "{t.message}"
                    </p>
                  </div>
                  <div className="text-center mt-4">
                    <p className="font-bold text-green-600 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          disabled={current === 0}
          className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 lg:-left-6 z-10 bg-white p-2 shadow-md rounded-full disabled:opacity-30"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          disabled={current === testimonials.length - 1}
          className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 lg:-right-6 z-10 bg-white p-2 shadow-md rounded-full disabled:opacity-30"
        >
          →
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === current ? 'bg-green-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
