import { useCallback } from 'react'
import app from '../firebase/client'
import 'firebase/storage'

const useUploadClothes = () => {

  const convertImageToUrl = useCallback((currentFile) => {
    const fileToUrl = URL.createObjectURL(currentFile)
    console.log(fileToUrl)
    return fileToUrl
  }, [])

  const uploadClothes = useCallback((file, id) => {
    const ref = app.storage().ref(`clothes/${id}/${file.name}`)
    const task = ref.put(file)
    return task
  }, [])

  return {
    uploadClothes,
    convertImageToUrl,
  }
}

export default useUploadClothes
