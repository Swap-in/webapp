import React from 'react'
import './SearchResults.scss'
import Pellet from '../pellet'
import userDefault from '../../assets/icons/user-icon-default.svg'

function SearchResults({ clothesData }) {

  return (
    <div className='SearchResultsItem'>
      {clothesData && (
        <>
          <div className='SearchResultsItem--user'>
            <img src={clothesData.picture || userDefault} alt='user' />
            <h3>{clothesData.username}</h3>
          </div>
          <div className='SearchResultsItem--img'>
            <img
              src={clothesData.picture_1}
              alt='item'
            />
          </div>
          <div className='SearchResultsItem--description'>
            <h3>{clothesData.title}</h3>
            <Pellet title={clothesData.size} />
            <Pellet title={clothesData.gender} />
          </div>
        </>
      )}
    </div>
  )
}

export default SearchResults
