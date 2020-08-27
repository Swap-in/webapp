import React, { useState, useRef } from 'react'
import './Register.scss'
import Input from '../../Components/input'
import Button from '../../Components/button'
import Navbar from '../../Components/Navbar'
import PageTitle from '../../Components/PageTitle'
import addPictureIcon from '../../assets/icons/add-picture.svg'
import register from '../../services/register'
import AlertContainer from '../../containers/AlertContainer'
import RegisterModal from '../../Components/registerModal/RegisterModal'
import Loader from '../../Components/loader'

function Register() {
  const emailInputRef = useRef(null)
  const userImage = useRef()
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [image, setImage] = useState(addPictureIcon)
  const [userName, setUserName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submitRegister = async () => {
    const formData = {
      userName,
      firstName,
      lastName,
      gender,
      phone,
      email,
      password,
    }
    setLoading(true)
    await register(formData)
      .then((res) => console.log(res))
      .then(() => setOpenModal(true))
      .then(() => setLoading(false))
      .catch((err) => console.error('Error Register', err))
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
      setFormErrors({ email: validationMessage })
    } else {
      setFormErrors({ email: null })
      setEmail(e.target.value)
    }
  }

  const validateInputsAndSend = (e) => {
    e.preventDefault()
    const isNotSamePassword = password !== confirmPassword
    const shortPassword = password.length < 8
    if (isNotSamePassword) {
      return setFormErrors({ password: 'Las contraseñas no coinciden' })
    } if (shortPassword) {
      return setFormErrors({ password: 'la contraseña debe ser mayor a 9 caracteres' })
    }
    return submitRegister()
  }

  return (
    <>
      <Navbar goBackIcon />
      <AlertContainer isOpen={openModal}>
        <RegisterModal isOpen={openModal} />
      </AlertContainer>
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
              className='Register--input__field'
              name='username'
              onChange={(e) => setUserName(e.target.value)}
              placeholder='Nombre de usuario'
              type='text'
              value={userName}
            />
            <Input
              className='Register--input__field'
              name='firstName'
              onChange={(e) => setFirstName(e.target.value)}
              placeholder='Nombre'
              type='text'
              value={firstName}
            />
            <Input
              className='Register--input__field'
              name='lastName'
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Apellido'
              type='text'
              value={lastName}
            />
            <select
              className='Register--dropdown'
              name='gender'
              onChange={(e) => setGender(e.target.value)}
            >
              <option defaultValue>GENERO</option>
              <option value='MALE'>HOMBRE</option>
              <option value='WOMEN'>MUJER</option>
            </select>
            <Input
              className='Register--input__field'
              name='phone'
              onChange={(e) => setPhone(e.target.value)}
              placeholder='(COL) Teléfono'
              type='number'
              value={phone}
            />
            <Input
              className='Register--input__field'
              name='email'
              onChange={validateEmailInput}
              placeholder='Email'
              reference={emailInputRef}
              type='email'
            />
            {formErrors.email && <span>{formErrors.email}</span>}
            <Input
              className='Register--input__field'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Contraseña'
              type='password'
              value={password}
            />
            {formErrors.password && (<span>{formErrors.password}</span>)}
            <Input
              className='Register--input__field'
              name='confirm_password'
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='CONFIRMAR CONTRASEÑA'
              type='password'
              value={confirmPassword}
            />
            {loading && <Loader className='Loading--register' />}
            <Button
              className='Register--button'
              onClick={validateInputsAndSend}
              title='CREAR CUENTA'
              type='button'
              disabled={!firstName || !lastName || !gender || !phone || !email || !password || !confirmPassword}
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
