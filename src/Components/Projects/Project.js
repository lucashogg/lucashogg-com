// CSS
import './Project.css';
// Components
import CustomLink from '../Utlility/CustomLink';

const Project = (project) => {
    const codeLink = <CustomLink
        href={project.codeLink}
        name="View Code "
        target="_blank"

    />

    const liveLink = <CustomLink
        href={project.liveLink}
        name="View Live "
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
                <div className="project-left">
                    <p className="project-year">{project.year}</p>
                </div>
                <div className="project-right">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <ul>
                        <li className="sm-text">
                            {codeLink}
                        </li>
                        <li className="sm-text">
                            {liveLink}
                        </li>
                    </ul>
                    <div className="project-img">
                        {image}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project