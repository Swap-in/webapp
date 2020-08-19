import React from 'react'
import './Navbar.scss'
import logo from '../../assets/brand/main-logo.png'

function Navbar() {
  return (
    <div className='Navbar'>
      <button type='button' className='Navbar--menu'>
        <img src='menu' alt='Menu' className='Navbar--menu__img' />
      </button>
      <div className='Navbar--logo'>
        <img src={logo} alt='Logo' className='Navbar--logo__img' />
      </div>
    </div>
  )
}

export default Navbar
