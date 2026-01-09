import { useState,useEffect } from "react";

export default function useRecentIncome(){
    const [income,setIncome]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const resIncome=await fetch("https://pocket-vycm.onrender.com/api/income?limit=4",{
                    credentials:"include",
                })
                const incomeData=await resIncome.json()
                setIncome(incomeData.allIncomes || [])


            }
            catch(err){
                console.error("Dashboard fetch error", err);
            }

        }
        fetchData();
        

    },[])
    return income

    
}