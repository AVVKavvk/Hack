import React, { useState } from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import menu from '../assets/img/menu.svg'
import close from '../assets/img/close.svg'
function NavBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full text-white font-bold  text-lg gap-7 flex justify-between px-[30px] md:px-[100px] lg:px-[200px] items-center py-3 fixed top-0 z-20 bg-[#050816] ">
      <div class="flex justify-center items-center  gap-5">
        <img src={logo} alt="" width="50px " height="50px" />
        <h1>Team Name</h1>
      </div>

      <div class=" text-[#f3f3f3d3] hidden md:flex  gap-6 justify-between items-center ">
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/sehcdule" style={{ textDecoration: "none" }}>
          Sehcdule
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
         Login
        </Link>
      </div>
      <div class="md:hidden flex justify-between items-center  flex-col relative ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          class="w-[28px] h-[28px] object-contain cursor-pointer "
          onClick={() => setToggle(!toggle)}
        />{" "}
        
         <ul class={`${
            !toggle ? "hidden" : "flex"
          } p-6  black-gradient absolute top-7 flex flex-col -left-11  my-3  z-10 rounded-xl `}
        >
          
            <li
              class={` text-white text-[16px] font-josefin font-medium cursor-pointer transition-all duration-200 `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li
              class={` text-white text-[16px] font-poppins font-medium cursor-pointer transition-all duration-200 `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <Link to="/sehcdule" style={{ textDecoration: "none" }}>
                Sehcdule
              </Link>
            </li>
            <li
              class={` text-white text-[16px] font-poppins font-medium cursor-pointer transition-all duration-200 `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <Link to="login" style={{ textDecoration: "none" }}>
               Login
              </Link>
            </li>
            
      
    
    </ul>
    </div>
    </div>
  );
}

export default NavBar;
