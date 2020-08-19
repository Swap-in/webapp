import React from 'react'
import './Register.scss'
import Input from '../../Components/input'
import Button from '../../Components/button'
import backButton from '../../assets/icons/back-button.svg'

function Register() {
    return(
        <>
            <div className='Register'>
                <figure className='Register--icon'>
                    <img src={backButton} alt=""/>
                </figure>
                <h2>Registro</h2>
                <div className='Register--img__container'>
                    <p>FOTO DE PERFIL</p>
                </div>
                <div className='Register--container'>
                    <form>
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
                    </form>
               
                </div>

            </div>
        </>
    )
}

export default Register