const ArWork = (example) => {
    let image = example.image ? (
        <img
            src={example.image}
            alt={example.alt}
        />
    ) : null;

    return (
        <>
            <p>{image}</p>
        </>
    )
}

export default ArWork