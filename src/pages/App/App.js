import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import * as authAPI from '../../services/authAPI'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../Landing/Landing'
import Signup from '../Signup/Signup'

function App() {
 const handleSignup = async (form) => {
  const result = await authAPI.signup(form)
  
 }

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