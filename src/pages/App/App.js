import { useState, useEffect } from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import './App.css';
import * as authAPI from '../../services/authAPI'
import * as usersAPI from '../../services/usersAPI'
import * as climbsAPI from '../../services/climbsAPI'
import Navbar from '../../components/Navbar/Navbar'
import ErrorPage from '../../pages/ErrorPage/ErrorPage'
import Landing from '../Landing/Landing'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import AddClimb from '../AddClimb/AddClimb'
import ClimbsList from '../ClimbsList/ClimbsList'
import ClimbDetails from '../ClimbDetails/ClimbDetails'

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
 const [statusCode, setStatusCode] = useState()

 const handleSignup = async (form) => {
  const result = await authAPI.signup(form)
  if(result._id) {
   setUser(result)
   setStatusCode()
   history.push('/routes')
  } else {
   setStatusCode(result.msg)
  }
 }

 const handleLogin = async (form) => {
  const result = await authAPI.login(form)
  if(result._id) {
   setUser(result)
   setStatusCode()
   history.push('/routes')
  } else {
   setStatusCode(result.msg)
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

 const handleDeleteUser = async () => {
  await authAPI.deleteUser()
  setUser()
  history.push('/login')
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
     <Signup statusCode={statusCode} handleSignup={handleSignup} />
    </Route>
    <Route exact path="/login">
     <Login user={user} statusCode={statusCode} handleLogin={handleLogin} />
    </Route>
    <Route exact path="/profile/:id">
     {user ?
      <Profile user={user} handleDeleteUser={handleDeleteUser} usersAPI={usersAPI} />
      :
      null
     }
    </Route>
    <Route exact path="/routes/new">
     <AddClimb user={user} usersAPI={usersAPI} climbGrades={climbGrades} />
    </Route>
    <Route exact path="/routes">
     <ClimbsList climbsAPI={climbsAPI} climbGrades={climbGrades} />
    </Route>
    <Route exact path="/routes/:id">
     <ClimbDetails user={user} climbsAPI={climbsAPI} climbGrades={climbGrades} />
    </Route>
    <Route path="/">
     <ErrorPage />
    </Route>
   </Switch>
  </div>
 );
}

export default App;