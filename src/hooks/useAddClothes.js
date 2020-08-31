import { useState, useCallback } from 'react'
import addClothes from '../services/addClothes'

function useAddClothes() {
  const [state, setState] = useState({ loading: false, errors: false, success: false })

  const addClothesService = useCallback((data, images, id, token) => {
    setState({ loading: false, errors: false, success: false })
    addClothes(data, images, id, token)
      .then((data) => {
        setState({ loading: false, errors: false, success: true })
        return data
      })
      .catch(() => {
        setState({ loading: false, errors: true, success: false })
      })
  }, [])

  return {
    errors: state.errors,
    loading: state.loading,
    success: state.success,
    addClothesService,
  }
}

export default useAddClothes
