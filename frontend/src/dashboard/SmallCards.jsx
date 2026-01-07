export default function SmallCards({Component,type,amount,color}){
    return (
        <div className="container rounded-2 shadow border mt-3">
            <div className="row">
                <div className="col-6 rounded-circle text-center m-2 mt-3 " style={{fontSize:"30px", backgroundColor:`${color}`,width:"55px",height:"55px", color:"white"}}>
                    {<Component  />}

                </div>
                <div className="col-6  mt-3 ms-1 mb-2 ">
                    <p className="fs-5 text-secondary mb-0">{type}</p>
                    <h1 className="fs-5 mt-0">₹ {amount.toLocaleString("en-IN")}</h1>
                </div>
                
            </div>

        </div>
    )
}