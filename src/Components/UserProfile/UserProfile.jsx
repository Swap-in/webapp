import React, { useContext, useEffect, useState } from 'react'
import './UserProfile.scss'
import { Link } from 'react-router-dom'
import UserClothes from '../UserClothes'
import userDefault from '../../assets/icons/user-icon-default.svg'
import Button from '../button'
import PageTitle from '../PageTitle/PageTitle'
import UserContext from '../../context'
import getUserImages from '../../services/getUserImages'
import Loader from '../loader'

function UserProfile() {
  const { user, token } = useContext(UserContext)
  const [clothes, setClothes] = useState(null)

  useEffect(() => {
    getUserImages(user.id, token)
      .then((data) => {
        setClothes(data.clothes_by_user)
      })
  }, [token, user.id, setClothes])

  return (
    <>
      <div className='UserProfile'>
        <PageTitle title='Mi perfil' />
        <div className='UserProfile--info'>
          <div className='UserProfile--info__img'>
            <img src={user.picture || userDefault} alt='User' />
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
            {clothes ? clothes.map((clothe) => (
              <UserClothes
                key={clothe.id}
                clotheData={clothe}
              />
            )) : <Loader className='UserProfile--loader' />}
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
