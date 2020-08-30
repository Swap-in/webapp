import React, { useState, useEffect, useContext } from 'react'
import './Feed.scss'
import FeedClothes from '../../Components/feedClothes'
import MatchContainer from '../../containers/MatchContainer'
import getFeedData from '../../services/getFeed'
import UserContext from '../../context'
import Loader from '../../Components/loader'

function Feed() {
  const [isOpen, setIsOpen] = useState(false)
  const [feedData, setFeedData] = useState(null)
  const { token } = useContext(UserContext)

  const onMatchWithSuperlike = () => {
    (isOpen) ?
      setIsOpen(false) :
      setIsOpen(true)
  }

  useEffect(() => {
    getFeedData(token)
      .then((data) => setFeedData(data))
  }, [token])

  return (
    <>
      <main className='Feed'>
        {feedData ? feedData.map((data) => (
          <FeedClothes
            key={data.id}
            setOpenModal={setIsOpen}
            clothesData={data}
          />
        )) : <Loader />}
      </main>
      <MatchContainer openModal={onMatchWithSuperlike} isOpen={isOpen} />
    </>
  )
}

export default Feed
