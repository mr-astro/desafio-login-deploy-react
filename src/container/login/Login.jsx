import React from 'react'
import { useSelector } from 'react-redux'
import { userLoginSelector } from '../../store/login/selectors'
import { LoginForm } from '../loginForm/LoginForm'

export const Login = () => {
    const userData = useSelector(userLoginSelector)
    //console.log(userData.login.data)


    if (userData.login.data && Object.keys(userData.login.data).length > 0) {
        return (
            <div className='card'>
                <p id='log-success'>
                    Logged in as <b>{userData.login.data}</b>
                </p>
            </div>
        )
    }

    const isLoading = userData.loging
    const isError = userData.login.error

    return (
        <div className='row'>
            <div className='col-md-6 offset-md-3 mt-5'>
                <LoginForm isLoading={isLoading} />
                {isError && (
                    <div className='card'>
                        <p id='paragraph'>
                            <b>Error: </b> {userData.login.error}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}