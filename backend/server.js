import dotenv from 'dotenv';

// Load environment variables first, before any other imports
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import doctorRouter from './routes/doctorRoute.js';
import adminRouter from './routes/adminRoute.js';

// App config
const app = express();
const port = process.env.PORT || 4000;

// Connect to database
connectDB();
connectCloudinary();

// Middlewares
// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));


// API endpoints
app.use('/api/user', userRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/admin', adminRouter);

app.get('/', (req, res) => {
  res.send('BookDoctor Backend API is running!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});