import { useState,useEffect } from "react"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ConfirmLogout from "../components/logout/ConfirmLogout";
import { MdOutlineDashboard } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { GiPayMoney } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";

export default function SideMenu(){
    const [username,setUsername]=useState("")
    const [imageURL,setImageURL]=useState(null)
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();


    const handleLogout = async () => {
        try {
            const res=await fetch("https://pocket-vycm.onrender.com/api/auth/logout", {
                method: "POST",
                credentials: "include",
            });
            if(res.ok){
                toast.success("Logged out successfully")
                navigate("/login");
            }
            else{
                toast.error("Try again :)")

            }

            
        } catch (err) {
            toast.error("OOPS! Some error occured :)")
            console.error("Logout failed", err);
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("https://pocket-vycm.onrender.com/api/me", {
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
                        to="/dashboard" className="border"
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

                <div
                    className="border my-3"
                    onClick={() => setShowLogout(true)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "20px",
                        padding: "14px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontWeight: 500,
                    }}
                >
                    <FiLogOut style={{ fontSize: "23px" }} />
                    <span>Logout</span>
                    
                </div>
                <ConfirmLogout
                        show={showLogout}
                        onClose={() => setShowLogout(false)}
                        onConfirm={handleLogout}
                />









            </div>
            

        </div>
    )
}