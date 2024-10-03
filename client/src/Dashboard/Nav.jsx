import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <nav>
        <li><Link >Dashboard</Link></li>
        <li><Link >Users</Link></li>
        <li><Link >Profile</Link></li>
    </nav>
  )
}

export default Nav