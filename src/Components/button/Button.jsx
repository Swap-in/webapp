import React from 'react'
import './Button.scss'

function Button({ title, type, className }) {
  return (
    <>
      <div className='Btn--container'>
        <button
          type={type}
          className={className}
        >
          {title}
        </button>
      </div>
    </>
  )
}

export default Button
