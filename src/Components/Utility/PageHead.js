import { Helmet } from 'react-helmet-async';

const PageHead = (props) => {
    return (
        <Helmet prioritizeSeoTags>
            <title>{props.title}</title>
            <meta property="og:title" content={props.title}></meta>
            <meta property="og:url" content={props.url}></meta>
        </Helmet>
    )
}

export default PageHead