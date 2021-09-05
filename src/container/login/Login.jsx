import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {userLogin} from '../../store/login/action'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [form, setForm] = useState({
        username:'',
        password:''
    })

    const dispatch = useDispatch()
    const history = useHistory()
    
    const handleInputChange = (event) => {
        const target = event.target
        setForm({
            ...form,
            [target.name]:target.value
        })
    }

    const cb = () => history.push('/products')

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(userLogin(form,cb))
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <div className='card'>
                    <input 
                    id='username'
                    name='username'
                    className='form-control username'
                    placeholder='Usuario'
                    onChange={handleInputChange}
                    value={form.username} />
                </div>
                <div className='card'>
                    <input
                    id='password'
                    name='password'
                    className='form-control'
                    placeholder='Password'
                    type='password'
                    onChange={handleInputChange}
                    value={form.password}/>
                </div>
                <div className='card'>
                    <button
                    id='buttonSubmit'
                    className='btn btn-primary'
                    type='submit'>Ingresar</button>
                </div>
            </form>
        </div>
    )
}

export default Login