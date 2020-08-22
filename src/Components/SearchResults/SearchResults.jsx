import React from 'react'
import './SearchResults.scss'
import { Link, withRouter } from 'react-router-dom'

function SearchResults({ image, location }) {
  //remove
  const id = 1
  const isAdmin = location.pathname === '/admin'
  return (
    <div className='SearchResultsItem'>
      <Link to={`${location.pathname}/${id}`}>
          <img className='SearchResultsItem--img'
            src={image || 'https://cdn-images.farfetch-contents.com/14/43/69/43/14436943_21290509_1000.jpg'}
            alt='item'/>
      </Link>
    </div>
  )
}

export default withRouter(SearchResults)
