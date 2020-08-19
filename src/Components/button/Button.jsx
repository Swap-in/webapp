import React from 'react'
import './Button.scss'

function Button({ title, className }) {
  return (
    <div className='Btn--container'>
      <button
        type='button'
        className={className}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
