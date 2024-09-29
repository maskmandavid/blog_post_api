import User from "../models/UserModels.js"
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
dotenv.config()

export const getUsers =async(req,res)=>{
    try{
        const users = await User.find().select('-pasword')
        if(!users){
            throw new Error('error getting users')
            

        }

        res.status(200).json({message:'success',data:users})
    }catch (error) {
        res.status(404).json({message:error.message,error})
        return

    }
}
export const creatUser=async(req,res)=>{
    try {
        const {userName,role,firstName,lastName,email,password}=req.body

        const images=req.files
       // console.log(images);
        const profileImg=images[0].filename
console.log (req.body);
        // check user credentials
         if(!userName || !role || !firstName || !lastName || !email || !password){
            throw new Error ('error!, check credentials')
         }
            const hashedPassword = await bcrypt.hash(password,10)
        const newUser= new User(
            {
                userName,
                role,
                firstName,
                lastName,
                email,
                password:hashedPassword,
                profileImg
                
            })
        const user = await newUser.save()
        if(!user){
            throw new Error ('error creating users')

        }

        res.status(201).json({message:'success',data:user})
        
    
    } catch (error) {
        res.status(404).json({message:error.message,error})
        return
    }        
}

export const getUser =async(req,res)=>{
    try {
        const {id}=req.params
        if (!id){
            throw new Error('user Id not found')
        }

        const user = await User.findById(id)

        if(!user) {
            throw new Error ('user not found')
        }

        res.status(200).json({message:'success',data:user})
    } catch (error) {
        res.status(404).json({message:error.message,error})
        return
    }
}


export const updateUser =async(req,res)=>{
    try{
        const {id}=req.params
        const body=req.body
        const images=req.files
        body.profileImg=images[0].filename
        if(!id||!body){
            throw new Error('User Id or Data passed not found')
        }
        const user = await User.findByIdAndUpdate(id,body,{new:true})
        if(!user){
            throw new Error('user not updated')
        }
        res.status(200).json({message:'success',data:user})
    
    } catch (error) {
        res.status(404).json({message:error.message,error})
        return
    }
}
export const deleteAccount =async(req,res)=>{
    try{
        const userId=req.user._doc._id

        if(!userId){
            throw new Error('user Id not found')
        }

        const user = await User.findByIdAndDelete(userId)
        if(!user){
            throw new Error('user not deleted')
        }
        res.status(200).json({message:'success',data:user})
    } catch (error) {
        res.status(404).json({message:error.message,error})
        return
    }
}


        





export const deleteUser=async(req,res)=>{
    try {
        const{id}=req.params
        if(!id){
            throw new Error('user not found')

         }  
         const user = await user.findByIdAndDelete(id)
         if(!user){
            throw new Error('user not deleted')
         }
         res.status(200).json({message:'success',data:user})
    } catch (error){
        res.status(404).json({message:error.message,error})
        return
    }
}

