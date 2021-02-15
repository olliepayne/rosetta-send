import { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import './App.css';
import * as authAPI from '../../services/authAPI'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../Landing/Landing'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import AddClimb from '../AddClimb/AddClimb'

function App() {
 const history = useHistory()

 const boulderGrades = [
  'V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10', 'V11', 'V12', 'V13', 'V14', 'V15', 'V16', 'V17'
 ]

 const sportGrades = [
  '5.0', '5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9', '5.10-', '5.10', '5.10+', '5.11-', '5.11', '5.11+', '5.12-', '5.12', '5.12+', '5.13-', '5.13', '5.13+',
  '5.14-', '5.14', '5.14+', '5.15-', '5.15', '5.15+'
 ]

 const climbGrades = {
  boulder: boulderGrades,
  sport: sportGrades
 }

 const [user, setUser] = useState()
 const [authStatus, setAuthStatus] = useState()

 const handleSignup = async (form) => {
  const result = await authAPI.signup(form)
  if(result._id) {
   setUser(result)
   setAuthStatus()
   history.push('/')
  } else {
   setAuthStatus(result.msg)
  }
 }

 const handleLogin = async (form) => {
  const result = await authAPI.login(form)
  if(result._id) {
   setUser(result)
   setAuthStatus()
   history.push('/')
  } else {
   setAuthStatus(result.msg)
  }
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
     <Signup authStatus={authStatus} handleSignup={handleSignup} />
    </Route>
    <Route exact path="/login">
     <Login user={user} authStatus={authStatus} handleLogin={handleLogin} />
    </Route>
    <Route exact path="/routes/new">
     <AddClimb user={user} climbGrades={climbGrades} />
    </Route>
    <Route exact path="/routes/:id">
     <div>hello</div>
    </Route>
   </Switch>
  </div>
 );
}

export default App;