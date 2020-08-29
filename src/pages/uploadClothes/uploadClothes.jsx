import React, { useState, useContext, useEffect } from 'react'
import './uploadClothes.scss'
import Navbar from '../../Components/Navbar/Navbar'
import PageTitle from '../../Components/PageTitle'
import AdminPictures from '../../Components/adminPictures/AdminPictures'
import FormUpload from '../../Components/addClothes'
import UserContext from '../../context'
import useAddClothes from '../../hooks/useAddClothes'
import AlertContainer from '../../containers/AlertContainer'
import GenericModal from '../../Components/registerModal/RegisterModal'

function UploadClothes() {
  const { addClothesService, errors, loading, success } = useAddClothes()
  const { user, token } = useContext(UserContext)
  const [formData, setFormData] = useState('')
  const [URLImages, setURLImages] = useState()
  const [openModal, setOpenModal] = useState(false)

  const handleUpload = (e) => {
    e.preventDefault();
    console.log({ URLImages, formData })
    addClothesService(formData, URLImages, user.id, token)
  }
  useEffect(() => {
    if (success) {
      setOpenModal(true)
    }
  }, [setOpenModal, success])

  return (
    <>
      <AlertContainer isOpen={openModal}>
        <GenericModal
          isOpen={openModal}
          title='Genial! se ha subido'
          page='feed'
          btnTitle='Ir al Feed'
        >
          Genial! acabas de subir una prenda, ve al feed y empieza a swapear!
        </GenericModal>
      </AlertContainer>
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
