import React from 'react'
import './SubmitPicture.scss'
import plusButton from '../../assets/icons/plus-button.svg'

function SubmitPicture() {
  return (
    <div className='SubmitPicture'>
      <button type='button'>
        <img src={plusButton} alt='add Garment' />
      </button>
    </div>
  )
}

export default SubmitPicture
