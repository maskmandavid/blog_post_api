
import User from "../models/UserModels.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config()




export const login=async(req,res)=>{
    const{email,password}=req.body
    try{
        if(!email||!password){
            return res.status(404).json({message:"user not found"})
        }

        const userExist = await User.findOne({email});
        

        if (!userExist) return res.status(404).json({message:"user not found"})

            const passwordMatch = await bcrypt.compare(password,userExist.password)
            
            if (!passwordMatch) return res.status(400).json({message:"Invalid credentials"})

                const token = jwt.sign({...userExist},process.env.JWT_SECRET )
                console.log(token);

                res.status(200).json({message:'success',token,data:userExist})
    } catch (error){

    }

}

const signup=async(req,res)=>{

}