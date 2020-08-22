import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../sass/resets.scss'
import Login from '../pages/login'
import Register from '../pages/register'
import Logout from '../pages/logout'
import Error404 from '../pages/error404'
import Profile from '../pages/Profile'
import AdminPictures from '../pages/adminPictures'
import AdminClothes from '../pages/adminClothes/AdminClothes'
import Notifications from '../pages/notifications/Notifications'
import Search from '../pages/search/Search'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Logout />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
          <Route exact path='/upload'>
            <AdminPictures title='Subir prenda' />
          </Route>
          <Route exact path='/notifications'>
            <Notifications title='Notificaciones' />
          </Route>
          <Route exact path='/search'>
            <Search title='Buscar' />
          </Route>
          <Route exact path='/admin'>
            <AdminClothes />
          </Route>
          <Route exact path='/admin/:id'>
            <AdminPictures title='Editar prenda' />
          </Route>
          <Route component={Error404} />
        </Switch>
      </Router>
    </>
  )
}

export default App
