// Components
import Project from './Project';
// Media
import roggSmartLink from './img/rogg-smartlink.jpg'
import battleTracker from './img/battle-tracker.jpg';

const ProjectList = () => {
    return (
        <>
            <Project
                year="2021"
                title="Spotify Artist Smart Link"
                description="A custom &quot;smart link&quot; for my personal music project(s) utilizing HTML, SCSS, and JavaScript while leveraging the power of a Meta Pixel/Facebook Ad Manager to increase listener base."
                codeLink="https://github.com/lucashogg/rogg-smartlink"
                liveLink="https://roggcollins.killtheheartache.com"
                image={roggSmartLink}
            />
            <div className="section-break"></div>
        </>
    )
}

export default ProjectList