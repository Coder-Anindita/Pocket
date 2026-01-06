import { Income } from "../../models/income.model.js";


const deleteIncome=async(req,res)=>{
    try{
        const {id}=req.params
        const existingIncome=await Income.findById(id);
        if(!existingIncome){
            return res.status(400).json({message:"Sorry no such income found"})
        }
        const deletedIncome=await Income.findByIdAndDelete(id).select("-password")
        if(!deletedIncome){
            return res.status(400).json({message:"Sorry no such income found"})
        }
        return res.status(200).json({message:"Income deleted sucessfully"})


    }
    catch(err){
        throw(err)
        
    }





}
export default deleteIncome