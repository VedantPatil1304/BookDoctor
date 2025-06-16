import React from 'react';
import { Briefcase, Users, MapPin, Clock, Mail } from 'lucide-react';

const Careers = () => {
  const handleViewPositions = () => {
    window.location.href =
      'mailto:vedpvt1304@gmail.com?subject=Job Application&body=Hi, I am interested in applying at BookDoctor. Please find my resume attached.';
  };

  return (
    <div className="py-14 px-6 md:px-20 bg-gradient-to-b from-white to-blue-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Careers at <span className="text-blue-600">BookDoctor</span>
        </h1>
        <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto">
          Join our mission to transform healthcare with technology and compassion.
        </p>
      </div>

      {/* About Our Team */}
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-600" /> Our Team
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At BookDoctor, we are a team of doctors, developers, designers, and dreamers working together
          to simplify the healthcare experience. We believe in collaboration, innovation, and putting people first.
        </p>
      </div>

      {/* Perks */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {[
          {
            icon: <Briefcase className="w-6 h-6 text-blue-600" />,
            title: 'Purpose-Driven Work',
            desc: 'Contribute to meaningful solutions that directly impact lives across the globe.',
          },
          {
            icon: <Clock className="w-6 h-6 text-blue-600" />,
            title: 'Flexible Hours',
            desc: 'Work-life balance matters. We offer flexible schedules and remote opportunities.',
          },
          {
            icon: <MapPin className="w-6 h-6 text-blue-600" />,
            title: 'Global Impact',
            desc: 'Serve patients and partners across the world with scalable digital tools.',
          },
          {
            icon: <Users className="w-6 h-6 text-blue-600" />,
            title: 'Diverse Culture',
            desc: 'We value inclusivity and collaboration from every background and identity.',
          },
        ].map((perk, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
              {perk.icon} {perk.title}
            </h3>
            <p className="text-gray-600">{perk.desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-xl font-semibold text-gray-700 mb-4">Ready to make a difference?</p>
        <button
          onClick={handleViewPositions}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition duration-300"
        >
          <Mail className="w-5 h-5" />
          View Open Positions
        </button>
        <p className="text-sm text-gray-500 mt-3">
          No openings listed? Send us your resume anyway — we're always hiring great talent!
        </p>
      </div>
    </div>
  );
};

export default Careers;
