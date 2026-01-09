import { useEffect,useState } from "react";

export default function useDashboardData(){
    const [income,setIncome]=useState([]);
    const [expense,setExpense]=useState([]);
    

    useEffect(() => {
    const fetchData = async () => {
      try {
        const incomeRes = await fetch("https://pocket-vycm.onrender.com/api/income", {
          credentials: "include",
        });
        const incomeData = await incomeRes.json();
        setIncome(incomeData.allIncomes || []);
        
        const expenseRes = await fetch("https://pocket-vycm.onrender.com/api/expense", {
          credentials: "include",
        });
        const expenseData = await expenseRes.json();
        setExpense(expenseData.allExpenses || []);
        
      } catch (err) {
        console.error("Dashboard fetch error", err);
      } 
    };

    fetchData();
    
  }, []);


    return{income,expense}
}