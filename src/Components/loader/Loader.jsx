import React from 'react'
import './Loader.scss'

function Loader({ className }) {
  return (
    <div className={`${className} Loading`}>
      <div className='Loader first'>
        <div className='Loader second'>
          <div className='Loader third' />
        </div>
      </div>
    </div>
  )
}

export default Loader
