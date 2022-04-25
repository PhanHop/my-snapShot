import React from 'react'
import { Outlet } from 'react-router-dom';
import Form from './Form'
import Navigation from './Navigation'
function Header() {
  return (
    <div className='container'>
        <h1 style={{textAlign: "center", fontSize: '4rem'}}>Snap Shot Image</h1>
        <Form />
        <Navigation />
        <Outlet />
    </div>
  )
}

export default Header;