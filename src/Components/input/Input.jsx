import React from 'react';
import './Input.scss'

function Input({ className, type, name, value, onChange, placeholder }) {
    return (
        <>
            <div className='Input--container'>
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        className={className}
                        placeholder={placeholder}

                     />
            </div>

        </>
    )
}

export default Input