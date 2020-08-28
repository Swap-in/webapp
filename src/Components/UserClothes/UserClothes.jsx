import React from 'react'
import './UserClothes.scss'
import { withRouter } from 'react-router-dom'
import deleteIcon from '../../assets/icons/trash.svg'

function UserClothes({ image, location }) {
  //remove
  const isAdmin = location.pathname === '/admin'
  return (
    <div className='UserClothes'>
      {isAdmin && (
        <button type='button' className='UserClothes--edit'>
          <img src={deleteIcon} alt='Edit' />
        </button>
      )}
      <div className='UserClothes--img'>
        <img
          src={image || 'https://uniforma.net/21-superlarge_default/camisas-de-trabajo-algodon.jpg'}
          alt='item'
        />
      </div>
    </div>
  )
}

export default withRouter(UserClothes)
