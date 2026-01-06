import { useState,useEffect } from "react"
import { NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
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
            <div className="text-center">
                <img src={imageURL} className="rounded-circle" style={{width:"100px"}}/>
                <h1 className="fs-5">{username}</h1>
            </div>
            <div >
                <NavLink to="" className="" style={{backgroundColor:"#0d6efd"}}>
                    <div className=" rounded-3" >
                        <MdOutlineDashboard />
                        <span className="my-2 mx-3">Dashboard</span>
                    </div>
                </NavLink>
                
                
            </div>

        </div>
    )
}