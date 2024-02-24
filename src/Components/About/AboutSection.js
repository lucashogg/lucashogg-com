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
                        My name is Lucas Hogg. I currently specialize in customizing and enhancing the user experience for a proprietary SaaS platform that provides e-commerce-based storefronts to clients. I use my skills in responsive web design, JavaScript, HTML/CSS, and graphic design to create personalized and engaging websites that showcase our clients' products and services.
                    </p>
                    <p>
                        I have been working in web development for over two years, after switching careers from coffee roasting. I am a self-taught and self-motivated learner who constantly explores new technologies and tools. I'm passionate about creating experiences that aren't just made, but also shared.
                    </p>
                    <p>
                        I also produce music as a hobby. Listen to that <CustomLink href="https://lucashogg.killtheheartache.com" target="_blank" name="here." />
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutSection