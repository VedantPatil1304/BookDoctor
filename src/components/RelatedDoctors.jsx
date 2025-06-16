import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useAppContext();
  const navigate = useNavigate();
  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center gap-6 my-16 text-gray-900 px-4 md:px-10">
      <h1 className="text-3xl font-medium text-center">Related Doctors</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-600">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-5">
        {relDoc.slice(0, 5).map((item) => (
          <div
            key={item._id}
            tabIndex={0}
            onClick={() => handleNavigate(`/appointment/${item._id}`)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleNavigate(`/appointment/${item._id}`);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer 
                       hover:-translate-y-2 hover:shadow-xl transition-transform duration-300 
                       bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <p className="font-medium">{item.available ? 'Available' : 'Not Available'}</p>
              </div>
              <p
                title={item.name}
                className="text-gray-900 text-lg font-semibold mb-1 truncate"
              >
                {item.name}
              </p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => handleNavigate('/doctors')}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-blue-100 transition-colors font-medium"
      >
        View More
      </button>
    </div>
  );
};

export default RelatedDoctors;
