import React from 'react'
import ReactDOM from 'react-dom'
import MatchModal from '../Components/MatchModal/MatchModal'

function MatchContainer({ isOpen, openModal }) {
  if (!isOpen) {
    return null
  }
  return (
    ReactDOM.createPortal(
      <MatchModal openModal={openModal} />
      , document.getElementById('Modal'),
    )
  )
}

export default MatchContainer
