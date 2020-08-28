import React, { useState } from 'react'
import './uploadClothes.scss'
import Navbar from '../../Components/Navbar/Navbar'
import PageTitle from '../../Components/PageTitle'
import AdminPictures from '../../Components/adminPictures/AdminPictures'
import FormUpload from '../../Components/addClothes'

function UploadClothes() {
  const [formData, setFormData] = useState('')
  const [URLImages, setURLImages] = useState()

  const handleUpload = (e) => {
    e.preventDefault();
    console.log({ URLImages, formData })
  }

  return (
    <>
      <Navbar goBackIcon />
      <div className='uploadClothes'>
        <PageTitle title='Subir prenda' />
        <div className='uploadClothes--clothes'>
          <AdminPictures setURLImages={setURLImages} />
          <FormUpload setFormData={setFormData} handleUpload={handleUpload} />
        </div>
      </div>
    </>
  )
}

export default UploadClothes
