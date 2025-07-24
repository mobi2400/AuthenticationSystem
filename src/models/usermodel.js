import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'please provide the username'],
        unique:true,
    },
    email:{
        type:String,
        required:[true,'please provide the email'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'please provide the password'],
        unique:true,
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    forgotPaswordToken:String,
    forgotPasswordTokenexpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,


})

const User = mongoose.models.users || mongoose.model("user",userSchema);

export default User;