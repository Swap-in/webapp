import React, { useState, useContext } from 'react'
import './uploadClothes.scss'
import Navbar from '../../Components/Navbar/Navbar'
import PageTitle from '../../Components/PageTitle'
import AdminPictures from '../../Components/adminPictures/AdminPictures'
import FormUpload from '../../Components/addClothes'
import UserContext from '../../context'
import useAddClothes from '../../hooks/useAddClothes'

function UploadClothes() {
  const { addClothesService, errors, loading } = useAddClothes()
  const { user, token } = useContext(UserContext)
  const [formData, setFormData] = useState('')
  const [URLImages, setURLImages] = useState()

  const handleUpload = async (e) => {
    e.preventDefault();
    console.log({ URLImages, formData })
    addClothesService(formData, URLImages, user.id, token)
  }

  return (
    <>
      <Navbar goBackIcon />
      <div className='uploadClothes'>
        <PageTitle title='Subir prenda' />
        <div className='uploadClothes--clothes'>
          <AdminPictures setURLImages={setURLImages} />
          <FormUpload
            setFormData={setFormData}
            handleUpload={handleUpload}
            errors={errors}
            loading={loading}
          />
        </div>
      </div>
    </>
  )
}

export default UploadClothes
