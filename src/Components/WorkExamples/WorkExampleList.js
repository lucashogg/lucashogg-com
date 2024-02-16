// Components
import WorkExample from "./WorkExample";
// Media
import blankStorefront from './img/blank-storefront.jpg';

const WorkExampleList = () => {
    return (
        <>
            <WorkExample
                title="Blank Storefront"
                image={blankStorefront}
                alt="Blank storefront example"
            />
        </>
    )
}

export default WorkExampleList