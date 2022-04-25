import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import './components.css'
function Navigation() {
    return (
        <nav className='nav-menu'>
            <ul className='navbar'>
                <li><NavLink to="/beach" className="navLink">Beach</NavLink></li>
                <li><NavLink to="/bird" className="navLink">Bird</NavLink></li>
                <li><NavLink to="/girl" className="navLink">Girl</NavLink></li>
                <li><NavLink to="/mountain" className="navLink">Mountain</NavLink></li>
            </ul>
        </nav>
        
    )
}

export default Navigation