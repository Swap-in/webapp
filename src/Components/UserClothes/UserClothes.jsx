import React, { useContext } from 'react'
import './UserClothes.scss'
import { withRouter } from 'react-router-dom'
import deleteIcon from '../../assets/icons/trash.svg'
import UserContext from '../../context'
import deleteClothes from '../../services/deleteClothes'

function UserClothes({ location, clotheData }) {
  const isAdmin = location.pathname === '/admin'
  const { token } = useContext(UserContext)
  const handleDelete = () => {
    deleteClothes(token, clotheData.id)
      .then(() => window.location.reload())
  }

  return (
    <div className='UserClothes'>
      {isAdmin && (
        <button type='button' className='UserClothes--edit' onClick={handleDelete}>
          <img src={deleteIcon} alt='Delete' />
        </button>
      )}
      {clotheData && (
        <>
          <div className='UserClothes--img'>
            <img
              src={clotheData.picture_1}
              alt='item'
            />
          </div>
          {!isAdmin && (
            <>
              <h2>{clotheData.title}</h2>
              <div className='UserClothes--description'>
                <p>{clotheData.description}</p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default withRouter(UserClothes)
