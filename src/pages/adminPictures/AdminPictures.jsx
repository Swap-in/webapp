import React from 'react'
import './AdminPictures.scss'
import Navbar from '../../Components/Navbar/Navbar'
import PageTitle from '../../Components/PageTitle'
import SubmitPicture from '../../Components/SubmitPicture/SubmitPicture'
import Button from '../../Components/button'

function AdminPictures({ title }) {
  return (
    <>
      <Navbar goBackIcon />
      <div className='AdminPictures'>
        <PageTitle title={title} className='AdminPictures--title' />
        <div className='AdminPictures--clothes'>
          <div className='AdminPictures--clothes__grid'>
            <h4>Máximo 5 fotos</h4>
            <SubmitPicture />
            <SubmitPicture />
            <SubmitPicture />
            <SubmitPicture />
            <SubmitPicture />
          </div>
        </div>
        <div className='AdminPictures--buttons'>
          <Button title='Guardar' />
        </div>
      </div>
    </>
  )
}

export default AdminPictures
