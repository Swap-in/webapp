import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'
import Input from '../../Components/input'
import Button from '../../Components/button'
import MainLogo from '../../assets/brand/main-logo.png'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Ingreso')
  }
  return (
    <>
      <div className='Login'>
        <div className='Login--container'>
          <figure className='Login--logo__container'>
            <img className='Login--logo' src={MainLogo} alt='logo' />
          </figure>
          <h2>Iniciar Sesión</h2>
          <form
            onSubmit={handleLogin}
            className='Login--form'
          >
            <p>Email</p>
            <Input
              type='email'
              name='email'
              placeholder='ejemplo@ejemplo.com'
              className='Login--input'
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>Contraseña</p>
            <Input
              type='password'
              name='password'
              className='Login--input'
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to='add-clothes'>
              <Button
                title='INICIAR SESIÓN'
                className='Login--button'
              />
            </Link>
            <h6>
              ¿Aún no tienes cuenta?
              {' '}
              <Link to='/registro'>
                <span>Registrate aquí</span>
                {' '}
              </Link>
              {' '}
            </h6>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
