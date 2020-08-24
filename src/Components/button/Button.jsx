import React from 'react'
import './Button.scss'

function Button({ title, className, onClick, disabled }) {
  return (
    <div className='Btn--container'>
      <button
        type='button'
        className={className}
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
