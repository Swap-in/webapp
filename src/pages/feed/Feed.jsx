import React, { useState } from 'react'
import './Feed.scss'
import FeedClothes from '../../Components/feedClothes'
import MatchContainer from '../../containers/MatchContainer'

function Feed() {
  const [isOpen, setIsOpen] = useState(false)
  const onMatchWithSuperlike = () => {
    (isOpen) ?
      setIsOpen(false) :
      setIsOpen(true)
  }
  return (
    <>
      <main className='Feed'>
        <FeedClothes openMatchModal={onMatchWithSuperlike} />
        <FeedClothes />
        <FeedClothes />
        <FeedClothes />
      </main>
      <MatchContainer openModal={onMatchWithSuperlike} isOpen={isOpen} />
    </>
  )
}

export default Feed
