/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import './AddClothes.scss'
import { Link } from 'react-router-dom'
import Button from '../../Components/button'
import BackButton from '../../assets/icons/back-button.svg'
import Input from '../../Components/input'

function AddClothes() {
  return (
    <>
      <div className='AddClothes'>
        <div className='AddClothes--container'>
          <figure className='AddClothes--icon'>
            <Link to='/'>
              <img src={BackButton} alt='' />
            </Link>
          </figure>
          <h2>Subir Prenda</h2>
          <p>Fotos de la prenda</p>
          <div className='AddClothes--form'>
            <form action=''>
              <label htmlFor=''>
                Tipo de prenda
                <select className='AddClothes--form__input'>
                  <option value='' />
                  <option value='' />
                  <option selected value='' />
                  <option value='' />
                </select>
              </label>
              <label htmlFor=''>
                Marca
                <Input
                  className='AddClothes--form__input'
                />
              </label>
              <label htmlFor='type'>
                Tipo de prenda
                <select className='AddClothes--form__input' id='type'>
                  <option value='' />
                  <option value='' />
                  <option selected value='' />
                  <option value='' />
                </select>
              </label>
              <label>
                Tipo de prenda
                <select className='AddClothes--form__input'>
                  <option value='' />
                  <option value='' />
                  <option selected value='' />
                  <option value='' />
                </select>
              </label>
              <label htmlFor='description'>
                Descripción
                <textarea id='description' />
              </label>
              <Button
                title='GUARDAR'
                className='AddClothes--button'
              />
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default AddClothes
