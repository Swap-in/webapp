import React from 'react'
import './SearchResults.scss'

function SearchResults({ image }) {

  return (
    <div className='SearchResultsItem'>
      <div className='SearchResultsItem--img'>
        <img
          src={image || 'https://cdn-images.farfetch-contents.com/14/43/69/43/14436943_21290509_1000.jpg'}
          alt='item'
        />
      </div>
    </div>
  )
}

export default SearchResults
