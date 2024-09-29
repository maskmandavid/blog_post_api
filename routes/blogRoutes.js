import express from "express"
import {getBlog,getBlogs,updateBlog,deleteBlog, creatBlog} from  '../controllers/blogController.js';

import upload from "../middlewares/uploadimage.js";



const router =express.Router()

router.get('/',getBlogs)
router.get('/:id',getBlog)

router.post('/',upload.any(),creatBlog)
router.put('/:id',upload.any(),updateBlog)
router.delete('/:id',deleteBlog)

export default router;