// Components
import Project from './Project';
import CustomLink from '../Utlility/CustomLink';
// Media
import westwood from './img/westwood.jpg';
import battleTracker from './img/battle-tracker.jpg';
import roggSmartLink from './img/rogg-smartlink.jpg';

const ProjectList = () => {
    return (
        <>
            <Project
                year="2023"
                title="AAAA Westwood Pumping Service"
                description={<>
                    A static website built with Bootstrap's framework for AAAA Westwood Pumping Service; a Phoenix, AZ-based septic pumping business. They requested something quick, simple, and straightforward that would easily inform new clients of their services.
                </>}
                liveLink="https://aaaawestwoodpumping.com/"
                image={westwood}
            />
            <Project
                year="2023"
                title="Battle Tracker"
                description={<>
                    Battle Tracker is a web app designed to assist the GM of a Dungeons & Dragons table top campaign. Battle Tracker will store unique characters or monsters each containing a few basic stats while keeping track of initiative in battles. This was my final project for the course: <CustomLink href="https://pll.harvard.edu/course/cs50-introduction-computer-science" target="_blank" name="CS50" />.
                </>}
                codeLink="https://github.com/lucashogg/Battle-Tracker"
                liveLink="http://lucashogg.pythonanywhere.com/"
                image={battleTracker}
            />
            <Project
                year="2021"
                title="Music Artist Smart Link"
                description={<>
                    A custom "smart link" for my personal music project(s) utilizing HTML, SCSS, and JavaScript while leveraging the power of a Meta Pixel/Facebook Ad Manager to increase listener base.
                </>}
                codeLink="https://github.com/lucashogg/rogg-smartlink"
                liveLink="https://roggcollins.killtheheartache.com"
                image={roggSmartLink}
            />
        </>
    )
}

export default ProjectList