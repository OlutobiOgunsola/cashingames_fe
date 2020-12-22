import axios from 'axios'
import routes from './routes'

export const getUser = async (id, cancelToken) => {
    console.log('inside quesr')

    const headers = {
        Authorization: '12345',
    }
    const user = await axios.get(`${routes.GET_USER}/${id}`, {
        headers,
        cancelToken,
    })

    return user
}

export const getLeaderBoard = async (cancelToken) => {
    const leaderboard = await axios.get(`${routes.GET_LEADERBOARD}/`, {
        cancelToken,
    })

    return leaderboard
}
