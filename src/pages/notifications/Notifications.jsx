import React, { useContext, useEffect, useState } from 'react'
import './Notifications.scss'
import Navbar from '../../Components/Navbar/Navbar'
import PageTitle from '../../Components/PageTitle'
import NotificationItem from '../../Components/NotificationItem'
import UserContext from '../../context'
import getNotifications from '../../services/getNotifications'

function Notifications() {
  const { user, token } = useContext(UserContext)
  const [notifications, setNotifications] = useState()

  useEffect(() => {
    getNotifications(token, user.id)
      .then((data) => setNotifications(data))
  })
  return (
    <>
      <Navbar goBackIcon />
      <div className='Notifications'>
        <PageTitle title='Notificaciones' />
        {notifications?.map((notification) => (
          <NotificationItem data={notification} />
        ))}
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </div>
    </>
  )
}

export default Notifications
