import React, { useRef, useState } from 'react'
import './SubmitPicture.scss'
import plusButton from '../../assets/icons/plus-button.svg'

function SubmitPicture({ id }) {
  const submitFile = useRef()
  const [image, setImage] = useState(plusButton)

  function onAddPicture(e) {
    console.log(e)
    const currentFile = submitFile.current.files[0]
    if (currentFile) {
      const fileToUrl = URL.createObjectURL(currentFile)
      setImage(fileToUrl)
    }
  }
  return (
    <div className='SubmitPicture'>
      <label htmlFor={id}>
        <img src={image} alt='add Garment' />
        <input type='file' accept='image/*' id={id} onChange={onAddPicture} ref={submitFile} />
      </label>
    </div>
  )
}

export default SubmitPicture
