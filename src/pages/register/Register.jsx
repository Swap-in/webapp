import React, { useState } from 'react'
import './Register.scss'
import Input from '../../Components/input'
import Button from '../../Components/button'
import Navbar from '../../Components/Navbar'
import PageTitle from '../../Components/PageTitle'
import addPictureIcon from '../../assets/icons/add-picture.svg'

function Register() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault()
      console.log(firstName, lastName, gender, phone, email, password, confirmPassword)
    
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
          <form>
            <Input
              type='text'
              name='firstName'
              placeholder='NOMBRE'
              onChange={(e) => setFirstName(e.target.value)}
              className='Register--input__field'
            />
            <Input
              type='text'
              name='lastName'
              placeholder='APELLIDO'
              onChange={(e) => setLastName(e.target.value)}
              className='Register--input__field'
            />

             <select className='Register--dropdown'
              name='gender'
              onChange={e => setGender(e.target.value)}
              >
                <option value="" defaultValue>GENERO</option>
                <option value="Hombre">HOMBRE</option>
                <option value="Mujer">MUJER</option>
            </select> 

            <Input
              type='number'
              name='phone'
              placeholder='TELÉFONO'
              onChange={(e) => setPhone(e.target.value)}
              className='Register--input__field'
            />
            <Input
              type='email'
              name='email'
              placeholder='EMAIL'
              onChange={(e) => setEmail(e.target.value)}
              className='Register--input__field'
            />
            <Input
              type='password'
              name='password'
              placeholder='CONTRASEÑA'
              onChange={(e) => setPassword(e.target.value)}
              className='Register--input__field'
            />
            <Input
              type='password'
              name='confirm_password'
              placeholder='CONFIRMAR CONTRASEÑA'
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='Register--input__field'
            />
            <Button
              title='CREAR CUENTA'
              className='Register--button'
              type='button'
              onClick={handleSubmit}
              disabled={!firstName, !lastName, !gender, !phone, !email, !password, !confirmPassword}
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
