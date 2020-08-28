import React, { useState, useEffect, useRef } from 'react'
import uploadProfilePicture from '../../firebase/uploadProfilePictures'
import addPictureIcon from '../../assets/icons/add-picture.svg'

function SubmitProfilePicture({ setURLImage }) {
  const [image, setImage] = useState(addPictureIcon)
  const [task, setTask] = useState(null)
  const userImage = useRef()

  const handlePlaceImage = () => {
    const currentFile = userImage.current.files[0]
    if (currentFile) {
      const fileToUrl = URL.createObjectURL(currentFile)
      setImage(fileToUrl)
      const currentTask = uploadProfilePicture(currentFile)
      setTask(currentTask)
    }
  }

  useEffect(() => {
    if (task) {
      const onComplete = () => {
        console.log('completado')
        task.snapshot.ref.getDownloadURL()
          .then((imageURL) => {
            setURLImage(imageURL)
          })
      }
      task.on('state_changed', onComplete)
    }
  }, [task, setURLImage])

  return (
    <label htmlFor='userProfile'>
      <img src={image} alt='User' />
      <input
        type='file'
        accept='image/*'
        id='userProfile'
        ref={userImage}
        onChange={handlePlaceImage}
      />
    </label>
  )
}

export default SubmitProfilePicture
