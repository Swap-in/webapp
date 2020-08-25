import React from 'react'
import './Logout.scss'
import { Link } from 'react-router-dom'
import MainLogo from '../../assets/brand/main-logo.png'
import Button from '../../Components/button'

function Logout() {
  return (
    <>
      <div className='Logout'>
        <div className='Logout--container'>
          <img src={MainLogo} className='Logout--img' alt='logo' />
        </div>
        <div className='Logout--button__container'>
          <Link to='/login'>
            <Button
              title='INICIAR SESIÓN'
              type='button'
              className='Logout--button__login'
            />
          </Link>
          <Link to='/registro'>
            <Button
              title='REGISTRARSE'
              type='button'
              className='Logout--button__register'
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Logout
