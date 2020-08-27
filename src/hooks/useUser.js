import { useContext, useCallback, useState } from 'react'
import UserContext from '../context'
import loginService from '../services/login'

function useUser() {
  const { token, setToken, setUser } = useContext(UserContext)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback((data) => {
    setState({ loading: true, error: false })
    loginService(data)
      .then((userData) => {
        setState({ loading: false, error: false })
        setToken(userData.token)
        setUser(userData.user)
        window.sessionStorage.setItem('token', userData.token)
        window.sessionStorage.setItem('user', JSON.stringify(userData.user))
      })
      .catch((err) => {
        setState({ loading: false, error: true })
        window.sessionStorage.clear()
        console.error(err)
      })
  }, [setToken, setUser])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('user')
    setToken(null)
    setUser(null)
  }, [setToken, setUser])

  return {
    isLogged: Boolean(token),
    login,
    logout,
    errors: state.error,
    loading: state.loading,
  }
}

export default useUser
