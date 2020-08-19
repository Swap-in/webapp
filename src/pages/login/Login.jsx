import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'
import Input from '../../components/input'
import Button from '../../components/button'
import MainLogo from '../../assets/brand/main-logo.png'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    alert(email)
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
            <Button
              title='INICIAR SESIÓN'
              className='Login--button'
            />
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
