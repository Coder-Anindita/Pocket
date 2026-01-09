import {useState,useEffect} from "react"
import { NavLink } from "react-router-dom"
import { MdArrowRightAlt } from "react-icons/md";

export default function Card({Component,data=[],isExpense=true,URL="/expense"} ){


    return(
        <div className="container shadow border rounded-3 p-4">
            <div className="d-flex align-items-center ">
                {isExpense?(<h1 className="mb-0 fs-3 mb-4">Expense</h1>):(<h1 className="mb-0 fs-3 mb-4">Income</h1>)}
                

                <NavLink to={URL} className="ms-auto px-2 rounded text-center" style={{backgroundColor:"#eeeeee",textDecoration: "none"}}>
                    See All <MdArrowRightAlt />
                </NavLink>
            </div>
            
            {data.length===0?(
                <p className="text-center mt-4 ">
                    No recent {isExpense ? "expenses" : "income"}
                </p>
                
            ):(
            data.map(item => 
                (
                <div
                    key={item._id}
                    className="d-flex align-items-center  py-1"
                >
                    <p className="fs-4 me-3 ps-2 pt-2  text-cenetr rounded-circle " style={{backgroundColor:"#eeeeee",width:"50px",height:"50px"}}>{item.emoji}</p>
                    <div className="d-flex flex-column">
                        
                        <h6 className="mb-0">{item.source}</h6>
                        <small className="text-muted">
                        {new Date(item.date).toLocaleDateString()}
                        </small>
                    </div>

                
                    
                        <p className="ms-auto mb-0 fs-6 px-4  rounded" style={isExpense? {backgroundColor:"#ffdddd" ,color:"#ED1C24"}:{backgroundColor:"#e0f0e3" ,color:"#03C03C"}}>
                        ₹{item.amount.toLocaleString("en-IN")}
                        {<Component/>}
                        </p>
                    
                </div>
        )))}
        </div>
    )
}