import { useCallback, useState } from 'react'
import app from '../firebase/client'
import 'firebase/storage'

const useUploadClothes = () => {
  const [stateImage, setStateImage] = useState({
    loadingImages: false,
    errors: false,
    success: false,
    noImages: true,
  })

  const convertImageToUrl = useCallback((currentFile) => {
    if (currentFile) {
      const fileToUrl = URL.createObjectURL(currentFile)
      return fileToUrl
    }
    return null
  }, [])

  const onProgress = () => {
    setStateImage({ errors: false, loadingImages: true, success: false, noImages: false })
  }
  const onError = () => {
    setStateImage({ errors: true, loadingImages: false, success: false, noImages: false })
  }

  const uploadClothes = useCallback((file, id) => {
    const ref = app.storage().ref(`clothes/${id}/${file.name}`)
    const task = ref.put(file)
    return task
  }, [])

  return {
    uploadClothes,
    convertImageToUrl,
    stateImage,
    onProgress,
    onError,
    setStateImage,
  }
}

export default useUploadClothes
