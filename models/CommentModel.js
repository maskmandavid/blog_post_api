import mongoose,{Schema} from "mongoose";

const CommentSchema =new Schema({
    userId:{type:Schema.Types.ObjectId,ref:'User', required:true},
    blog:{type:Schema.Types.ObjectId,ref:'Blog',required:true},
    text:{type:String, required:true}
})


const Comment =mongoose.model('Comment',CommentSchema)

export default Comment;