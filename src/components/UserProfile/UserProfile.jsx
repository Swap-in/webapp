import React from 'react'
import './UserProfile.scss'
import UserClothes from '../UserClothes'
import userDefault from '../../assets/icons/user.png'

function UserProfile({ user = false }) {
  return (
    <div className='UserProfile'>
      <h2>{user && 'Mi perfil'}</h2>
      <div className='UserProfile--info'>
        <img src={userDefault} alt='User' className='UserProfile--info__img' />
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
  )
}

export default UserProfile
