import React from 'react'
import './SearchResults.scss'
import { Link, withRouter } from 'react-router-dom'

function SearchResults({ image, location }) {
  //remove
  const id = 1
  return (
    <div className='SearchResultsItem'>
      <Link to={`${location.pathname}/${id}`}>
        <div className='SearchResultsItem--img'>
          <img
            src={image || 'https://cdn-images.farfetch-contents.com/14/43/69/43/14436943_21290509_1000.jpg'}
            alt='item'
          />
        </div>
      </Link>
    </div>
  )
}

export default withRouter(SearchResults)
