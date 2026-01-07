import Header from "./Header";
import SideMenu from "./SideMenu";
import { CiCreditCard1 } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { GiPayMoney } from "react-icons/gi";
import SmallCards from "./SmallCards";

export default function DashboardPage(){
    return(
        <div className="">
            <div className="row">
                <Header/>

            </div>
            <div className="row ms-lg-1 ">
                <div className="col-lg-3 col-sm-12  rounded-2 border-end " >
                    <SideMenu/>
                </div>
                <div className="col-lg-9 col-sm-12">
                    <div className="row">
                        <div className="col">
                            <SmallCards Component={CiCreditCard1 } type={"Total Balance"} amount={"4000"} color={"#0d6efd"}/>

                        </div>
                        <div className="col">
                            <SmallCards Component={IoWalletOutline} type={"Total Income"} amount={"10000"} color={"#FFA500"}/>
                        </div>
                        <div className="col">
                            <SmallCards Component={GiPayMoney} type={"Total Expense"} amount={"6000"} color={"#F40D30"}/>

                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}