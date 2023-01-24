// import Layout from '@components/layout' // in _document.js
import client from '@/apollo/client'
//import { handleRedirectsAndReturnData } from '@/utils/slug'
import { GET_PAGE } from '@/queries/pages/get-page'
//import { sanitize } from '@/utils/miscellaneous'

export default function Home({ data }) {
    return <h1>{data?.page?.title}</h1>
}

export async function getStaticProps() {
    const { data, errors } = await client.query({
        query: GET_PAGE,
        variables: {
            uri: '/',
        },
    })
    const defaultProps = {
        props: {
            data: data || {},
        },
        /**
         * Revalidate means that if a new request comes to server, then every 1 sec it will check
         * if the data is changed, if it is changed then it will update the
         * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
         */
        revalidate: 10,
    }
    // return handleRedirectsAndReturnData(defaultProps, data, errors, 'page')
    return defaultProps
}
