import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const active = ({ isActive }) => isActive ? 'link active' : 'link'

    return (
        <nav className='navbar'>
            <NavLink to='/' className={active}>
                Home
            </NavLink> 
            <NavLink to='/about' className={active}>About</NavLink> 
            <NavLink to='/products' className={active}>Products</NavLink> 
            <NavLink to='/login' className={active}>Login</NavLink> 
        </nav>
    )
}

export default Navbar