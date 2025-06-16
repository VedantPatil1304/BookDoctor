import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Filter } from 'lucide-react';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { doctors } = useAppContext();

  const specialities = [
    'General physician',
    'Gynecologist', 
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist'
  ];

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="py-10">
      <p className="text-gray-600 mb-5">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-2 px-4 border rounded-lg text-sm transition-all sm:hidden flex items-center gap-2 ${showFilter ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
          onClick={() => setShowFilter(prev => !prev)}
        >
          <Filter className="w-4 h-4" />
          Filters
        </button>
        
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'} sm:min-w-[200px]`}>
          <h3 className="font-semibold text-gray-800 mb-2">Filter by Speciality</h3>
          {specialities.map((spec) => (
            <p
              key={spec}
              onClick={() => speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)}
              className={`w-[94vw] sm:w-auto pl-3 py-2 pr-4 border border-gray-300 rounded-lg transition-all cursor-pointer hover:bg-blue-50 ${speciality === spec ? 'bg-blue-50 text-blue-600 border-blue-300' : 'bg-white'}`}
            >
              {spec}
            </p>
          ))}
        </div>
        
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 shadow-lg hover:shadow-xl bg-white"
              key={index}
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
                <div className={`flex items-center gap-2 text-sm mb-2 ${item.available ? 'text-green-500' : 'text-gray-500'}`}>
                  <div className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'} rounded-full`}></div>
                  <p className="font-medium">{item.available ? 'Available' : 'Not Available'}</p>
                </div>
                <p className="text-gray-900 text-lg font-semibold mb-1 truncate">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
