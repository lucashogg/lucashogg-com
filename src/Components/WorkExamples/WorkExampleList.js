// Components
import WorkExample from "./WorkExample";
// Media
import blankStorefront from './img/blank-storefront.jpg';
import unitedSurvival from './img/united-survival-storefront.jpg';
import happyTrails from './img/happy-trails-storefront.jpg';

const WorkExampleList = () => {
    return (
        <>
            <WorkExample
                title="Blank Storefront - The Starting Point"
                image={blankStorefront}
                alt="Blank storefront example"
                description={
                    <>
                        <p>My current role mainly revolves around DOM manipulation utilizing custom HTML, CSS, and JavaScript. Using these tools in conjunction with this platform's "website builder" functionality, I can improve the user experience through custom web and graphic design.</p>
                        <p>The above image shows what a user is met with upon signing up for the platform, a blank storefront.</p>
                    </>
                }
            />
            <WorkExample
                title="United Survival"
                image={unitedSurvival}
                alt="United Survival storefront example"
                description={
                    <>
                        <p>Above we have a great example of my custom web design work. Code injected via "Custom Code" input boxes in the user backend is mixed with manipulating the platform's more user friendly website builder functionality to create a more full-featured user experience. Custom graphic design (banners, category buttons) and asset resizing/cropping are also skills involved in the makeover process.</p>
                    </>
                }
            />
            <WorkExample
                title="Happy Trails"
                image={happyTrails}
                alt="Happy Trails storefront example"
                description={
                    <>
                        <p>Another example featuring the Happy Trails Outdoor Gear storefront site.</p>
                    </>
                }
            />
        </>
    )
}

export default WorkExampleList