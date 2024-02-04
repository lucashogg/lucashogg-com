// Media
import { ReactComponent as ExtLink } from '../../Assets/img/ext-link.svg';

const CustomLiLink = ({ href, name, target = null }) => {
    return href ? (
        <li className="sm-text">
            <a
                href={href}
                target={target}
                rel="noopener noreferrer"
            >
                <span>
                    {name}
                </span>
                <ExtLink className="ext-link-svg" />
            </a>
        </li>
    ) : null;
}

export default CustomLiLink