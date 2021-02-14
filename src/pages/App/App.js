import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import * as authAPI from '../../services/authAPI'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../Landing/Landing'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'

function App() {
 const [user, setUser] = useState()

 const handleSignup = async (form) => {
  const result = await authAPI.signup(form)
  setUser(result)
 }

 const handleLogin = async (form) => {
  const result = await authAPI.login(form)
  setUser(result)
 }

 // determine how to access our cookie (returning our user object on a page refresh)

 return (
  <div className="App">
   <Navbar user={user} />
   <Switch>
    <Route exact path="/">
     <Landing />
    </Route>
    <Route exact path="/signup">
     <Signup handleSignup={handleSignup} />
    </Route>
    <Route exact path="/login">
     <Login handleLogin={handleLogin} />
    </Route>
   </Switch>
  </div>
 );
}

export default App;