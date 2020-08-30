import React, { useState, useEffect, useContext } from 'react'
import './AddClothes.scss'
import Button from '../button/Button'
import Loader from '../loader'
import getCategories from '../../services/getCategories'
import UserContext from '../../context'

function AddClothes({ setFormData, handleUpload, errors, loading }) {
  const { token } = useContext(UserContext)
  const [title, setTitle] = useState()
  const [clotheType, setClotheType] = useState('')
  const [brand, setBrand] = useState('')
  const [size, setSize] = useState('')
  const [gender, setGender] = useState('')
  const [description, setDescription] = useState('')
  const [categories, setCategories] = useState()
  const disabledButton = !clotheType || !brand || !size || !gender || !description

  useEffect(() => {
    const data = {
      title,
      clotheType,
      brand,
      size,
      gender,
      description,
    }
    setFormData(data)
  }, [title, brand, clotheType, description, gender, setFormData, size])

  useEffect(() => {
    getCategories(token)
      .then((data) => setCategories(data))
  }, [token])

  return (
    <>
      <div className='AddClothes'>
        <div className='AddClothes--form'>
          <form>
            <label htmlFor='clothesType'>
              Tipo de prenda
              <select
                className='AddClothes--form__input'
                name='clotheType'
                onChange={(e) => setClotheType(e.target.value)}
                id='clothesType'
              >
                <option defaultValue>Tipo</option>
                {categories && categories.map((category) => (
                  <option
                    key={category.id}
                    value={category.id}
                  >
                    {category.description}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor='title'>
              Titulo
              <input
                type='text'
                name='brand'
                className='AddClothes--form__inputText'
                onChange={(e) => setTitle(e.target.value)}
                required
                id='title'
              />
            </label>
            <label htmlFor='brand'>
              Marca
              <input
                type='text'
                name='brand'
                className='AddClothes--form__inputText'
                onChange={(e) => setBrand(e.target.value)}
                required
                id='brand'
              />
            </label>
            <label htmlFor='type'>
              Talla
              <select
                className='AddClothes--form__input'
                name='size'
                onChange={(e) => setSize(e.target.value)}
                id='type'
              >
                <option defaultValue>Talla</option>
                <option value='XS'>XS</option>
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
                <option value='XL'>XL</option>
              </select>
            </label>
            <label htmlFor='gender'>
              Género
              <select
                className='AddClothes--form__input'
                name='gender'
                onChange={(e) => setGender(e.target.value)}
                id='gender'
              >
                <option defaultValue>Genero</option>
                <option value='MALE'>Hombre</option>
                <option value='FEMALE'>Mujer</option>
                <option value='UNISEX'>Unisex</option>
              </select>
            </label>
            <label htmlFor='description'>
              Descripción
              <textarea
                id='description'
                name='description'
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            {errors && <span className='AddClothes-error'>Hubo un error al subir tu prenda</span>}
            {loading && <Loader className='Loader--upload' />}
            <Button
              title='GUARDAR'
              className='AddClothes--button'
              onClick={handleUpload}
              disabled={disabledButton}
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default AddClothes
