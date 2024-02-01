// Packages
import { Link } from 'react-router-dom';
// Media
import { ReactComponent as Github } from './img/github-icon.svg';
import { ReactComponent as Linkedin } from './img/linkedin-icon.svg';
import { ReactComponent as Spotify } from './img/spotify-icon.svg';

const SocialLinks = () => {
    return (
        <div className="social-links">
            <ul>
                <li>
                    <Link
                        to="https://github.com/lucashogg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github />
                    </Link>
                </li>
                <li>
                    <Link
                        to="https://www.linkedin.com/in/lucashogg/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin />
                    </Link>
                </li>
                <li>
                    <Link
                        to="https://open.spotify.com/playlist/0f8S1uGEiEO1H35c88NXDL?si=41511b77679f4a82"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Spotify />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SocialLinks