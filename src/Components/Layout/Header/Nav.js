// Packages
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink className="sm-text" exact to="/">
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink className="sm-text" to="/about">
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav