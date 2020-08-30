import React from 'react'
import ReactDOM from 'react-dom'
import MatchModal from '../Components/MatchModal/MatchModal'

function MatchContainer({ isOpen, setIsOpen }) {
  if (!isOpen) {
    return null
  }
  return (
    ReactDOM.createPortal(
      <MatchModal setIsOpen={setIsOpen} />
      , document.getElementById('Modal'),
    )
  )
}

export default MatchContainer
