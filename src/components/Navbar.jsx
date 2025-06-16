import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useAppContext();
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(null);
    navigate('/');
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 px-4 lg:px-8">
      <Link to="/">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <span className="text-2xl font-bold text-gray-800">BookDoctor</span>
        </div>
      </Link>
      
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <Link to="/">
          <li className="py-1 hover:text-blue-600 transition-colors">HOME</li>
        </Link>
        <Link to="/doctors">
          <li className="py-1 hover:text-blue-600 transition-colors">ALL DOCTORS</li>
        </Link>
        <Link to="/about">
          <li className="py-1 hover:text-blue-600 transition-colors">ABOUT</li>
        </Link>
        <Link to="/services">
          <li className="py-1 hover:text-blue-600 transition-colors">SERVICES</li>
        </Link>
        <Link to="/contact">
          <li className="py-1 hover:text-blue-600 transition-colors">CONTACT</li>
        </Link>
      </ul>

      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={
                userData.image ||
                'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
              alt="Profile"
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate('/my-profile')}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate('/my-appointments')}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p onClick={logout} className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-light hidden md:block hover:bg-blue-700 transition-colors"
          >
            Create account
          </button>
        )}
        
        <button
          className="md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          showMenu ? 'fixed w-full' : 'h-0 w-0'
        } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">BookDoctor</span>
          </div>
          <button onClick={() => setShowMenu(false)}>
            <X />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <Link onClick={() => setShowMenu(false)} to="/">
            <p className="px-4 py-2 rounded inline-block">HOME</p>
          </Link>
          <Link onClick={() => setShowMenu(false)} to="/doctors">
            <p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p>
          </Link>
          <Link onClick={() => setShowMenu(false)} to="/about">
            <p className="px-4 py-2 rounded inline-block">ABOUT</p>
          </Link>
          <Link onClick={() => setShowMenu(false)} to="/contact">
            <p className="px-4 py-2 rounded inline-block">CONTACT</p>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
