import React from 'react'
import { Link } from 'react-router-dom'
import './MenuItems.scss'
import Button from '../button'
import useUser from '../../hooks/useUser'

function MenuItems({ icon, title, page, onLogout }) {
  const { logout } = useUser()
  const handleLogout = () => {
    logout()
  }
  return (
    <>
      <div className='MenuItems--container'>
        {onLogout && <Button onClick={handleLogout} className='logout' />}
        <div className='MenuItems--container__item'>
          <Link to={page} style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <img src={icon} alt='home' className='MenuItems--img' />
            <span className='MenuItems--text'>{title}</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default MenuItems
