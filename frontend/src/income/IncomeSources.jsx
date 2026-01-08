
import { NavLink } from "react-router-dom"
import { RiDeleteBin6Line } from "react-icons/ri"
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
export default function IncomeSources({data=[]} ){


    return(
        <div className="container shadow border rounded-3 p-4">
            <div className="d-flex align-items-center ">
                <h1 className="mb-0 fs-3 mb-4">Income Sources</h1>
                
            </div>
            
            {data.length===0?(
                <p className="text-center mt-4 ">
                    No recent income
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

                
                        <div className="ms-auto mb-0 d-flex">
                            <span className="px-3 " style={{fontSize:"20px"}}>
                                <RiDeleteBin6Line />
                            </span>
                            <p className=" mb-0 fs-6 px-4  rounded" style={{backgroundColor:"#e0f0e3" ,color:"#03C03C"}}>
                            
                                ₹{item.amount.toLocaleString("en-IN")} <HiMiniArrowTrendingUp/>
                        
                            </p>
                        </div>
                        
                    
                </div>
        )))}
        </div>
    )
}