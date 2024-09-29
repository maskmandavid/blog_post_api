import mongoose,{Schema} from "mongoose";


const BlogSchema =new Schema({
title:{type:String, required:true},
body:{type:String, required:true},
image:{type:String, required:false},
author:{type:Schema.Types.ObjectId, ref:'User',required:true},
comments:{type:[Schema.Types.ObjectId], ref:'comment', default:[]},
status:{type:String, required:false,default:'published'}
})


const Blog = mongoose.model('Blog',BlogSchema)
export default Blog