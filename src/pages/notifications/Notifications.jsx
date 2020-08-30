import React, { useContext, useEffect, useState } from 'react'
import './Notifications.scss'
import Navbar from '../../Components/Navbar/Navbar'
import PageTitle from '../../Components/PageTitle'
import NotificationItem from '../../Components/NotificationItem'
import UserContext from '../../context'
import getNotifications from '../../services/getNotifications'
import Loader from '../../Components/loader'

function Notifications() {
  const { user, token } = useContext(UserContext)
  const [notifications, setNotifications] = useState()

  useEffect(() => {
    getNotifications(token, user.id)
      .then((data) => setNotifications(data))
  }, [token, user.id])

  return (
    <>
      <Navbar goBackIcon />
      <div className='Notifications'>
        <PageTitle title='Notificaciones' />
        {notifications ? notifications.map((notification) => (
          <NotificationItem
            data={notification}
            key={notification.notification_id}
          />
        )) : <Loader />}
      </div>
    </>
  )
}

export default Notifications
