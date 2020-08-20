import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo-alt.svg'
import backButton from '../../assets/icons/back-button.svg'
import menuLogo from '../../assets/icons/menu-button.svg'

function Navbar({ goBack, className }) {
  return (
    <div className={`${className} Navbar`}>
      <button type='button' className='Navbar--menu'>
        {goBack ? (
          <Link to='/'>
            <img src={backButton} alt='Go back' className='Navbar--menu__img' />
          </Link>
        ) : (
          <img src={menuLogo} alt='Menu' className='Navbar--menu__img' />
        )}
      </button>
      <div className='Navbar--logo'>
        <Link to='/feed'>
          <img src={logo} alt='Logo' className='Navbar--logo__img' />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
