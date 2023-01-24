import axios from 'axios'

const Layout = ({ children }) => {
    const handleOnClick = async (event) => {
        event.preventDefault()
        // console.log(e)
        // await axios.get('/api/logout')

        return axios({
            method: 'post',
            url: '/api/logout',
        })
            .then((data) => {
                const { success } = data?.data ?? {}
                if (success) {
                    event.target.innerText = 'success'
                } else {
                    event.target.innerText = 'fail'
                }
            })
            .catch(() => {
                event.target.innerText = 'error'
                return false
            })
    }
    return (
        <div>
            <h1>LAYOUT USED</h1>
            <form onSubmit={handleOnClick}>
                <button type='submit'>Logout</button>
            </form>
            {children}
        </div>
    )
}

export default Layout
