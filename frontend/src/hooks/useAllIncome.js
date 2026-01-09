import { useState,useEffect } from "react";


export default function useAllIncome(refresh){
    const [allIncome,setAllIncome]=useState([])
    useEffect(()=>{
        
            const fetchData=async()=>{
                try{
                    const income=await fetch("https://pocket-vycm.onrender.com/api/income",{
                        credentials:"include"
                    })
                    const incomeData=await income.json()

                    setAllIncome(incomeData.allIncomes || [])
                }
                catch(err){
                    console.log("Some error in displaying",err)
                }


            }
            fetchData()

        
        

    },[refresh])
    return allIncome
    
}