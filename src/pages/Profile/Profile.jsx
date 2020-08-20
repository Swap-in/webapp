import React from 'react'
import './Profile.scss'
import UserProfile from '../../Components/UserProfile'
import Navbar from '../../Components/Navbar/Navbar'

function Profile() {
  return (
    <div className='Profile'>
      <Navbar />
      <UserProfile />
    </div>
  )
}

export default Profile
