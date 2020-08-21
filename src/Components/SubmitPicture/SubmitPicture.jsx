import React from 'react'
import './SubmitPicture.scss'
import plusButton from '../../assets/icons/plus-button.svg'

function SubmitPicture() {
  return (
    <div className='SubmitPicture'>
      <label htmlFor='inputFile'>
        <img src={plusButton} alt='add Garment' />
        <input type='file' accept='image/*' id='inputFile' />
      </label>
    </div>
  )
}

export default SubmitPicture
