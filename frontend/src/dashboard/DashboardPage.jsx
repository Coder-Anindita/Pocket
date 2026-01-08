import Header from "./Header";
import SideMenu from "./SideMenu";
import { CiCreditCard1 } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { GiPayMoney } from "react-icons/gi";
import { IoMdTrendingDown } from "react-icons/io";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import SmallCards from "./SmallCards";
import useDashboardData from "../hooks/useDashboardData.js";
import Card from "./Card.jsx";
import { useEffect } from "react";
import useRecentExpense from "../hooks/useRecentExpense.js";
import useRecentIncome from "../hooks/useRecentIncome.js";
import ExpenseBarChart from "./ExpenseBarChart.jsx";
import IncomeBarChart from "./IncomeBarChart.jsx";
import FinancialOverview from "./FinancialOverview.jsx";

export default function DashboardPage(){
    const {income,expense}=useDashboardData()
    let totalIncome=0;
    income.forEach(item=>{
        totalIncome+=(item.amount)
    })

    let totalExpense=0;
    expense.forEach(item=>{
        totalExpense+=item.amount
    })



    const recentExpense=useRecentExpense()
    
    const recentIncome=useRecentIncome()





    const balance=totalIncome-totalExpense
    return(
        <div className="px-3 mb-5">
            <div className="row">
                <Header/>

            </div>
            <div className="row ms-lg-1 ">
                <div className="col-lg-3 col-sm-12  rounded-2 border-end " >
                    <SideMenu/>
                </div>
                <div className="col-lg-9 col-sm-12">
                    
                    <div className="row">
                        <div className="col">
                            <SmallCards Component={CiCreditCard1 } type={"Total Balance"} amount={balance} color={"#0d6efd"}/>

                        </div>
                        <div className="col">
                            <SmallCards Component={IoWalletOutline} type={"Total Income"} amount={totalIncome} color={"#FFA500"}/>
                        </div>
                        <div className="col">
                            <SmallCards Component={GiPayMoney} type={"Total Expense"} amount={totalExpense} color={"#F40D30"}/>

                        </div>
                    </div>
                    <div className="row mt-5 mb-4 ">
                        <h1 className="fs-4 text-center pb-1">Financial Overview</h1>
                        <FinancialOverview income={totalIncome} expense={totalExpense} />

                    </div>
                    <div className="row ">
                        <div className="col-lg-6 col-sm-12 mt-4">
                            <Card Component={IoMdTrendingDown} data={recentExpense} isExpense={true}/>
                            

                        </div>
                        <div className="col-lg-6 col-sm-12 mt-5">
                            <div className="container border shadow m-2 p-4" >
                                <h1 className="text-center fs-5">Recent Expenses</h1>
                                <ExpenseBarChart data={recentExpense} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 mt-4">
                                <Card Component={HiMiniArrowTrendingUp } data={recentIncome} isExpense={false}/>
                            </div>
                            <div className="col-lg-6 col-sm-12 mt-5">
                                <div className="container border shadow m-2 p-4" >
                                    <h1 className="text-center fs-5">Recent Incomes</h1>
                                    <IncomeBarChart data={recentIncome} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}