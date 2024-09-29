import express from "express";
import {getUser,getUsers,updateUser,deleteUser, creatUser, deleteAccount} from  '../controllers/userController.js'; 
import { adminAuth } from '../middlewares/authMiddleware.js';
import upload from "../middlewares/uploadimage.js";
const router =express.Router()

router.get('/',getUsers)
router.get('/:id',getUser)

router.post('/',adminAuth,upload.any(),creatUser)
router.put('/:id',upload.any(),updateUser)
router.delete('/user',deleteAccount)

router.delete('/:id',adminAuth,deleteUser)



export default router;