import React from "react";

const ConsultationProcessCards = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our approach accordingly.'
    },
    {
      number: '02',
      title: 'Research and Strategy Development',
      description: 'Based on our consultation, we will conduct thorough research and develop a comprehensive strategy tailored to your business needs.'
    }
  ];

  return (
    <div className="max-w-8xl  mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Process</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
            </div>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultationProcessCards;
