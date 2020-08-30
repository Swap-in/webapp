import React from 'react'
import './NotificationItem.scss'

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
          <a
            href={`https:wa.me/${data.phone_number}`}
            className='NotificationItem--buttons__secondary'
            target='_blank'
            rel='noreferrer'
          >
            Cuadrar
          </a>
        )}
      </div>
    </div>
  )
}

export default NotificationItem
