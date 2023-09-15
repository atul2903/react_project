import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";

const Product=({post})=>{
    const [selected,setsel]=useState(false);
    const {list,setl,arr,cart,setcart}=useContext(AppContext);
  
    // console.log()
  
    function removeClick(item)
{       
    setcart(
        cart.filter(a=>a.id!==item.id)
    )
  
    setsel((prev)=>!prev);
}

    function addPost(item){
        
        setcart([
            ...cart,
            item
        ]
        )
    
        setsel((prev)=>!prev);
    }

    useEffect(()=>{
        setl(cart.length)
    },[cart])


    console.log(cart)
    // console.log(cart)

    let title=post.title.substr(0,15)
    let desc=post.description.substr(0,100);
    return(
        <div className="item">
        <div className="p-title">
        {
         title
        }</div>
            <div className="p-desc">
            {
              desc
            }
            </div>
            <div className="p-img">
                <img src={post.image} height='180px'/>
            </div>
        <div className="p-info">
            <p className="p-price"> {`₹ ${post.price}`}</p>
            

{
    selected?<button className="r-btn" onClick={()=>removeClick(post)}>Remove From Cart</button>:<button className="p-btn" onClick={()=>addPost(post)}>Add to Cart</button>
}
        </div>
        </div>
    )
}

export default Product;