import { NavLink } from "react-router-dom"
import image404 from "../assets/404.svg"
export default function Page404(){
    return(
        <div className="container px-2 pb-5 mb-5 mx-2">
            <div className="row  ">
                <div className=" col-lg-6 col-sm-12  text-center " >
                    <img src={image404} className="object-fit-contain" ></img>

                </div>
                <div className="col-lg-6 col-sm-12 text-center d-flex flex-column align-items-center justify-content-center">
                    <h4 className="mt-4 fs-1">404! Page Not Found</h4>
                    <p className="text-muted">
                    The page you’re looking for doesn’t exist.
                    </p>
                    <p>
                        <NavLink to="/dashboard" >
                            Go back to dashboard
                        </NavLink>
                    </p>

                </div>

            </div>


        </div>
    )

}