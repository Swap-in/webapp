import { useState } from 'react'

function useOpenMatchModal(initialState) {
  const [openModal, setOpenModal] = useState(initialState)
  function onOpenModal() {
    if (openModal) {
      setOpenModal(false)
    } else {
      setOpenModal(true)
    }
  }
  return { openModal, onOpenModal, setOpenModal }
}

export default useOpenMatchModal
