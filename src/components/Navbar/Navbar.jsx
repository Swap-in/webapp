import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/brand/main-logo.png'
import menuLogo from '../../assets/icons/menu.svg'

function Navbar() {
  return (
    <div className='Navbar'>
      <button type='button' className='Navbar--menu'>
        <img src={menuLogo} alt='Menu' className='Navbar--menu__img' />
      </button>
      <div className='Navbar--logo'>
        <Link to='/'>
          <img src={logo} alt='Logo' className='Navbar--logo__img' />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
