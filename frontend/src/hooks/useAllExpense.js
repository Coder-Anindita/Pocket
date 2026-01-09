import { useState,useEffect } from "react";


export default function useAllExpense(refresh){
    const [allExpense,setAllExpense]=useState([])
    useEffect(()=>{
        
            const fetchData=async()=>{
                try{
                    const expense=await fetch("https://pocket-vycm.onrender.com/api/expense",{
                        credentials:"include"
                    })
                    const expenseData=await expense.json()

                    setAllExpense(expenseData.allExpenses || [])
                }
                catch(err){
                    console.log("Some error in displaying",err)
                }


            }
            fetchData()

        
        

    },[refresh])
    return allExpense
    
}