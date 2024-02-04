// CSS
import './Project.css';
// Components
import CustomLiLink from '../Utlility/CustomLiLink';

const Project = (project) => {
    const codeLink = <CustomLiLink
        href={project.codeLink}
        name="View Code "
        target="_blank"

    />

    const liveLink = <CustomLiLink
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
                        {codeLink}
                        {liveLink}
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