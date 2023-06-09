import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </>
  )
}