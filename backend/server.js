import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import doctorRouter from './routes/doctorRoute.js';
import adminRouter from './routes/adminRoute.js';

const app = express();
const port = process.env.PORT || 4000;

// Connect DB and Cloudinary
connectDB();
connectCloudinary();

// Parse comma-separated origins from .env
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : [];

// Middleware
app.use(express.json());
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Routes
app.use('/api/user', userRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/admin', adminRouter);

// Root route
app.get('/', (req, res) => {
  res.send('BookDoctor Backend API is running!');
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
