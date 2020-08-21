import React from 'react'
import './FeedNav.scss'
import { Link } from 'react-router-dom'
import menuLogo from '../../assets/icons/menu-button.svg'

function FeedNav() {
  return (
    <div className='FeedNav'>
      <button type='button' className='FeedNav--menu'>
        <img src={menuLogo} alt='Menu' />
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
