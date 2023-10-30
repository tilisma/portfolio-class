import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {

  const Location = useLocation();
  const isActive = (path) =>{  
    return Location.pathname === path 
      ? "text-red-500 font-semibold border-b border-red-500 w-fit":""
  }

  return ( 
    <nav className="w-full flex bg-pink-200 text-black p-4  top-10">
    <h1 className="ml-4 font-bold text-lg text-red-500 w-[50%] flex justify-start"> Logo </h1> 

    <div className=" w-[50%] flex gap-8"> 
      <Link to = "/" className={`font-semibold text-md text-red-500 hover:text-red-700 hover:  hover:border-b-2  ${isActive("/home")}`}is>Home</Link> 
      <Link to = "/about" className={`font-semibold text-md text-red-500 hover:text-red-700 hover: border-b hover:border-b-2 ${isActive("/about")}`}>About</Link>   
      <Link to = "/service" className={`font-semibold text-md text-red-500 hover:text-red-700 hover: border-b hover:border-b-2 ${isActive("/service")}`}>Service</Link> 
      <Link to = "/contact" className={`font-semibold text-md text-red-500 hover:text-red-700 hover: border-b hover:border-b-2 ${isActive("/contact")}`}>Contact</Link> 
  
    </div>
    </nav> 
  )
}

export default Header 