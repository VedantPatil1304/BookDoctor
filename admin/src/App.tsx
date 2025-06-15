import React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContextProvider, useAdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import AllAppointments from './pages/AllAppointments';
import AddDoctor from './pages/AddDoctor';
import DoctorsList from './pages/DoctorsList';
import Login from './pages/Login';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { aToken } = useAdminContext();
  return aToken ? <>{children}</> : <Navigate to="/login" />;
};

const AppContent: React.FC = () => {
  const { aToken } = useAdminContext();

  if (!aToken) {
    return (
      <div className="bg-[#F8F9FD] min-h-screen">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FD] min-h-screen">
      <div className="flex items-start">
        <Sidebar />
        <div className="flex-1 max-h-screen overflow-y-scroll">
          <Navbar />
          <div className="pt-5 px-4 sm:pt-12 sm:px-12">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/admin-dashboard" element={<Dashboard />} />
              <Route path="/all-appointments" element={<AllAppointments />} />
              <Route path="/add-doctor" element={<AddDoctor />} />
              <Route path="/doctor-list" element={<DoctorsList />} />
              <Route path="/login" element={<Navigate to="/admin-dashboard" />} />
              <Route path="*" element={<Navigate to="/admin-dashboard" />} />
            </Routes>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

function App() {
  return (
    <AdminContextProvider>
      <Router>
        <AppContent />
      </Router>
    </AdminContextProvider>
  );
}

export default App;