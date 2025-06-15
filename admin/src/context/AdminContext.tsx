import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

interface AdminContextType {
  aToken: string | null;
  setAToken: (token: string | null) => void;
  backendUrl: string;
  doctors: any[];
  appointments: any[];
  dashData: any;
  getAllDoctors: () => void;
  changeAvailability: (docId: string) => void;
  getAllAppointments: () => void;
  cancelAppointment: (appointmentId: string) => void;
  getDashData: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

interface AdminContextProviderProps {
  children: ReactNode;
}

export const AdminContextProvider: React.FC<AdminContextProviderProps> = ({ children }) => {
  const [aToken, setAToken] = useState<string | null>(
    localStorage.getItem('aToken') || null
  );
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [dashData, setDashData] = useState(null);

  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/admin/all-doctors`, {}, {
        headers: { aToken }
      });
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error fetching doctors:', error);
      toast.error('Failed to fetch doctors');
    }
  };

  const changeAvailability = async (docId: string) => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/admin/change-availability`, {
        docId
      }, {
        headers: { aToken }
      });
      
      if (data.success) {
        toast.success(data.message);
        getAllDoctors();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error changing availability:', error);
      toast.error('Failed to change availability');
    }
  };

  const getAllAppointments = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/admin/appointments`, {
        headers: { aToken }
      });
      if (data.success) {
        setAppointments(data.appointments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
      toast.error('Failed to fetch appointments');
    }
  };

  const cancelAppointment = async (appointmentId: string) => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/admin/cancel-appointment`, {
        appointmentId
      }, {
        headers: { aToken }
      });

      if (data.success) {
        toast.success(data.message);
        getAllAppointments();
        getDashData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error cancelling appointment:', error);
      toast.error('Failed to cancel appointment');
    }
  };

  const getDashData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/admin/dashboard`, {
        headers: { aToken }
      });

      if (data.success) {
        setDashData(data.dashData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast.error('Failed to fetch dashboard data');
    }
  };

  React.useEffect(() => {
    if (aToken) {
      localStorage.setItem('aToken', aToken);
    } else {
      localStorage.removeItem('aToken');
    }
  }, [aToken]);

  const value = {
    aToken,
    setAToken,
    backendUrl,
    doctors,
    appointments,
    dashData,
    getAllDoctors,
    changeAvailability,
    getAllAppointments,
    cancelAppointment,
    getDashData
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdminContext must be used within an AdminContextProvider');
  }
  return context;
};