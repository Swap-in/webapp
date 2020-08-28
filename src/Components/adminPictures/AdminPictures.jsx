import React, { useRef, useState, useEffect, useContext } from 'react'
import './AdminPictures.scss'
import plusButton from '../../assets/icons/plus-button.svg'
import Button from '../button'
import UserContext from '../../context'
import useUploadClothes from '../../hooks/useUploadClothes'

function AdminPictures({ id, setURLImages }) {

  const { user } = useContext(UserContext)
  const { uploadClothes } = useUploadClothes()
  const submitFile = useRef()
  const [image1, setImage1] = useState()
  const [image2, setImage2] = useState()
  const [image3, setImage3] = useState()
  const [image4, setImage4] = useState()
  const [image5, setImage5] = useState()
  const [images, setImages] = useState([])
  const [task, setTask] = useState(null)

  useEffect(() => {
    const images = [image1, image2, image3, image4, image5]
    setImages(images)
    if (task) {
      const onComplete = () => {
        console.log('completado')
        task.snapshot.ref.getDownloadURL()
          .then((imageURL) => {
            setURLImages(imageURL)
          })
      }
      task.on('state_changed', onComplete)
    }
  }, [setImages, image1, image2, image3, image4, image5, task, setURLImages])

  function handleSubmitPictures(e) {
    e.preventDefault()
    images.forEach((image) => {
      const currentTask = uploadClothes(image, user.id)
      setTask(currentTask)
    })
  }

  return (
    <>
      <div className='AdminPictures'>
        <div className='AdminPictures--clothes'>
          <div className='AdminPictures--clothes__grid'>
            <h4>Agregar fotos de la Prenda</h4>
            <div className='SubmitPicture'>
              <label htmlFor={id}>
                <div className='SubmitPicture--image'>
                  <img src={plusButton} alt='add Garment' />
                </div>
                <input type='file' accept='image/*' id={id} onChange={(e) => setImage1(e.target.files[0])} ref={submitFile} />
              </label>
            </div>
            <div className='SubmitPicture'>
              <label htmlFor={id}>
                <div className='SubmitPicture--image'>
                  <img src={plusButton} alt='add Garment' />
                </div>
                <input type='file' accept='image/*' id={id} onChange={(e) => setImage2(e.target.files[0])} ref={submitFile} />
              </label>
            </div>
            <div className='SubmitPicture'>
              <label htmlFor={id}>
                <div className='SubmitPicture--image'>
                  <img src={plusButton} alt='add Garment' />
                </div>
                <input type='file' accept='image/*' id={id} onChange={(e) => setImage3(e.target.files[0])} ref={submitFile} />
              </label>
            </div>
            <div className='SubmitPicture'>
              <label htmlFor={id}>
                <div className='SubmitPicture--image'>
                  <img src={plusButton} alt='add Garment' />
                </div>
                <input type='file' accept='image/*' id={id} onChange={(e) => setImage4(e.target.files[0])} ref={submitFile} />
              </label>
            </div>
            <div className='SubmitPicture'>
              <label htmlFor={id}>
                <div className='SubmitPicture--image'>
                  <img src={plusButton} alt='add Garment' />
                </div>
                <input type='file' accept='image/*' id={id} onChange={(e) => setImage5(e.target.files[0])} ref={submitFile} />
              </label>
            </div>
            <Button title='subir' onClick={handleSubmitPictures} />
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminPictures
