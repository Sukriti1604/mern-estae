import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error.message);
  });

const app = express();
app.use(express.json());

// Routes
app.use("/api/user", userRouter);
app.use('/api/auth', authRouter);

// Error-handling middleware (after routes)
app.use((err, req, res, next) => {
  // Set default values in case the error object doesn't contain them
  res.statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(res.statusCode).json({
    success: false,
    statusCode: res.statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

export default app;

