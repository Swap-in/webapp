/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react'
import './AddClothes.scss'
import Button from '../button/Button'

function AddClothes({ setFormData, handleUpload }) {

  const [clotheType, setClotheType] = useState('')
  const [brand, setBrand] = useState('')
  const [size, setSize] = useState('')
  const [gender, setGender] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    const data = {
      clotheType,
      brand,
      size,
      gender,
      description,
    }
    setFormData(data)
  }, [brand, clotheType, description, gender, setFormData, size])

  return (
    <>
      <div className='AddClothes'>
        <div className='AddClothes--container'>
          <div className='AddClothes--form'>
            <form action=''>
              <label htmlFor=''>
                Tipo de prenda
                <select
                  className='AddClothes--form__input'
                  name='clotheType'
                  onChange={(e) => setClotheType(e.target.value)}
                >
                  <option defaultValue />
                  <option value='1'>Cabeza</option>
                  <option value='2'>Torso</option>
                  <option value='3'>Piernas</option>
                  <option value='4'>Pies</option>
                </select>
              </label>
              <label htmlFor=''>
                Marca
                <input
                  type='text'
                  name='brand'
                  className='AddClothes--form__inputText'
                  onChange={(e) => setBrand(e.target.value)}
                  required
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
                  <option defaultValue value='' />
                  <option value='XS'>XS</option>
                  <option value='S'>S</option>
                  <option value='M'>M</option>
                  <option value='L'>L</option>
                  <option value='XL'>XL</option>
                </select>
              </label>
              <label>
                Género
                <select
                  className='AddClothes--form__input'
                  name='gender'
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option defaultValue value='' />
                  <option value='Hombre'>Hombre</option>
                  <option value='Mujer'>Mujer</option>
                  <option value='Unisex'>Unisex</option>
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
              <Button
                title='GUARDAR'
                className='AddClothes--button'
                onClick={handleUpload}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddClothes
