// Media
import { ReactComponent as ExtLink } from '../../Assets/img/ext-link.svg';

const CustomLink = ({ href, name, target = null }) => {
    return href ? (
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
    ) : null;
}

export default CustomLink