import React from 'react'
import './UserClothes.scss'
import { Link, withRouter } from 'react-router-dom'
import editIcon from '../../assets/icons/edit-button.svg'

function UserClothes({ image, location }) {
  //remove
  const id = 1
  const isAdmin = location.pathname === '/admin'
  return (
    <div className='UserClothes'>
      <Link to={`${location.pathname}/${id}`}>
        {isAdmin && (
          <div type='button' className='UserClothes--edit'>
            <img src={editIcon} alt='Edit' />
          </div>
        )}
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

export default withRouter(UserClothes)
