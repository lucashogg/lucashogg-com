// CSS
import './AboutSection.css';
// Components
import CustomLink from '../Utlility/CustomLink';
// Media
import avatar from './img/lucas.jpg';

const AboutSection = () => {
    return (
        <>
            <div className="about">
                <img src={avatar} alt="Lucas Hogg" />
                <div className="about-text">
                    <h2>Hey there.</h2>
                    <p>
                        My name is Lucas Hogg. I currently specialize in front-end modification for a proprietary SaaS platform that provides e-commerce-based storefronts to clients. Self-taught and a self-starter, I've always enjoyed exploring new technologies; all starting with a background in design and video/music production.
                    </p>
                    <p>
                        Formerly a full-time coffee roaster, I've been able to leverage the available online recourses for self study in the field of computer science to switch career paths. I'm super passionate about creating experiences that aren't just made, but also shared.
                    </p>
                    <p>
                        I also continue to produce music as a hobby. Listen to that <CustomLink href="https://lucashogg.killtheheartache.com" target="_blank" name="here." />
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutSection