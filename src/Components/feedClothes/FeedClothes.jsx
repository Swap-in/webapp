import React from 'react'
import './FeedClothes.scss'
import FeedNav from '../feedNav'
import FeedFooter from '../feedFooter'
import FeedContent from '../feedContent/FeedContent'

function FeedClothes() {
  return (
    <div className='FeedClothes'>
      <FeedNav />
      <FeedContent />
      <FeedFooter />
    </div>
  )
}

export default FeedClothes
