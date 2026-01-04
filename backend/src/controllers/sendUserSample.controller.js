import { User } from "../models/user.model.js";

const sendUserSample=async(req,res,next)=>{
    const users = [
    {
        username: "anindita",
        email: "anindita@gmail.com",
        password: "123456",
        avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
        username: "rahul",
        email: "rahul@gmail.com",
        password: "123456",
        avatar: "https://i.pravatar.cc/150?img=2"
    }
    ];
    try{
        const updatedUser=await User.create(users)
        if(!updatedUser){
            return res.status(400).json({message:"Error in adding sample user"})
        }
        return res.status(200).json({message:"Sample users added successfuly"})
    }
    catch(err){
        return res.status(err.statusCode).json({message:err.error})
        

    }

}
export default sendUserSample