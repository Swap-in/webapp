import React from 'react'
import './Admin.scss'
import Navbar from '../../Components/Navbar/Navbar'
import PageTitle from '../../Components/PageTitle'
import SubmitPicture from '../../Components/SubmitPicture/SubmitPicture'
import Button from '../../Components/button'

function Admin({ title }) {
  return (
    <div className='Admin'>
      <Navbar goBack />
      <PageTitle title={title} className='Admin--title' />
      <div className='Admin--clothes'>
        <div className='Admin--clothes__grid'>
          <h4>Máximo 5 fotos</h4>
          <SubmitPicture />
          <SubmitPicture />
          <SubmitPicture />
          <SubmitPicture />
          <SubmitPicture />
        </div>
      </div>
      <div className='Admin--buttons'>
        <Button title='Guardar' />
      </div>
    </div>
  )
}

export default Admin
