import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import notesRouter from './route/notesRoute.js'
import rateLimiter from './middleware/rateLimiter.js';
import { connectDB } from './config/db.js';

const app = express();
const PORT=process.env.PORT || 5000;
dotenv.config();
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json())
app.use(rateLimiter)

app.use('/api/notes',notesRouter)
connectDB().then(()=>{
    app.listen(5000,()=>{
        console.log("Server is running on port ",PORT);
    });
});
