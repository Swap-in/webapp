import React, { useState, useEffect, useContext } from 'react'
import './Feed.scss'
import { useHistory } from 'react-router-dom'
import FeedClothes from '../../Components/feedClothes'
import MatchContainer from '../../containers/MatchContainer'
import getFeedData from '../../services/getFeed'
import UserContext from '../../context'
import Loader from '../../Components/loader'

function Feed() {
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false)
  const [feedData, setFeedData] = useState([])
  const { token } = useContext(UserContext)
  const noClothes = feedData.length === 0

  useEffect(() => {
    getFeedData(token)
      .then((data) => setFeedData(data))
  }, [token, history, noClothes])

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
      <MatchContainer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Feed
