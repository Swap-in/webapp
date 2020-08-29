import React from 'react'
import './FeedContent.scss'

function FeedContent({ clothes }) {

  return (
    <div className='FeedContent'>
      <div className='FeedContent--carousel'>
        {clothes?.map((image) => (
          <div className='FeedContent--carousel__items' key={image}>
            <img src={image} alt='element' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeedContent
