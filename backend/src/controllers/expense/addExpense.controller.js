import { Expense } from "../../models/expense.model.js";


const addExpense=async(req,res)=>{
    try{
        const {source,amount,date,emoji}=req.body
        if(!source){
            return res.status(400).json({message:"source is required"})
        }
        if(!amount){
            return res.status(400).json({message:"Amount is required"})
        }
        if(!date){
            return res.status(400).json({message:"Date is required"})
        }
        if(!emoji){
            return res.status(400).json({message:"Emoji is required"})

        }

        const expense=await Expense.create({emoji:emoji,source:source,amount:amount,date:date,user:req.user._id})
        return res.status(200).json({message:"Expense added sucessfully"})
        
    }
    catch(err){
        return res.status(500).json({message:"Error in adding expense"})

    }

}
export default addExpense