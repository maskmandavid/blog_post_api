import express from "express";
import {getComment,getComments,updateComment,deleteComment, creatComment, getCommentsByBlog} from  '../controllers/commentController.js'; 
const router =express.Router()

router.get('/',getComments)
router.get('/:id',getComment)
router.get('/blog/:blogId',getCommentsByBlog)

router.post('/',creatComment)
router.put('/:id',updateComment)
router.delete('/:id',deleteComment)

export default router;