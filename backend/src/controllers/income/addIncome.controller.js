import { Income } from "../../models/income.model.js"

const addIncome=async(req,res)=>{
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


        const newIncome=await Income.create({user:req.user._id,source,amount,date,emoji})
        return res.status(200).json({message:"Income added Sucessfully",newIncome:newIncome})

        
    }
    catch(err){
        //return res.status(500).json({message:"Error while adding income"})
        throw(err)

    }
    

}
export default addIncome