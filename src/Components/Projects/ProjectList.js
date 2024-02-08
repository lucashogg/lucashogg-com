// Components
import Project from './Project';
import CustomLink from '../Utlility/CustomLink';

const ProjectList = () => {
    return (
        <>
            <Project
                year="2024"
                title="lucashogg.com"
                description={<>
                    My portfolio website where you can view current and past projects. This was an exercise in learning and implementing React while maintaining a clean UI for overall accessibility.
                </>}
                codeLink="https://github.com/lucashogg/lucashogg-com"
            />
            <Project
                year="2023"
                title="Calculator"
                description={<>
                    Utilizing Javascript, this web-based calculator contains all classic functions (+), (-), (/), (*) while allowing you delete typos mid calculation. This was an assignment for <CustomLink href="https://www.theodinproject.com/" target="_blank" name="The Odin Project" /> curriculum.
                </>}
                codeLink="https://github.com/lucashogg/calculator"
                liveLink="https://lucashogg.github.io/calculator"
            />
            <Project
                year="2023"
                title="Rock, Paper, Scissors"
                description={<>
                    An exercise in DOM manipulation and Javascript, this is a web-based game of Rock, Paper, Scissors for <CustomLink href="https://www.theodinproject.com/" target="_blank" name="The Odin Project" /> curriculum.
                </>}
                codeLink="https://github.com/lucashogg/rock-paper-scissors"
                liveLink="https://lucashogg.github.io/rock-paper-scissors"
            />
            <Project
                year="2023"
                title="AAAA Westwood Pumping Service"
                description={<>
                    A static website built with Bootstrap's framework for AAAA Westwood Pumping Service; a Phoenix, AZ-based septic pumping business. They requested something quick, simple, and straightforward that would easily inform new clients of their services.
                </>}
                liveLink="https://aaaawestwoodpumping.com/"
            />
            <Project
                year="2023"
                title="Battle Tracker"
                description={<>
                    Battle Tracker is a web app designed to assist the GM of a Dungeons & Dragons table top campaign. Battle Tracker will store unique characters or monsters each containing a few basic stats while keeping track of initiative in battles. This was my final project for the course: <CustomLink href="https://pll.harvard.edu/course/cs50-introduction-computer-science" target="_blank" name="CS50." />
                </>}
                codeLink="https://github.com/lucashogg/Battle-Tracker"
                liveLink="http://lucashogg.pythonanywhere.com/"
            />
            <Project
                year="2021"
                title="Music Artist Smart Link"
                description={<>
                    A custom "smart link" for my personal music project(s) utilizing HTML, SCSS, and JavaScript while leveraging the power of a Meta Pixel/Facebook Ad Manager to increase listener base.
                </>}
                codeLink="https://github.com/lucashogg/rogg-smartlink"
                liveLink="https://roggcollins.killtheheartache.com"
            />
        </>
    )
}

export default ProjectList