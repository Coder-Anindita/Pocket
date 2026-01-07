
import { NavLink } from "react-router-dom"
import { MdOutlineDashboard } from "react-icons/md";
export default function NavComponents({navigateToURL,name}){

    return(
        <div >
                <NavLink
                    to={navigateToURL} className="border"
                    style={({ isActive }) => ({
                    display: "flex",
                    alignItems: "center",
                    justifyContent:"center",
                    gap: "15px",
                    padding: "14px 14px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    backgroundColor: isActive ? "#0d6efd" : "#ffffff",
                    color: isActive ? "#ffffff" : "#000000",
                    fontWeight: 500,
                    })}
                >
                    
                    <MdOutlineDashboard  style={{fontSize:"23px" ,}}/>
                    <span className="">{name}</span>
                    
                </NavLink>
                
                
            </div>
    )
}