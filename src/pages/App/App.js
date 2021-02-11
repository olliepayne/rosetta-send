import { Route, Switch } from 'react-router-dom'
import './App.css';
import Landing from '../Landing/Landing'
import Signup from '../Signup/Signup'

function App() {
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