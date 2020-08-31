import React from 'react'
import ReactDOM from 'react-dom'
import MatchModal from '../Components/MatchModal/MatchModal'

function MatchContainer({ isOpen, userMatch, onOpenModal }) {
  if (!isOpen) {
    return null
  }
  return (
    ReactDOM.createPortal(
      <MatchModal userMatch={userMatch} onOpenModal={onOpenModal} />
      , document.getElementById('Modal'),
    )
  )
}

export default MatchContainer
