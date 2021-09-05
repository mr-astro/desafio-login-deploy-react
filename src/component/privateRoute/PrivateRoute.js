import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ component: Component, isLogin, ...Rest }: Props) => {
    return isLogin ? <Route {...Rest} render={routeProps => <Component {...routeProps} />} /> : <Redirect to='/' />;
}

export default PrivateRoute
