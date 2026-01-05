import bcrypt from "bcrypt"
import { User } from "../../models/user.model.js"
import generateToken from "../../utils/generateToken.js"
import { cookieOptions } from "../../utils/cookieOptions.js"


const login=async (req,res)=>{
    try{
        const {email,password}=req.body
        if(!email){
            return res.status(400).json({message:"Email is required"})
        }
        if(!password){
            return res.status(400).json({message:"Password is required"})
        }

        const existingUser=await User.findOne({email})
        if(!existingUser){
            return res.status(400).json({message:"No user found"})
        }
        

        const isPasswordCorrect=await bcrypt.compare(password,existingUser.password)
        if(!isPasswordCorrect){
            return res.status(400).json({message:"The password is incorrect"})
        }
        
        const token = generateToken(existingUser._id);
        return res.cookie("token",token,cookieOptions)
        .status(200).json({message:"User logged in sucessfully"})

    }
    catch(err){
        return res.status(500).json({ message: err.message });

    }

}
export default login