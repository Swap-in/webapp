import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../sass/resets.scss'
import Login from '../pages/login'
import Register from '../pages/register'
import Logout from '../pages/logout'
import Error404 from '../pages/error404'
import Profile from '../pages/Profile'
import Admin from '../pages/admin'

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
          <Route exact path='/registro'>
            <Register />
          </Route>
          <Route exact path='/upload'>
            <Admin title='Subir prenda' />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
          <Route exact path='/edit'>
            <Admin title='Editar prenda' />
          </Route>
          <Route component={Error404} />
        </Switch>
      </Router>
    </>
  )
}

export default App
