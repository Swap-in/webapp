import React from 'react'
import ReactDOM from 'react-dom'

function AlertContainer({ isOpen, children }) {
  if (!isOpen) {
    return null
  }
  return (
    ReactDOM.createPortal(
      <div className='AlertContainer'>
        {children}
      </div>,
      document.getElementById('Modal'),
    )
  )
}

export default AlertContainer
