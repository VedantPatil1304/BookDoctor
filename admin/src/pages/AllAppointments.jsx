import React, { useContext, useEffect } from 'react';
import { useAdminContext } from '../context/AdminContext';
import { X } from 'lucide-react';

const AllAppointments = () => {
  const { aToken, appointments, getAllAppointments, cancelAppointment } = useAdminContext();

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);

  const getAge = (dob) => {
    const birth = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>

      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>

        {appointments.map((item, index) => (
          <div
            className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] gap-1 items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50"
            key={item._id || index}
          >
            <p className="max-sm:hidden">{index + 1}</p>

            <div className="flex items-center gap-2">
              <img
                className="w-8 rounded-full"
                src={item.userData?.image || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'}
                alt=""
              />
              <p>{item.userData?.name}</p>
            </div>

            <p className="max-sm:hidden">
              {item.userData?.dob ? getAge(item.userData.dob) : 'N/A'}
            </p>

            <p>
              {item.slotDate ? new Date(item.slotDate).toDateString() : ''}, {item.slotTime}
            </p>

            <div className="flex items-center gap-2">
              <img
                className="w-8 rounded-full bg-gray-200"
                src={item.docData?.image || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'}
                alt=""
              />
              <p>{item.docData?.name}</p>
            </div>

            <p>${item.amount}</p>

            {item.cancelled ? (
              <p className="text-red-400 text-xs font-medium">Cancelled</p>
            ) : item.isCompleted ? (
              <p className="text-green-500 text-xs font-medium">Completed</p>
            ) : (
              <button
                onClick={() => cancelAppointment(item._id)}
                className="text-red-400 hover:text-red-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointments;
