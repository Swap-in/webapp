import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.scss'
import Input from '../../Components/input'
import Button from '../../Components/button'
import MainLogo from '../../assets/brand/logo.svg'
import Navbar from '../../Components/Navbar'
import PageTitle from '../../Components/PageTitle'
import login from '../../services/login'

function Login() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const onLogin = (e) => {
    e.preventDefault();
    const data = { userName, password }
    login(data)
      .then((data) => console.log('Data login', data))
      .then(() => history.push('/upload'))
    // console.log(data)
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
            <p>Nombre de usuario</p>
            <Input
              type='text'
              name='username'
              className='Login--input'
              onChange={(e) => setUserName(e.target.value)}
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
              onClick={onLogin}
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
