import React, { useRef, useState } from 'react'
import plusButton from '../../assets/icons/plus-button.svg'
import './AdminPictures.scss'

function AdminPictures({ id }) {
  const submitFile = useRef()
  const [image1, setImage1] = useState(plusButton)
  const [image2, setImage2] = useState(plusButton)
  const [image3, setImage3] = useState(plusButton)
  const [image4, setImage4] = useState(plusButton)
  const [image5, setImage5] = useState(plusButton)
  // const { user } = useContext(UserContext)

  // function handleChangePicture() {
  //   const currentFile = submitFile.current.files
  //   if (currentFile) {
  //     const fileToUrl = URL.createObjectURL(currentFile)
  //     const currentTask = uploadClothes(currentFile, user.username)
  //     setTask(currentTask)
  //     setImage(fileToUrl)
  //   }
  // }

  return (
    <>
      <div className='AdminPictures'>
        <div className='AdminPictures--clothes'>
          <div className='AdminPictures--clothes__grid'>
            <h4>Agregar fotos de la Prenda</h4>
            <div className='SubmitPicture'>
              <label htmlFor={id}>
                <div className='SubmitPicture--image'>
                  <img src={image1} alt='add Garment' />
                </div>
                <input type='file' accept='image/*' id={id} onChange={(e) => setImage1(e.target.value)} ref={submitFile} />
              </label>
            </div>
            <div className='SubmitPicture'>
              <label htmlFor={id}>
                <div className='SubmitPicture--image'>
                  <img src={image2} alt='add Garment' />
                </div>
                <input type='file' accept='image/*' id={id} onChange={(e) => setImage2(e.target.value)} ref={submitFile} />
              </label>
            </div>
            <div className='SubmitPicture'>
              <label htmlFor={id}>
                <div className='SubmitPicture--image'>
                  <img src={image3} alt='add Garment' />
                </div>
                <input type='file' accept='image/*' id={id} onChange={(e) => setImage3(e.target.value)} ref={submitFile} />
              </label>
            </div>
            <div className='SubmitPicture'>
              <label htmlFor={id}>
                <div className='SubmitPicture--image'>
                  <img src={image4} alt='add Garment' />
                </div>
                <input type='file' accept='image/*' id={id} onChange={(e) => setImage4(e.target.value)} ref={submitFile} />
              </label>
            </div>
            <div className='SubmitPicture'>
              <label htmlFor={id}>
                <div className='SubmitPicture--image'>
                  <img src={image5} alt='add Garment' />
                </div>
                <input type='file' accept='image/*' id={id} onChange={(e) => setImage5(e.target.value)} ref={submitFile} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminPictures
