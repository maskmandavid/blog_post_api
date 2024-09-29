import mongoose, {Schema} from "mongoose";

const UserSchema=new Schema({
userName:{type:String,required:true, unique:true},
firstName:{type:String,required:true},
lastName:{type:String,required:true},
email:{type:String,required:true, unique:true},
password:{type:String,required:true},
profileImg:{type:String,required:false},
role:{type:String,required:true,emun:['user','admin'],default:'user'}
})

const User =mongoose.model('User',UserSchema)
export default User;


