import { User } from "../../models/user.model.js";

import bcrypt from "bcrypt"

const signup=async(req,res,next)=>{
    try{
        let pathUrl="https://res.cloudinary.com/duqw6udje/image/upload/v1767543185/Pocket_Dev/nlpftpkamkedl5qhyagt.jpg"
        if(req.file){
            pathUrl=req.file.path

        }
        
        


        const {username,email,password}=req.body
        //validating the req body
        if(!username){
            return res.status(400).json({message:"Username is required"})
        }
        if(!email){
            return res.status(400).json({message:"email is required"})
        }
        if(!password){
            return res.status(400).json({message:"password is required"})
        }
        //hashing the password got
        //const hashedPassword=await bcrypt.hash(password,10)
        //checking if user exist
        const existingUser=await User.findOne({email:email})
        if(existingUser){
            return res.status(400).json({message:"User already exsist"})
        }

        const newUser=await User.create({username:username,password,email:email,profileImage:pathUrl})
        res.status(200).json({message:"User signed up sucessfully"})

    }
    catch(err){
        throw(err)

    }
    

    


}
export default signup