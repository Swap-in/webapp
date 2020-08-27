import { useContext, useCallback, useState } from 'react'
import UserContext from '../context'
import loginService from '../services/login'

function useUser() {
  const { user, setUser, setToken } = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(false)

  const login = useCallback((data) => {
    setLoading(true)
    loginService(data)
      .then((userData) => {
        setLoading(false)
        window.sessionStorage.setItem('token', userData.token)
        window.sessionStorage.setItem(Object.keys(userData), Object.values(userData))
        setToken(userData.token)
        setUser(userData)
      })
      .catch((err) => {
        window.sessionStorage.removeItem('token')
        setErrors('Datos incorrectos')
        setLoading(false)
        console.error(err)
      })
  }, [setUser, setToken])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('token')
    setUser(null)
  }, [setUser])

  return {
    user,
    isLogged: Boolean(user),
    login,
    logout,
    errors,
    loading,
  }
}

export default useUser
