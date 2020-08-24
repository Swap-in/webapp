import React from 'react'
import './FeedContent.scss'

const images = [
  'https://image.dhgate.com/0x0s/f2-albu-g10-M00-37-09-rBVaVlyktamAaMItAACo9Qhz5no083.jpg/nuevos-hombres-camisa-para-hombre-de-manga.jpg',
  'https://ae01.alicdn.com/kf/H55a330a1ef76441192aef1eb1aea559eK/Camisa-de-mezclilla-para-hombre-2020-primavera-oto-o-camisa-delgada-para-hombre-camisa-de-manga.jpg_q50.jpg',
]

function FeedContent() {
  return (
    <div className='FeedContent'>
      {images.map((image) => (
        <img key={image} src={image} alt='element' />
      ))}
    </div>
  )
}

export default FeedContent
