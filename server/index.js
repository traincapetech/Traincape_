import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db.js';
import { userRouter } from './routes/user.routes.js';
import { questionRouter } from './routes/question.routes.js';
import { resultRouter } from './routes/result.routes.js';
import { bookRouter } from './routes/book.routes.js';
import { reviewRouter } from './routes/review.routes.js';
import { paymentRouter } from './routes/payment.routes.js';
import { voucherRouter } from './routes/voucher.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRouter);
app.use('/api/questions', questionRouter);
app.use('/api/results', resultRouter);
app.use('/api/books', bookRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/payments', paymentRouter);
app.use('/api/vouchers', voucherRouter);

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running successfully!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
