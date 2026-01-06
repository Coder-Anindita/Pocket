import { Expense } from "../../models/expense.model.js";


const deleteExpense=async(req,res)=>{
    try{
        const {id}=req.params
        const existingExpense=await Expense.findById(id);
        if(!existingExpense){
            return res.status(400).json({message:"Sorry no such Expense found"})
        }
        const deletedExpense=await Expense.findByIdAndDelete(id).select("-password")
        if(!deletedExpense){
            return res.status(400).json({message:"Sorry no such Expense found"})
        }
        return res.status(200).json({message:"Expense deleted sucessfully"})


    }
    catch(err){
        throw(err)
        
    }





}
export default deleteExpense