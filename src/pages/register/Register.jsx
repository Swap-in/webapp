import React from 'react'
import './Register.scss'
import Input from '../../Components/input'
import Button from '../../Components/button'

function Register() {
    return(
        <>
            <div className='Register'>
                <div className='Register--container'>
                    <Input 
                        type='text'
                        name='nombre'
                        placeholder='NOMBRE COMPLETO'
                    />
                    <Input 
                        type='number'
                        name='telefono'
                        placeholder='TELÉFONO'
                    />
                    <Input 
                        type='email'
                        name='email'
                        placeholder='EMAIL'
                    />
                    <Input 
                        type='password'
                        name='password'
                        placeholder='CONTRASEÑA'
                    />
                    <Input 
                        type='confirm_password'
                        name='confirm_password'
                        placeholder='CONFIRMAR CONTRASEÑA'
                    />
               
                    <Button
                        title='CREAR CUENTA'
                        className='Register--button'
                     />
                </div>

            </div>
        </>
    )
}

export default Register