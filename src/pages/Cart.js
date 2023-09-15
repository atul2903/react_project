import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import CartItem from "../components/CartItem";

const Cart =()=>{

    const [price,totalp]=useState(0);
    const {cart,list} =useContext(AppContext);

    useEffect(()=>{
        totalp(cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0))
    },[cart])
    return(
        <div>
            <div>
{
    cart.map((i)=>{
     
        return <CartItem item={i}/>
        
    })
}
            </div>


            <div>
YOUR CART
SUMMARY
TOTAL Items :{list}


Total Amount :{price}


            </div>
        </div>
    )
}

export default Cart;