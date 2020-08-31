import React, { useContext } from 'react'
import './MatchModal.scss'
import PageTitle from '../PageTitle'
import Button from '../button'
import likeLogo from '../../assets/icons/superlike.svg'
import userIconDefault from '../../assets/icons/user-icon-default.svg'
import UserContext from '../../context'

function MatchModal({ userMatch, onOpenModal }) {
  const { user } = useContext(UserContext)

  return (
    <div className='Overlay'>
      <div className={`MatchModal ${userMatch && 'active'}`}>
        <PageTitle title={`Has hecho match! con ${userMatch[0].username}`} />
        <div className='MatchModal--clothes'>
          <img src={user.picture} alt='' className='MatchModal--clothes__picture' />
          <img
            src={likeLogo}
            alt='like'
            className='MatchModal--clothes__like'
          />
          <img src={userMatch[0].picture || userIconDefault} alt='' className='MatchModal--clothes__picture' />
        </div>
        <div className='MatchModal--buttons'>
          <Button title='Ignorar' className='MatchModal--buttons__ignore' onClick={() => onOpenModal()} />
          <a
            href={`https://wa.me/${userMatch[0].phone_number}`}
            className='MatchModal--buttons__agree'
            target='_blank'
            rel='noreferrer'
          >
            Acordar
          </a>
        </div>
      </div>
    </div>
  )
}

export default MatchModal
