import logo from "../assets/logo.svg"


export default function Header(){
    return(
        <div className="border-bottom">
            <div className="row">
                
                    <div>
                        <img src={logo} className="object-fit-contain " style={{width:"140px"}}></img>
                    </div>
                
            </div>

        </div>
    )
}