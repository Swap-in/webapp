/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import './AddClothes.scss'
import Button from '../button/Button'

function AddClothes() {
  return (
    <>
      <div className='AddClothes'>
        <div className='AddClothes--container'>
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
                <input type='text' name='marca' className='AddClothes--form__inputText' required />
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
