import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Profile from '../pages/Profile'
import '../sass/resets.scss'

function App() {
  return (
    <BrowserRouter>
      <Route>
        <Profile />
      </Route>
    </BrowserRouter>
  )
}

export default App
