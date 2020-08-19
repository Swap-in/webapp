import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../sass/reset.scss'
import Login from '../pages/login'
import Register from '../pages/register'
import Logout from '../pages/logout'
import Error404 from '../pages/error404'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/registro' component={Register} />
          <Route exact path='/' component={Logout} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </>
  )
}

export default App
