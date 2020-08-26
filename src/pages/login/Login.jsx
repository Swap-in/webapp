import React, { useState, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Login.scss'
import Input from '../../Components/input'
import Button from '../../Components/button'
import MainLogo from '../../assets/brand/logo.svg'
import Navbar from '../../Components/Navbar'
import PageTitle from '../../Components/PageTitle'
import login from '../../services/login'
import { AuthContext } from '../../Context/context'


function Login() {

  const [errors, setErrors] = useState(null)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')


  const onLogin = (e) => {
    e.preventDefault();
    const data = { userName, password }
    login(data)
<<<<<<< HEAD
      .then((data) => console.log('Data login', data))
=======
      .then((data) => {
        console.log('Data login', data)
      })
      .then(() => history.push('/feed'))
      .catch(() => setErrors('Datos incorrectos'))
>>>>>>> 6ac7e424a3e713f93d649595d40fce9320cbefe2
  }

  const currentUser = useContext(AuthContext);
  
  if(currentUser) {
    return <Redirect to='/feed'/>
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
            {errors && <span className='errors'>{errors}</span>}
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
