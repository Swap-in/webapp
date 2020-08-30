import React from 'react'
import './NotificationItem.scss'
import Button from '../button'

function NotificationItem({ data }) {

  return (
    <div className='NotificationItem'>
      <img className='NotificationItem--image' src={data.picture} alt='User' />
      <div className='NotificationItem--Text'>
        <span>
          {data.user_name}
          {' '}
          le dio
          {' '}
          {data.type_like}
          {' '}
          a una de tus prendas
        </span>
      </div>
      <div className='NotificationItem--buttons'>
        {data.is_match && (
          <Button
            title='Cuadrar'
            className='NotificationItem--buttons__secondary'
          />
        )}
      </div>
    </div>
  )
}

export default NotificationItem
