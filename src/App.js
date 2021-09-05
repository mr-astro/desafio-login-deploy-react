import Login from './container/login/Login';
import Products from './container/products/Products';
import {BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App text-center container">
      <Router basename='desafio-login-deploy-react'>
        <div>
          <nav className='navbar navbar-expand-lg'>
            <ul className='nabvar-nav'>
              <li className='nav-item'>
                <NavLink to='/'>Login</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/products'>Products</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/'><Login /></Route>
            <Route path='/products'><Products /></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
