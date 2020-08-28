import React, { useRef, useState, useContext, useEffect } from 'react'
import './SubmitPicture.scss'
import plusButton from '../../assets/icons/plus-button.svg'
import UserContext from '../../context'
import uploadClothes from '../../firebase/uploadClothes'

function SubmitPicture({ id }) {
  const submitFile = useRef()
  const [image, setImage] = useState(plusButton)
  const [task, setTask] = useState()
  const { user } = useContext(UserContext)

  function handleChangePicture() {
    const currentFile = submitFile.current.files
    if (currentFile) {
      const fileToUrl = URL.createObjectURL(currentFile)
      const currentTask = uploadClothes(currentFile, user.username)
      setTask(currentTask)
      setImage(fileToUrl)
    }
  }

  useEffect(() => {
    if (task) {
      const onComplete = () => {
        task.snapshot.ref.getDownloadURL()
          .then((urlImage) => console.log(urlImage))
      }
      task.on('state_changed', onComplete)
    }
  }, [task])

  return (
    <div className='SubmitPicture'>
      <label htmlFor={id}>
        <div className='SubmitPicture--image'>
          <img src={image} alt='add Garment' />
        </div>
        <input type='file' accept='image/*' id={id} onChange={handleChangePicture} ref={submitFile} />
      </label>
    </div>
  )
}

export default SubmitPicture
