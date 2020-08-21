import React from 'react'
import './Button.scss'

function Button({ title, className, onClick }) {
  return (
    <div className='Btn--container'>
      <button
        type='button'
        className={className}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
