import app from './client'
import 'firebase/storage'

function uploadClothes(file, id) {
  const ref = app.storage().ref(`clothes/${id}/${file.name}`)
  const task = ref.put(file)
  return task
}

export default uploadClothes
