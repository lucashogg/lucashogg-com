// Components
import Project from './Project';
// Media
import battleTracker from './img/battle-tracker.jpg';

const ProjectList = () => {
    return (
        <>
            <Project
                title='This is a project'
                image={battleTracker}
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet. Leo urna molestie at elementum eu facilisis sed odio. Purus in mollis nunc sed id semper risus in. Eget felis eget nunc lobortis mattis. Bibendum est ultricies integer quis auctor elit sed vulputate mi.'
                codeLink='https://github.com'
            />
        </>
    )
}

export default ProjectList