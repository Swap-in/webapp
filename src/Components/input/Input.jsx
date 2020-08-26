import React from 'react';
import './Input.scss'

function Input({ className, type, name, value, onChange, placeholder, reference }) {
  return (
    <div className='Input--container'>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        autoComplete='on'
        ref={reference || null}
      />
    </div>
  )
}

export default Input
