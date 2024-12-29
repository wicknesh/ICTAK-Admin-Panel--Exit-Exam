import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js'
import feedbackRoutes from './routes/feedbackRoutes.js'

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.port, () => {
    console.log(`Server is listening to port ${process.env.port}`);
})

app.use('/course', feedbackRoutes);

connectDB();