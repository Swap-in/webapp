import React from 'react'
import './FeedClothes.scss'
import FeedNav from '../feedNav'
import FeedFooter from '../feedFooter'

function FeedClothes() {
  return (
    <div className='FeedClothes'>
      <FeedNav />
      <img src='https://image.dhgate.com/0x0s/f2-albu-g10-M00-37-09-rBVaVlyktamAaMItAACo9Qhz5no083.jpg/nuevos-hombres-camisa-para-hombre-de-manga.jpg' alt='Clothes' />
      <FeedFooter />
    </div>
  )
}

export default FeedClothes
