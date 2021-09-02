import Login from './container/login/Login';
import Users from './container/users/Users';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App text-center">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Login</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/'><Login /></Route>
            <Route path='/users'><Users /></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
