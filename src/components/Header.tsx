import React from 'react';
import { ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg px-6 md:px-12 lg:px-20 mx-4 md:mx-10 my-8">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 md:py-16 lg:py-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-tight">
          Book Appointment <br />
          With Trusted Doctors
        </h1>
        <div className="flex items-center gap-4 text-white text-base md:text-lg font-light">
          <img
            className="w-28 h-18 object-cover rounded-lg flex-shrink-0 shadow-lg"
            src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1"
            alt="Group of doctors"
          />
          <p className="leading-relaxed">
            Simply browse through our extensive list of trusted doctors,{' '}
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-700 text-sm font-semibold hover:scale-105 transition-transform duration-300 shadow-md"
        >
          Book appointment
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex items-center justify-center mt-6 md:mt-0 relative">
        <img
          className="w-full max-w-md h-auto object-cover rounded-lg shadow-xl"
          src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1"
          alt="Professional doctor"
        />
      </div>
    </div>
  );
};

export default Header;
