import { Route, Switch } from 'react-router-dom'
import './App.css';
import Landing from '../Landing/Landing'
import Signup from '../Signup/Signup'

function App() {
 const handleSignup = (form) => {
  console.log(form)
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