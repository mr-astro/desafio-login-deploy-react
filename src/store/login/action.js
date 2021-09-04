import { LOGIN_USER_INIT, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from './types'

export const userLogin = ({ username, password }, cb) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_INIT })

        const loginSuccess = (response) => {
            dispatch({ type: LOGIN_USER_SUCCESS, payload: response })
        }

        const loginFail = (error) => {
            dispatch({ type: LOGIN_USER_ERROR, payload: error })
        }

        try {
            fetch('https://api-mock-mia.herokuapp.com/auth/login', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ username, password })
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.jwt) {
                        //console.log(data)
                        localStorage.jwt=data.jwt
                        loginSuccess(username)
                        cb()
                    } else {
                        loginFail(data.error)
                    }
                })
        } catch (error) {
            loginFail('Hay un error', error)
        }
    }
}