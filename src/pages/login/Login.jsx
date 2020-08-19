import React from 'react'
import './Login.scss'
import Input from '../../Components/input'
import Button from '../../Components/button'
import MainLogo from '../../assets/brand/main-logo.png'

function Login() {
  return (
    <>
      <div className='Login'> 
        <div className='Login--container'>
          <figure className='Login--logo__container'>
            <img className='Login--logo' src={MainLogo} alt="logo"/>
          </figure>
          <h2>Iniciar Sesión</h2>
          <form action="" className='Login--form'>
            <p>Email</p>
            <Input 
                type='email'
                name='email'
                placeholder='ejemplo@ejemplo.com'
              />
            <p>Contraseña</p>
            <Input
              type='password'
              name='password'
              />
            <Button
                title='INICIAR SESIÓN'
                className='Login--button'

            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login