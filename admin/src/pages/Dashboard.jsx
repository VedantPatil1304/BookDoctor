import React, { useEffect } from 'react';
import { useAdminContext } from '../context/AdminContext';
import { Users, Calendar, UserCheck, Clock } from 'lucide-react';

const Dashboard = () => {
  const { aToken, getDashData, cancelAppointment, dashData } = useAdminContext();

  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  return (
    aToken && (
      <div className="m-5">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <Users className="w-14 text-blue-600" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData?.doctors || 0}
              </p>
              <p className="text-gray-400">Doctors</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <Calendar className="w-14 text-blue-600" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData?.appointments || 0}
              </p>
              <p className="text-gray-400">Appointments</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <UserCheck className="w-14 text-blue-600" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData?.patients || 0}
              </p>
              <p className="text-gray-400">Patients</p>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border">
            <Clock className="w-5 text-blue-600" />
            <p className="font-semibold">Latest Bookings</p>
          </div>

          <div className="pt-4 border border-t-0">
            {dashData?.latestAppointments?.map((item, index) => (
              <div className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100" key={item._id || index}>
                <img
                  className="rounded-full w-10"
                  src={item.docData.image}
                  alt=""
                />
                <div className="flex-1 text-sm">
                  <p className="text-gray-800 font-medium">
                    {item.docData.name}
                  </p>
                  <p className="text-gray-600">
                    {new Date(item.slotDate).toDateString()}
                  </p>
                </div>
                {item.cancelled ? (
                  <p className="text-red-400 text-xs font-medium">Cancelled</p>
                ) : item.isCompleted ? (
                  <p className="text-green-500 text-xs font-medium">Completed</p>
                ) : (
                  <button
                    onClick={() => cancelAppointment(item._id)}
                    className="text-red-400 text-xs font-medium hover:underline"
                  >
                    Cancel
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
