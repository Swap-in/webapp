import React from 'react'
import ReactDOM from 'react-dom'
import MatchModal from '../Components/MatchModal/MatchModal'

function MatchContainer({ isOpen, matchData, onOpenModal }) {
  if (!isOpen) {
    return null
  }
  return (
    ReactDOM.createPortal(
      <MatchModal matchData={matchData} onOpenModal={onOpenModal} />
      , document.getElementById('Modal'),
    )
  )
}

export default MatchContainer
