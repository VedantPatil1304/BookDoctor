import React from 'react';

const services = [
  {
    title: 'Outpatient Services (OPD)',
    image: 'https://images.unsplash.com/photo-1581982231900-6a1a46b744c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3V0cGF0aWVudCUyMFNlcnZpY2VzJTIwKE9QRCl8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Diagnostic Services',
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fERpYWdub3N0aWMlMjBTZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Pharmacy & Blood Bank',
    image: 'https://images.pexels.com/photos/5910953/pexels-photo-5910953.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Surgical Services',
    image: 'https://images.unsplash.com/photo-1676155081561-865fab11da37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3VyZ2ljYWwlMjBTZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Maternity & Child Care',
    image: 'https://media.istockphoto.com/id/1306828549/photo/close-up-face-of-a-cute-newborn-baby-boy-kissed-by-her-mother-holding-in-her-mother-lap-one.webp?a=1&b=1&s=612x612&w=0&k=20&c=ILkWZjCSWydWPt0ZDwymwlRuvSu1oyxSaApmfThDeqw=',
  },
  {
    title: 'Emergency & Critical Care',
    image: 'https://media.istockphoto.com/id/538726573/photo/emergency-department.webp?a=1&b=1&s=612x612&w=0&k=20&c=C0fZ3f6472-8u4KlLVsS12gCXmxjDRXV-an6BO65fA8=',
  },
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f4f8fb] py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg"
          >
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 text-center">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
