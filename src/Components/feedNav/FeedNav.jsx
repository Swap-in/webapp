import React from 'react'
import './FeedNav.scss'
import menuLogo from '../../assets/icons/menu-button.svg'
import MenuContainer from '../../containers/MenuContainer'
import useOpenMenu from '../../hooks/useOpenMenu'
import userDefaultIcon from '../../assets/icons/user-icon-default.svg'

function FeedNav({ username, picture }) {
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
      <div className='FeedNav--user'>
        <p>{username}</p>
        <div className='FeedNav--user__img'>
          <img src={picture || userDefaultIcon} alt={username} />
        </div>
      </div>
    </div>
  )
}

export default FeedNav
