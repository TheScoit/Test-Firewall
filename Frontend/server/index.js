import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './db/connectDB.js';
import authRoutes from './route/user.route.js'



dotenv.config()

const app = express();
const PORT = process.env.PORT || 8000

app.use(express.json());

app.use('/api/auth',authRoutes)

app.listen(PORT ,()=>{
    connectDB();
    console.log(`Server is connected and running : http://localhost:${PORT}`);  
});

