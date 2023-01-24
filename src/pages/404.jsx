import Link from 'next/link'
import { useRouter } from 'next/router'

const Error404 = () => {
    const router = useRouter()

    const slug = router.asPath
    return (
        <>
            <h1>Siden Eksistere ikke</h1>
            <Link href='/'>Tilbage til forsiden</Link>
            <Link href={`/login/?returnURL=${slug}`}>Login og prøv igen</Link>
        </>
    )
}

export default Error404

export async function getStaticProps() {
    return { props: {} }
}
