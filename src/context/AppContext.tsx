import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

interface Doctor {
  _id: string;
  name: string;
  image: string;
  speciality: string;
  degree: string;
  experience: string;
  about: string;
  fees: number;
  address: {
    line1: string;
    line2: string;
  };
  available: boolean;
}

interface User {
  _id: string;
  name: string;
  email: string;
  image: string;
  address: {
    line1: string;
    line2: string;
  };
  gender: string;
  dob: string;
  phone: string;
}

interface AppContextType {
  doctors: Doctor[];
  currencySymbol: string;
  backendUrl: string;
  token: string | null;
  userData: User | null;
  setToken: (token: string | null) => void;
  getDoctorsData: () => void;
  loadUserProfileData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const currencySymbol = '$';
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token') || null
  );
  const [userData, setUserData] = useState<User | null>(null);

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