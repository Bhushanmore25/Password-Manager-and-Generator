import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <ul className='flex justify-around h-14 items-center bg-slate-700'>
          <li><span className='text-green-600 text-2xl font-bold '>&lt;</span><span className='font-bold text-xl'>Pass</span><span className='text-green-600 text-xl font-bold '>OP/</span><span className='text-green-600 text-2xl font-bold '>&gt;</span></li>
          <NavLink to="/" className={(e)=>{return e.isActive?"grey":""}}><li className='w-24 flex justify-center items-center font-bold text-md h-14'>Manage</li></NavLink>
          <NavLink to="/generate" className={(e)=>{return e.isActive?"grey":""}}><li className='w-24 flex justify-center items-center font-bold text-md h-14'>Generate</li></NavLink>
          <li className='flex flex-row cursor-pointer'>
            <img src="./github.png" alt="github Image" className='w-7 invert-1 my-2 rounded-md invert-1'/><span className='py-1 px-2 font-bold text-xl'>Github</span></li>
        </ul>
  
    </nav>
  )
}

export default Navbar