import React from 'react'
import './FeedClothes.scss'
import FeedNav from '../feedNav'
import FeedFooter from '../feedFooter'
import FeedContent from '../feedContent/FeedContent'

function FeedClothes({ setOpenModal, clothesData }) {

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
            setOpenModal={setOpenModal}
            clothesData={clothesData}
          />
        </div>
      )}
    </>
  )
}

export default FeedClothes
