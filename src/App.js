import { Login } from './container/login/Login';
import Products from './container/products/Products';
import ProductDelete from './container/productDelete/ProductDelete'
import PrivateRoute from './component/privateRoute/PrivateRoute'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const isLogin = useSelector(state => state.login.success)

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
            <Route exact path='/products'><Products /></Route>
            <PrivateRoute exact path='/products/remove/:id' isLogin={isLogin} component={ProductDelete} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
