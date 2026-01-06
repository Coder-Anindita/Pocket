import { Income } from "../../models/income.model.js";


const allIncome=async(req,res)=>{
    try{
        const allIncomes=await Income.find({user:req.user._id})
        if(!allIncomes){
            return res.status(400).json("No income found")
        }
        if(allIncomes.length===0){
            return res.status(400).json({message:"No income found"})
        }
        return res.status(200).json({message:"All income retrived sucessfully",allIncomes:allIncomes})

    }
    catch(err){
        return res.status(500).json({message:"Some error occured"})

    }
    

}
export default allIncome