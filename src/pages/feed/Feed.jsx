import React, { useState, useEffect, useContext } from 'react'
import './Feed.scss'
import { useHistory } from 'react-router-dom'
import FeedClothes from '../../Components/feedClothes'
import MatchContainer from '../../containers/MatchContainer'
import getFeedData from '../../services/getFeed'
import UserContext from '../../context'
import Loader from '../../Components/loader'
import useOpenMatchModal from '../../hooks/useOpenMatch'

function Feed() {
  const history = useHistory()
  const [feedData, setFeedData] = useState([])
  const [matchData, setMatchData] = useState()
  const { token } = useContext(UserContext)
  const { onOpenModal, openModal, setOpenModal } = useOpenMatchModal(false)

  useEffect(() => {
    getFeedData(token)
      .then((data) => {
        setFeedData(data)
      })
  }, [token, history, setOpenModal])

  return (
    <>
      <main className='Feed'>
        {feedData ? feedData.map((data) => (
          <FeedClothes
            key={data.id}
            clothesData={data}
            setMatchData={setMatchData}
            openModal={setOpenModal}
          />
        )) : <Loader />}
      </main>
      <MatchContainer
        isOpen={openModal}
        onOpenModal={onOpenModal}
        userMatch={matchData}
      />
    </>
  )
}

export default Feed
