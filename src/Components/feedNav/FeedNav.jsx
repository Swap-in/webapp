import React from 'react'
import './FeedNav.scss'
import { Link } from 'react-router-dom'
import menuLogo from '../../assets/icons/menu-button.svg'
import MenuContainer from '../../containers/MenuContainer'
import useOpenMenu from '../../hooks/useOpenMenu'

function FeedNav() {
  const { transitionMenu, openNav, onOpenNav } = useOpenMenu(false)

  return (
    <div className='FeedNav'>
      <button type='button' className='FeedNav--menu' onClick={onOpenNav}>
        <img src={menuLogo} alt='Menu' />
        <MenuContainer
          isOpen={openNav}
          onClose={onOpenNav}
          transition={transitionMenu}
        />
      </button>
      <Link to='/' className='FeedNav--user'>
        <p>UserName</p>
        <div className='FeedNav--user__img'>
          <img src='https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='User' />
        </div>
      </Link>
    </div>
  )
}

export default FeedNav
