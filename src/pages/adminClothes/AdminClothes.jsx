import React, { useContext, useEffect, useState } from 'react'
import './AdminClothes.scss'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import PageTitle from '../../Components/PageTitle'
import UserClothes from '../../Components/UserClothes'
import Button from '../../Components/button'
import Loader from '../../Components/loader'
import UserContext from '../../context'
import getUserImages from '../../services/getUserImages'

function AdminClothes() {
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
      <Navbar goBackIcon />
      <div className='AdminClothes'>
        <PageTitle title='Administrar' />
        <div className='AdminClothes--grid'>
          {clothes ? clothes.map((clothe) => (
            <UserClothes
              key={clothe.id}
              clotheData={clothe}
            />
          )) : <Loader className='AdminClothes--loader' />}
        </div>
        <div className='AdminClothes--buttons'>
          <Link to='/profile'>
            <Button title='Ir a mi perfil' className='AdminClothes--buttons__button' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default AdminClothes
