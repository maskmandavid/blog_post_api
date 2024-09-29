import Comment from "../models/CommentModel.js"

export const getComments =async(req,res)=>{
    try{
        const comments = await Comment.find().populate('blog') 
        if(!comments){
            throw new Error('error getting comments')
            

        }
       

        res.status(200).json({message:'success',data:comments})
    }catch (error) {
        res.status(404).json({message:error.message,error})
        return

    }
}

export const getCommentsByBlog =async(req,res)=>{
    try {
        const{blogId}=req.params
        const comments = await Comment.find({blog:blogId}).populate('blog')
        if(!comments){
            throw new Error('error getting comments')
        }

        res.status(200).json({message:'success',data:comments})
    } catch (error) {
        res.status(404).json({message:error.message,error})
        return
    }
}
export const creatComment =async(req,res)=>{
    try {
        const {user,blog,text}=req.body
        console.log(req.body);
        // check comment credentials
        if(!user||!blog||!text){
            throw new Error ('check credentials')
        }

        const newComment = new Comment({user,blog,text})
        const comment = await newComment.save()
        if(!comment){
            throw new Error ('error creating comment')

        }

        res.status(201).json({message:'success',data:comment})
        
    
    } catch (error) {
        res.status(404).json({message:error.message,error})
        return
    }        
}

export const getComment =async(req,res)=>{
    try {
        const {id}=req.params
        if (!id){
            throw new Error('comment Id not found')
        }

        const comment = await Comment.findById(id)

        if(!comment) {
            throw new Error ('comment not found')
        }

        res.status(200).json({message:'success',data:comment})
    } catch (error) {
        res.status(404).json({message:error.message,error})
        return
    }
}



export const updateComment =async(req,res)=>{
    try{
        const {id}=req.params
        const body=req.body
        if(!id||!body){
            throw new Error('comment Id not found')
        }
        const comment = await Comment.findByIdAndUpdate(id,body,{new:true})
        if(!comment){
            throw new Error('comment not updated')
        }
        res.status(200).json({message:'success',data:comment})
    
    } catch (error) {
        res.status(404).json({message:error.message,error})
        return
    }
}




export const deleteComment =async(req,res)=>{
    try {
        const{id}=req.params
        if(!id){
            throw new Error('comment Id not found')

         }  
         const comment =await Comment.findByIdAndDelete(id)
         if(!comment){
            throw new Error('comment not deleted')
         }
         res.status(200).json({message:'success',data:comment})
    } catch (error){
        res.status(404).json({message:error.message,error})
    }
}


