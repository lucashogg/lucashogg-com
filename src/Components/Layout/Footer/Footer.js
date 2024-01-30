//Packages
import { Link } from 'react-router-dom';
// CSS
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <ul>
                <li>
                    Lucas Hogg © {year}
                </li>
                <li>|</li>
                <li>
                    <Link exact to='/'>
                        Projects
                    </Link>
                </li>
                <li>|</li>
                <li>
                    <Link to='/about'>
                        About
                    </Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer