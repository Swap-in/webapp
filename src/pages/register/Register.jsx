import React, { useState, useRef } from 'react'
import './Register.scss'
import Input from '../../Components/input'
import Button from '../../Components/button'
import Navbar from '../../Components/Navbar'
import PageTitle from '../../Components/PageTitle'
import addPictureIcon from '../../assets/icons/add-picture.svg'

function Register() {

  const emailInputRef = useRef(null)
  const userImage = useRef()
  const [emailError, setEmailError] = useState(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [image, setImage] = useState(addPictureIcon)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ firstName, lastName, gender, phone, email, password, confirmPassword })
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
    validationMessage ? setEmailError(validationMessage) : setEmailError(null)
    setEmail(e)
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
              placeholder='TELÉFONO'
              onChange={(e) => setPhone(e.target.value)}
              className='Register--input__field'
            />
            <Input
              type='email'
              name='email'
              placeholder='EMAIL'
              onChange={validateEmailInput}
              className='Register--input__field'
              reference={emailInputRef}
            />
            {emailError && (<span>{emailError}</span>)}
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
              disabled={!firstName || !lastName || !gender || !phone || !email || !password || !confirmPassword}
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
