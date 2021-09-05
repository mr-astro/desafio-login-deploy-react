import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { userLogin } from "../../store/login/action"

export const LoginForm = ({ isLoading }) => {

    const history = useHistory()
    const [form, setForm] = useState({
        username: "",
        password: "",
    })
    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        const target = event.target
        setForm({
            ...form,
            [target.name]: target.value,
        })
    }

    const cb = () => history.push("/products")

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(userLogin(form,cb))
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div className="card">
                <input
                    id="username"
                    name="username"
                    className="form-control username"
                    placeholder="username"
                    onChange={handleInputChange}
                    value={form.username}
                />
            </div>
            <div className="card">
                <input
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    type="password"
                    onChange={handleInputChange}
                    value={form.password}
                />
            </div>
            <div className="card">
                <button
                    id="buttonSubmit"
                    className="btn btn-primary"
                    color="primary"
                    disabled={isLoading}
                    type="submit"
                >
                    {isLoading ? "Loading..." : "Submite"}
                </button>
            </div>
        </form>
    )
}