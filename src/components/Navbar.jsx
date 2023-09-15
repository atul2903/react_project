import React, { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa/';
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";
import AppContextProvider, { AppContext } from "../Context/AppContext";
const Navbar = () => {
    const {list,setl}=useContext(AppContext);

   
    return (
        <div className="navbar">
            <div >
                <NavLink to='/'>
                    <div className="nav-img">
                        <img src={logo} height='60px' />
                    </div>
                </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to='/' className='navi' >
                        <div className="nav-home" >
                            Home
                        </div>
                    </NavLink>
                    <NavLink to='/cart'>
                        <div className="nav-icon-div">                   <FaShoppingCart className="nav-icon"/>
                                <div className="nav-num">{list}</div>
                        </div>
                        

                    </NavLink>


                </div>
            

        </div>
    )
}

export default Navbar;