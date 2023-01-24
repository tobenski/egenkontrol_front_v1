import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
}

const link = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
})

const cache = new InMemoryCache({
    resultCaching: false,
})

const client = new ApolloClient({
    connectToDevTools: true,
    link,
    cache,
    defaultOptions,
})

export default client
