import mongoose from "mongoose"
const expenseSchema=new mongoose.Schema({
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
    source:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
        

    },
    emoji:{
        type:String,
        default:"💸"
    }

},{timestamps:true})

export const Expense=mongoose.model("Expense",expenseSchema)