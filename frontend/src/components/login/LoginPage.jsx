import Login from "./Login";


export default function LoginPage(){
    return(
        <div className="container">
            
            <div className="row ">
                <div className="col-sm-12 col-lg-6 ">
                    <div>
                        <img src="public/images/logo.svg" className="object-fit-contain " style={{width:"150px"}}></img>
                    </div>
                    <img src="public/images/Hero1.svg" className="object-fit-contain mt-2" style={{width:"95%"}}></img>

                </div>
                <div className="col-sm-12 col-lg-6 mt-5   pt-lg-5 px-lg-5 pb-5">
                    <Login></Login>
                </div>
            </div>
        </div>
    )
}