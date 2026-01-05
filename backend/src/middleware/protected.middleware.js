import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js"

const protectedFunction=async(req,res,next)=>{
    try{
        
        const token=req.cookies?.token
        if(!token){
            return res.status(401).json({message:"Unauthorized: No token provided"})
        }

        const decoded=jwt.verify(token,process.env.TOKEN_SECRET)

        const user=await User.findById(decoded.id).select("-password")
        if(!user){
            return res.status(401).json({message:"Unauthorized: No user found"})

        }
        next()
        




    }
    catch(err){
        return res.status(400).json({message:"Unauthorized: Invalid or expired token"})

    }
}
export default protectedFunction