import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'
import Input from '../../Components/input'
import Button from '../../Components/button'
import MainLogo from '../../assets/brand/logo.svg'
import Navbar from '../../Components/Navbar'
import PageTitle from '../../Components/PageTitle'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password })
  }

  return (
    <>
      <Navbar goBackIcon />
      <div className='Login'>
        <div className='Login--container'>
          <figure className='Login--logo__container'>
            <img className='Login--logo' src={MainLogo} alt='logo' />
          </figure>
          <PageTitle title='Iniciar Sesión' />
          <form
            className='Login--form'
          >
            <p>Email</p>
            <Input
              type='email'
              name='email'
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
              onClick={handleLogin}
            />
            <h6>
              ¿Aún no tienes cuenta?
              <Link to='/register'>
                <span>Registrate aquí</span>
              </Link>
            </h6>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
