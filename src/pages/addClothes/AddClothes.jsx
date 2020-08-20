import React from 'react'
import './AddClothes.scss'
import { Link } from 'react-router-dom'
import Button from '../../Components/button'
import BackButton from '../../assets/icons/back-button.svg'
import Input from '../../Components/input'


function AddClothes() {
    return(
        <>
        <div className="Addclothes">
            <div className="Addclothes--container">
            <figure className='Addclothes--icon'>
                    <Link to='/'>
                        <img src={BackButton} alt=""/>
                    </Link>
            </figure>  
            <h2>Subir Prenda</h2>
            <p>Fotos de la prenda</p>
            <div className="Addclothes--form">
                <form action="">
                <label htmlFor="">
                        Tipo de prenda
                    <select className="Addclothes--form__input">
                        <option value=""></option>
                        <option value=""></option>
                        <option selected value=""></option>
                        <option value=""></option>
                    </select>
                </label>
                <label htmlFor="">
                        Marca
                  <Input
                    className="Addclothes--form__input"
                />
                </label>
                <label htmlFor="">
                        Tipo de prenda
                    <select className="Addclothes--form__input">
                        <option value=""></option>
                        <option value=""></option>
                        <option selected value=""></option>
                        <option value=""></option>
                    </select>
                </label>
                <label htmlFor="">
                        Tipo de prenda
                    <select className="Addclothes--form__input">
                        <option value=""></option>
                        <option value=""></option>
                        <option selected value=""></option>
                        <option value=""></option>
                    </select>
                </label>
                 <label htmlFor="">
                     Descripción
                    <textarea/>
                </label>   
                  <Button
                    title='GUARDAR'
                    className='Addclothes--button'
                    />
                </form>
            </div>
         
            </div>
        </div>
        </>
    )
}

export default AddClothes