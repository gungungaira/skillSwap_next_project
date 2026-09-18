import mongoose from "mongoose";

const mySchema=new mongoose.Schema({
    name:{
        type:String,
         required: [true, "Enter your name"],
    },
    email:{
        type:String,
         required: [true, "Enter your email"],
    },
    password:{
        type:String,
         required: [true, "Enter your password"],
    },
})

const User=mongoose.models.User || mongoose.model('User',mySchema)
export default User;