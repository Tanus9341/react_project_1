import{ Menu, X }from "lucide-react";
import { useState } from "react";



import  logo from "../assets/logo.png"; 
import { navItems } from "../constants";
import Login from "./login.jsx";
const Navbar = () => {  
  const[mobailDrawerOpen,setMobileDrawerOpen]=useState(false);

  const togglenavbar=()=>{
    setMobileDrawerOpen(!mobailDrawerOpen);
  }
  return (
    <div>
   <nav  className=" sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
   <div className="container px-4 mx-auto relative text-sm">
    <div className="flex justify-between item-center">
        <div className="flex item-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt=""/>
            <span className="text-xl tracking-tight">Virtual</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    { navItems.map((item, index)=>(
                      <li key={index}>
                        <a href={item.href}>{item.label}</a>

                      </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 item-center">
                  <a href="#" className="py-2 px-3 border rounded-md">
                    sign in
                  </a>
                  
                  <a className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 justify-center text-center item-center rouded-md" 
                  onClick={() =>
                   <Login/>
                  } 
                  >
                    create an account
                  </a>
                
                  
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                  <button onClick={togglenavbar}>
                    {mobailDrawerOpen ? <X />:<Menu />}
                  </button>
                </div>
                </div> 
                {mobailDrawerOpen &&(
                 <div className="fixed-right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-centerlg:hidden">
                  <ul>
                    {navItems.map((item ,index)=>(
                      <li key={index} className="py-4">
                        <a href= {item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
<div className="flex space-x-6">
  <a href="#" className="py-2 px-3 border rounded-md">
    sign In
  </a>
  <a href="#" className="py-2 px-3 border rounded-md bg-gradient-to-r from bg-orange-500 to-orange-800">
    create an account
  </a>
</div>
                 </div>
                )}
                </div>
                    </nav>
    </div>
  )
}

export default Navbar
