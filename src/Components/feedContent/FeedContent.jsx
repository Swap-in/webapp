import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './FeedContent.scss'

function FeedContent({ clothes }) {

  return (
    <div className='FeedContent'>
      <Carousel>
        {clothes?.map((image) => (
          <Carousel.Item key={image}>
            <div className='FeedContent--items'>
              <img src={image} alt='element' />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default FeedContent
