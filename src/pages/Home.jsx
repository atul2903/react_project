import React, { useContext, useEffect, useState } from "react";
import Product from "../components/Product";
import { AppContext } from "../Context/AppContext";

const Home=()=>{
    
    const API_URL="https://fakestoreapi.com/products";

    const {fetchPosts,load,setload,data,setd}=useContext(AppContext);

    useEffect(()=>{
        fetchPosts(API_URL)
    },[])
    // console.log(data);
    return(
       
            <div className="products" >
            {
                load?(<div class="custom-loader"></div>):
                data.map((post)=>{
                   return( 
                    <Product key={post.id} post={post}/>
                )
                })
            }
            </div>
        
    )
}

export default Home;