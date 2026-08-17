import React from "react";

export default function Services() {
  const services = [
    {
      title: "Search engine optimization",
      description: "We help businesses improve their visibility on search engines and attract more organic traffic.",
      icon: "../assets/km0FhK4Lp2MCnd33kT0LCDMa898.webp", 
      link: "#"
    },
    {
      title: "Pay-per-click advertising",
      description: "Our PPC experts manage ad campaigns to ensure maximum ROI and targeted customer reach.",
      icon: "../assets/km0FhK4Lp2MCnd33kT0LCDMa898.webp",
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 mb-12 lg:mb-16">
          <span className="bg-green-400 text-black px-4 py-2 rounded-lg font-medium text-sm lg:text-base whitespace-nowrap">
            Services
          </span>
          <p className="text-gray-600 text-base lg:text-lg max-w-2xl leading-relaxed">
            At our digital marketing agency, we offer a range of services to help
            businesses grow and succeed online. These services include:
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`flex-1 ${idx === 0 ? 'md:border-r md:border-gray-200 md:pr-6 lg:pr-8' : 'md:pl-6 lg:pl-8'}`}
            >
              <div className="h-full flex flex-col group">
                <div className="flex-grow">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <a 
                    href={service.link} 
                    className="text-green-600 font-semibold text-sm lg:text-base hover:text-green-700 transition-colors duration-200 flex items-center gap-2 group-hover:underline"
                  >
                    Learn more
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors duration-200">
                    {service.icon ? (
                      <img 
                        src={service.icon} 
                        alt={service.title}
                        className="w-6 h-6 lg:w-8 lg:h-8 object-contain"
                      />
                    ) : (
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-400 rounded-lg"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
