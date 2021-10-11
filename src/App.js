import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router'
import Contactdetails from './admin/contactdetails'
import Login from './auth/Login'
import SignUp from './auth/signUp'
import HomePages from './HomePages'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import Service from './Pages/Service'
import firebase from 'firebase/app';
import 'firebase/auth'
import Navbar from './navbar'





const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user =>{
      if(user) setUser(user)
      else setUser(null)
    })
  })
  return (
    <div>
      <Navbar user={user}/>
      <Switch>
        <Route exact path='/' component={HomePages} ></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/service' component={Service}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/contactdetails' component={Contactdetails} user={user} ></Route>
        <Route path='/signUp' component={SignUp}></Route>
        <Route path='/login' component={Login}></Route> 

        <Route component={Error}></Route>

       </Switch>
    </div>
  )
}

export default App
