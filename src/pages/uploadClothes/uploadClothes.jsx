import React from 'react'
import './uploadClothes.scss'
import Navbar from '../../Components/Navbar/Navbar'
import PageTitle from '../../Components/PageTitle'
import AdminPictures from '../../Components/adminPictures/AdminPictures'
import FormUpload from '../../Components/addClothes'

function uploadClothes({ title }) {
  return (
    <>
      <Navbar goBackIcon />
      <div className='uploadClothes'>
        <PageTitle title={title} className='uploadClothes--title' />
        <div className='uploadClothes--clothes'>
          <div className='uploadClothes--clothes__grid'>
            <AdminPictures />
            <FormUpload />
          </div>
        </div>
      </div>
    </>
  )
}

export default uploadClothes
