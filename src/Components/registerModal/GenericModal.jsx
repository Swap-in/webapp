import React from 'react'
import { useHistory } from 'react-router-dom'
import './RegisterModal.scss'
import PageTitle from '../PageTitle'
import Button from '../button'

function GenericModal({ title, children, page, btnTitle }) {
  const history = useHistory()
  return (
    <div className='Overlay'>
      {/* <div className={isOpen && 'RegisterModal'}> */}
      <div className='RegisterModal'>
        <PageTitle title={title} />
        <p>
          {children}
        </p>
        <Button
          className='RegisterModal--btn'
          onClick={() => history.push(`/${page}`)}
          title={btnTitle}
        />
      </div>
    </div>
  )
}

export default GenericModal
