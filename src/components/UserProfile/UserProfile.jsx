import React from 'react'
import './UserProfile.scss'
import { Link } from 'react-router-dom'
import UserClothes from '../UserClothes'
import userDefault from '../../assets/icons/user-default.svg'
import Button from '../button'

function UserProfile({ user = true }) {
  return (
    <>
      <div className='UserProfile'>
        <h2>{user && 'Mi perfil'}</h2>
        <div className='UserProfile--info'>
          <div className='UserProfile--info__img'>
            <img src={userDefault} alt='User' />
          </div>
          <h4 className='UserProfile--info__name'>Nombre de usuario</h4>
        </div>
        <div className='UserProfile--clothes'>
          <h3>Mis Prendas</h3>
          <div className='UserProfile--clothes__container'>
            <UserClothes />
            <UserClothes />
            <UserClothes />
            <UserClothes />
            <UserClothes />
          </div>
        </div>
      </div>
      <div className='UserProfile--buttons'>
        <Link to='/'>
          <Button
            title='Explorar'
            className='UserProfile--buttons__explore'
          />
        </Link>
        <Link to='/'>
          <Button
            title='Administrar'
            className='UserProfile--buttons__admin'
          />
        </Link>
      </div>
    </>
  )
}

export default UserProfile
