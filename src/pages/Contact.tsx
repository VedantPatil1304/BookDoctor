import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="py-10">
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <div className="w-full md:w-1/2">
          <img
            className="w-full max-w-[480px] rounded-lg shadow-lg mx-auto"
            src="https://thumbs.dreamstime.com/b/young-doctor-press-contact-us-button-virtual-screen-as-medical-support-service-concept-91171186.jpg"
            alt="Modern medical office reception area"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-center items-start gap-6 md:w-1/2">
          <p className="font-semibold text-lg text-gray-600 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            OUR OFFICE
          </p>
          <div className="text-gray-500 leading-relaxed">
            <p>Majestique Rhythem County</p>
            <p>Handewadi, Pune, India</p>
          </div>
          
          <div className="text-gray-500 space-y-2">
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              Tel: 9766210221
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              Email: vedpvt1304@gmail.com
            </p>
          </div>

          <div className="mt-4">
            <p className="font-semibold text-lg text-gray-600 flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-blue-600" />
              OFFICE HOURS
            </p>
            <div className="text-gray-500 space-y-1">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <p className="font-semibold text-lg text-gray-600 mt-4">CAREERS AT BOOKDOCTOR</p>
          <p className="text-gray-500 leading-relaxed">Learn more about our teams and job openings.</p>
          <button        onClick={() => navigate('/Careers')}
 className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 rounded-lg font-medium">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;