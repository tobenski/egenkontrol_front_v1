import { isEmpty } from 'lodash'
import { redirect } from 'next/dist/server/api-utils'

export const FALLBACK = 'blocking'
export const PAGES_COUNT = 10

export const isCustomPageUri = (uri) => {
    const pagesToExclude = ['/']
}

export const handleRedirectsAndReturnData = (
    defaultProps, // data || {}
    data, // data (fra axios call)
    errors, // errors (fra axios call)
    loginRedirectURL = '' //`/login/?slug=${slug || ''}`
) => {
    if (isEmpty(data)) {
        return {
            redirect: {
                destination: '/503',
                statusCode: 301,
            },
        }
    }

    if (isEmpty(data?.page)) {
        return {
            // returns the default 404 page with a status code of 404
            notFound: true,
        }
    }

    return defaultProps
}
