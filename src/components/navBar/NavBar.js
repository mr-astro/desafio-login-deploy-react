import { NavLink, } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg'>
            <ul className='nabvar-nav'>
                <li className='nav-item'>
                    <NavLink exact to='/' activeClassName='active'>Login</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/products' activeClassName='active'>Products</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
