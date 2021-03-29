//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import page
import Home from './pages/Home'


import './App.css';



function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
                <Home/>
          </Route>
          <Route path="/profile">
                <Profile/>
          </Route>
      </Switch>
    </Router>
  );

  function Profile(){
    return(
      <div>
        Profile
      </div>
    )
  }
}

export default App;
