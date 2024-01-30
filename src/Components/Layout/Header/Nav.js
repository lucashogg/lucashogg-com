import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink exact to='/'>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav