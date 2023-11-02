import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {FaBars, FaHome, FaTimes} from 'react-icons/fa'

const Header = () => {

  const Location = useLocation(); 
  const [isMobileMenuOpen, setMobileMenuOpen]= useState(false);
  const toggleMenu =() =>{ 
       setMobileMenuOpen(prev=> !prev) 
  };
  const isActive = (path) =>{  
    return Location.pathname === path 
      ? "text-red-500 font-semibold border-b border-red-500 w-fit":""
  }

  return ( 
    <>
        <nav className="w-full sm:flex hidden bg-pink-200 text-black p-4  top-10"> 
   
   <h1 className="ml-4 font-bold text-lg text-red-500 w-[50%] flex justify-start"><span><FaHome size={24}/></span> Logo </h1> 

   <div className=" w-[50%] flex gap-8"> 
     <Link to = "/" className={`font-semibold text-md text-red-500 hover:text-red-700 hover:  hover:border-b-2  ${isActive("/home")}`}is>Home</Link> 
     <Link to = "/about" className={`font-semibold text-md text-red-500 hover:text-red-700 hover: border-b hover:border-b-2 ${isActive("/about")}`}>About</Link>   
     <Link to = "/service" className={`font-semibold text-md text-red-500 hover:text-red-700 hover: border-b hover:border-b-2 ${isActive("/service")}`}>Service</Link> 
     <Link to = "/contact" className={`font-semibold text-md text-red-500 hover:text-red-700 hover: border-b hover:border-b-2 ${isActive("/contact")}`}>Contact</Link> 
 
   </div>
    
   </nav> 
   <div className='sm:hidden flex justify-between items-center px-8 py-4 bg-rose-300 w-full border-b '>
   <div className='flex justify-between w-full'>
   <h1>LOGO</h1>
    <button onClick={toggleMenu}>

      {isMobileMenuOpen ?
      <FaTimes /> : <FaBars />
      }
      

    </button> 
   </div>

    
   </div>
   {isMobileMenuOpen &&( 
      <div className='flex flex-col gap-2 bg-gray-200 px-8 py-2 font-semibold text-black-600 absolute top-0 h-screen w-[150px]'>
        <h1><FaHome size={60} /></h1>
     <Link to="/">Home</Link> 
     <Link to="/about">About</Link>
     <Link to="/service">Service</Link> 
     <Link to="/contact">Contact</Link> 
      </div> 
    )}
    </> 

  )
}

export default Header 