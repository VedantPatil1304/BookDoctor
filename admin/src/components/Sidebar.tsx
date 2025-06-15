import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAdminContext } from '../context/AdminContext';
import { LayoutDashboard, Calendar, UserPlus, Users } from 'lucide-react';

const Sidebar: React.FC = () => {
  const { aToken } = useAdminContext();

  return (
    <div className="min-h-screen bg-white border-r">
      {aToken && (
        <ul className="text-[#515151] mt-5">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600' : ''
              }`
            }
            to={'/admin-dashboard'}
          >
            <LayoutDashboard className="w-5 h-5" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600' : ''
              }`
            }
            to={'/all-appointments'}
          >
            <Calendar className="w-5 h-5" />
            <p className="hidden md:block">Appointments</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600' : ''
              }`
            }
            to={'/add-doctor'}
          >
            <UserPlus className="w-5 h-5" />
            <p className="hidden md:block">Add Doctor</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600' : ''
              }`
            }
            to={'/doctor-list'}
          >
            <Users className="w-5 h-5" />
            <p className="hidden md:block">Doctors List</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;