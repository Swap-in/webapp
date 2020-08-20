import React from 'react'
import './Error404.scss'
import MainLogo from '../../assets/brand/main-logo.png'

function Error404() {
  return (
    <>
      <div className='Error404'>
        <img className='Error404--logo' src={MainLogo} alt='' />
        <h2>ERROR 404</h2>
        <h4>OOOPS! Página no encontrada</h4>
      </div>
    </>
  )
}

export default Error404
