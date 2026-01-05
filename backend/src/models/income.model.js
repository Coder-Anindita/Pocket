import mongoose from "mongoose"


const incomeSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    amount:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type:String,
        required:true
    
    },
    date:{
        type:Date,
        default:Date.now,
        

    },
    emoji:{
        type:String
    }

},{timestamps:true})

export const Income=mongoose.model("Income",incomeSchema)