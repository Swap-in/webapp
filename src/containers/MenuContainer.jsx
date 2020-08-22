import React from 'react'
import ReactDOM from 'react-dom'
import Menu from '../Components/menu'

function MenuContainer({ isOpen, onClose, transition }) {
  if (!isOpen) {
    return null
  }
  return (
    ReactDOM.createPortal(
      <Menu onClose={onClose} transition={transition} />
      , document.getElementById('Modal'),
    )
  )
}

export default MenuContainer
