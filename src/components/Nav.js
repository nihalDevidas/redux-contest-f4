import React from 'react'
import { NavLink } from 'react-router-dom';
import "./styles/nav.css"

const Nav = () => {
  return (
    <div>
        <div className='main'>
        <NavLink to ="/">Home</NavLink>
        <NavLink to ="/history">History</NavLink>
        </div>
    </div>
  )
}

export default Nav