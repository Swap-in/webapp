import React from 'react'
import './FeedClothes.scss'
import FeedNav from '../feedNav'
import FeedFooter from '../feedFooter'
import FeedContent from '../feedContent/FeedContent'

function FeedClothes({ openMatchModal }) {
  return (
    <div className='FeedClothes'>
      <FeedNav />
      <FeedContent />
      <FeedFooter openMatchModal={openMatchModal} />
    </div>
  )
}

export default FeedClothes
