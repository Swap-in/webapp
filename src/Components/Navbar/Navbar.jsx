import React, { useState } from 'react'
import './Navbar.scss'
import { Link, withRouter } from 'react-router-dom'
import logo from '../../assets/brand/logo-alt.svg'
import backButton from '../../assets/icons/back-button.svg'
import menuLogo from '../../assets/icons/menu-button.svg'
import MenuContainer from '../../containers/MenuContainer'

function Navbar({ goBackIcon, className }) {
  const [openNav, setOpenNav] = useState(false)
  const [transitionMenu, setTransitionMenu] = useState('')
  function onOpenNav() {
    if (openNav) {
      setTransitionMenu('is-closing')
      setTimeout(() => {
        setOpenNav(false)
      }, 400);
    } else {
      setOpenNav(true)
      setTransitionMenu('is-opening')
    }
  }
  return (
    <div className={`${className} Navbar`}>
      <div className='Navbar--menu'>
        {goBackIcon ? (
          <Link to='/'>
            <img src={backButton} alt='Go back' className='Navbar--menu__img' />
          </Link>
        ) : (
          <>
            <button type='button' onClick={onOpenNav}>
              <img src={menuLogo} alt='Menu' className='Navbar--menu__img' />
            </button>
            <MenuContainer
              isOpen={openNav}
              onClose={onOpenNav}
              transition={transitionMenu}
            />
          </>
        )}
      </div>
      <div className='Navbar--logo'>
        <Link to='/feed'>
          <img src={logo} alt='Logo' className='Navbar--logo__img' />
        </Link>
      </div>
    </div>
  )
}

export default withRouter(Navbar)
