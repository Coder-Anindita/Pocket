import { useEffect,useState } from "react";

export default function useRecentExpense(){
    const [expense,setExpense]=useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const expenseRes = await fetch("http://localhost:3000/api/expense?limit=4", {
                credentials:"include",
                });
                const expenseData = await expenseRes.json();
                
                setExpense(expenseData.allExpenses || []);
                

                
            } 
            catch (err) {
                console.error("Dashboard fetch error", err);
            } 

        };
    

        fetchData()
        
    
    
    }, []);


    return expense
}