import React from 'react'
import './Profile.scss'
import UserProfile from '../../Components/UserProfile'
import Navbar from '../../Components/Navbar/Navbar'

function Profile() {
  return (
    <>
      <Navbar />
      <div className='Profile'>
        <UserProfile />
      </div>
    </>
  )
}

export default Profile
