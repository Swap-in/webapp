import React, { useState, useContext } from 'react'
import './uploadClothes.scss'
import Navbar from '../../Components/Navbar/Navbar'
import PageTitle from '../../Components/PageTitle'
import AdminPictures from '../../Components/adminPictures/AdminPictures'
import FormUpload from '../../Components/addClothes'
import addClothes from '../../services/addClothes'
import UserContext from '../../context'

function UploadClothes() {
  const { user } = useContext(UserContext)
  const [formData, setFormData] = useState('')
  const [URLImages, setURLImages] = useState()

  const handleUpload = async (e) => {
    e.preventDefault();
    console.log({ URLImages, formData })
    await addClothes(formData, URLImages, user.id)

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
