import client from '@/apollo/client'
import { GET_PAGE } from '@/queries/pages/get-page'
import { API_GET_PAGE } from '@/utils/api'
import { getAuthToken } from '@/utils/cookies'
import axios from 'axios'
import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const Page = ({ page }) => {
    return <div>{page?.title}</div>
}

export default Page

export async function getServerSideProps({ params, req }) {
    // Get AuthToken if present
    const authToken = getAuthToken(req)
    // Get slug
    const slug = params?.slug.join('/')
    // Try to get Page
    const { data, errors } = await client.query({
        query: GET_PAGE,
        variables: {
            uri: slug,
        },
        context: {
            headers: {
                authorization: authToken ? `Bearer ${authToken}` : '',
            },
        },
    })

    var defaultProps = { notFound: true }

    if (data?.page) {
        defaultProps = {
            props: {
                page: data?.page || {},
            },
        }
    }

    return defaultProps
}
