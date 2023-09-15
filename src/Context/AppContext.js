import { createContext, useContext, useState } from "react";

export const AppContext= createContext();

function AppContextProvider({children}){
    const [cart,setcart]=useState([]);
    const [list,setl]=useState(0);
    const [data,setd]=useState([]);
    const [load,setload]=useState(false);


    //api call function
      async function fetchPosts(API_URL){
        setload(true);
        try{
            let res=await fetch(API_URL);
          const d=await res.json();
          setd(d);
        }catch{
            console.log("error in api fetch");
        }
        setload(false)
    }
   
   
   
   
   
    const value={
        cart,
        setcart,
       
        fetchPosts,
        data,
        setd,
        load,
        setload,
        list,
        setl
    }


    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;