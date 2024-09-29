import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

//const database= process.env.DB_NAME
const url =process.env.DB_URI+process.env.DB_NAME


const dbConnect = async()=>{
    try{
        const connect = await  mongoose.connect(url)
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch(error) {
        console.log(error);

    }
}

export default dbConnect