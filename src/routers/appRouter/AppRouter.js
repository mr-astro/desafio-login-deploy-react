import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavBar from '../../components/navBar/NavBar'
import { Login } from '../../container/login/Login'
import Products from '../../container/products/Products'
import ProductDelete from '../../container/productDelete/ProductDelete'
import PrivateRoute from '../privateRoute/PrivateRoute'

const AppRouter = () => {
    const isLogin = useSelector(state => state.login.success)
    return (
        <div>
            <Router basename='desafio-login-deploy-react'>
                <NavBar />
                <Switch>
                    <PrivateRoute path='/products/remove/:id' isLogin={isLogin} component={ProductDelete} />
                    <Route path='/products' component={Products}/>
                    <Route path='/' component={Login}/>
                    <Route path='*'><h1>404 Not Found</h1></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter
