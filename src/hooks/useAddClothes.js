import { useState, useCallback } from 'react'
import addClothes from '../services/addClothes'

function useAddClothes() {
  const [state, setState] = useState({ loading: false, errors: false })

  const addClothesService = useCallback((data, images, id, token) => {
    setState({ loading: true, errors: false })
    addClothes(data, images, id, token)
      .then((data) => {
        setState({ loading: false, errors: false })
        console.log(data)
      })
      .catch((err) => {
        console.error('Error', err)
        setState({ loading: false, errors: true })
      })
  }, [])

  return {
    errors: state.errors,
    loading: state.loading,
    addClothesService,
  }
}

export default useAddClothes
