import React from 'react'
import './Notifications.scss'
import Navbar from '../../Components/Navbar/Navbar'
import PageTitle from '../../Components/PageTitle'
import NotificationItem from '../../Components/NotificationItem'

function Notifications({ title }) {
  return (
    <>
      <Navbar goBackIcon />
      <div className='Notifications'>
        <PageTitle title={title} />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </div>
    </>
  )
}

export default Notifications