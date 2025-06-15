import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const TopDoctors: React.FC = () => {
  const navigate = useNavigate();
  const { doctors } = useAppContext();

  const handleNavigate = (id: string) => {
    navigate(`/appointment/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavigate(id);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 px-4 md:px-10">
      <h1 className="text-3xl font-medium text-center">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-600">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-5 gap-y-6">
        {doctors.slice(0, 10).map((item) => (
          <div
            role="button"
            tabIndex={0}
            key={item._id}
            onClick={() => handleNavigate(item._id)}
            onKeyDown={(e) => handleKeyDown(e, item._id)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 shadow-lg hover:shadow-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="h-48 bg-blue-50 overflow-hidden">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                src={item.image}
                alt={item.name}
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <div
                className={`flex items-center gap-2 text-sm mb-2 ${
                  item.available ? 'text-green-500' : 'text-gray-500'
                }`}
              >
                <div
                  className={`w-2 h-2 ${
                    item.available ? 'bg-green-500' : 'bg-gray-500'
                  } rounded-full`}
                ></div>
                <p className="font-medium">
                  {item.available ? 'Available' : 'Not Available'}
                </p>
              </div>
              <p className="text-gray-900 text-lg font-semibold mb-1 truncate">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate('/doctors');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="bg-blue-300 text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-blue-100 transition-colors font-medium"
      >
        View More
      </button>
    </div>
  );
};

export default TopDoctors;
