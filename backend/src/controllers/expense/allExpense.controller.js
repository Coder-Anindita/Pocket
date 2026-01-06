import { Expense } from "../../models/expense.model.js";


const allExpense=async(req,res)=>{
    try{
        const allExpenses=await Expense.find({user:req.user._id})
        if(!allExpenses){
            return res.status(400).json({message:"No expenses found"})
        }
        if(allExpenses.length===0){
            return res.status(400).json({message:"No expense found"})
        }
        return res.status(200).json({message:"All expenses retrived sucessfully",allExpenses:allExpenses})
    }
    catch(err){
        return res.status(500).json({message:"Error while retriving data"})

    }

}
export default allExpense