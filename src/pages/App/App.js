import { Route, Switch } from 'react-router-dom'
import './App.css';
import Landing from '../Landing/Landing'
import Signup from '../Signup/Signup'

function App() {
 // import switch and route from react-router-dom
 // import and render signup page, setup switch and signup route

 return (
  <div className="App">
   <Switch>
    <Route exact path="/">
     <Landing />
    </Route>
    <Route exact path="/signup">
     <Signup />
    </Route>
   </Switch>
  </div>
 );
}

export default App;