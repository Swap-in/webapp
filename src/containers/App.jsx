import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../sass/resets.scss'
import Token from '../pages/Token'
import { AuthProvider } from '../providers/AuthProvider'
import PrivateRoute from '../hooks/PrivateRoute'

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
        <Suspense fallback={<h1>Loading...</h1>}>
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
              <PrivateRoute path='/profile'>
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
              <PrivateRoute exact path='/search/:id'>
                <AdminClothes />
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
      </AuthProvider>
    </>
  )
}

export default App
