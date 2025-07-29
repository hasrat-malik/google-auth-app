import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);

// error handler middleware
app.use(errorHandler);

export default app;
