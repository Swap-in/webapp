import React, { useState, useContext } from 'react'
import './AdminPictures.scss'
import plusButton from '../../assets/icons/plus-button.svg'
import Button from '../button'
import UserContext from '../../context'
import useUploadClothes from '../../hooks/useUploadClothes'

function AdminPictures({ setURLImages }) {

  const { user } = useContext(UserContext)
  const { uploadClothes } = useUploadClothes()
  const [image1, setImage1] = useState()
  const [image2, setImage2] = useState()
  const [image3, setImage3] = useState()
  const [image4, setImage4] = useState()
  const [image5, setImage5] = useState()

  function handleSubmitPictures(e) {
    e.preventDefault()
    const images = [image1, image2, image3, image4, image5]
    const urls = []
    images.forEach((image) => {
      const currentTask = uploadClothes(image, user.id)
      currentTask.on('state_changed', () => {
        console.log('completado')
        currentTask.snapshot.ref.getDownloadURL()
          .then((imageURL) => {
            urls.push(imageURL)
          })
      })
    })
    setURLImages(urls)
  }

  return (
    <>
      <div className='AdminPictures'>
        <div className='AdminPictures--clothes'>
          <div className='AdminPictures--clothes__grid'>
            <h4>Agregar fotos de la Prenda</h4>
            <div className='SubmitPicture'>
              <label htmlFor='img1'>
                <div className='SubmitPicture--image'>
                  <img src={plusButton} alt='add Garment' />
                </div>
                <input type='file' accept='image/*' id='img1' onChange={(e) => setImage1(e.target.files[0])} />
              </label>
            </div>
            <div className='SubmitPicture'>
              <label htmlFor='img2'>
                <div className='SubmitPicture--image'>
                  <img src={plusButton} alt='add Garment' />
                </div>
                <input type='file' accept='image/*' id='img2' onChange={(e) => setImage2(e.target.files[0])} />
              </label>
            </div>
            <div className='SubmitPicture'>
              <label htmlFor='img3'>
                <div className='SubmitPicture--image'>
                  <img src={plusButton} alt='add Garment' />
                </div>
                <input type='file' accept='image/*' id='img3' onChange={(e) => setImage3(e.target.files[0])} />
              </label>
            </div>
            <div className='SubmitPicture'>
              <label htmlFor='img4'>
                <div className='SubmitPicture--image'>
                  <img src={plusButton} alt='add Garment' />
                </div>
                <input type='file' accept='image/*' id='img4' onChange={(e) => setImage4(e.target.files[0])} />
              </label>
            </div>
            <div className='SubmitPicture'>
              <label htmlFor='img5'>
                <div className='SubmitPicture--image'>
                  <img src={plusButton} alt='add Garment' />
                </div>
                <input type='file' accept='image/*' id='img5' onChange={(e) => setImage5(e.target.files[0])} />
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
