import React from 'react'
import './UserClothes.scss'
import { Link } from 'react-router-dom'

function UserClothes({ image, url }) {
  return (
    <div className='UserClothes'>
      <Link to={`/${url}` || '/id'}>
        <div className='UserClothes--img'>
          <img
            src={image || 'https://uniforma.net/21-superlarge_default/camisas-de-trabajo-algodon.jpg'}
            alt='item'
          />
        </div>
      </Link>
    </div>
  )
}

export default UserClothes
