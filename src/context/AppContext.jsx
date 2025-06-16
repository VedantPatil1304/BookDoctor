import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const currencySymbol = '$';
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [userData, setUserData] = useState(null);

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
      if (data.success) {
        setDoctors(data.doctors);
        console.log('✅ Successfully loaded doctors from backend');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('❌ Backend connection failed:', error);
      toast.error('Unable to connect to backend. Please ensure the server is running.');
    }
  };

  const loadUserProfileData = async () => {
    if (!token) return;

    try {
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
        headers: { token }
      });
      if (data.success) {
        setUserData(data.userData);
        console.log('✅ Successfully loaded user profile');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('❌ Could not load user profile:', error);
      toast.error('Could not load user profile');
    }
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(null);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const value = {
    doctors,
    currencySymbol,
    backendUrl,
    token,
    userData,
    setToken,
    getDoctorsData,
    loadUserProfileData
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
