const WorkExample = (example) => {
    let image = example.image ? (
        <img
            src={example.image}
            alt={example.alt}
        />
    ) : null;

    return (
        <>
            <div class="example-work">
                <h2>{example.title}</h2>
                <div class="example-work-image">
                    {image}
                </div>
                <p>{example.description}</p>
            </div>
        </>
    )
}

export default WorkExample