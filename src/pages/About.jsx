import React from 'react';

const About = () => {
  return (
    <div className="py-10">
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <img
            className="w-full max-w-[480px] rounded-lg shadow-lg mx-auto"
            src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
            alt="Medical professionals discussing patient care"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-sm text-gray-600">
          <p className="leading-relaxed">
            Welcome to BookDoctor, your trusted partner in managing your healthcare needs conveniently and efficiently. At BookDoctor, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p className="leading-relaxed">
            BookDoctor is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, BookDoctor is here to support you every step of the way.
          </p>
          <b className="text-gray-800 text-lg">Our Vision</b>
          <p className="leading-relaxed">
            Our vision at BookDoctor is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="text-xl my-8 text-center">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-20">
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer group">
          <b className="text-lg group-hover:text-white">Efficiency:</b>
          <p className="leading-relaxed">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer group">
          <b className="text-lg group-hover:text-white">Convenience:</b>
          <p className="leading-relaxed">Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer group">
          <b className="text-lg group-hover:text-white">Personalization:</b>
          <p className="leading-relaxed">Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
