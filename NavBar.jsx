import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return <>
  <section className='w-full h-[50px] bg-[#efefef]'>
    <nav className='w-[90%] mx-auto h-[50px] flex justify-between items-center'>
        <aside className='h-[50px]'>
            <ul className='flex justify-end h-[50px] items-center gap-5'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/About">About</NavLink>
                </li>
                <li>
                <NavLink to="/Contact">Contact</NavLink>
                </li>
                <li>
                <NavLink to="/Login">Login</NavLink>
                </li>
                <li>
                <NavLink to="/Register">Register</NavLink>
                </li>
                
            </ul>
        </aside>
    </nav>
  </section>
  </>
}

export default NavBar