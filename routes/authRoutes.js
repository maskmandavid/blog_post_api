import express from "express";
import { login } from "../controllers/authController.js";
import { creatUser } from "../controllers/userController.js";
import upload from "../middlewares/uploadimage.js";
const router=express.Router()

router.post('/login',login)

router.post('/signup',upload.any(),creatUser)

export default router;