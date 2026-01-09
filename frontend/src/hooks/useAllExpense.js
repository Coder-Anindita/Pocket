import { useState,useEffect } from "react";


export default function useAllExpense(refresh){
    const [allExpense,setAllExpense]=useState([])
    useEffect(()=>{
        
            const fetchData=async()=>{
                try{
                    const expense=await fetch("http://localhost:3000/api/expense",{
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