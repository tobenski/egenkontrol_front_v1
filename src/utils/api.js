import client from '@/apollo/client'
import LOGIN from '@/mutations/login'
import { v4 } from 'uuid'

export async function loginUser({ username, password }) {
    // console.log('username', username)
    // console.log('password', password)
    const { data, errors } = await client.query({
        query: LOGIN,
        variables: {
            input: {
                clientMutationId: v4(),
                username: username || '',
                password: password || '',
            },
        },
    })
    return data || {}
}

export const API_ROOT = `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}/api`
export const API_GET_PAGE = `${API_ROOT}/getpage`
