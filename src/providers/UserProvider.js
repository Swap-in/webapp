import React, { useState } from 'react'
import UserContext from '../context'

const UserProvider = ({ children }) => {
  const tokenInSessionStorage = window.sessionStorage.getItem('token')
  const userInSessionStorage = window.sessionStorage.getItem('user')
  const [token, setToken] = useState(tokenInSessionStorage)
  //fix this shit
  const [user, setUser] = useState(userInSessionStorage)

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>{children}</UserContext.Provider>
  )
}

export default UserProvider
