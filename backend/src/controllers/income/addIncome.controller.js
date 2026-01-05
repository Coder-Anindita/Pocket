import { Income } from "../../models/income.model.js"

const addIncome=async(req,res)=>{
    try{
        const {category,amount,date}=req.body
        if(!category){
            return res.status(400).json({message:"Category is required"})
        }
        if(!amount){
            return res.status(400).json({message:"Amount is required"})
        }
        if(!date){
            return res.status(400).json({message:"Date is required"})
        }

        const newIncome=await Income.create({user:req.user._id,category,amount,date})
        return res.status(200).json({message:"Income added Sucessfully"})

        
    }
    catch(err){
        //return res.status(500).json({message:"Error while adding income"})
        throw(err)

    }
    

}
export default addIncome