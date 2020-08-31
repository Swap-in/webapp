import React from 'react'
import './FeedClothes.scss'
import FeedNav from '../feedNav'
import FeedFooter from '../feedFooter'
import FeedContent from '../feedContent/FeedContent'

function FeedClothes({ clothesData, setMatchData, openModal }) {

  return (
    <>
      {clothesData && (
        <div className='FeedClothes'>
          <FeedNav
            username={clothesData.username}
            picture={clothesData.profile_picture}
          />
          <FeedContent clothes={clothesData.pictures} />
          <FeedFooter
            clothesData={clothesData}
            setMatchData={setMatchData}
            openModal={openModal}
          />
        </div>
      )}
    </>
  )
}

export default FeedClothes
