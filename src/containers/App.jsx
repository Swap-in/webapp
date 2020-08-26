import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../sass/resets.scss'
<<<<<<< HEAD
import Login from '../pages/login'
import Register from '../pages/register'
import Logout from '../pages/logout'
import Error404 from '../pages/error404'
import Profile from '../pages/Profile'
import AdminClothes from '../pages/adminClothes/AdminClothes'
import Feed from '../pages/feed'
import Notifications from '../pages/notifications/Notifications'
import Search from '../pages/search/Search'
import UploadClothes from '../pages/uploadClothes'
import ProfileClothes from '../pages/profileClothes'
import { AuthProvider } from '../Context/context'
=======
>>>>>>> 6ac7e424a3e713f93d649595d40fce9320cbefe2
import Token from '../pages/Token'
import AuthProvider from '../providers/AuthProvider'
import PrivateRoute from '../hooks/PrivateRoute'
import Loader from '../Components/loader/Loader'

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
      <AuthProvider>
<<<<<<< HEAD
        <Router>
          <Switch>
            <Route exact path='/token' component={Token}/>
            <Route exact path='/' component={Logout}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <PrivateRoute path='/profile' component={Profile}/>
            <PrivateRoute path='/feed' component={Feed}/>
            <PrivateRoute exact path='/upload' render={()=>{<UploadClothes title='subir prenda' />}}/>
            <PrivateRoute exact path='/notifications' render={()=>{<Notifications title='Notificaciones'/>}}/>
            <PrivateRoute exact path='/search' render={()=>{<Search title='Buscar'/>}}/>
            <PrivateRoute exact path='/search/:id' component={AdminClothes}/>
            <PrivateRoute exact path='/profileclothes'render={()=>{<ProfileClothes title='Mis prendas' />}} />
            <PrivateRoute exact path='/admin' component={AdminClothes}/>
            <PrivateRoute component={Error404}/>
          </Switch>
        </Router>
=======
        <Suspense fallback={<Loader />}>
          <Router>
            <Switch>
              <Route exact path='/token'>
                <Token />
              </Route>
              <Route exact path='/'>
                <Logout />
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/register'>
                <Register />
              </Route>
              <PrivateRoute exact path='/profile'>
                <Profile />
              </PrivateRoute>
              <PrivateRoute exact path='/profile/:username?'>
                <Profile />
              </PrivateRoute>
              <PrivateRoute path='/feed'>
                <Feed />
              </PrivateRoute>
              <PrivateRoute exact path='/upload'>
                <UploadClothes title='Subir prenda' />
              </PrivateRoute>
              <PrivateRoute exact path='/notifications'>
                <Notifications title='Notificaciones' />
              </PrivateRoute>
              <PrivateRoute exact path='/search'>
                <Search title='Buscar' />
              </PrivateRoute>
              <PrivateRoute exact path='/search/:select'>
                <Search title='Corbatas' />
              </PrivateRoute>
              <Route exact path='/garment'>
                <ProfileClothes title='Mis prendas' />
              </Route>
              <PrivateRoute exact path='/admin'>
                <AdminClothes />
              </PrivateRoute>
              <PrivateRoute component={Error404} />
            </Switch>
          </Router>
        </Suspense>
>>>>>>> 6ac7e424a3e713f93d649595d40fce9320cbefe2
      </AuthProvider>
    </>
  )
}

export default App
