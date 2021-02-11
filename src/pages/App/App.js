import { Route, Switch } from 'react-router-dom'
import './App.css';
import * as authAPI from '../../services/authAPI'
import Landing from '../Landing/Landing'
import Signup from '../Signup/Signup'

function App() {
 const handleSignup = async (form) => {
  const result = await authAPI.signup(form)
  console.log(result)
 }

 return (
  <div className="App">
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