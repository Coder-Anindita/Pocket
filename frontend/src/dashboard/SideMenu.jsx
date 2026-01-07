import { useState,useEffect } from "react"
import { NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { GiPayMoney } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import NavComponents from "./NavComponents";
export default function SideMenu(){
    const [username,setUsername]=useState("")
    const [imageURL,setImageURL]=useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/me", {
                credentials: "include",
                });

                const data = await res.json();

                setUsername(data.user.username);
                setImageURL(data.user.profileImage);
            } 
            catch (err) {
                console.error("Failed to fetch user", err);
            }
        };

        fetchUser();
    }, []);

    return(
        <div className="container text-center">
            <div className="text-center mb-3 mt-3">
                <img src={imageURL} className="rounded-circle" style={{width:"100px"}}/>
                <h1 className="fs-5">{username}</h1>
            </div>
            <div className="mt-3">
                <div className="my-3" >
                    <NavLink
                        to="/" className="border"
                        style={({ isActive }) => ({
                        display: "flex",
                        alignItems: "center",
                        justifyContent:"center",
                        gap: "20px",
                        padding: "14px 14px",
                        borderRadius: "10px",
                        textDecoration: "none",
                        backgroundColor: isActive ? "#0d6efd" : "#ffffff",
                        color: isActive ? "#ffffff" : "#000000",
                        fontWeight: 500,
                        })}
                    >
                        <MdOutlineDashboard  style={{fontSize:"23px" ,}}/>
                        
                        <span className="">Dashboard</span>
                        
                    </NavLink>
                
                
                
                </div>


                <div className="my-3" >
                    <NavLink
                        to="/income" className="border"
                        style={({ isActive }) => ({
                        display: "flex",
                        alignItems: "center",
                        justifyContent:"center",
                        gap: "20px",
                        padding: "14px 14px",
                        borderRadius: "10px",
                        textDecoration: "none",
                        backgroundColor: isActive ? "#0d6efd" : "#ffffff",
                        color: isActive ? "#ffffff" : "#000000",
                        fontWeight: 500,
                        })}
                    >
                        
                        <IoWalletOutline   style={{fontSize:"23px" ,}}/>
                        <span className="">Income</span>
                        
                    </NavLink>
                
                
                
                </div>


                <div className="my-3">
                    <NavLink
                        to="/expense" className="border"
                        style={({ isActive }) => ({
                        display: "flex",
                        alignItems: "center",
                        justifyContent:"center",
                        gap: "20px",
                        padding: "14px 14px",
                        borderRadius: "10px",
                        textDecoration: "none",
                        backgroundColor: isActive ? "#0d6efd" : "#ffffff",
                        color: isActive ? "#ffffff" : "#000000",
                        fontWeight: 500,
                        })}
                    >
                        
                        <GiPayMoney  style={{fontSize:"23px" ,}}/>
                        <span className="">Expense</span>
                        
                    </NavLink>
                
                
                
                </div>

                <div className="my-3">
                    <NavLink
                        to="/logout" className="border"
                        style={({ isActive }) => ({
                        display: "flex",
                        alignItems: "center",
                        justifyContent:"center",
                        gap: "20px",
                        padding: "14px 14px",
                        borderRadius: "10px",
                        textDecoration: "none",
                        backgroundColor: isActive ? "#0d6efd" : "#ffffff",
                        color: isActive ? "#ffffff" : "#000000",
                        fontWeight: 500,
                        })}
                    >
                        
                        <FiLogOut    style={{fontSize:"23px" ,}}/>
                        <span className="">Logout</span>
                        
                    </NavLink>
                
                
                
                </div>








            </div>
            

        </div>
    )
}