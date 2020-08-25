import React, { useState, useRef } from 'react'
import './Register.scss'
import Input from '../../Components/input'
import Button from '../../Components/button'
import Navbar from '../../Components/Navbar'
import PageTitle from '../../Components/PageTitle'
import addPictureIcon from '../../assets/icons/add-picture.svg'
import register from '../../services/register'

function Register() {

  const emailInputRef = useRef(null)
  const userImage = useRef()
  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [userName, setUserName] = useState()
  const [image, setImage] = useState(addPictureIcon)

  const onSubmitRegister = (e) => {
    e.preventDefault()
    const isNotSamePassword = password !== confirmPassword
    const shortPassword = password.length < 8
    if (isNotSamePassword) {
      return setPasswordError('Las contraseñas no coinciden')
    } if (shortPassword) {
      return setPasswordError('la contraseña debe ser mayor a 9 caracteres')
    }
    return register(userName, firstName, lastName, gender, phone, email, password, confirmPassword)
  }

  const onSubmitPicture = () => {
    const currentFile = userImage.current.files[0]
    if (currentFile) {
      const fileToUrl = URL.createObjectURL(currentFile)
      console.log(currentFile)
      setImage(fileToUrl)
    }
  }

  const validateEmailInput = (e) => {
    const { validationMessage } = emailInputRef.current
    if (validationMessage) {
      setEmailError(validationMessage)
      setEmail(null)
    } else {
      setEmailError(null)
      setEmail(e.target.value)
    }
  }

  return (
    <>
      <Navbar goBackIcon />
      <div className='Register'>
        <PageTitle title='Registro' />
        <div className='Register--img__container'>
          <p>FOTO DE PERFIL</p>
          <label htmlFor='userProfile'>
            <img src={image} alt='User' />
            <input
              type='file'
              accept='image/*'
              id='userProfile'
              ref={userImage}
              onChange={onSubmitPicture}
            />
          </label>
        </div>
        <div className='Register--container'>
          <form>
            <Input
              type='text'
              name='username'
              placeholder='Nombre de usuario'
              onChange={(e) => setUserName(e.target.value)}
              className='Register--input__field'
            />
            <Input
              type='text'
              name='firstName'
              placeholder='Nombre'
              onChange={(e) => setFirstName(e.target.value)}
              className='Register--input__field'
            />
            <Input
              type='text'
              name='lastName'
              placeholder='Apellido'
              onChange={(e) => setLastName(e.target.value)}
              className='Register--input__field'
            />

            <select
              className='Register--dropdown'
              name='gender'
              onChange={(e) => setGender(e.target.value)}
            >
              <option value='' defaultValue>GENERO</option>
              <option value='MALE'>HOMBRE</option>
              <option value='WOMEN'>MUJER</option>
            </select>

            <Input
              type='number'
              name='phone'
              placeholder='Teléfono'
              onChange={(e) => setPhone(e.target.value)}
              className='Register--input__field'
            />
            <Input
              type='email'
              name='email'
              placeholder='Email'
              onChange={validateEmailInput}
              className='Register--input__field'
              reference={emailInputRef}
            />
            {emailError && (<span>{emailError}</span>)}
            <Input
              type='password'
              name='password'
              placeholder='Contraseña'
              onChange={(e) => setPassword(e.target.value)}
              className='Register--input__field'
            />
            {passwordError && (<span>{passwordError}</span>)}
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
              onClick={onSubmitRegister}
              disabled={!firstName || !lastName || !gender || !phone || !email || !password || !confirmPassword}
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
