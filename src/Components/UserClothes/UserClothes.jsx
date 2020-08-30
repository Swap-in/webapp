import React, { useContext, useState } from 'react'
import './UserClothes.scss'
import { withRouter } from 'react-router-dom'
import deleteIcon from '../../assets/icons/trash.svg'
import UserContext from '../../context'
import deleteClothes from '../../services/deleteClothes'
import AlertContainer from '../../containers/AlertContainer'
import GenericModal from '../registerModal'

function UserClothes({ location, clotheData }) {
  const isAdmin = location.pathname === '/admin'
  const { token } = useContext(UserContext)
  const [openModal, setOpenModal] = useState()
  const handleDelete = () => {
    deleteClothes(token, clotheData.id)
      .then(() => setOpenModal(true))
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
              src={clotheData.picture_1 || 'https://uniforma.net/21-superlarge_default/camisas-de-trabajo-algodon.jpg'}
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
      <AlertContainer isOpen={openModal}>
        <GenericModal />
      </AlertContainer>
    </div>
  )
}

export default withRouter(UserClothes)
