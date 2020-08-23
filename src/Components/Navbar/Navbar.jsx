import React from 'react'
import './Navbar.scss'
import { Link, withRouter } from 'react-router-dom'
import logo from '../../assets/brand/logo-alt.svg'
import backButton from '../../assets/icons/back-button.svg'
import menuLogo from '../../assets/icons/menu-button.svg'
import MenuContainer from '../../containers/MenuContainer'
import useOpenMenu from '../../hooks/useOpenMenu'

function Navbar({ goBackIcon, history }) {
  const { transitionMenu, openNav, onOpenNav } = useOpenMenu(false)

  return (
    <div className='Navbar'>
      <div className='Navbar--menu'>
        {goBackIcon ? (
          <button type='button' onClick={() => history.goBack()}>
            <img src={backButton} alt='Go back' className='Navbar--menu__img' />
          </button>
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
