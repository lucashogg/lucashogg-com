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
                    <p className="sm-text">lucas@lucashogg.com</p>
                </div>
                <Nav />
            </div>
            <SocialLinks />
            <div className="section-break"></div>
        </header>
    )
}

export default Header