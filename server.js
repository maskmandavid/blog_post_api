import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './db/dbconfig.js'
dotenv.config()

const app =express();
app.use(express.json())
const port =process.env.PORT;

import { userAuth } from './middlewares/authMiddleware.js';
import userRoute from './routes/userRoutes.js';
import blogRoute from './routes/blogRoutes.js';
import commentRoute from './routes/commentRoutes.js';
import authRoute from './routes/authRoutes.js';


app.use('/api/auth',authRoute);
app.use(userAuth);
app.use('/api/user',userRoute);
app.use('/api/blog',blogRoute);
app.use('/api/comment',commentRoute);




    await dbConnect ()
    app.listen(port,()=>console.log(`server running on port ${port}`))

