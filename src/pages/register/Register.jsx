import React, { useState } from 'react'
import './Register.scss'
import Input from '../../Components/input'
import Button from '../../Components/button'
import Navbar from '../../Components/Navbar'
import PageTitle from '../../Components/PageTitle'
import addPictureIcon from '../../assets/icons/add-picture.svg'

function Register() {

  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(nombre, telefono, email, password, confirmPassword)
  }

  return (
    <>
      <Navbar goBackIcon />
      <div className='Register'>
        <PageTitle title='Registro' />
        <div className='Register--img__container'>
          <p>FOTO DE PERFIL</p>
          <img src={addPictureIcon} alt='User' />
        </div>
        <div className='Register--container'>
          <form onSubmit={handleSubmit}>
            <Input
              type='text'
              name='nombre'
              placeholder='NOMBRE COMPLETO'
              onChange={(e) => setNombre(e.target.value)}
              className='Register--input__field'
              required
            />
            <Input
              type='number'
              name='telefono'
              placeholder='TELÉFONO'
              onChange={(e) => setTelefono(e.target.value)}
              className='Register--input__field'
              required
            />
            <Input
              type='email'
              name='email'
              placeholder='EMAIL'
              onChange={(e) => setEmail(e.target.value)}
              className='Register--input__field'
              required
            />
            <Input
              type='password'
              name='password'
              placeholder='CONTRASEÑA'
              onChange={(e) => setPassword(e.target.value)}
              className='Register--input__field'
              required
            />
            <Input
              type='password'
              name='confirm_password'
              placeholder='CONFIRMAR CONTRASEÑA'
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='Register--input__field'
              required
            />
            <Button
              title='CREAR CUENTA'
              className='Register--button'
              type='submit'
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
