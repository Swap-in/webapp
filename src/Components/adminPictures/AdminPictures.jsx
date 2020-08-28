import React from 'react'
import './AdminPictures.scss'
import SubmitPicture from '../SubmitPicture/SubmitPicture'

function AdminPictures() {

  return (
    <>
      <div className='AdminPictures'>
        <div className='AdminPictures--clothes'>
          <div className='AdminPictures--clothes__grid'>
            <h4>Agregar fotos de la Prenda</h4>
            <SubmitPicture />
            <SubmitPicture />
            <SubmitPicture />
            <SubmitPicture />
            <SubmitPicture />
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminPictures
