import React, { useState, useEffect } from 'react'
import './uploadClothes.scss'
import Navbar from '../../Components/Navbar/Navbar'
import PageTitle from '../../Components/PageTitle'
import AdminPictures from '../../Components/adminPictures/AdminPictures'
import FormUpload from '../../Components/addClothes'

function UploadClothes() {
  const [formData, setFormData] = useState('')

  useEffect(() => {
    console.log({ formData })
  })

  return (
    <>
      <Navbar goBackIcon />
      <div className='uploadClothes'>
        <PageTitle title='Subir prenda' />
        <div className='uploadClothes--clothes'>
          <AdminPictures />
          <FormUpload setFormData={setFormData} />
        </div>
      </div>
    </>
  )
}

export default UploadClothes
