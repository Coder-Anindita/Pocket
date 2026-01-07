export default function SmallCards({Component,type,amount,color}){
    return (
        <div className="container rounded-2 shadow border mt-3">
            <div className="row">
                <div className="col-6 rounded-circle text-center m-3 me-2" style={{fontSize:"30px", backgroundColor:`${color}`,width:"55px",height:"55px", color:"white"}}>
                    {<Component  />}

                </div>
                <div className="col-6 ms-2 mt-3 ">
                    <p className="fs-5 text-secondary mb-0">{type}</p>
                    <h1 className="fs-5 mt-0">{amount}</h1>
                </div>
                
            </div>

        </div>
    )
}