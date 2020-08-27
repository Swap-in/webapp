import React, { useContext } from 'react'
import './UserProfile.scss'
import { Link } from 'react-router-dom'
import UserClothes from '../UserClothes'
import userDefault from '../../assets/icons/user-icon-default.svg'
import Button from '../button'
import PageTitle from '../PageTitle/PageTitle'
import UserContext from '../../context'

function UserProfile() {

  const { user } = useContext(UserContext)
  console.log(user)
  return (
    <>
      <div className='UserProfile'>
        <PageTitle title='Mi perfil' />
        <div className='UserProfile--info'>
          <div className='UserProfile--info__img'>
            <img src={userDefault} alt='User' />
          </div>
          <h4 className='UserProfile--info__name'>
            {user.first_name}
            {' '}
            {user.last_name}
          </h4>
          <h5 className='UserProfile--info__username'>
            @
            {user.username}
          </h5>
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
        <Link to='/feed'>
          <Button
            title='Explorar'
            className='UserProfile--buttons__explore'
          />
        </Link>
        <Link to='/admin'>
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
