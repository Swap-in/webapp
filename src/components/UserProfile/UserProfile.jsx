import React from 'react'
import './UserProfile.scss'
import UserClothes from '../UserClothes'

function UserProfile() {
  return (
    <div className='UserProfile'>
      <h2>Mi perfil</h2>
      <div className='UserProfile--info'>
        <img src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' alt='User' className='UserProfile--info__img' />
        <h4 className='UserProfile--info__name'>Nombre de usuario</h4>
      </div>
      <div className='UserProfile--clothes'>
        <h3>Mis Prendas</h3>
        <div className='UserProfile--clothes__container'>
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
