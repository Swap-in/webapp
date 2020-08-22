import { useState } from 'react'

function useOpenMenu(initialState) {
  const [openNav, setOpenNav] = useState(initialState)
  const [transitionMenu, setTransitionMenu] = useState('')
  function onOpenNav() {
    if (openNav) {
      setTransitionMenu('is-closing')
      setTimeout(() => {
        setOpenNav(false)
      }, 400);
    } else {
      setOpenNav(true)
      setTransitionMenu('is-opening')
    }
  }
  return { transitionMenu, openNav, onOpenNav }
}

export default useOpenMenu
