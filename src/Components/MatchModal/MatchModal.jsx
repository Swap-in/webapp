import React from 'react'
import './MatchModal.scss'
import PageTitle from '../PageTitle'
import Button from '../button'
import likeLogo from '../../assets/icons/superlike.svg'

function MatchModal({ matchData, onOpenModal }) {

  console.log('modal', matchData)
  return (
    <div className='Overlay'>
      <div className='MatchModal'>
        <PageTitle title='Has hecho match!' />
        <div className='MatchModal--clothes'>
          <img
            src={likeLogo}
            alt='like'
            className='MatchModal--clothes__like'
          />
        </div>
        <div className='MatchModal--buttons'>
          <Button title='Ignorar' className='MatchModal--buttons__ignore' onClick={() => onOpenModal()} />
          <Button title='Acordar' className='MatchModal--buttons__agree' />
        </div>
      </div>
    </div>
  )
}

export default MatchModal
