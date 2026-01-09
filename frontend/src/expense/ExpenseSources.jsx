
import { RiDeleteBin6Line } from "react-icons/ri"
import { IoMdTrendingDown } from "react-icons/io";
import { toast } from "react-toastify";
import { useState } from "react";
import ConfirmDeleteModal from "../income/ConfirmDeleteModal";
export default function ExpenseSources({data=[],onSave} ){
    const [showConfirm, setShowConfirm] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const onDeleteHandler=async()=>{
        
        try{
            const res=await fetch(`http://localhost:3000/api/expense/${selectedId}`,{
                method:"DELETE",
                credentials: "include",
            

            },
            
            
            

            )
            if(res.ok){
                toast.success("Expense deleted successfully")
                onSave()
            }
            else{
                toast.error("Failed to delete")
            }
            
            setShowConfirm(false)
            setSelectedId(null)
        }
        catch(err){
            toast.error("OOPS! Some error occured!")
            console.log(err)

        }

    }


    return(
        <div className="container shadow border rounded-3 p-4">
            <div className="d-flex align-items-center ">
                <h1 className="mb-0 fs-3 mb-4">Expense Sources</h1>
                
            </div>
            
            {data.length===0?(
                <p className="text-center mt-4 ">
                    No recent expense
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
                            <span className="px-3 btn btn-light me-3" style={{fontSize:"20px"}} onClick={()=>{setSelectedId(item._id);setShowConfirm(true);}}>
                                <RiDeleteBin6Line />
                            </span>
                            
                            <p className=" mb-0 fs-6 px-4  rounded" style={{backgroundColor:"#ffdddd" ,color:"#ED1C24"}}>
                            
                                ₹{item.amount.toLocaleString("en-IN")} <IoMdTrendingDown />
                        
                            </p>
                        </div>

                        
                    
                </div>
        )))}
            <ConfirmDeleteModal
                show={showConfirm}
                onClose={() => setShowConfirm(false)}
                onConfirm={onDeleteHandler}
            />
        </div>
    )
}