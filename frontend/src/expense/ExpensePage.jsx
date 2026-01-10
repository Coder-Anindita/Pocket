
import Header from "../dashboard/Header.jsx"
import LineGraph from "./LineGraph.jsx";
import SideMenu from "../dashboard/SideMenu.jsx";
import ExpenseSources from "./ExpenseSources.jsx";
import { FaPlus } from "react-icons/fa6"
import { useState} from "react";
import AddExpenseModal from "./AddExpenseModal.jsx";
import useAllExpense from "../hooks/useAllExpense.js";






export default function ExpensePage(){
    const [showModal, setShowModal] = useState(false);
    const [refresh, setRefresh] = useState(false);//added this to rerender
    
    
    const expense=useAllExpense(refresh)
    
    

    
    return(
        <div className="px-3 mb-5">
            <div className="row">
                <Header/>

            </div>
            <div className="row ms-lg-1 ">
                <div className="col-lg-3 col-sm-12  rounded-2 border-end " >
                    <SideMenu/>
                </div>
                <div className="col-lg-9 col-sm-12 ">
                    <div className="row mt-3 mx-2 p-5 border rounded-2 shadow  ">
                        <div className="d-flex " >
                            <div  className="mb-2">
                                <h1 className="fs-4 mb-0 ">Expense Overview</h1>
                                <p className="text-secondary " style={{fontSize:"13px"}}>Track your spending over time and gain insights into where your money goes.</p>
                            </div>
                            <div className=" ms-auto  " style={{fontSize:"13px"}}>
                                <button className="btn btn-primary  " style={{height:"35px"}} onClick={()=>setShowModal(true)} ><FaPlus /> Add Expense</button>
                                <AddExpenseModal
                                    show={showModal}
                                    onClose={() => {setShowModal(false); setRefresh(prev => !prev); }}
                                    
                                />

                            </div>
                        </div>
                        <div className="" style={{height:"300px"}}>
                            <LineGraph allExpenses={expense}/>
                        </div>
                    
                    
                    
                    


                    </div>
                    <div className="row mt-5 ">
                        <div className=""><ExpenseSources data={expense} onSave={()=>{setRefresh(prev => !prev)}}/></div>
                    </div>
                </div>


            </div>

        </div>
    )
}