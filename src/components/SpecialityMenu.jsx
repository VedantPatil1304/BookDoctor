import React from 'react';
import { Link } from 'react-router-dom';

const specialityData = [
  {
    speciality: 'General physician',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    speciality: 'Gynecologist',
    image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    speciality: 'Dermatologist',
    image: 'https://images.pexels.com/photos/5327653/pexels-photo-5327653.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    speciality: 'Pediatricians',
    image: 'https://images.pexels.com/photos/6401823/pexels-photo-6401823.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    speciality: 'Neurologist',
    image: 'https://images.pexels.com/photos/5327871/pexels-photo-5327871.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    speciality: 'Gastroenterologist',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  }
];

const SpecialityMenu = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800 px-4 md:px-10" id="speciality">
      <h1 className="text-3xl font-medium text-center">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-600">
        Find the right specialist for your needs and book appointments effortlessly.
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-x-auto pb-4">
        {specialityData.map((item) => (
          <Link
            key={item.speciality}
            to={`/doctors/${item.speciality}`}
            onClick={scrollToTop}
            aria-label={`View doctors specializing in ${item.speciality}`}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 
                       hover:translate-y-[-10px] transition-all duration-500 group
                       focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            tabIndex={0}
          >
            <div className="w-16 sm:w-24 h-16 sm:h-24 mb-2 rounded-full overflow-hidden shadow-lg 
             group-hover:shadow-xl transition-shadow duration-300 flex items-center justify-center bg-gray-100 min-w-0">
              <img
                className="w-full h-full object-cover rounded-full"
                src={item.image}
                alt={item.speciality}
                loading="lazy"
              />
            </div>
            <p className="text-center font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
