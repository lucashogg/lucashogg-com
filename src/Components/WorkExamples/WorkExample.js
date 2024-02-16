// CSS
import './WorkExample.css'

const WorkExample = (example) => {
    let image = example.image ? (
        <img
            src={example.image}
            alt={example.alt}
        />
    ) : null;

    return (
        <>
            <section class="example-work">
                <h2>{example.title}</h2>
                <div class="example-work-image">
                    {image}
                </div>
                <div class="example-work-desc">
                    {example.description}
                </div>
            </section>
        </>
    )
}

export default WorkExample