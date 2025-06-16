import React from 'react';
import { useAdminContext } from '../context/AdminContext';
import { LogOut } from 'lucide-react';

const Navbar = () => {
  const { aToken, setAToken } = useAdminContext();

  const logout = () => {
    setAToken(null);
  };

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2 text-xs">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">B</span>
        </div>
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {aToken ? 'Admin' : 'Not Logged In'}
        </p>
      </div>
      {aToken && (
        <button
          onClick={logout}
          className="bg-blue-600 text-white text-sm px-10 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
