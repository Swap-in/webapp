import React from 'react'
import './profileClothes.scss'
import Navbar from '../../Components/Navbar/Navbar'
import PageTitle from '../../Components/PageTitle'
import NotificationItem from '../../Components/NotificationItem'
import ClothesInfo from '../../Components/clothesInfo/clothesInfo'

function profileClothes() {
  return (
    <>
      <Navbar goBackIcon />
      <div className='profileClothes'>
        <PageTitle title='Mis prendas' />
        <ClothesInfo />
        <h4 className='profileClothes--h4'>Notificaciones de prenda:</h4>
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </div>
    </>
  )
}

export default profileClothes
