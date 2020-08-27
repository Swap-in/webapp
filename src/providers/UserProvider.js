import React, { useState } from 'react'
import UserContext from '../context'

const UserProvider = ({ children }) => {
  const userDataInSession = window.sessionStorage.getItem('user')
  const [token, setToken] = useState(window.sessionStorage.getItem('token'))
  const [user, setUser] = useState(JSON.parse(userDataInSession))

  return (
    <UserContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
