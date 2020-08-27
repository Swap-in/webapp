import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.scss'
import Input from '../../Components/input'
import Button from '../../Components/button'
import MainLogo from '../../assets/brand/logo.svg'
import Navbar from '../../Components/Navbar'
import PageTitle from '../../Components/PageTitle'
import Loader from '../../Components/loader'
import useUser from '../../hooks/useUser'

function Login() {

  const { login, isLogged, loading, errors } = useUser()
  const history = useHistory()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = async (e) => {
    e.preventDefault();
    const data = { userName, password }
    login(data)
  }

  useEffect(() => {
    isLogged && history.push('/feed')
  }, [history, isLogged])

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
            {errors && <span className='errors'>{errors}</span>}
            {loading && <Loader className='Loading--login' />}
            <Button
              title='INICIAR SESIÓN'
              className='Login--button'
              onClick={onLogin}
              disabled={!userName || !password}
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
