//Packages
import { Link } from 'react-router-dom';
// CSS
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <div className="section-break"></div>
            <ul>
                <li className="sm-text">
                    Lucas Hogg © {year}
                </li>
                <li>|</li>
                <li>
                    <Link exact to="/" className="sm-text">
                        Projects
                    </Link>
                </li>
                <li>|</li>
                <li>
                    <Link to="/about" className="sm-text">
                        About
                    </Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer