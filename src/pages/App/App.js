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
  console.log(result.status)
  setUser(result)
 }

 const handleLogin = async (form) => {
  const result = await authAPI.login(form)
  setUser(result)
 }

 const handleGetUser = async () => {
  const result = await authAPI.getUser()
  setUser(result)
 }

 const handleLogout = async () => {
  await authAPI.logout()
  setUser()
 }

 useEffect(() => {
  handleGetUser()
 }, [])

 return (
  <div className="App">
   <Navbar user={user} handleLogout={handleLogout} />
   <Switch>
    <Route exact path="/">
     <Landing user={user} />
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