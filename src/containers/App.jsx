import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../sass/resets.scss'
import Login from '../pages/login'
import Register from '../pages/register'
import Logout from '../pages/logout'
import Profile from '../pages/Profile'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/registro' component={Register} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/' component={Logout} />
      </Switch>
    </Router>
  )
}

export default App
