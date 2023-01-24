import cookie from 'cookie'

export default async function logout(req, res) {
    res.setHeader('Set-Cookie', ['auth=deleted; maxAge=0'])
    // res.clearCookie('auth')
    // res.status(200).json({ success: true })
    res.end()
}
