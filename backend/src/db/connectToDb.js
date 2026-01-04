import mongoose from "mongoose"

const connectToDb=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`)
        
        console.log("Sucessfully connected to DB")

    }
    catch(err){
        throw(err)

    }


}
export default connectToDb