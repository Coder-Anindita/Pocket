import { cookieOptions } from "../../utils/cookieOptions.js";
const logout=async(req,res)=>{
    try{
        return res.clearCookie("token",cookieOptions).status(200).json({message:"You are logged out sucessfully"})

    }catch(err){
        return res.status(500).json({message:err.message})

    }

}
export default logout