import app from './client'
import 'firebase/storage'

function uploadProfilePictures(file) {
  const ref = app.storage().ref(`profilePictures/${file.name}`)
  const task = ref.put(file)
  return task
}

export default uploadProfilePictures
