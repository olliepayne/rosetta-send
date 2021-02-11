import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import * as authAPI from '../../services/authAPI'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../Landing/Landing'
import Signup from '../Signup/Signup'

function App() {
 // add a user state to trigger refreshes of react components / pages

 const handleSignup = async (form) => {
  const result = await authAPI.signup(form)
  
 }

 // add a hanglelogin

 // when the app refreshes, send our token to the backend and recieve a new token (this chain is started when logging in or signing up)

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
   </Switch>
  </div>
 );
}

export default App;