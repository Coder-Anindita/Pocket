import mongoose from "mongoose"

import bcrypt from "bcrypt"

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        default:"https://res.cloudinary.com/duqw6udje/image/upload/v1767543185/Pocket_Dev/nlpftpkamkedl5qhyagt.jpg"

    },
    



        
    

},{timestamps:true})


userSchema.pre("save",async function(){
    if(!this.isModified("password")){
        return;
    }
    this.password=await bcrypt.hash(this.password,10)
    
})

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}
export const User=mongoose.model("User",userSchema)