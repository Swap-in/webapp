import React, { useState } from 'react'
import './Register.scss'
import Input from '../../Components/input'
import Button from '../../Components/button'
import Navbar from '../../Components/Navbar'
import PageTitle from '../../Components/PageTitle'

function Register() {

  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [confirm_password, setConfirm_password] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(nombre, telefono, email, password, password)
  }

  return (
    <>
      <div className='Register'>
        <Navbar goBack />
        <PageTitle title='Registro' />
        <div className='Register--img__container'>
          <p>FOTO DE PERFIL</p>
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
              onChange={(e) => setConfirm_password(e.target.value)}
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
