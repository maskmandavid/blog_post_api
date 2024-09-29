
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config()

export  const userAuth=(req,res,next)=>{
    const token =req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({message:' Access denied, no token provided'})
        try{

            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.user=decoded
            next()

    } catch (error) {
        res.status(400).json({message:"invalid token"}) 

    }
}



export const adminAuth=(req,res)=>{
    const {role} =req.user
    if(role !== 'admin'){
        return res.status(403).json({message:'Access denied. Admins Only'})
    }

}