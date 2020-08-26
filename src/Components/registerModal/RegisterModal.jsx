import React from 'react'
import { useHistory } from 'react-router-dom'
import './RegisterModal.scss'
import PageTitle from '../PageTitle'
import Button from '../button'

function RegisterModal({ isOpen }) {
  const history = useHistory()
  return (
    <div className='Overlay'>
      <div className={isOpen && 'RegisterModal'}>
        <PageTitle title='Que bien!' />
        <p>
          Ya quedan pocos pasos, revisa tu correo para validar tu información!
        </p>
        <Button
          className='RegisterModal--btn'
          onClick={() => history.push('/token')}
          title='Pega el token'
        />
      </div>
    </div>
  )
}

export default RegisterModal
