import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/Action";
const Shop = () =>{
    const dispatch  = useDispatch();
    const {withdrawMoney,depositeMoney}= bindActionCreators(actionCreators,dispatch)
    return(
        <div>
            <h2> Deposite / Withdrwal</h2>
            {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositeMoney(500))}}>+</button>
            Update Money
            <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators. withdrwalMoney(500))}}>-</button> */}
            <button className="btn btn-primary mx-2" onClick={()=>{depositeMoney(500)}}>+</button>
            Update Money
            <button className="btn btn-primary mx-2" onClick={()=>{ withdrawMoney(500)}}>-</button>

        </div>
    )
}
export default Shop;