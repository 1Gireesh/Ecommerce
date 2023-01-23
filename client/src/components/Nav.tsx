import React from 'react'
import "../styles/Nav.module.css";
import { Link } from 'react-router-dom'
import img from "../assets/logo.webp";


export default function Nav() {
  return (
    <header>
      <nav className=''>
        <img src={img} width="70px" alt="" className='cursor-pointer'/>
        <div>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </header>
  )
}
