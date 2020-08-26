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
import UploadClothes from '../pages/uploadClothes'
import ProfileClothes from '../pages/profileClothes'
import { AuthProvider } from '../Context/context'
import Token from '../pages/Token'
import PrivateRoute from '../hooks/PrivateRoute'


function App() {
  return (
    <>
      <AuthProvider>
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
      </AuthProvider>
    </>
  )
}

export default App
