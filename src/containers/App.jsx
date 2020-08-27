import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../sass/resets.scss'
import Token from '../pages/Token'
import PrivateRoute from '../hooks/PrivateRoute'
import Loader from '../Components/loader/Loader'
import UserProvider from '../providers/UserProvider'

const Logout = lazy(() => import('../pages/logout'))
const Login = lazy(() => import('../pages/login'))
const Register = lazy(() => import('../pages/register'))
const Profile = lazy(() => import('../pages/Profile'))
const AdminClothes = lazy(() => import('../pages/adminClothes'))
const Feed = lazy(() => import('../pages/feed'))
const Notifications = lazy(() => import('../pages/notifications'))
const Search = lazy(() => import('../pages/search'))
const UploadClothes = lazy(() => import('../pages/uploadClothes'))
const ProfileClothes = lazy(() => import('../pages/profileClothes'))
const Error404 = lazy(() => import('../pages/error404'))

function App() {
  return (
    <>
      <UserProvider>
        <Suspense fallback={<Loader />}>
          <Router>
            <Switch>
              <Route exact path='/token' component={Token} />
              <Route exact path='/' component={Logout} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <PrivateRoute path='/profile' component={Profile} />
              <PrivateRoute path='/feed' component={Feed} />
              <PrivateRoute exact path='/upload' component={UploadClothes} />
              <PrivateRoute exact path='/notifications' component={Notifications} />
              <PrivateRoute exact path='/search' component={Search} />
              <PrivateRoute exact path='/search/:id' component={AdminClothes} />
              <PrivateRoute exact path='/garment' component={ProfileClothes} />
              <PrivateRoute exact path='/admin' component={AdminClothes} />
              <PrivateRoute component={Error404} />
            </Switch>
          </Router>
        </Suspense>
      </UserProvider>
    </>
  )
}

export default App
