import React, { useState, useEffect, useContext } from 'react'
import './Menu.scss'
import MenuItems from '../MenuItems'
import Add from '../../assets/icons/add-icon.svg'
import Search from '../../assets/icons/search-icon.svg'
import HomeIcon from '../../assets/icons/home-icon.svg'
import Profile from '../../assets/icons/icono-perfil.svg'
import Notification from '../../assets/icons/icono-notificacion.svg'
import Exit from '../../assets/icons/exit-icon.svg'
import closeMenuIcon from '../../assets/icons/close-menu-button.svg'
import UserContext from '../../context'
import getNotifications from '../../services/getNotifications'

function Menu({ onClose, transition }) {
  const { user, token } = useContext(UserContext)
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    getNotifications(token, user.id)
      .then((data) => setNotifications(data))
  }, [token, user.id, notifications])

  return (
    <div className={`${transition} Menu`}>
      <div className='Menu--close'>
        <button type='button' className='Menu--close__button' onClick={onClose}>
          <img src={closeMenuIcon} alt='Close menu' />
        </button>
      </div>
      <MenuItems
        icon={Add}
        title='Subir prenda'
        page='/upload'
      />
      <MenuItems
        icon={Search}
        title='Buscar'
        page='/search'
      />
      <MenuItems
        icon={HomeIcon}
        title='Explorar'
        page='/feed'
      />
      <MenuItems
        icon={Profile}
        title='Perfil'
        page='/profile'
      />
      <MenuItems
        icon={Notification}
        title='Notificaciones'
        page='/notifications'
        amount={notifications}
      />
      <MenuItems
        icon={Exit}
        title='Logout'
        page='/'
        onLogout
      />
    </div>
  )
}

export default Menu
