import React, { useState } from 'react'
import './Feed.scss'
import FeedClothes from '../../Components/feedClothes'
import MatchContainer from '../../containers/MatchContainer'

function Feed() {
  const [isOpen, setIsOpen] = useState(false)
  const onMatchWithSuperlike = () => {
    setIsOpen(true)
  }
  return (
    <>
      <div className='Feed'>
        <FeedClothes openMatchModal={onMatchWithSuperlike} />
        <FeedClothes />
        <FeedClothes />
        <FeedClothes />
      </div>
      <MatchContainer isOpen={isOpen} />
    </>
  )
}

export default Feed
