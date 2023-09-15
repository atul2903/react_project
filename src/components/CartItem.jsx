import React from "react";
import {AiTwotoneDelete} from 'react-icons/ai';

const CartItem =({item})=>{

    return(
        <div className="cart-main">
<div className="cart-i">
    <img src={item.image} className="cart-img" />
</div>
<div className="cart-info">
    <div>
        {item.title}
    </div>
    <div>
        {item.description}
    </div>
    <div className="cart-foot">
       <div>
        {item.price}
       </div>
       <div>
       <AiTwotoneDelete/>
       </div>
    </div>
</div>
        </div>
    )
}


export default CartItem;