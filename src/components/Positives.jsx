import React from 'react';

const PositivusFooter = () => {
  return (
    <footer className="bg-[#191A23] border-t border-gray-700 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-4 lg:col-span-1">
            <h3 className="text-xl font-bold text-white">Positivus</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base">
                About us
              </a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base">
                Services
              </a>
              <a href="#use-cases" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base">
                Use Cases
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base">
                Pricing
              </a>
            </nav>
          </div>

          <div className="space-y-4 lg:col-span-1">
            <h3 className="text-lg font-semibold text-white">Contact us:</h3>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">Email:</span>
                <a 
                  href="mailto:korednyaneshwari40@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  korednyaneshwari40@gmail.com
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">Phone:</span>
                <a 
                  href="tel:9665854575" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  +91 96658 54575
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">Address:</span>
                <address className="text-gray-300 not-italic text-sm md:text-base leading-relaxed">
                  Pune 411014<br />
                  Pune City, Maharashtra
                </address>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm md:text-base">Subscribe to our newsletter</p>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full text-gray-900 placeholder-gray[...]
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium whitespace-nowrap w-full sm:w-auto min-w-[120px]">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-xs">
                By subscribing, you agree to our Privacy Policy
              </p>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-600 my-8"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2025 Positivus. All Rights Reserved.
          </p>
          <div className="flex space-x-6 justify-center sm:justify-start">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PositivusFooter;
