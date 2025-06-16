# BookDoctor - Doctor Appointment Booking System

## 🏥 Project Overview

**BookDoctor** is a comprehensive MERN stack Doctor Appointment Booking System and Hospital Management platform that revolutionizes healthcare workflows. This full-featured application provides secure user authentication, seamless appointment scheduling, patient record management, real-time communication, and integrated payment processing.

## ✨ Key Features

### 🔐 **Multi-Role Authentication System**
- **Patients**: Register, login, and manage personal health profiles
- **Doctors**: Professional dashboard with appointment and patient management
- **Admins**: Complete hospital management with analytics and oversight

### 📅 **Advanced Appointment Management**
- Real-time slot availability checking
- Intuitive booking interface with calendar integration
- Automated appointment confirmations and reminders
- Flexible cancellation and rescheduling options

### 💳 **Secure Payment Integration**[Not Yet]
- **Stripe** integration for international payments
- **Razorpay** support for Indian market
- Secure transaction processing with payment history

### 🖼️ **Media Management**
- **Cloudinary** integration for profile picture uploads
- Optimized image storage and delivery
- Automatic image compression and formatting

### 📱 **Responsive Design**
- Mobile-first approach with Tailwind CSS
- Seamless experience across all devices
- Modern, intuitive user interface

## 🛠️ Technology Stack

### **Frontend**
- **React 18** with TypeScript
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Axios** for API communication
- **React Toastify** for notifications
- **React Hook Form** for form management
- **Date-fns** for date manipulation

### **Backend**
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Multer** for file uploads
- **Nodemailer** for email services

### **Third-Party Services**
- **Cloudinary** - Image storage and optimization
- **Stripe** - International payment processing
- **Razorpay** - Indian payment gateway
- **MongoDB Atlas** - Cloud database

## 📁 Project Structure

```
bookdoctor/
├── backend/                 # Node.js Express API
│   ├── config/             # Database and service configurations
│   ├── controllers/        # Business logic handlers
│   ├── middleware/         # Authentication and validation
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API route definitions
│   └── server.js          # Application entry point
├── frontend/              # React patient interface
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── context/       # State management
│   │   └── App.tsx        # Main application component
└── admin/                 # React admin panel
    ├── src/
    │   ├── components/    # Admin UI components
    │   ├── pages/         # Admin dashboard pages
    │   ├── context/       # Admin state management
    │   └── App.tsx        # Admin application component
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Cloudinary account
- Stripe account (optional)
- Razorpay account (optional)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/bookdoctor.git
cd bookdoctor
```

2. **Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
# Configure your environment variables
npm run dev
```

3. **Frontend Setup**
```bash
cd ../frontend
npm install
npm run dev
```

4. **Admin Panel Setup**
```bash
cd ../admin
npm install
npm run dev
```

### Environment Variables

Create `.env` files in the backend directory:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@bookdoctor.com
ADMIN_PASSWORD=admin123

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Payment Gateways
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key
```

## 🎯 Core Functionalities

### **Patient Features**
- ✅ User registration and authentication
- ✅ Browse doctors by specialty
- ✅ Book appointments with real-time availability
- ✅ Manage personal profile and medical history
- ✅ View appointment history and status
- ✅ Secure payment processing
- ✅ Cancel or reschedule appointments

### **Doctor Features**
- ✅ Professional login and dashboard
- ✅ Manage appointment schedules
- ✅ View patient information
- ✅ Update availability status
- ✅ Mark appointments as completed
- ✅ Earnings and patient analytics

### **Admin Features**
- ✅ Complete hospital management dashboard
- ✅ Add and manage doctor profiles
- ✅ Monitor all appointments and patients
- ✅ View comprehensive analytics
- ✅ Manage system-wide settings
- ✅ Cancel appointments when necessary

## 🔒 Security Features

- **JWT Authentication** with secure token management
- **Password Hashing** using bcrypt
- **Input Validation** and sanitization
- **CORS Protection** for cross-origin requests
- **Environment Variable Protection** for sensitive data
- **Role-based Access Control** for different user types

## 📊 API Endpoints

### **User Routes**
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/get-profile` - Get user profile
- `POST /api/user/update-profile` - Update user profile
- `POST /api/user/book-appointment` - Book appointment
- `GET /api/user/appointments` - Get user appointments
- `POST /api/user/cancel-appointment` - Cancel appointment

### **Doctor Routes**
- `GET /api/doctor/list` - Get all doctors
- `POST /api/doctor/login` - Doctor login
- `GET /api/doctor/appointments` - Get doctor appointments
- `POST /api/doctor/complete-appointment` - Mark appointment complete
- `GET /api/doctor/dashboard` - Get doctor dashboard data

### **Admin Routes**
- `POST /api/admin/login` - Admin login
- `POST /api/admin/add-doctor` - Add new doctor
- `POST /api/admin/all-doctors` - Get all doctors
- `GET /api/admin/appointments` - Get all appointments
- `GET /api/admin/dashboard` - Get admin dashboard data

## 🌐 Deployment

### **Backend Deployment (Render)**
The backend is deployed on Render, which may cause initial delays due to cold starts. This is normal behavior for free-tier hosting.

### **Frontend Deployment**
- Build: `npm run build`
- Deploy to Netlify, Vercel, or similar platforms

### **Admin Panel Deployment**
- Build: `npm run build`
- Deploy separately from the main frontend

## 🔗 Live Demo[Not Yet]

- **Frontend**: [Live Demo Link]
- **Admin Panel**: [Admin Demo Link]
- **Backend API**: [API Documentation Link]

*Note: The backend is deployed on Render's free tier, which may cause some initial delay when accessing the application for the first time.*

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Your Name**
- GitHub: [@VedantPatil1304](https://github.com/VedantPatil1304)
- LinkedIn: [@vedantpatil](https://linkedin.com/in/vedant-patil-9314a1258/)
- Email: vedpvt1304@gmail.com

## 🙏 Acknowledgments

- React and Node.js communities for excellent documentation
- Tailwind CSS for the utility-first CSS framework
- MongoDB for the flexible database solution
- Cloudinary for seamless image management
- Stripe and Razorpay for secure payment processing

---

**BookDoctor** - Revolutionizing Healthcare Management, One Appointment at a Time! 🏥✨
