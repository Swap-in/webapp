import React from 'react'
import './AdminClothes.scss'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import PageTitle from '../../Components/PageTitle'
import UserClothes from '../../Components/UserClothes'
import Button from '../../Components/button'
import SubmitPicture from '../../Components/SubmitPicture/SubmitPicture'

function AdminClothes() {
  return (
    <div className='AdminClothes'>
      <Navbar />
      <PageTitle title='Administrar' className='AdminClothes--title' />
      <div className='AdminClothes--grid'>
        <UserClothes />
        <UserClothes />
        <UserClothes />
        <UserClothes />
        <SubmitPicture />
      </div>
      <div className='AdminClothes--buttons'>
        <Link to='/profile'>
          <Button title='Ir a mi perfil' className='AdminClothes--buttons__button' />
        </Link>
      </div>
    </div>
  )
}

export default AdminClothes
