import client from '@/apollo/client'
import { GET_PAGE } from '@/queries/pages/get-page'
import { getAuthToken } from '@/utils/cookies'

export default async function getpage(req, res) {
    // get authtoken fra cookie

    const authToken = getAuthToken(req)

    // get slug
    const { slug } = req.body

    // get page
    const { data, errors } = client.query({
        query: GET_PAGE,
        variables: {
            uri: `${slug}`,
        },
    })

    if (data?.page) {
        // data.page == page object
        console.log('data?.page')
        return data?.page || {}
    } else {
        // data.page == null
        if (authToken) {
            console.log('authToken')
            // authToken findes
            // Siden findes ikke
            return false
        } else {
            console.log('!authToken', slug)
            // authToken er ikke tilstede
            // siden kræver login
            res.writeHead(307, {
                Location: `/login/?returnURL=${slug}`,
            })
        }
    }
    res.end()
}
