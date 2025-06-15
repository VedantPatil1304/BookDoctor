import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Banner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 mx-4 md:mx-10 overflow-hidden">
      {/* Left Side */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 flex flex-col justify-center">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white leading-tight">
          <p>Book Appointment</p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
        </div>
        <button
          onClick={() => {
            navigate('/login');
            scrollTo(0, 0);
          }}
          className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg self-start"
        >
          Create account
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex md:w-1/2 lg:w-[370px] items-center justify-end relative">
        <img
          className="w-full h-auto max-w-md rounded-lg object-cover"
          src="https://images.pexels.com/photos/5327871/pexels-photo-5327871.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Doctor with patient consultation"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Banner;
