import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import * as authAPI from '../../services/authAPI'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../Landing/Landing'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'

function App() {
 const handleSignup = async (form) => {
  const result = await authAPI.signup(form)
  // do something with our result
 }

 // add a hanglelogin

 return (
  <div className="App">
   <Navbar />
   <Switch>
    <Route exact path="/">
     <Landing />
    </Route>
    <Route exact path="/signup">
     <Signup handleSignup={handleSignup} />
    </Route>
    <Route exact path="/login">
     <Login />
    </Route>
   </Switch>
  </div>
 );
}

export default App;