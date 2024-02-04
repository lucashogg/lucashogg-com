// CSS
import './Header.css';
// Components
import Nav from './Nav';
import SocialLinks from './SocialLinks';

const Header = () => {
    return (
        <header>
            <div className="top-header">
                <div>
                    <h1>Lucas Hogg</h1>
                </div>
                <Nav />
            </div>
            <p className="sm-text">
                <a href="mailto:lucas@lucashogg.com">
                    lucas@lucashogg.com
                </a>
            </p>
            <SocialLinks />
            <div className="section-break"></div>
        </header>
    )
}

export default Header