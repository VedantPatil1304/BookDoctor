import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-2xl font-bold text-white">BookDoctor</span>
          </div>
          <p className="text-blue-300 leading-6">
            Connecting patients to top-rated doctors and healthcare providers. Your health, just one click away.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-blue-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/doctors" className="hover:text-white">Find a Doctor</a></li>
            <li><a href="/Careers" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="font-semibold text-white mb-4">Policies</h4>
          <ul className="flex flex-col gap-2 text-blue-300">
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Refund Policy</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-white mb-4">Contact Us</h4>
          <ul className="text-blue-300">
            <li>📞 +91-9766210221</li>
            <li>📧 vedpvt1304@gmail.com</li>
            <li>📍 Pune, Maharashtra, India</li>
          </ul>
          <div className="flex gap-4 mt-4 text-blue-400 text-lg">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black py-4 text-center text-xs font-semibold text-white">
        © 2025 BookDoctor. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
