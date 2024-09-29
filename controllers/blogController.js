import Blog from "../models/BlogModel.js";

export const getBlogs =async(req,res)=>{
    try{
        const blogs = await Blog.find().populate('author')
        if(!blogs){
            throw new Error('error getting blogs')
            

        }

        res.status(200).json({message:'success',data:blogs})
    }catch (error) {
        res.status(404).json({message:error.message,error})
        return

    }
}
export const creatBlog =async(req,res)=>{ 
    try {
        //title:
        //body:
        //image:
        //author:
        //Comment,
        //status:
    const {title,body,comments,status}=req.body
    const author =req.user._doc._id



    const images=req.files
        const image=images[0].filename
    // check blog credentials
    if(!title||!body ||!author){
        throw new Error('check credentials')
    }

    const newBlog= new Blog(
        { title,body,author,comments,status,image}
    )
    const blog = await newBlog.save()
    if(!blog){
        throw new Error ('error creating blogs')

    }

    res.status(201).json({message:'success',data:blog})
    

} catch (error) {
    res.status(404).json({message:error.message,error})
}        }

export const getBlog =async(req,res)=>{
    try {
        const {id}=req.params
        if (!id){
            throw new Error('blog id not found')
        }

        const blog = await Blog.findById(id)

        if(!blog) {
            throw new Error ('blog not found')
        }

        res.status(200).json({message:'success',data:blog})
    } catch (error) {
        res.status(404).json({message:error.message,error})
        return
    }
}



export const updateBlog =async(req,res)=>{
    try{
        const {id}=req.params
        const body=req.body
        const images=req.files

        if(images[0]){
            body.image =images[0].filename
        }

        if(!id||!body){
            throw new Error('Blog Id or Data not found')
        }
        const blog = await Blog.findByIdAndUpdate(id,body,{new:true})

        if(!blog){
            throw new Error('blog not updated')
        }
        res.status(200).json({message:'success',data:blog})

    } catch (error){
        res.status(404).json({message:error.message,error})
        return
    }
}
      



export const deleteBlog =async(req,res)=>{
    try {
        const{id}=req.params
        if(!id){
            throw new Error('blog not found')

         }  
         const blog = await Blog.findByIdAndDelete(id)
         if(!blog){
            throw new Error('blog not deleted')
         }
         res.status(200).json({message:'success',data:blog})
    } catch (error){
        res.status(404).json({message:error.message,error})
    }
}

