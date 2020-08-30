import React, { useEffect } from 'react'
import './NotificationItem.scss'
import { Link } from 'react-router-dom'
import Button from '../button'

function NotificationItem({ data }) {
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div className='NotificationItem'>
      <img className='NotificationItem--image' src='https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=70' alt='' />
      <div className='NotificationItem--Text'>
        <span>Jaime Lopez le dio like a una de tus prendas</span>
      </div>
      <div className='NotificationItem--buttons'>
        <Link to='/admin'>
          <Button
            title='Ver'
            className='NotificationItem--buttons__secondary'
          />
        </Link>
      </div>
    </div>
  )
}

export default NotificationItem
