import Signup from "./SignUp";
import hero from "../../assets/Hero.jpg"
import logo from "../../assets/logo.svg"
export default function SignupPage(){
    return(
        <div className="container">
            
            <div className="row">
                <div className="col-sm-12 col-lg-6 ">
                    <div>
                        <img src={logo} className="object-fit-contain " style={{width:"150px"}}></img>
                    </div>
                    <img src={hero} className="object-fit-contain mt-5 pt-3" style={{width:"100%"}}></img>

                </div>
                <div className="col-sm-12 col-lg-6 ">
                    <Signup></Signup>
                </div>
            </div>
        </div>
    )
}