import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggle } from "../redux/Slices/ModeSlice";
import { useState } from "react";

import { CiFilter } from "react-icons/ci";


const Navbar = () => {
  const {mode} = useSelector((state) => state);
  const dispatch = useDispatch();
 
 
  const modehandler = () => {
    
    dispatch(toggle(mode));
    
  };

  const categoryhandler = (event) => {
    
    
    
  };

  const { cart } = useSelector((state) => state);
  return (
    <div className="w-[100%]">
    
      <nav className=" flex justify-between  flex-wrap items-center  text-slate-200 h-20 max-w-6xl md:mx-auto mx-6">
        <NavLink to="/">
          <div className="ml-5">
            <img src="./logo.png" className="w-[180px]" alt="logo" />
          </div>
        </NavLink>

        <div className="flex justify-center items-center gap-x-2 font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <div>
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-3xl" />
              {cart?.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart?.length}
                </span>
              )}
            </div>
          </NavLink>                            
          
          {mode.light ? (<button onClick={modehandler}><MdOutlineNightlight className="text-3xl" /></button>):(<button onClick={modehandler}><MdOutlineLightMode  className="text-3xl" /></button>)}
          
          <div className="flex row">
          <CiFilter  className="text-2xl"/>
        <select  onChange={categoryhandler} title="Category " className=" bg-slate-900 text-center  text-slate-100" >
          <option   value="all">ALL</option>
          <option   value="men's clothing">Men's Clothing</option>
          <option   value="women's clothing">Women's Clothing</option>
          <option   value="jewelery">Jewellery</option>
          <option   value="electronics">Electronic's</option>
        </select>
        </div>
          
          
           
       
         
         
          
        </div>
      
        
        
        
      </nav>
    
    
    
    </div>
  );
};

export default Navbar;