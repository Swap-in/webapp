import React from 'react'
import { Link } from 'react-router-dom'
import './MenuItems.scss'
function MenuItems({ icon, title }) {
    return(
        <>
        <div className="MenuItems--container">
            <div className='MenuItems--container__item'>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <img src={icon} alt="home" className='MenuItems--img' /><span className='MenuItems--text'>{title}</span>
                </Link>
            </div>
        </div>
        </>
    )
}

export default MenuItems