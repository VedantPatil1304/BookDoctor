import React, { useState, useEffect } from 'react';
import { useAdminContext } from '../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { setAToken, backendUrl, aToken } = useAdminContext();
  const navigate = useNavigate();

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await axios.post(`${backendUrl}/api/admin/login`, {
        email,
        password
      });
      
      if (data.success) {
        localStorage.setItem('aToken', data.token);
        setAToken(data.token);
        toast.success('Login successful!');
        navigate('/admin-dashboard');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (aToken) {
      navigate('/admin-dashboard');
    }
  }, [aToken, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">B</span>
              </div>
              <span className="text-3xl font-bold text-gray-800">BookDoctor</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
            <p className="text-gray-600 mt-2">Access the admin dashboard</p>
          </div>

          {/* Demo Credentials
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-800 mb-2">Demo Credentials:</h3>
            <p className="text-sm text-blue-700">
              <strong>Email:</strong> admin@bookdoctor.com<br />
              <strong>Password:</strong> admin123
            </p>
          </div> */}

          <form onSubmit={onSubmitHandler} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Need help? Contact support at{' '}
              <a href="mailto:support@bookdoctor.com" className="text-blue-600 hover:underline">
                support@bookdoctor.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;