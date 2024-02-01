// CSS
import './Project.css';

const CustomLink = ({ href, name, target = null }) => {
    return href ? (
        <a
            href={href}
            target={target}
            rel="noopener noreferrer"
        >
            {name}
        </a>
    ) : null;
}

const Project = (project) => {
    const codeLink = <CustomLink
        href={project.codeLink}
        name="Code"
        target="_blank"

    />

    const liveLink = <CustomLink
        href={project.liveLink}
        name="Live"
        target="_blank"

    />

    let image = project.image ? (
        <img
            src={project.image}
            alt={project.title}

        />
    ) : null;

    return (
        <>
            <section className="project">
                <div className="project-top">
                    <h2>{project.title}</h2>
                </div>
                <div className="project-middle">
                    <p>{project.description}</p>
                </div>
                <div className="project-bottom">
                    <div className="project-img">
                        {image}
                    </div>
                    <ul>
                        <li>
                            {codeLink}
                        </li>
                        <li>
                            {liveLink}
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Project