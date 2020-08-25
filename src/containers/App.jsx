import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../sass/resets.scss'
import Login from '../pages/login'
import Register from '../pages/register'
import Logout from '../pages/logout'
import Error404 from '../pages/error404'
import Profile from '../pages/Profile'
import AdminClothes from '../pages/adminClothes/AdminClothes'
import Feed from '../pages/feed'
import Notifications from '../pages/notifications/Notifications'
import Search from '../pages/search/Search'
import UploadClothes from '../pages/uploadClothes/uploadClothes'
import { AuthProvider } from '../providers/AuthProvider'
import PrivateRoute from '../hooks/PrivateRoute'

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
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
            <PrivateRoute exact path='/search/'>
              <Search title='Buscar' />
            </PrivateRoute>
            <PrivateRoute exact path='/search/:id'>
              <AdminClothes />
            </PrivateRoute>
            <PrivateRoute exact path='/admin'>
              <AdminClothes />
            </PrivateRoute>
            <PrivateRoute component={Error404} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
