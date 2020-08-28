import React from 'react'
import './clothesInfo.scss'

function clothesInfo() {
  return (
    <>
      <div className='clotheInfo'>
        <h4 className='clotheInfo--h4'>Camisa Adidas</h4>
        <div className='clotheInfo--containerImg'>
          <img className='clotheInfo--img' src='https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=126' alt='User' />
        </div>
        <div className='clotheInfo--container'>
          <p>Talla M</p>
          <p>Unisex</p>
        </div>
        <div className='clotheInfo--containerDescription'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui</p>
        </div>
      </div>
    </>
  )
}

export default clothesInfo
