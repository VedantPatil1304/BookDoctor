import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContextProvider } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import AllAppointments from './pages/AllAppointments';
import AddDoctor from './pages/AddDoctor';
import DoctorsList from './pages/DoctorsList';
import Login from './pages/Login';

function App() {
  return (
    <div className="bg-[#F8F9FD]">
      <AdminContextProvider>
        <Router>
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
                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
            </div>
          </div>
          <ToastContainer />
        </Router>
      </AdminContextProvider>
    </div>
  );
}

export default App;